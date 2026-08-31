import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const authoption: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
};
