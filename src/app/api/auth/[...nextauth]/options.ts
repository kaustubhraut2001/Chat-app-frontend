import NextAuth, { AuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";


export const authOptions: AuthOptions = {
	pages: {
		signIn: '/'
	},
	providers: [
		// GithubProvider({
		// 	clientId: process.env.GITHUB_ID,
		// 	clientSecret: process.env.GITHUB_SECRET,
		// }),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECREAT!,
			authorization: {
				params: {
					prompt: "consent",
					access_type: "offline",
					response_type: "code"
				}
			}
		}
		)

	],
}

export default NextAuth(authOptions)