const questionBody = document.getElementById("questionBody");
const correctAns = document.getElementById("correctAns");
const wrongAns1 = document.getElementById("wrongAns1");
const wrongAns2 = document.getElementById("wrongAns2");
const category = document.getElementById("category");
const addQuestionBtn = document.getElementById("addQuestionBtn");

const jwtToken = 'Bearer ' + localStorage.getItem("jwt");

// questionBody.addEventListener("keyup", () => {
//     addQuestionBtn.disabled = !(questionBody.value && correctAns.value && wrongAns1.value && wrongAns2.value && category.value);
// });

// correctAns.addEventListener("keyup", () => {
//     addQuestionBtn.disabled = !(questionBody.value && correctAns.value && wrongAns1.value && wrongAns2.value && category.value);
// });

// wrongAns1.addEventListener("keyup", () => {
//     addQuestionBtn.disabled = !(questionBody.value && correctAns.value && wrongAns1.value && wrongAns2.value && category.value);
// });

// wrongAns2.addEventListener("keyup", () => {
//     addQuestionBtn.disabled = !(questionBody.value && correctAns.value && wrongAns1.value && wrongAns2.value && category.value);
// });

// category.addEventListener("keyup", () => {
//     addQuestionBtn.disabled = !(questionBody.value && correctAns.value && wrongAns1.value && wrongAns2.value && category.value);
// });

addQuestion = e => {
    console.log("clicked the add question button!");
    e.preventDefault();
  
    const questionData = {
        q_text : questionBody.value,
        correct_ans : correctAns.value,
        wrong_ans_1 : wrongAns1.value,
        wrong_ans_2 : wrongAns2.value,
        category : category.value
    };

    fetch('http://127.0.0.1:3000/questions', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': jwtToken
      },
      body: JSON.stringify(questionData),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
      window.location.assign("/questions.html");
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };