// // frntend\app\api\auth\[...nextauth]\route.ts
// import NextAuth, { NextAuthOptions, Session } from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import axios from "axios";
// import { generateCodeVerifier, generateCodeChallenge } from "@/utils/pkce"; // Import PKCE functions


// // Extend the JWT type to include status and accessToken
// declare module "next-auth/jwt" {
//   interface JWT {
//     id: string;
//     name?: string;
//     email?: string;
//     status?: string;
//     accessToken?: string;
//   }
// }

// // Extend the Session type to include the id and status properties
// declare module "next-auth" {
//   interface Session {
//     user: {
//       id: string;
//       name?: string;
//       email?: string;
//       image?: string;
//       status?: string;
//     };
//     accessToken?: string;
//   }
// }

// const authOptions: NextAuthOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID as string,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         // Call register or login based on the user status
//         const { accessToken, status } = await handleUserRegistrationOrLogin(user);

//         // Attach the access token and status to the JWT token
//         if (accessToken) {
//           token.accessToken = accessToken;
//         }
        
//         token.id = user.id;
//         token.name = user.name;
//         token.email = user.email;
//         token.status = status; // Attach user status (inactive, active, etc.)
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       session.user.id = token.id as string;
//       session.user.name = token.name as string;
//       session.user.email = token.email as string;
//       session.accessToken = token.accessToken as string; // Pass the access token to the session
//       session.user.status = token.status; // Pass user status to session
//       return session;
//     },
//   },
//   secret: process.env.NEXTAUTH_SECRET as string,
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };

// // Function to handle user registration or login
// async function handleUserRegistrationOrLogin(user: any) {
//   const payload = {
//     email: user.email,
//     name: user.name,
//     google_id: user.id,
//   };

//   try {
//     const checkResponse = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/check_user/`, payload);

//     if (!checkResponse.data.exists) { 
//       // If the user does not exist, register them
//       const registerResponse = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/google_users/`, payload);
//       // return { accessToken: null, status: 'registered' };
//      // Pass the registration message back to the UI
//      return { 
//       accessToken: null, 
//       status: 'registered', 
//       message: registerResponse.data.message // Include the message from the response
//      }
//     } else if (checkResponse.data.status === "active") {
//       // If the user exists and is active, log in
//       const loginResponse = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/google_login/`, payload);
//       return { accessToken: loginResponse.data.access_token, status: 'active' };
//     } else {
//       // If user exists but is inactive
//       return { accessToken: null, status: 'inactive' };
//     }
//   } catch (error) {
//     console.error("Error during operation:", error.response?.data.detail || error.message);
//     return { accessToken: null, status: 'error' };
//   }
// }


// frntend\app\api\auth\[...nextauth]\route.ts



// // frntend/app/api/auth/[...nextauth]/route.ts
// import NextAuth, { NextAuthOptions, Session } from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import axios from "axios";

// // Extend the JWT type to include status and accessToken
// declare module "next-auth/jwt" {
//   interface JWT {
//     id: string;
//     name?: string;
//     email?: string;
//     status?: string;
//     accessToken?: string;
//   }
// }

// // Extend the Session type to include the id and status properties
// declare module "next-auth" {
//   interface Session {
//     user: {
//       id: string;
//       name?: string;
//       email?: string;
//       image?: string;
//       status?: string;
//     };
//     accessToken?: string;
//   }
// }

// const authOptions: NextAuthOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID as string,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
//     }),
//   ],

//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         // Call register or login based on the user status
//         const { accessToken, status } = await handleUserRegistrationOrLogin(user);

//         // Attach the access token and status to the JWT token
//         if (accessToken) {
//           token.accessToken = accessToken;
//         }
        
//         token.id = user.id;
//         token.name = user.name;
//         token.email = user.email;
//         token.status = status; // Attach user status (inactive, active, etc.)
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       session.user.id = token.id as string;
//       session.user.name = token.name as string;
//       session.user.email = token.email as string;
//       session.accessToken = token.accessToken as string; // Pass the access token to the session
//       session.user.status = token.status; // Pass user status to session
//       return session;
//     },
//   },
//   secret: process.env.NEXTAUTH_SECRET as string,
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };

// // Function to handle user registration or login
// async function handleUserRegistrationOrLogin(user: any) {
//   const payload = {
//     email: user.email,
//     name: user.name,
//     google_id: user.id,
//   };

//   try {
//     const checkResponse = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/check_user/`, payload);

//     if (!checkResponse.data.exists) { 
//       // If the user does not exist, register them
//       const registerResponse = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/google_users/`, payload);
//       return {
//         accessToken: null,
//         status: 'registered',
//         message: registerResponse.data.message // Include the message from the response
//       };
//     } else if (checkResponse.data.status === "active") {
//       // If the user exists and is active, log in
//       const loginResponse = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/google_login/`, payload);
//       return { accessToken: loginResponse.data.access_token, status: 'active' };
//     } else {
//       // If user exists but is inactive
//       return { accessToken: null, status: 'inactive' };
//     }
//   } catch (error) {
//     console.error("Error during operation:", error.response?.data.detail || error.message);
//     return { accessToken: null, status: 'error' };
//   }
// }

// // Function to handle the OAuth callback and exchange the code for tokens
// async function handleOAuthCallback(req, res) {
//   const { code } = req.query; // Extract code from query
//   const codeVerifier = req.cookies.get("code_verifier"); // Get code verifier from cookies

//   // Prepare the request to exchange code for tokens
//   const params = new URLSearchParams();
//   params.append('code', code as string);
//   params.append('client_id', process.env.GOOGLE_CLIENT_ID as string);
//   params.append('client_secret', process.env.GOOGLE_CLIENT_SECRET as string);
//   params.append('redirect_uri', process.env.NEXT_PUBLIC_REDIRECT_URI as string); // The same redirect URI used in authorization
//   params.append('grant_type', 'authorization_code');
//   params.append('code_verifier', codeVerifier); // Use the code verifier

//   try {
//     const tokenResponse = await axios.post('https://oauth2.googleapis.com/token', params);
    
//     // Handle the response and extract the access token
//     const { access_token, refresh_token } = tokenResponse.data;

//     // Here, you can store the refresh token in the user session or database
//     return res.status(200).json({ access_token, refresh_token });
//   } catch (error) {
//     console.error("Error exchanging code for tokens:", error.response?.data || error.message);
//     return res.status(400).json({ error: "Failed to exchange code for tokens" });
//   }
// }


// frntend/app/api/auth/[...nextauth]/route.ts
import NextAuth, { NextAuthOptions, Session } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import axios from "axios";

// Extend the JWT type to include status and accessToken
declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    name?: string;
    email?: string;
    status?: string;
    accessToken?: string;
    candidateId?: string;
  }
}

// Extend the Session type to include the id and status properties
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string;
      email?: string;
      image?: string;
      status?: string;
      candidateId?: string;
    };
    accessToken?: string;
  }
}

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  // pages: {
  //   error: '/api/auth/error', // Custom error page
  // },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        console.log("User in jwt callback:", user);

        // Call register or login based on the user status
        const { accessToken, status , candidateId} = await handleUserRegistrationOrLogin(user);

        // Attach the access token and status to the JWT token
        if (accessToken) {
          token.accessToken = accessToken;
        }
        
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.status = status; // Attach user status (inactive, active, etc.)
        token.candidateId = candidateId; // Attach candidate ID
      }
      console.log("Token in jwt callback:", token);

      return token;
    },
    async session({ session, token }) {
      console.log("Token in session callback:", token);

      session.user.id = token.id as string;
      session.user.name = token.name as string;
      session.user.email = token.email as string;
      session.accessToken = token.accessToken as string; // Pass the access token to the session
      session.user.status = token.status; // Pass user status to session
      console.log("Session in session callback:", session);

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET as string,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

// Function to handle user registration or login
async function handleUserRegistrationOrLogin(user: any) {
  const payload = {
    email: user.email,
    name: user.name,
    google_id: user.id,
  };

  try {
    const checkResponse = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/check_user/`, payload);

    if (!checkResponse.data.exists) { 
      // If the user does not exist, register them
      const registerResponse = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/google_users/`, payload);
      return {
        accessToken: null,
        status: 'registered',
        message: registerResponse.data.message // Include the message from the response
      };
    } else if (checkResponse.data.status === "active") {
      // If the user exists and is active, log in
      const loginResponse = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/google_login/`, payload);
      return { accessToken: loginResponse.data.access_token, status: 'active' };
    } else {
      // If user exists but is inactive
      return { accessToken: null, status: 'inactive' };
    }
  } catch (error) {
    console.error("Error during operation:", error.response?.data.detail || error.message);
    return { accessToken: null, status: 'error' };
  }
}

// Function to handle the OAuth callback and exchange the code for tokens
async function handleOAuthCallback(req, res) {
  const { code } = req.query; // Extract code from query
  const codeVerifier = req.cookies.get("code_verifier"); // Get code verifier from cookies

  // Prepare the request to exchange code for tokens
  const params = new URLSearchParams();
  params.append('code', code as string);
  params.append('client_id', process.env.GOOGLE_CLIENT_ID as string);
  params.append('client_secret', process.env.GOOGLE_CLIENT_SECRET as string);
  params.append('redirect_uri', process.env.NEXT_PUBLIC_REDIRECT_URI as string); // The same redirect URI used in authorization
  params.append('grant_type', 'authorization_code');
  params.append('code_verifier', codeVerifier); // Use the code verifier

  try {
    const tokenResponse = await axios.post('https://oauth2.googleapis.com/token', params);
    
    // Handle the response and extract the access token
    const { access_token, refresh_token } = tokenResponse.data;

    // Here, you can store the refresh token in the user session or database
    return res.status(200).json({ access_token, refresh_token });
  } catch (error) {
    console.error("Error exchanging code for tokens:", error.response?.data || error.message);
    return res.status(400).json({ error: "Failed to exchange code for tokens" });
  }
}
