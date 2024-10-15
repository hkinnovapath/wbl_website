import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { data: session } = useSession(); // Access session data from NextAuth
  const router = useRouter();

  // Effect to check for access token on initial load (if it's already stored)

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    setIsAuthenticated(!!token);
    setAuthToken(token);
  }, []);

  // Effect to handle changes to the session, e.g., when the Google login happens
  useEffect(() => {
    if (session?.accessToken) {
      login(session.accessToken); // Call login to store token in localStorage
    }
  }, [session]);

  const login = (token) => {
    setAuthToken(token);
    localStorage.setItem("access_token", token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setAuthToken(null);
    // localStorage.removeItem("access_token");
    // Clear session storage
    sessionStorage.clear();
    // Clear local storage (if you're using it)
    localStorage.clear();
    clearNextAuthCookies(); // Optionally clear cookies
  // Sign out from NextAuth
   signOut({ redirect: false }); // Setting redirect to false prevents automatic redirection
    setIsAuthenticated(false);
  };

  function clearNextAuthCookies() {
    // Check if we are in the browser
    if (typeof window !== "undefined") {
        // List of NextAuth cookies to clear
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

// Usage
clearNextAuthCookies();


  return (
    <AuthContext.Provider value={{ isAuthenticated, authToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
