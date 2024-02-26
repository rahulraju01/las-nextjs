import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
          name: 'Credentials',
          credentials: {
            email: {},
            password: {}
          },
          async authorize(credentials, req) {
            console.log('== Authorize Method Invoked ==');
            console.log(credentials);
            return null
          }
        })
      ]
})

export { handler as GET, handler as POST }