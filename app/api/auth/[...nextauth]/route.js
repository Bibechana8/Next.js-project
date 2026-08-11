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
});

export { handler as GET, handler as POST };
console.log("GITHUB_ID:", !!process.env.GITHUB_ID);
console.log("GITHUB_SECRET:", !!process.env.GITHUB_SECRET);
console.log("NEXTAUTH_SECRET:", !!process.env.NEXTAUTH_SECRET);


