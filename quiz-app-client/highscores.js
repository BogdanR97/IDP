const highScores = [];

const jwtToken = 'Bearer ' + localStorage.getItem("jwt");

fetch('http://127.0.0.1:3000/quizzes', {
  method: 'GET',
  headers: {
      'Content-Type': 'application/json',
      'Authorization': jwtToken
  }
})
.then(res => {
  return res.json();
})
.then(loadedQuizzes => {
  loadedQuizzes.forEach(quiz => {
    const score = { ID: quiz.id, Score: quiz.score };
    highScores.push(score);
  });

  console.log(highScores)

  var col = [];
  for (var i = 0; i < highScores.length; i++) {
    for (var key in highScores[i]) {
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


  for (var i = 0; i < highScores.length; i++) {

    tr = table.insertRow(-1);

    for (var j = 0; j < col.length; j++) {
      var tabCell = tr.insertCell(-1);
      tabCell.innerHTML = highScores[i][col[j]];
    }
  }

  var divContainer = document.getElementById("highScores");
  divContainer.appendChild(table);
})
