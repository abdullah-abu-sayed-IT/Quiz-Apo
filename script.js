// ৫০টা প্রশ্ন — যেকোনো সময় আরও যোগ করতে পারো
const allQuestions = [
  { question: "Sylhet is famous for which industry?", options: ["Tea", "Jute", "Garments", "Sugar"], correct: 0 },
  { question: "What does CSS stand for?", options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"], correct: 1 },
  { question: "Which city is known as the 'City of Tea Gardens' in Bangladesh?", options: ["Dhaka", "Chittagong", "Sylhet", "Rajshahi"], correct: 2 },
  { question: "How do you create a function in JavaScript?", options: ["function myFunction()", "def myFunction()", "func myFunction()", "function: myFunction()"], correct: 0 },
  { question: "What is the capital of Bangladesh?", options: ["Chittagong", "Sylhet", "Dhaka", "Khulna"], correct: 2 },
  { question: "Which is the longest river in Bangladesh?", options: ["Padma", "Jamuna", "Meghna", "Brahmaputra"], correct: 0 },
  { question: "Sylhet has how many districts?", options: ["8", "12", "4", "6"], correct: 1 },
  { question: "What is used to store multiple values in one variable in JS?", options: ["Array", "String", "Number", "Boolean"], correct: 0 },
  { question: "Which symbol is used for single-line comments in JavaScript?", options: ["//", "/* */", "#", "<!-- -->"], correct: 0 },
  { question: "What is the national flower of Bangladesh?", options: ["Shapla", "Rose", "Lily", "Tulip"], correct: 0 },
  { question: "Which lake is famous in Sylhet?", options: ["Ratargul Swamp Forest", "Madhabkunda", "Tanguar Haor", "Kaptai Lake"], correct: 2 },
  { question: "Which method adds an element at the end of an array?", options: ["push()", "pop()", "shift()", "unshift()"], correct: 0 },
  { question: "Bangladesh got independence in which year?", options: ["1971", "1947", "1952", "1969"], correct: 0 },
  { question: "What is the currency of Bangladesh?", options: ["Rupee", "Taka", "Dollar", "Euro"], correct: 1 },
  { question: "Which is not a JavaScript data type?", options: ["String", "Number", "Float", "Boolean"], correct: 2 },
  { question: "Who is the national poet of Bangladesh?", options: ["Kazi Nazrul Islam", "Rabindranath Tagore", "Jibanananda Das", "Sukanta Bhattacharya"], correct: 0 },
  { question: "What is the largest sea beach in the world?", options: ["Cox's Bazar", "Miami Beach", "Goa Beach", "Pataya Beach"], correct: 0 },
  { question: "In which year did Bangladesh join the United Nations?", options: ["1974", "1971", "1980", "1965"], correct: 0 },
  { question: "Which is the highest mountain in Bangladesh?", options: ["Keokradong", "Saka Haphong", "Mowdok Mual", "Tazingdong"], correct: 1 },
  { question: "What is the national animal of Bangladesh?", options: ["Royal Bengal Tiger", "Elephant", "Deer", "Lion"], correct: 0 },
  { question: "Which division is Sylhet part of?", options: ["Dhaka", "Chittagong", "Sylhet", "Rajshahi"], correct: 2 },
  { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Tabular Markup Language", "None"], correct: 0 },
  { question: "Which tag is used for the largest heading in HTML?", options: ["<h1>", "<h6>", "<head>", "<header>"], correct: 0 },
  { question: "How do you declare a JavaScript variable?", options: ["var x;", "let x;", "const x;", "All of the above"], correct: 3 },
  { question: "What is the national fruit of Bangladesh?", options: ["Jackfruit", "Mango", "Banana", "Guava"], correct: 0 },
  { question: "Which river is called the 'Sorrow of Bengal'?", options: ["Damodar", "Padma", "Ganges", "Brahmaputra"], correct: 0 },
  { question: "Who wrote the national anthem of Bangladesh?", options: ["Rabindranath Tagore", "Kazi Nazrul Islam", "Jasimusuddin", "Sufi Motlibur Rahman"], correct: 0 },
  { question: "In JavaScript, '==' compares:", options: ["Value only", "Value and type", "Type only", "Reference"], correct: 0 },
  { question: "What is the biggest district in Bangladesh by area?", options: ["Rangamati", "Bandarban", "Khagrachhari", "Sylhet"], correct: 0 },
  { question: "Which festival is celebrated as the Bengali New Year?", options: ["Pohela Boishakh", "Eid", "Durga Puja", "Christmas"], correct: 0 },
  { question: "What is the file extension of JavaScript files?", options: [".js", ".java", ".html", ".css"], correct: 0 },
  { question: "Which is the largest mangrove forest in the world?", options: ["Sundarbans", "Amazon", "Congo", "Borneo"], correct: 0 },
  { question: "Who is known as the Father of the Nation of Bangladesh?", options: ["Bangabandhu Sheikh Mujibur Rahman", "Hossain Mohammad Suhrawardy", "A.K. Fazlul Huq", "Tajuddin Ahmad"], correct: 0 },
  { question: "What does DOM stand for in web development?", options: ["Document Object Model", "Data Object Model", "Document Orientation Model", "Dynamic Object Model"], correct: 0 },
  { question: "Which is the main language spoken in Sylhet?", options: ["Sylheti", "Bengali", "Chittagonian", "Rangpuri"], correct: 0 },
  { question: "What is used to style web pages?", options: ["CSS", "HTML", "JavaScript", "Python"], correct: 0 },
  { question: "Which bird is the national emblem of Bangladesh?", options: ["Magpie Robin", "Dove", "Peacock", "Parrot"], correct: 0 },
  { question: "In JavaScript, how do you create an array?", options: ["[]", "{}", "()", "<>"], correct: 0 },
  { question: "Which is the wettest place in Bangladesh?", options: ["Srimangal", "Sylhet", "Chittagong", "Teknaf"], correct: 0 },
  { question: "What is the national sport of Bangladesh?", options: ["Kabaddi", "Cricket", "Football", "Hockey"], correct: 0 },
  { question: "Which method removes the last element from an array?", options: ["pop()", "push()", "shift()", "unshift()"], correct: 0 },
  { question: "Who composed 'Amar Sonar Bangla'?", options: ["Rabindranath Tagore", "Kazi Nazrul Islam", "Jasimusuddin", "Lalon Shah"], correct: 0 },
  { question: "What is the biggest export product of Bangladesh?", options: ["Ready-made Garments", "Jute", "Leather", "Tea"], correct: 0 },
  { question: "Which tag creates a hyperlink in HTML?", options: ["<a>", "<link>", "<href>", "<url>"], correct: 0 },
  { question: "What is the boiling point of water in Celsius?", options: ["100", "0", "212", "32"], correct: 0 },
  { question: "Which planet is known as the Red Planet?", options: ["Mars", "Venus", "Jupiter", "Saturn"], correct: 0 },
  { question: "In which year was Facebook launched?", options: ["2004", "2000", "1999", "2006"], correct: 0 },
  { question: "What is the chemical symbol for Gold?", options: ["Au", "Ag", "Fe", "Cu"], correct: 0 },
  { question: "Which is the largest ocean in the world?", options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"], correct: 0 }
];

// কতগুলো প্রশ্ন নেবে প্রতিবার (তুমি চাইলে এটা ১৫/২০ করতে পারো)
const QUESTIONS_PER_QUIZ = 10;

// গ্লোবাল ভ্যারিয়েবল
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let currentQuizQuestions = [];

// DOM elements
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('nextBtn');
const progressEl = document.getElementById('progress');
const questionNumberEl = document.getElementById('question-number');
const resultEl = document.getElementById('result');
const scoreEl = document.getElementById('score');
const messageEl = document.getElementById('message');
const restartBtn = document.getElementById('restartBtn');

// Fisher-Yates শাফল ফাংশন
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// নতুন কুইজ শুরু
function startNewQuiz() {
  // সব প্রশ্ন কপি করে শাফল করা + প্রথম ১০টা নেওয়া
  currentQuizQuestions = shuffle([...allQuestions]).slice(0, QUESTIONS_PER_QUIZ);
  
  currentQuestion = 0;
  score = 0;
  resultEl.classList.add('hidden');
  document.getElementById('question').style.display = 'block';
  optionsEl.style.display = 'flex';
  nextBtn.style.display = 'block';
  
  loadQuestion();
}

function loadQuestion() {
  const q = currentQuizQuestions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = '';

  q.options.forEach((opt, idx) => {
    const div = document.createElement('div');
    div.classList.add('option');
    div.textContent = opt;
    div.addEventListener('click', () => selectAnswer(idx));
    optionsEl.appendChild(div);
  });

  nextBtn.disabled = true;
  selectedAnswer = null;
  questionNumberEl.textContent = `Question ${currentQuestion + 1} of ${QUESTIONS_PER_QUIZ}`;
  progressEl.style.width = `${((currentQuestion + 1) / QUESTIONS_PER_QUIZ) * 100}%`;
}

function selectAnswer(index) {
  document.querySelectorAll('.option').forEach(el => el.classList.remove('selected'));
  document.querySelectorAll('.option')[index].classList.add('selected');
  selectedAnswer = index;
  nextBtn.disabled = false;
}

nextBtn.addEventListener('click', () => {
  if (selectedAnswer === currentQuizQuestions[currentQuestion].correct) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < QUESTIONS_PER_QUIZ) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  document.getElementById('question').style.display = 'none';
  optionsEl.style.display = 'none';
  nextBtn.style.display = 'none';
  resultEl.classList.remove('hidden');

  scoreEl.textContent = score;
  
  if (score === QUESTIONS_PER_QUIZ) {
    messageEl.textContent = "Perfect! You're a Quiz Legend! 🌟";
  } else if (score >= Math.floor(QUESTIONS_PER_QUIZ * 0.7)) {
    messageEl.textContent = "Excellent performance! Keep it up! 👍";
  } else if (score >= Math.floor(QUESTIONS_PER_QUIZ * 0.4)) {
    messageEl.textContent = "Good effort! Try again for better score! 💪";
  } else {
    messageEl.textContent = "Don't give up! Practice makes perfect! 🌱";
  }
}

restartBtn.addEventListener('click', () => {
  startNewQuiz(); // প্রতিবার নতুন শাফল্ড ১০টা প্রশ্ন
});

// প্রথমবার শুরু
startNewQuiz();
