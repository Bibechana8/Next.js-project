// import NextAuth from "next-auth";
// import GitHubProvider from "next-auth/providers/github";

// const handler = NextAuth({
//   debug: true,

//   providers: [
//     GitHubProvider({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     }),
//   ],
// });

// export { handler as GET, handler as POST };
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import User from "../../../models/User";
import connectDb from "../../../db/connectDb";

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      authorization: {
        params: {
          scope: "read:user user:email",
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider !== "github") {
        return true;
      }

      const email = user?.email;
      if (!email) {
        return false;
      }

      await connectDb();

      let currentUser = await User.findOne({ email });
      if (!currentUser) {
        currentUser = await User.create({
          email,
          username: email.split("@")[0],
        });
      }

      user.name = currentUser.username;
      return true;
    },

    async session({ session }) {
      if (!session?.user?.email) {
        return session;
      }

      await connectDb();

      const dbUser = await User.findOne({ email: session.user.email });
      if (dbUser?.username) {
        session.user.name = dbUser.username;
      }

      return session;
    },
  },
});




export { handler as GET, handler as POST };
