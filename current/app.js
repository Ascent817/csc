let questions = [
  "What is the color of the sky?",
  "What is your favorite color?",
  "What is your favorite animal?"
];

let i = 0;

let question = document.getElementById('question');

function submit() {
  alert("You said: " + document.getElementById('answer').value);

  i++;

  if (i < questions.length) {
    question.innerHTML = questions[i];
  } else {
    question.innerText = "No more questions!";
  }
}