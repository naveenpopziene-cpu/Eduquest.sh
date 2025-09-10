let currentGrade = null;
let currentSubject = null;
let currentQuestion = 0;
let score = 0;

// Quiz Database (10 sample questions per subject)
const quizzes = {
  history: [
    { q: "Who was the first President of India?", options: ["Jawaharlal Nehru", "Rajendra Prasad", "Indira Gandhi", "Mahatma Gandhi"], answer: 1 },
    { q: "In which year did India get independence?", options: ["1945", "1946", "1947", "1950"], answer: 2 },
    // ... add 8 more
  ],
  geography: [
    { q: "Which is the largest continent?", options: ["Africa", "Asia", "Europe", "North America"], answer: 1 },
    { q: "Which is the longest river in the world?", options: ["Amazon", "Nile", "Ganga", "Yangtze"], answer: 1 },
    // ... add 8 more
  ],
  politics: [
    { q: "India is a ___?", options: ["Monarchy", "Republic", "Dictatorship", "Empire"], answer: 1 },
    { q: "How many states are there in India (2023)?", options: ["28", "29", "27", "30"], answer: 0 },
    // ... add 8 more
  ],
  grammar: [
    { q: "Pick the correct sentence:", options: ["She go to school", "She goes to school", "She going to school", "She gone to school"], answer: 1 },
    { q: "Identify the noun: 'The dog barked loudly.'", options: ["dog", "barked", "loudly", "the"], answer: 0 },
    // ... add 8 more
  ],
  maths: [
    { q: "5 + 7 = ?", options: ["10", "11", "12", "13"], answer: 2 },
    { q: "Square root of 81?", options: ["7", "8", "9", "10"], answer: 2 },
    // ... add 8 more
  ]
};

// Navigation
function goToGrades() {
  hideAll();
  document.getElementById("grades").style.display = "block";
}

function goHome() {
  hideAll();
  document.getElementById("welcome-screen").style.display = "block";
}

function goSubjects() {
  hideAll();
  document.getElementById("subjects").style.display = "block";
}

function hideAll() {
  document.querySelectorAll("section").forEach(sec => sec.style.display = "none");
}

function selectGrade(grade) {
  currentGrade = grade;
  hideAll();
  document.getElementById("subjects").style.display = "block";
}

// Quiz Logic
function startQuiz(subject) {
  currentSubject = subject;
  currentQuestion = 0;
  score = 0;
  hideAll();
  document.getElementById("quiz").style.display = "block";
  document.getElementById("quiz-title").innerText = subject.toUpperCase() + " Quiz (Grade " + currentGrade + ")";
  loadQuestion();
}

function loadQuestion() {
  const qData = quizzes[currentSubject][currentQuestion];
  document.getElementById("question").innerText = qData.q;
  document.getElementById("progress").innerText = `Question ${currentQuestion + 1} of ${quizzes[currentSubject].length}`;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  qData.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(i);
    optionsDiv.appendChild(btn);
  });
  document.getElementById("next-btn").style.display = "none";
  document.getElementById("result").style.display = "none";
  document.getElementById("restart-btn").style.display = "none";
}

function checkAnswer(selected) {
  const qData = quizzes[currentSubject][currentQuestion];
  if (selected === qData.answer) score++;
  document.getElementById("next-btn").style.display = "block";
}

document.getElementById("next-btn").addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizzes[currentSubject].length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  document.getElementById("options").innerHTML = "";
  document.getElementById("question").innerText = "Quiz Completed 🎉";
  document.getElementById("progress").innerText = "";
  document.getElementById("result").style.display = "block";
  document.getElementById("result").innerText = `You scored ${score} / ${quizzes[currentSubject].length}`;
  document.getElementById("restart-btn").style.display = "block";
  document.getElementById("next-btn").style.display = "none";
}

function restartQuiz() {
  startQuiz(currentSubject);
}
