// export const isAuthenticated = () => {
//   return !!localStorage.getItem("access_token"); // Example using localStorage
// };

// utils/auth.js

// export const isAuthenticated = async () => {
//   const token = localStorage.getItem("access_token"); // Assuming token is stored in localStorage


// export const isAuthenticated = async () => {
//   const token = localStorage.getItem("access_token");

//   if (!token) {
//     return { valid: false, message: "No token found" };
//   }

//   try {
//     const response = await fetch('http://127.0.0.1:8000/verify_token', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ access_token: token }),
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       return { valid: false, message: errorData.detail || 'Token validation failed' };
//     }

//     const data = await response.json();
//     return { valid: data.valid, message: "" };
//   } catch (error) {
//     console.error('Error validating token:', error);
//     return { valid: false, message: "An error occurred while validating the token" };
//   }
// };



// export const isAuthenticated = async () => {
//   const token = localStorage.getItem("access_token");

//   if (!token) {
//     return { valid: false, message: "No token found" };
//   }

//   try {
//     const response = await fetch('http://127.0.0.1:8000/verify_token', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ access_token: token, token_type: "Bearer" }),
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       return { valid: false, message: errorData.detail || 'Token validation failed' };
//     }

//     const data = await response.json();
//     return { valid: data.valid, message: "" };
//   } catch (error) {
//     console.error('Error validating token:', error);
//     return { valid: false, message: "An error occurred while validating the token" };
//   }
// };



export const isAuthenticated = async () => {
  const token = localStorage.getItem("access_token");

  if (!token) {
    return { valid: false, message: "Please Login!" };
  }

  try {
    const response = await fetch('http://127.0.0.1:8000/verify_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ access_token: token, token_type: "Bearer" }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return { valid: false, message: errorData.detail || 'Token validation failed' };
    }

    const data = await response.json();
    return { valid: true, message: "" };  // Adjusted this line to always return valid: true if the token is valid
  } catch (error) {
    console.error('Error validating token:', error);
    return { valid: false, message: "An error occurred while validating the token" };
  }
};
