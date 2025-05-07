const quizData = [
  // --------- 30 Islamic Questions -----------
  {
    question: "Who is the last Prophet of Islam?",
    a: "Prophet Musa (Moses)",
    b: "Prophet Isa (Jesus)",
    c: "Prophet Muhammad (PBUH)",
    d: "Prophet Ibrahim (Abraham)",
    correct: "c"
  },
  {
    question: "What is the Holy Book of Islam called?",
    a: "Bible",
    b: "Torah",
    c: "Zabur",
    d: "Qur'an",
    correct: "d"
  },
  {
    question: "How many times do Muslims pray daily?",
    a: "5",
    b: "3",
    c: "7",
    d: "2",
    correct: "a"
  },
  {
    question: "Which month is Ramadan in Islamic calendar?",
    a: "9th month",
    b: "1st month",
    c: "12th month",
    d: "7th month",
    correct: "a"
  },
  {
    question: "Where do Muslims face while praying?",
    a: "Jerusalem",
    b: "Kaaba in Mecca",
    c: "Madinah",
    d: "Mount Sinai",
    correct: "b"
  },
  {
    question: "Which angel brought revelation to Prophet Muhammad (PBUH)?",
    a: "Angel Jibreel (Gabriel)",
    b: "Angel Mikael (Michael)",
    c: "Angel Israfeel",
    d: "Angel Azrael",
    correct: "a"
  },
  {
    question: "What is Zakat?",
    a: "Pilgrimage",
    b: "Charity",
    c: "Prayer",
    d: "Fasting",
    correct: "b"
  },
  {
    question: "Who built the Kaaba according to Islam?",
    a: "Prophet Muhammad (PBUH)",
    b: "Prophet Ibrahim and Ismail (AS)",
    c: "Prophet Musa (AS)",
    d: "Prophet Dawud (AS)",
    correct: "b"
  },
  {
    question: "What is the Islamic declaration of faith called?",
    a: "Salah",
    b: "Shahada",
    c: "Hajj",
    d: "Zakat",
    correct: "b"
  },
  {
    question: "What is the Night Journey of Prophet Muhammad called?",
    a: "Hijrah",
    b: "Isra and Miraj",
    c: "Qiyamah",
    d: "Hajj",
    correct: "b"
  },
  {
    question: "How many chapters (Surahs) are in the Qur'an?",
    a: "100",
    b: "114",
    c: "120",
    d: "150",
    correct: "b"
  },
  {
    question: "What is the first word revealed in the Qur'an?",
    a: "Pray",
    b: "Read (Iqra')",
    c: "Worship",
    d: "Believe",
    correct: "b"
  },
  {
    question: "Who was the first Caliph after Prophet Muhammad (PBUH)?",
    a: "Umar",
    b: "Uthman",
    c: "Ali",
    d: "Abu Bakr",
    correct: "d"
  },
  {
    question: "What does 'Islam' mean?",
    a: "Peace and Submission",
    b: "Victory",
    c: "War",
    d: "Knowledge",
    correct: "a"
  },
  {
    question: "Which city is known as the city of the Prophet?",
    a: "Mecca",
    b: "Jerusalem",
    c: "Madinah",
    d: "Baghdad",
    correct: "c"
  },
  {
    question: "What is the meaning of 'Qur'an'?",
    a: "Poetry",
    b: "Recitation",
    c: "Story",
    d: "News",
    correct: "b"
  },
  {
    question: "Who freed Bilal (RA) from slavery?",
    a: "Umar",
    b: "Abu Bakr",
    c: "Ali",
    d: "Uthman",
    correct: "b"
  },
  {
    question: "Who is the mother of Prophet Isa (Jesus)?",
    a: "Ayesha",
    b: "Maryam (Mary)",
    c: "Fatima",
    d: "Hawa (Eve)",
    correct: "b"
  },
  {
    question: "Which Surah is called the 'Heart of the Qur'an'?",
    a: "Surah Al-Baqarah",
    b: "Surah Yaseen",
    c: "Surah Al-Fatiha",
    d: "Surah Al-Kahf",
    correct: "b"
  },
  {
    question: "What is the Islamic year based on?",
    a: "Solar calendar",
    b: "Lunar calendar",
    c: "Roman calendar",
    d: "Egyptian calendar",
    correct: "b"
  },
  {
    question: "What is the reward of fasting in Ramadan?",
    a: "Good health",
    b: "Forgiveness of sins",
    c: "Richness",
    d: "Fame",
    correct: "b"
  },
  {
    question: "Which Prophet split the sea by Allah's permission?",
    a: "Prophet Musa (AS)",
    b: "Prophet Isa (AS)",
    c: "Prophet Ibrahim (AS)",
    d: "Prophet Yusuf (AS)",
    correct: "a"
  },
  {
    question: "Which Prophet was swallowed by a whale?",
    a: "Prophet Musa (AS)",
    b: "Prophet Yunus (AS)",
    c: "Prophet Isa (AS)",
    d: "Prophet Nuh (AS)",
    correct: "b"
  },
  {
    question: "Which animal spoke to Prophet Salih’s people?",
    a: "Camel",
    b: "Cow",
    c: "Goat",
    d: "Horse",
    correct: "a"
  },
  {
    question: "Which Surah must be recited in every Rak'ah of Salah?",
    a: "Surah Ikhlas",
    b: "Surah Falaq",
    c: "Surah Al-Fatiha",
    d: "Surah Nas",
    correct: "c"
  },
  {
    question: "Who is the Angel of Death in Islam?",
    a: "Jibreel",
    b: "Israfeel",
    c: "Mikael",
    d: "Azrael",
    correct: "d"
  },
  {
    question: "Which Prophet built an Ark?",
    a: "Prophet Musa (AS)",
    b: "Prophet Nuh (Noah) (AS)",
    c: "Prophet Ibrahim (AS)",
    d: "Prophet Isa (AS)",
    correct: "b"
  },
  {
    question: "What is Hajj?",
    a: "Charity",
    b: "Pilgrimage to Mecca",
    c: "Fasting",
    d: "Declaration of faith",
    correct: "b"
  },
  {
    question: "Who is known as the 'Friend of Allah'?",
    a: "Prophet Muhammad (PBUH)",
    b: "Prophet Musa (AS)",
    c: "Prophet Ibrahim (AS)",
    d: "Prophet Isa (AS)",
    correct: "c"
  },
  {
    question: "Which Prophet could speak as a baby?",
    a: "Prophet Musa (AS)",
    b: "Prophet Isa (Jesus) (AS)",
    c: "Prophet Ibrahim (AS)",
    d: "Prophet Yusuf (AS)",
    correct: "b"
  }
];

