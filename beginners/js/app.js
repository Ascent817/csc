
let questions = [
  "What is your favorite animal?",
  "What is your age?",
  "What is your favorite color?"
];

let question = document.getElementById('question');

let i = 0;

function submit() {
  let answer = document.getElementById('answer').value;
  alert("Your answer is: " + answer);
  i++;
  if (i < questions.length) {
    question.innerHTML = questions[i];
  } else {
    question.innerHTML = "No more questions!";
  }
}