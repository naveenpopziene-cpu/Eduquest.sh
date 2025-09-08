// --- Quiz Data with 4 Categories (10 questions each) ---
const quizData = [
    // --- Geography Questions ---
    { category: "Geography", question: "Capital of France?", options: ["Paris","London","Rome","Berlin"], answer: "Paris" },
    { category: "Geography", question: "Which continent is Egypt in?", options: ["Africa","Asia","Europe","Australia"], answer: "Africa" },
    { category: "Geography", question: "Longest river in the world?", options: ["Nile","Amazon","Yangtze","Mississippi"], answer: "Nile" },
    { category: "Geography", question: "Highest mountain in the world?", options: ["Everest","K2","Kangchenjunga","Lhotse"], answer: "Everest" },
    { category: "Geography", question: "Which country has the largest population?", options: ["China","India","USA","Russia"], answer: "China" },
    { category: "Geography", question: "Capital of Japan?", options: ["Tokyo","Kyoto","Osaka","Hiroshima"], answer: "Tokyo" },
    { category: "Geography", question: "Which ocean is the largest?", options: ["Pacific","Atlantic","Indian","Arctic"], answer: "Pacific" },
    { category: "Geography", question: "The Great Barrier Reef is in?", options: ["Australia","USA","India","South Africa"], answer: "Australia" },
    { category: "Geography", question: "Sahara Desert is located in?", options: ["Africa","Asia","North America","Europe"], answer: "Africa" },
    { category: "Geography", question: "Which country is famous for the fjords?", options: ["Norway","Canada","Chile","Finland"], answer: "Norway" },

    // --- Politics Questions ---
    { category: "Politics", question: "Who is the current President of the USA?", options: ["Joe Biden","Donald Trump","Barack Obama","George Bush"], answer: "Joe Biden" },
    { category: "Politics", question: "UN stands for?", options: ["United Nations","Universal Network","Union Nations","United Neighbors"], answer: "United Nations" },
    { category: "Politics", question: "Capital of India?", options: ["New Delhi","Mumbai","Kolkata","Chennai"], answer: "New Delhi" },
    { category: "Politics", question: "Which party is ruling India currently?", options: ["BJP","Congress","AAP","TMC"], answer: "BJP" },
    { category: "Politics", question: "Who was the first Prime Minister of India?", options: ["Jawaharlal Nehru","Mahatma Gandhi","Indira Gandhi","Rajendra Prasad"], answer: "Jawaharlal Nehru" },
    { category: "Politics", question: "The US Congress consists of?", options: ["Senate & House of Representatives","Parliament","Senate only","House only"], answer: "Senate & House of Representatives" },
    { category: "Politics", question: "Which country has a monarchy?", options: ["United Kingdom","USA","India","Brazil"], answer: "United Kingdom" },
    { category: "Politics", question: "The Indian President is elected for?", options: ["5 years","4 years","6 years","3 years"], answer: "5 years" },
    { category: "Politics", question: "Which organization is for global peace?", options: ["UN","NATO","WHO","IMF"], answer: "UN" },
    { category: "Politics", question: "Voting age in India?", options: ["18","16","21","25"], answer: "18" },

    // --- History Questions ---
    { category: "History", question: "Who discovered America?", options: ["Christopher Columbus","Vasco da Gama","Ferdinand Magellan","Marco Polo"], answer: "Christopher Columbus" },
    { category: "History", question: "Who was the first emperor of Rome?", options: ["Augustus","Julius Caesar","Nero","Caligula"], answer: "Augustus" },
    { category: "History", question: "Independence Day of India?", options: ["15 August 1947","26 January 1950","2 October 1947","30 January 1948"], answer: "15 August 1947" },
    { category: "History", question: "Who wrote the 'Iliad'?", options: ["Homer","Plato","Aristotle","Socrates"], answer: "Homer" },
    { category: "History", question: "Industrial Revolution started in?", options: ["England","France","USA","Germany"], answer: "England" },
    { category: "History", question: "The Berlin Wall fell in?", options: ["1989","1991","1985","1995"], answer: "1989" }

    // --- Math Memory Game ---
const gameQuestion = document.getElementById("game-question");
const gameAnswer = document.getElementById("game-answer");
const gameFeedback = document.getElementById("game-feedback");
const submitBtn = document.getElementById("submit-answer");

let a, b;

function generateQuestion() {
    a = Math.floor(Math.random() * 20) + 1; // 1 to 20
    b = Math.floor(Math.random() * 20) + 1;
    gameQuestion.textContent = `${a} + ${b} = ?`;
    gameAnswer.value = "";
    gameFeedback.textContent = "";
}

// Check answer
submitBtn.addEventListener("click", () => {
    if (parseInt(gameAnswer.value) === a + b) {
        gameFeedback.textContent = "✅ Correct!";
        gameFeedback.style.color = "green";
    } else {
        gameFeedback.textContent = `❌ Wrong! Answer is ${a + b}`;
        gameFeedback.style.color = "red";
    }
    setTimeout(generateQuestion, 1500); // Next question after 1.5s
});

// Start the first question
generateQuestion();


    
 
