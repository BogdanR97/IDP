const logoutBtn = document.getElementById("logoutBtn");

logoutUser = e => {
    console.log("clicked the logout button!");
    e.preventDefault();
  
    localStorage.clear();
    window.location.assign("/login.html");
  }