// Shuffle and pick 10 random questions
let selectedQuestions = [];
function pickRandomQuestions() {
  selectedQuestions = quizData.sort(() => Math.random() - 0.5).slice(0, 10);
}

const startContainer = document.getElementById('start-container');
const quizContainer = document.querySelector('.quiz-container');
const questionEl = document.getElementById('question');
const options = document.querySelectorAll('.option-btn');
const nextBtn = document.getElementById('next-btn');
const startBtn = document.getElementById('start-btn');

let currentQuiz = 0;
let score = 0;
let highScore = localStorage.getItem('highScore') || 0;

startBtn.addEventListener('click', startQuiz);

function startQuiz() {
  startContainer.classList.add('hide');
  quizContainer.classList.remove('hide');
  pickRandomQuestions();
  loadQuiz();
}

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = selectedQuestions[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  options[0].innerText = currentQuizData.a;
  options[1].innerText = currentQuizData.b;
  options[2].innerText = currentQuizData.c;
  options[3].innerText = currentQuizData.d;
}

function deselectAnswers() {
  options.forEach(option => {
    option.style.backgroundColor = "#f1f1f1";
    option.disabled = false;
  });
}

options.forEach(option => {
  option.addEventListener('click', () => {
    options.forEach(btn => btn.disabled = true);
    const answer = option.id;
    if(answer === selectedQuestions[currentQuiz].correct) {
      option.style.backgroundColor = "#00C897";
      score++;
    } else {
      option.style.backgroundColor = "#FF6B6B";
    }
  });
});

nextBtn.addEventListener('click', () => {
  currentQuiz++;
  if(currentQuiz < selectedQuestions.length) {
    loadQuiz();
  } else {
    showResults();
  }
});

function showResults() {
  if (score > highScore) {
    localStorage.setItem('highScore', score);
    highScore = score;
  }
  quizContainer.innerHTML = `
    <h2>Quiz Finished!</h2>
    <p>Your Score: ${score}/10</p>
    <p>High Score: ${highScore}/10</p>
    <button onclick="location.reload()" class="next-btn">Play Again</button>
  `;
}
