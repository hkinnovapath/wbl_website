// // frntend\utils\auth.js
//   export const isAuthenticated = async () => {
//     const token = localStorage.getItem("access_token");

//     if (!token) {
//       return { valid: false, message: "Please Login!" };
//     }

//     try {
//       const response = await fetch(
//         `${process.env.NEXT_PUBLIC_API_URL}/verify_token`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ access_token: token, token_type: "Bearer" }),
//         }
//       );

//       if (!response.ok) {
//         const errorData = await response.json();
//         return {
//           valid: false,
//           message: errorData.detail || "Token validation failed",
//         };
//       }

//       return { valid: true, message: "" }; // Adjusted this line to always return valid: true if the token is valid
//     } catch (error) {
//       console.error("Error validating token:", error);
//       return {
//         valid: false,
//         message: "An error occurred while validating the token",
//       };
//     }
//   };



// frntend/utils/auth.js
export const parseJwt = (token) => {
  try {
    // console.log(token)
    
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};


export const isTokenExpired = (token) => {
  const decoded = parseJwt(token);
  console.log(decoded.exp);
  if (!decoded || !decoded.exp) return true; // Token is expired if there's no exp
  return decoded.exp * 1000 < Date.now(); // Convert exp to milliseconds
};

export const isAuthenticated = async () => {
  const token = localStorage.getItem("access_token");

  if (!token) {
    return { valid: false, message: "Please Login!" };
  }

  // Check if the token is expired
  if (isTokenExpired(token)) {
    showSessionExpiredPopup(); // Show popup if token is expired
    return { valid: false, message: "Session expired, please login again." };
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/verify_token`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ access_token: token, token_type: "Bearer" }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return {
        valid: false,
        message: errorData.detail || "Token validation failed",
      };
    }

    return { valid: true, message: "" };
  } catch (error) {
    console.error("Error validating token:", error);
    return {
      valid: false,
      message: "An error occurred while validating the token",
    };
  }
};

export const showSessionExpiredPopup = () => {
  alert("Session expired, please login again."); // Simple alert for session expired
};
