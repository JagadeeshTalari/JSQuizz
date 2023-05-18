const quizData = [
  {
    question:
      "Which built-in method calls a function for each element in the array?",
    a: "while()",
    b: "loop()",
    c: "forEach()",
    d: "None of the above",
    correct: "c",
  },
  {
    question:
      "Which built-in method reverses the order of the elements of an array?",
    a: "changeOrder(order)",
    b: "reverse()",
    c: "sort(order)",
    d: "None of the above",
    correct: "b",
  },
  {
    question:
      "Which of the following is a valid type of function javascript supports?",
    a: "named function",
    b: "anonymous function",
    c: "Both the above",
    d: "None of the above",
    correct: "c",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

// const quiz;
const answerEls = document.getElementsByClassName("answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

function loadQuiz(currentQuiz) {
  questionEl.textContent = quizData[currentQuiz].question;
  a_text.textContent = quizData[currentQuiz].a;
  b_text.textContent = quizData[currentQuiz].b;
  c_text.textContent = quizData[currentQuiz].c;
  d_text.textContent = quizData[currentQuiz].d;
  for (let i = 0; i < answerEls.length; i++) {
    answerEls[i].checked = false;
  }
}

loadQuiz(currentQuiz);
// function deselectAnswers() {
// }

// function getSelected() {

// }

// const answerEls = [a_text, b_text, c_text, d_text];

submitBtn.addEventListener("click", () => {
  //   console.log(quizData[0].question);
  for (let i = 0; i < answerEls.length; i++) {
    if (answerEls[i].checked) {
      if (answerEls[i].id == quizData[currentQuiz].correct) score += 1;
    }
  }
  console.log(score);
  currentQuiz = currentQuiz + 1;
  if (currentQuiz <= quizData.length - 1) {
    loadQuiz(currentQuiz);
  } else {
    questionEl.textContent = `Your Score is ${score}`;
    a_text.textContent = "";
    b_text.textContent = "";
    c_text.textContent = "";
    d_text.textContent = "";
    for (let i = 0; i < answerEls.length; i++) {
      answerEls[i].style.display = "none";
    }
  }
});

// Version change
