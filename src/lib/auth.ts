import { NextAuthOptions } from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import GithubProvider from 'next-auth/providers/github'
import prisma from "./prisma"

export const AuthOptions:NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt"
    },
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string
        })
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
        return true
        },
        async redirect({ url, baseUrl }) {
        return baseUrl
        },
        async session({ session, user, token }) {
        return session
        },
        async jwt({ token, user, account, profile, isNewUser }) {
        return token
        }
    }
}