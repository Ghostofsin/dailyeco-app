'use server'
 
import { cookies } from 'next/headers'
 
export async function createCookie(name, value, path) {
	const oneMonth = 30 * 24 * 60 * 60 * 1000
  cookies().set(
	name, 
	value, {
	path: path, 
	expires: Date.now() + oneMonth,
	// secure: true, 
	sameSite: 'strict', 
	httpOnly: true, })
}

export async function getCookie(name) {
	const cookieStore = cookies()
	const value = cookieStore.get(name)
	return value
}
