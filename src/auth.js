import NextAuth, { NextAuthConfig } from "next-auth";
import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook";

import CredentialsProvider from "next-auth/providers/credentials"
import { Users } from "@/lib/models";
import { connectDb } from "@/lib/db";
import bcrypt from "bcryptjs";
import { authConfig } from './auth.config';
import { getUserByEmail } from "./lib/methods";

import { v4 as uuidv4 } from 'uuid';

// const checkUserInDb = async (credentials) => {
//   try {
//     const user = await getUserByEmail(credentials.email);

//     if (!user) throw new Error("User with this email does not exist!");

//     const isPasswordCorrect = await bcrypt.compare(
//       credentials.password,
//       user.password
//     );
//     if (!isPasswordCorrect) throw new Error("Wrong password!");

//     return user;
//   } catch (err) {
//     console.log(err);
//     throw new Error("Failed to login!");
//   }
// };


const config = {
	providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET
    })
	],
	callbacks:{
		async signIn({user, account, profile}){
			
      if (account.provider === "google") {
        try {
          const user = await getUserByEmail(profile.email);

          if (!user) {
            const newUser = new Users({
              userId: uuidv4(),
              username: profile.name,
              email: profile.email,
              img: profile.picture,
            });
            await newUser.save();
          }
        } catch (err) {
          console.log(err);
          return false;
        }
      }

      if (account.provider === "facebook") {
        try {
          const user = await getUserByEmail(profile.email);

          if (!user) {
            const newUser = new Users({
              userId: uuidv4(),
              username: profile.name,
              email: profile.email,
              img: profile.picture.data.url,
            });
            await newUser.save();
          }
        } catch (err) {
          console.log(err);
          return false;
        }
      }

      return true;
		},

    // async jwt({ token, account, profile }) {
    //   if (account){
    //     token.accessToken = account.access_token
    //     if (account.provider === "google") {
    //       token.id = profile.sub
    //     }
    //     if (account.provider === "facebook") {
    //       token.id = profile.id
    //     }
    // }
    //   return token
    // },
    
    // async session({ session, token }) {
    //   if (token) {
    //     session.accessToken = token.accessToken
    //     session.user.id = token.id
    //   }
    //   console.log(
    //     session
    //   )
    //   return session;
    // },
  


  
		...authConfig.callbacks,
	}
}


export const {handlers, auth, signIn, signOut} = NextAuth({...authConfig, ...config})