import NextAuth, { User } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { getCsrfToken } from "next-auth/react";
import { v4 as uuidv4 } from 'uuid';

export default NextAuth({
  pages: {
    signIn: "/las-frontend/login"
  },
  session: {
    strategy: "jwt"
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {},
        password: {},
        csrfToken: {}
      },
      async authorize(credentials, req) {
        console.log('== Authorize Method Invoked ==');
        console.log(credentials);
        console.log('--- Authentication Successfull ---');
        const user: User = { id: uuidv4().toString(), email: credentials?.email };
        // console.log(`jwt user: ${JSON.stringify(user)}`);
        const payload = {
          ssoId: credentials?.email,
          password: credentials?.password,
          _csrf: credentials?.csrfToken
        };

        // try {
        //   const response = await fetch('http://lasdevapp.ov.otto.de/las-frontend/login', {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(payload),
        //   });
    
        //   if (response.ok) {
        //     // Authentication successful
        //     const user = await response.json();
        //     console.log(`--- LAS Response -- : ${user}`);
        //   } else {
        //     // Authentication failed
        //     console.log('Authentication Failed');
        //   }
        // } catch (error) {
        //   console.error('Error during authentication:', error);
        // }
        return user;
      }
    })
  ]
});


