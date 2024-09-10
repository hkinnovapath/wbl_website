// Example function to retrieve access token from local storage
function getAccessToken() {
    return localStorage.getItem('access_token');
  }
  
  // Example function to clear access token from local storage
  function clearAccessToken() {
    localStorage.removeItem('access_token');
  }
  