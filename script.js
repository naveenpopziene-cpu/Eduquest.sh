// --- Quiz ---
const quizData = [
    { question: "What is 2 + 2?", options: [2,3,4,5], answer: 4 },
    { question: "Capital of India?", options: ["Delhi","Mumbai","Kolkata","Chennai"], answer: "Delhi" },
    { question: "5 x 3 = ?", options: [8,15,10,20], answer: 15 }
];

let currentQuestion = 0;
let score = 0;

const quizContainer = document.getElementById("quiz-container");
const nextBtn = document.getElementById("next-btn");
const quizScore = document.getElementById("quiz-score");

function loadQuestion() {
    quizContainer.innerHTML = "";
    const q = quizData[currentQuestion];
    const questionEl = document.createElement("p");
    questionEl.textContent = q.question;
    quizContainer.appendChild(questionEl);

    q.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.onclick = () => checkAnswer(opt);
        quizContainer.appendChild(btn);
    });
}

function checkAnswer(selected) {
    if(selected == quizData[currentQuestion].answer) score++;
    currentQuestion++;
    if(currentQuestion < quizData.length) loadQuestion();
    else quizScore.textContent = "Quiz finished! Score: " + score + "/" + quizData.length;
}

nextBtn.onclick = loadQuestion;
loadQuestion();

// --- Simple Math Game ---
function randomNum() { return Math.floor(Math.random()*10) + 1; }
let a = randomNum(), b = randomNum();
const gameQuestion = document.getElementById("game-question");
const gameAnswer = document.getElementById("game-answer");
const gameFeedback = document.getElementById("game-feedback");
const submitAnswer = document.getElementById("submit-answer");

function setQuestion() {
    a = randomNum(); b = randomNum();
    gameQuestion.textContent = `${a} + ${b} = ?`;
    gameAnswer.value = "";
    gameFeedback.textContent = "";
}
submitAnswer.onclick = () => {
    if(Number(gameAnswer.value) === a + b) gameFeedback.textContent = "Correct! 🎉";
    else gameFeedback.textContent = `Wrong! Answer is ${a + b}`;
    setQuestion();
}

setQuestion();
