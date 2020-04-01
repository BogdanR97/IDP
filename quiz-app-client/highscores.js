const highScoresList = document.getElementById("highScoresList");
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
    const score = { id: quiz.id, score: quiz.score };
    highScores.push(score);
  });
})

highScoresList.innerHTML = highScores
  .map(score => {
    console.log(score.id);
    return `<li class="high-score">${score.id} - ${score.score}</li>`;
  })
  .join("");
