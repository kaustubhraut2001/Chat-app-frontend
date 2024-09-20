import NextAuth, { AuthOptions, ISODateString } from "next-auth"
import { JWT } from "next-auth/jwt";
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";


export interface CustomSession {
	user?: CustomUser;
	expires?: ISODateString;
}

export interface CustomUser {
	id?: string | null;
	name?: string | null;
	email?: string | null;
	image?: string | null;
	provider?: string | null;
	token?: string | null
}
;
export const authOptions: AuthOptions = {
	pages: {
		signIn: '/'
	},
	callbacks: {
		async signIn({ user, account }) {
			console.log(user, "user data");
			return true
		},
		async session({ session, token, user }: { session: CustomSession, token: JWT, user: CustomUser }) {
			// Send properties to the client, like an access_token and user id from a provider.
			// session.accessToken = token.accessToken
			// session.user.id = token.id
			session.user = token.user as CustomUser;
			return session
		},
		async jwt({ token, user, profile }) {
			// Persist the OAuth access_token and or the user id to the token right after signin
			// if (account) {
			// 	token.accessToken = account.access_token
			// 	token.id = profile.id
			// }
			if (user) {
				token.user = user;

			}
			return token
		}
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