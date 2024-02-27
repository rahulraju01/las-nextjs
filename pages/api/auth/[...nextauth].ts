import { getItemsPayload } from "@/payload/data";
import axios from "axios";
import NextAuth, { User } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { getCsrfToken } from "next-auth/react";
import { headers } from "next/headers";
import { use } from "react";
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
        csrfToken: {},
      },
      async authorize(credentials, req) {
        console.log('== Authorize Method Invoked ==');
        console.log(credentials);
        console.log('--- Authentication Successfull ---');
        const user: User = { id: uuidv4().toString(), email: credentials?.email };
        const email: string | undefined = credentials?.email;
        const password: string | undefined = credentials?.password;
        const csrfToken: string | undefined = credentials?.csrfToken;

        // console.log(`jwt user: ${JSON.stringify(user)}`);

        const formData = new URLSearchParams();
        // if (email && password && csrfToken) {
        //   formData.append('ssoId', email);
        //   formData.append('password', password);
        //   formData.append('_csrf', csrfToken);
        // }
        // const cookies = `XSRF-TOKEN=${csrfToken}`
        // try {
        //   const response = await axios.post('http://lasdevapp.ov.otto.de/las-frontend/login', formData, {
        //     headers: {
        //       'Content-Type': 'application/x-www-form-urlencoded',
        //       'Cookie': cookies
        //     },
        //   });

        //   if (response.status == 200) {
        //     // Authentication successful
        //     console.log('== repsonse ok entered ==');
        //     const user = response.data;
        //     console.log(user);
        //     const responseHeader:string[] | undefined = response.headers["set-cookie"];
        //     if(typeof responseHeader != 'undefined'){
        //         const reponseHeadercsrfToken = responseHeader[1].split("=")[1].split(";")[0];
        //         console.log(reponseHeadercsrfToken);
        //         const itemsPayload = await getItemsPayload();
        //         console.log(JSON.stringify(itemsPayload));

        //       const itemsResponse = await axios.post('http://lasdevapp.ov.otto.de/las-frontend/rest/items/paging', itemsPayload, {
        //         headers: {
        //           'Content-Type': 'application/json',
        //           'X-Xsrf-Token': reponseHeadercsrfToken
        //         },
        //       });
        //       if (itemsResponse.status == 200) {
        //         const items = response.data;
        //         console.log("***************************");
        //         console.log(items);
        //       }

        //     }
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
  ],
});


