"use server"

import { signIn, signOut } from "../../auth";


export async function handleGoogleLogin() {
  await signIn("google");
}

export async function handleFacebookLogin() {
  await signIn("facebook");
}

export async function handleLogout() {
  await signOut();
}
