import { User } from "@prisma/client";
import bcryptjs from "bcryptjs";
import Credentials from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "./db";
export const NEXT_AUTH = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    Credentials({
      name:"credentials",
      credentials:{
          email:{label:"Email",type:"email"},
          password:{label:"Password",type:"password"}
      },
      async authorize(credentials: any) {
        const email = credentials.email;
        const password = credentials.password;
        const user = await prisma.user.findFirst({
          where: {
            email,
          },
        });
        if (!user || !user.password) {
          return null;
        }
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
          return null;
        }
        return user as User;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages:{
    signIn:"/",
    signOut:"/",
    newUser: '/newUser'
  },
  callbacks: {
    async jwt({ token, account, profile,user }: any) {
      token.UserId = token.sub;
      if (user) {
        token.isSurvey = user.isSurvey;
      }
      return token;
    },
    async session({ session, token, user }: any) {
      session.user.id = token.UserId;
      session.user.isSurvey = token.isSurvey;
      return session;
    },
    async signIn({ user, account, profile }: any) {
      let userData = await prisma.user.findFirst({
        where: {
          id: user.id,
        },
      });
      if (!userData) {
        userData = await prisma.user.create({
          data: {
            id: user.id,
            email: user.email,
            username: user.email,
            image: user.image,
          },
        });
      }
      user.isSurvey = userData.isSurvey;
      return true;
    },
  },
};
