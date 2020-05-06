const users = [];

const jwtToken = 'Bearer ' + localStorage.getItem("jwt");

fetch('http://127.0.0.1:3000/api/users', {
  method: 'GET',
  headers: {
      'Content-Type': 'application/json',
      'Authorization': jwtToken
  }
})
.then(res => {
  return res.json();
})
.then(loadedUsers => {
  loadedUsers.forEach(user => {
    const userData = { Username: user.username, Email: user.email };
    users.push(userData);
  });

  console.log(users)

  var col = [];
  for (var i = 0; i < users.length; i++) {
    for (var key in users[i]) {
      if (col.indexOf(key) === -1) {
        col.push(key);
      }
    }
  }

  var table = document.createElement("table");
  var tr = table.insertRow(-1);                   

  for (var i = 0; i < col.length; i++) {
    var th = document.createElement("th");
    th.innerHTML = col[i];
    tr.appendChild(th);
  }


  for (var i = 0; i < users.length; i++) {
    tr = table.insertRow(-1);

    for (var j = 0; j < col.length; j++) {
      var tabCell = tr.insertCell(-1);
      tabCell.innerHTML = users[i][col[j]];
    }
  }

  var divContainer = document.getElementById("users");
  divContainer.appendChild(table);
})
