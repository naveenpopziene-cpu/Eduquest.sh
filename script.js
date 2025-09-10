let currentGrade = null;
let currentSubject = null;
let currentQ = 0;
let questions = [];
let score = 0;

const quizData = {
  history: [
    { q: "Who was the first President of India?", options: ["Rajendra Prasad", "Nehru", "Gandhi", "Patel"], answer: "Rajendra Prasad" },
    { q: "When did World War II end?", options: ["1945", "1939", "1918", "1950"], answer: "1945" },
    { q: "Who discovered America?", options: ["Columbus", "Vasco da Gama", "Magellan", "Cook"], answer: "Columbus" },
    { q: "Which empire built the Taj Mahal?", options: ["Mughal", "Gupta", "Maurya", "Chola"], answer: "Mughal" },
    { q: "Who was the last Mughal Emperor?", options: ["Aurangzeb", "Bahadur Shah II", "Akbar", "Shah Jahan"], answer: "Bahadur Shah II" },
    { q: "Who founded the Maurya Empire?", options: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Bimbisara"], answer: "Chandragupta Maurya" },
    { q: "Where did Gandhi start Satyagraha?", options: ["South Africa", "India", "UK", "USA"], answer: "South Africa" },
    { q: "When did India get Independence?", options: ["1947", "1950", "1930", "1945"], answer: "1947" },
    { q: "Who was the Iron Man of India?", options: ["Sardar Patel", "Bhagat Singh", "Tilak", "Subhash Bose"], answer: "Sardar Patel" },
    { q: "Who wrote Arthashastra?", options: ["Chanakya", "Kalidasa", "Valmiki", "Vyasa"], answer: "Chanakya" }
  ],
  geography: [
    { q: "Which is the largest continent?", options: ["Asia", "Africa", "Europe", "Australia"], answer: "Asia" },
    { q: "Which is the longest river?", options: ["Nile", "Amazon", "Ganga", "Yangtze"], answer: "Nile" },
    { q: "Which is the tallest mountain?", options: ["K2", "Everest", "Kangchenjunga", "Makalu"], answer: "Everest" },
    { q: "Which ocean is the largest?", options: ["Atlantic", "Pacific", "Indian", "Arctic"], answer: "Pacific" },
    { q: "Which country has the Great Wall?", options: ["China", "India", "Japan", "Korea"], answer: "China" },
    { q: "Which desert is the largest?", options: ["Sahara", "Gobi", "Thar", "Atacama"], answer: "Sahara" },
    { q: "Which is the smallest continent?", options: ["Australia", "Europe", "South America", "Africa"], answer: "Australia" },
    { q: "Which is the coldest place on Earth?", options: ["Antarctica", "Siberia", "Alaska", "Greenland"], answer: "Antarctica" },
    { q: "Which river flows in Egypt?", options: ["Nile", "Amazon", "Danube", "Mississippi"], answer: "Nile" },
    { q: "Which country is called the Land of Rising Sun?", options: ["Japan", "China", "Korea", "Thailand"], answer: "Japan" }
  ],
  politics: [
    { q: "How many Lok Sabha seats are there?", options: ["545", "552", "600", "500"], answer: "552" },
    { q: "Who is called the Missile Man of India?", options: ["Dr. Kalam", "Vikram Sarabhai", "Raja Ramanna", "Radhakrishnan"], answer: "Dr. Kalam" },
    { q: "Who is the head of the state?", options: ["Governor", "President", "PM", "Chief Minister"], answer: "President" },
    { q: "How many Rajya Sabha seats?", options: ["245", "252", "200", "300"], answer: "245" },
    { q: "Who appoints the Prime Minister?", options: ["President", "Parliament", "People", "Governor"], answer: "President" },
    { q: "Which article gives Right to Equality?", options: ["14", "19", "21", "32"], answer: "14" },
    { q: "Who was first PM of India?", options: ["Nehru", "Rajendra Prasad", "Indira Gandhi", "Shastri"], answer: "Nehru" },
    { q: "Who is the father of Indian Constitution?", options: ["Ambedkar", "Gandhi", "Tilak", "Patel"], answer: "Ambedkar" },
    { q: "Which house is the Upper House?", options: ["Rajya Sabha", "Lok Sabha", "Vidhan Sabha", "Municipality"], answer: "Rajya Sabha" },
    { q: "Who signs the bills into law?", options: ["President", "PM", "Speaker", "Governor"], answer: "President" }
  ],
  grammar: [
    { q: "Pick the noun: She runs fast.", options: ["She", "runs", "fast", "none"], answer: "She" },
    { q: "Plural of Child?", options: ["Childs", "Children", "Childes", "Childer"], answer: "Children" },
    { q: "Which is an adjective? The sky is blue.", options: ["sky", "is", "blue", "the"], answer: "blue" },
    { q: "Past tense of Go?", options: ["Goes", "Gone", "Went", "Going"], answer: "Went" },
    { q: "Opposite of Hot?", options: ["Warm", "Cool", "Cold", "Heat"], answer: "Cold" },
    { q: "Which is verb? Birds fly high.", options: ["Birds", "fly", "high", "none"], answer: "fly" },
    { q: "Correct article: ___ apple", options: ["A", "An", "The", "None"], answer: "An" },
    { q: "Synonym of Big?", options: ["Small", "Tiny", "Large", "Thin"], answer: "Large" },
    { q: "Which is pronoun? He is tall.", options: ["He", "is", "tall", "none"], answer: "He" },
    { q: "Antonym of Early?", options: ["Fast", "Late", "Soon", "Quick"], answer: "Late" }
  ],
  maths: [
    { q: "5 + 7 = ?", options: ["10", "11", "12", "13"], answer: "12" },
    { q: "12 - 8 = ?", options: ["2", "3", "4", "5"], answer: "4" },
    { q: "9 × 3 = ?", options: ["27", "18", "21", "24"], answer: "27" },
    { q: "20 ÷ 4 = ?", options: ["4", "5", "6", "8"], answer: "5" },
    { q: "Square of 6?", options: ["36", "30", "12", "26"], answer: "36" },
    { q: "Cube of 3?", options: ["6", "9", "27", "18"], answer: "27" },
    { q: "15% of 200?", options: ["25", "30", "35", "40"], answer: "30" },
    { q: "√81 = ?", options: ["7", "8", "9", "10"], answer: "9" },
    { q: "LCM of 4 & 6?", options: ["8", "12", "16", "24"], answer: "12" },
    { q: "10² = ?", options: ["20", "50", "100", "200"], answer: "100" }
  ]
};

function selectGrade(grade) {
  currentGrade = grade;
  document.getElementById("home").style.display = "none";
  document.getElementById("subjects").style.display = "block";
}

function startQuiz(subject) {
  currentSubject = subject;
  questions = quizData[subject];
  currentQ = 0;
  score = 0;

  document.getElementById("subjects").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  document.getElementById("quiz-title").textContent = subject.toUpperCase() + " QUIZ";
  document.getElementById("result").style.display = "none";
  document.getElementById("restart-btn").style.display = "none";
  document.getElementById("next-btn").style.display = "inline-block";
  loadQuestion();
}

function loadQuestion() {
  let q = questions[currentQ];
  document.getElementById("question").textContent = q.q;
  let optionsHtml = "";
  q.options.forEach(opt => {
    optionsHtml += `<button class="option" onclick="checkAnswer('${opt}')">${opt}</button>`;
  });
  document.getElementById("options").innerHTML = optionsHtml;
}

function checkAnswer(selected) {
  if (selected === questions[currentQ].answer) {
    score++;
  }
  document.querySelectorAll(".option").forEach(btn => btn.disabled = true);
}

document.getElementById("next-btn").addEventListener("click", () => {
  currentQ++;
  if (currentQ < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  document.getElementById("question").textContent = "🎉 Quiz Completed!";
  document.getElementById("options").innerHTML = "";
  document.getElementById("next-btn").style.display = "none";

  let total = questions.length;
  let resultText = `✅ You scored ${score} out of ${total}!`;
  if (score === total) {
    resultText += " 🌟 Perfect Score!";
  } else if (score >= total * 0.7) {
    resultText += " 👍 Great Job!";
  } else {
    resultText += " 💪 Keep Practicing!";
  }

  document.getElementById("result").textContent = resultText;
  document.getElementById("result").style.display = "block";
  document.getElementById("restart-btn").style.display = "inline-block";
}

function restartQuiz() {
  startQuiz(currentSubject);
}

function goHome() {
  document.getElementById("subjects").style.display = "none";
  document.getElementById("home").style.display = "block";
}

function goSubjects() {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("subjects").style.display = "block";
  document.getElementById("next-btn").style.display = "inline-block";
}
