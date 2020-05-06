const questions = [];

const jwtToken = 'Bearer ' + localStorage.getItem("jwt");

fetch('http://127.0.0.1:3000/questions', {
  method: 'GET',
  headers: {
      'Content-Type': 'application/json',
      'Authorization': jwtToken
  }
})
.then(res => {
  return res.json();
})
.then(loadedQuestions => {
  loadedQuestions.forEach(question => {
    const questionData = { Question: question.q_text,
                            Correct_Answer: question.correct_ans,
                            Wrong_Answer_1: question.wrong_ans_1,
                            Wrong_Answer_2: question.wrong_ans_2,
                            Category: question.category };
    questions.push(questionData);
  });

  console.log(questions)

  var col = [];
  for (var i = 0; i < questions.length; i++) {
    for (var key in questions[i]) {
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


  for (var i = 0; i < questions.length; i++) {
    tr = table.insertRow(-1);

    for (var j = 0; j < col.length; j++) {
      var tabCell = tr.insertCell(-1);
      tabCell.innerHTML = questions[i][col[j]];
    }
  }

  var divContainer = document.getElementById("questions");
  divContainer.appendChild(table);
})
