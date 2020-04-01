const userEmail = document.getElementById("userEmail");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");

userEmail.addEventListener("keyup", () => {
    loginBtn.disabled = !(userEmail.value && password.value);
});

password.addEventListener("keyup", () => {
    loginBtn.disabled = !(userEmail.value && password.value);
});

loginUser = e => {
    console.log("clicked the login button!");
    e.preventDefault();
  
    const userCreds = { auth: { email: userEmail.value, password: password.value } };
    console.log('User Credentials:', JSON.stringify(userCreds));

    fetch('http://127.0.0.1:3000/api/user_token', {
      method: 'POST',
      credentials: 'omit',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(userCreds),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
      localStorage.setItem("jwt", data.jwt);
      window.location.assign("/index.html");
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };
