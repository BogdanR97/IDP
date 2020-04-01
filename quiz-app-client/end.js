const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const discardScoreBtn = document.getElementById("discardScoreBtn");
const links = document.getElementById("links");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const finalScore = document.getElementById("finalScore");

finalScore.innerText = mostRecentScore;

const jwtToken = 'Bearer ' + localStorage.getItem("jwt");

saveHighScore = e => {
  console.log("clicked the save button!");
  e.preventDefault();

  links.classList.remove("hidden");
  discardScoreBtn.classList.add("hidden");
  saveScoreBtn.classList.add("hidden");

  const score = { score: mostRecentScore }

  fetch('http://127.0.0.1:3000/quizzes/' + localStorage.getItem("quizId"), {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': jwtToken
    },
    body: JSON.stringify(score)
  })
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
};

discardHighScore = e => {
  console.log("clicked the discard button!");
  e.preventDefault();

  links.classList.remove("hidden");
  discardScoreBtn.classList.add("hidden");
  saveScoreBtn.classList.add("hidden");

  fetch('http://127.0.0.1:3000/quizzes/' + localStorage.getItem("quizId"), {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': jwtToken
    }
  })
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
};
