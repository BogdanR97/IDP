const userEmail = document.getElementById("userEmail");
const userName = document.getElementById("userName");
const password = document.getElementById("password");
const loginBtn = document.getElementById("addUserBtn");

const jwtToken = 'Bearer ' + localStorage.getItem("jwt");

userEmail.addEventListener("keyup", () => {
    loginBtn.disabled = !(userEmail.value && password.value && userName.value);
});

userName.addEventListener("keyup", () => {
    loginBtn.disabled = !(userEmail.value && password.value && userName.value);
});

password.addEventListener("keyup", () => {
    loginBtn.disabled = !(userEmail.value && password.value && userName.value);
});

addUser = e => {
    console.log("clicked the add user button!");
    e.preventDefault();
  
    const userData = { email: userEmail.value, username: userName.value, password: password.value };

    fetch('http://127.0.0.1:3000/api/users', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': jwtToken
      },
      body: JSON.stringify(userData),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
      window.location.assign("/users.html");
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };