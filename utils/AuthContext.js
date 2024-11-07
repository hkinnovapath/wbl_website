// // frntend\utils\AuthContext.js
// import { useSession } from "next-auth/react";
// import { signOut } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import { createContext, useContext, useEffect, useState } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [authToken, setAuthToken] = useState(null);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const { data: session } = useSession(); // Access session data from NextAuth
//   const router = useRouter();

//   // Effect to check for access token on initial load (if it's already stored)

//   useEffect(() => {
//     const token = localStorage.getItem("access_token");
//     setIsAuthenticated(!!token);
//     setAuthToken(token);
//   }, []);

//   // Effect to handle changes to the session, e.g., when the Google login happens
//   useEffect(() => {
//     if (session?.accessToken) {
//       login(session.accessToken); // Call login to store token in localStorage
//     }
//   }, [session]);

//   const login = (token) => {
//     setAuthToken(token);
//     localStorage.setItem("access_token", token);
//     setIsAuthenticated(true);
//   };

//   const logout = () => {
//     setAuthToken(null);
//     // localStorage.removeItem("access_token");
//     // Clear session storage
//     sessionStorage.clear();
//     // Clear local storage (if you're using it)
//     localStorage.clear();
//     clearNextAuthCookies(); // Optionally clear cookies
//   // Sign out from NextAuth
//    signOut({ redirect: false }); // Setting redirect to false prevents automatic redirection
//     setIsAuthenticated(false);
//   };

//   function clearNextAuthCookies() {
//     // Check if we are in the browser
//     if (typeof window !== "undefined") {
//         // List of NextAuth cookies to clear
//         const cookiesToClear = [
//             'next-auth.session-token',
//             'next-auth.callback-url',
//             'next-auth.csrf-token'
//         ];

//         cookiesToClear.forEach(cookie => {
//             document.cookie = `${cookie}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
//         });
//     }
// }

// // Usage
// clearNextAuthCookies();


//   return (
//     <AuthContext.Provider value={{ isAuthenticated, authToken, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
// ------------------------------------------------original code above ------------------------------------


// ------------------------------------------------ code with session time out ------------------------------------

// // frntend/utils/AuthContext.js

// import { useSession } from "next-auth/react";
// import { signOut } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import { createContext, useContext, useEffect, useState } from "react";
// import { isTokenExpired, showSessionExpiredPopup } from './auth';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [authToken, setAuthToken] = useState(null);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const { data: session } = useSession();
//   const router = useRouter();
  
//   // Initial check on component mount
//   useEffect(() => {
//     const token = localStorage.getItem("access_token");
//     if (token) {
//       checkToken(token);
//     } else {
//       setIsAuthenticated(false);
      
//     }
    
//     const interval = setInterval(() => {
//       if (authToken) {
//         checkToken(authToken);
//       } 
//     }, 1000 * 60); // Check every minute
    
//     return () => clearInterval(interval); // Clean up the interval on unmount
//   }, [authToken]);
  
//   // Function to check if the token is expired
//   const checkToken = (token) => {
//     if (isTokenExpired(token)) {
//       showSessionExpiredPopup();
//       logout(); // Trigger logout to clear storage and state
//       router.push("/login");
//     } else {
//       setAuthToken(token);
//       setIsAuthenticated(true);
//     }
//   };
  
//   // Monitor session changes from NextAuth
//   useEffect(() => {
//     if (session?.accessToken) {
//       login(session.accessToken);
//     }
//   }, [session]);
  

//   //use the below code if you want the forgot password and privacy policy not to redirect to login page but doing so will not redirect the user to login page after session expires inspite after removing the access_toekn  
//   // Redirect if not authenticated
//   // useEffect(() => {
//   //   if (!isAuthenticated) {
//   //     router.push("/login");
//   //   }
//   // }, [isAuthenticated]);
  
//   const login = (token) => {
//     setAuthToken(token);
//     localStorage.setItem("access_token", token);
//     setIsAuthenticated(true);
//   };
  
//   const logout = () => {
//     localStorage.removeItem("access_token");
//     sessionStorage.clear();
//     setAuthToken(null);
//     setIsAuthenticated(false);
//     clearNextAuthCookies();
//     signOut({ redirect: false }); // Prevent automatic redirect on sign-out
//   };
  
//   function clearNextAuthCookies() {
//     if (typeof window !== "undefined") {
//       const cookiesToClear = [
//         'next-auth.session-token',
//         'next-auth.callback-url',
//         'next-auth.csrf-token'
//       ];
//       cookiesToClear.forEach(cookie => {
//         document.cookie = `${cookie}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
//       });
//     }
//   }
  
//   return (
//     <AuthContext.Provider value={{ isAuthenticated, authToken, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

// // ------------------------------------------------ code with  session time  out ------------------------------------


import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import { isTokenExpired } from './auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  
  // Initial check on component mount
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      checkToken(token);
    } else {
      setIsAuthenticated(false);
    }
    
    const interval = setInterval(() => {
      if (authToken) {
        checkToken(authToken);
      } 
    }, 1000 * 60); // Check every minute
    
    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [authToken]);
  
  // Function to check if the token is expired
  const checkToken = (token) => {
    if (isTokenExpired(token)) {
      logout(); // Trigger logout to clear storage and state
      router.push("/login");
    } else {
      setAuthToken(token);
      setIsAuthenticated(true);
    }
  };
  
  // Monitor session changes from NextAuth
  useEffect(() => {
    if (session?.accessToken) {
      login(session.accessToken);
    }
  }, [session]);
  
  const login = (token) => {
    setAuthToken(token);
    localStorage.setItem("access_token", token);
    setIsAuthenticated(true);
  };
  
  const logout = () => {
    localStorage.removeItem("access_token");
    sessionStorage.clear();
    setAuthToken(null);
    setIsAuthenticated(false);
    clearNextAuthCookies();
    signOut({ redirect: false }); // Prevent automatic redirect on sign-out
  };
  
  function clearNextAuthCookies() {
    if (typeof window !== "undefined") {
      const cookiesToClear = [
        'next-auth.session-token',
        'next-auth.callback-url',
        'next-auth.csrf-token'
      ];
      cookiesToClear.forEach(cookie => {
        document.cookie = `${cookie}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      });
    }
  }
  
  return (
    <AuthContext.Provider value={{ isAuthenticated, authToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
