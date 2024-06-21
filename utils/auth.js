// utils/auth.js
export const isAuthenticated = () => {
  // Replace with actual authentication logic
  return !!localStorage.getItem("access_token"); // Example using localStorage
};

// utils/auth.js

// export const isAuthenticated = async () => {
//   const token = localStorage.getItem("access_token"); // Assuming token is stored in localStorage

//   if (!token) {
//     return false;
//   }

//   try {
//     const response = await fetch("http:localhost:8000/verify_token", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`, // Attach the token in the Authorization header
//       },
//       body: JSON.stringify({ access_token: token }),
//     });

//     if (!response.ok) {
//       throw new Error("Token verification failed");
//     }

//     const data = await response.json();
//     return !!data; // Assuming the backend returns a truthy payload if the token is valid
//   } catch (error) {
//     console.error("Error verifying token:", error);
//     return false;
//   }
// };
