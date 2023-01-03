import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import clientPromise from "../../../db/connectDB"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";

export default NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.PUBLIC_NEXT_GITHUB_CLIENT_ID,
            clientSecret: process.env.PUBLIC_NEXT_GITHUB_CLIENT_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.PUBLIC_NEXT_GOOGLE_CLIENT_ID,
            clientSecret: process.env.PUBLIC_NEXT_GOOGLE_CLIENT_SECRET,
        })
    ],
     pages: {
        signIn: '/auth/signin',
     },
    adapter: MongoDBAdapter(clientPromise)
})