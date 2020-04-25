// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const scoreDiv = document.getElementById("scoreContainer");
const userInit = document.getElementById("userInit");
const btnSubmit = document.getElementById("btnSubmit");
const timeH4 = document.getElementById("timeH4");

// create our questions
let questions = [
  {
    question: "What is the capital of Angola?",
    choiceA: "Tirana",
    choiceB: "Luanda",
    choiceC: "Baku",
    correct: "B",
  },
  {
    question: "What is the capital of Cameroon?",
    choiceA: "Yaunde",
    choiceB: "Bangui",
    choiceC: "N'djamena",
    correct: "A",
  },
  {
    question: "What is the second tallest mountain in the world?",
    choiceA: "Lhotse",
    choiceB: "Mount Everest",
    choiceC: "K2",
    correct: "C",
  },
  {
    question: "The Danube flows into what body of water?",
    choiceA: "Caspian Sea",
    choiceB: "The Mediterranean Sea",
    choiceC: "The Black Sea",
    correct: "C",
  },
  {
    question: "In which country is the worlds highest waterfall?",
    choiceA: "China",
    choiceB: "Iceland",
    choiceC: "Venezuela",
    correct: "C",
  },
  {
    question: "What is the highest active volcano in Europe?",
    choiceA: "Mount Etna",
    choiceB: "Mount Vesuvius",
    choiceC: "Eyjafjallajokull",
    correct: "A",
  },
  {
    question: "What’s the world’s biggest port?",
    choiceA: "Shanghai",
    choiceB: "Singapore",
    choiceC: "Busan",
    correct: "A",
  },
  {
    question:
      "Which South American country has land borders with ten other countries?",
    choiceA: "Colombia",
    choiceB: "Brazil",
    choiceC: "Argentina",
    correct: "B",
  },
  {
    question: "What country has the longest coastline in the world?",
    choiceA: "Russia",
    choiceB: "Australia",
    choiceC: "Canada",
    correct: "C",
  },
  {
    question:
      "What country is the newest in the world to be recognised by the UN?",
    choiceA: "South Sudan",
    choiceB: "East Timor",
    choiceC: "Kosovo",
    correct: "A",
  },
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let score = 0;

// render a question
function renderQuestion() {
  let q = questions[runningQuestion];

  question.innerHTML = "<p>" + q.question + "</p>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click", startQuiz);

btnSubmit.addEventListener("click", highScores);
console.log(highestScores);

// start quiz
function startQuiz() {
  console.log("click");
  start.style.display = "none";
  renderQuestion();
  quiz.style.display = "block";
  startTimer();
}

// checkAnwer

function checkAnswer(answer) {
  if (answer == questions[runningQuestion].correct) {
    // answer is correct
    score++;
  } else {
    timeleft -= 5;
  }

  count = 0;

  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    renderQuestion();
  } else {
    // end the quiz and show the score

    scoreRender();
  }
}

// score render
function scoreRender() {
  scoreDiv.style.visibility = "visible";
  quiz.style.display = "none";

  // calculate the amount of question percent answered by the user
  const scorePerCent = Math.round((100 * score) / questions.length);

  scoreDiv.innerHTML += "<p>" + scorePerCent + "%</p>";
}
//create the timer
var timeleft = 60;
function startTimer() {
  var downloadTimer = setInterval(function () {
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
      document.getElementById("time").innerHTML = "Finished";
      alert("Time is up!");
      scoreDiv.style.visibility = "visible";
      quiz.style.display = "none";
      time.style.display = "none";
      timeH4.style.display = "none";
      scoreRender();
    } else {
      document.getElementById("time").innerHTML =
        timeleft + " seconds remaining";
    }
    timeleft -= 1;
  }, 1000);
}

var highestScores = JSON.parse(localStorage.getItem("highscores")) || [];

function highScores(event) {
  event.preventDefault();
  var userInitals = userInit.value;
  console.log(userInitals);

  var scoreOb = {
    initials: userInitials,
    score: score,
  };

  console.log(highestScores);
  //null check highest scores make empty array
  highestScores.push(scoreOb);

  highestScores.sort((a, b) => b.score - a.score);

  highestScores.splice(5);

  localStorage.setItem("highscores", JSON.stringify(highestScores));
}
