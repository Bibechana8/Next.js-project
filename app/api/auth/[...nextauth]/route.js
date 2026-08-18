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
import mongoose from "mongoose";
import User from "../../../models/User";
import Payment from "../../../models/Payment";

const handler = NextAuth({
  debug: true,

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
  async signIn({ user, account, profile, email, credentials }) {
    if (account.provider === "github") {
      //connect to the database
      const client = await mongoose.connect();
      //check if the user already exists in the database
     const currentUser = User.findOne({ email: email });
     if (!currentUser) {
        //if not, create a new user
        const newUser = await User.create({
          email: email,
          username: email.split("@")[0],
        });
        await newUser.save();
        console.log("New user created:", newUser);
      } else {
        console.log("User already exists:", currentUser);
      }
    }
    }
  }
 
});

export { handler as GET, handler as POST };
console.log("GITHUB_ID:", !!process.env.GITHUB_ID);
console.log("GITHUB_SECRET:", !!process.env.GITHUB_SECRET);
console.log("NEXTAUTH_SECRET:", !!process.env.NEXTAUTH_SECRET);


