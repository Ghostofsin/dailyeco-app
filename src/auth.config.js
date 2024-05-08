import { connectDb } from "./lib/db";
import { User } from "./lib/models";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
  
    authorized({ auth, request }) {
      const user = auth?.user;
      const isOnQuizPage = request.nextUrl?.pathname.startsWith("/climate-change-quiz");
      const isOnDashboardPage = request.nextUrl?.pathname.startsWith("/dashboard");
      const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");
      // const isOnRegistrationPage = request.nextUrl?.pathname.startsWith("/registration");

        // // ONLY ADMIN CAN REACH THE ADMIN DASHBOARD
        // if (isOnAdminPanel && !user?.isAdmin) {
        //   return false;
        // }
    
        // ONLY AUTHENTICATED USERS CAN REACH THE Dashboard and quiz PAGE
        if (isOnDashboardPage && !user) {
          return false;
        }
        if (isOnQuizPage && !user) {
          return false;
        }
        

      // ONLY UNAUTHENTICATED USERS CAN REACH THE LOGIN PAGE
      if (isOnLoginPage && user) {
        return Response.redirect(new URL("/dashboard", request.nextUrl));
      }
      // if (isOnRegistrationPage && user) {
      //   return Response.redirect(new URL("/dashboard", request.nextUrl));
      // }

      console.log(auth);
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
};
