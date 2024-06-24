// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';

// const Auth = ({ children }) => {
//   const router = useRouter();

//   useEffect(() => {
//     const checkAuth = async () => {
//       const token = localStorage.getItem('access_token');
//       if (!token) {
//         // Redirect to login page if token is not present
//         router.push('/login');
//       }
//     };

//     checkAuth();
//   }, []);

//   return <div>{children}</div>;
// };

// export default Auth;


// import { useEffect } from 'react';
// import { useRouter, usePathname } from 'next/navigation';

// const Auth = ({ children }) => {
//   const router = useRouter();
//   const pathname = usePathname();

//   useEffect(() => {
//     const checkAuth = async () => {
//       const token = localStorage.getItem('access_token');
//       if (!token) {
//         // Store the current path in sessionStorage before redirecting to login
//         sessionStorage.setItem('redirectPath', pathname);
//         // Redirect to login page if token is not present
//         router.push('/login');
//       }
//     };

//     checkAuth();
//   }, [router, pathname]);

//   return <>{children}</>; // Ensure children are rendered if authenticated
// };

// export default Auth;




import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Auth = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const accessToken = localStorage.getItem('access_token');
      if (!accessToken) {
        // Store the current path in sessionStorage with encodeURIComponent
        const encodedPathname = encodeURIComponent(router.pathname);
        sessionStorage.setItem('redirectPath', encodedPathname);
        // Redirect to login
        router.push('/assignment');
      }
    };

    checkAuth();
  }, [router]);

  return <>{children}</>;
};

export default Auth;
