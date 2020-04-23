//this is how to select the ID elements in the html file
const start = document.getElementById("#start");
const quiz = document.getElementById("#quiz");
const question = document.getElementById("#question");
const qImg = document.getElementById("#qImg");
const choiceA = document.getElementById("#A");
const choiceB = document.getElementById("#B");
const choiceC = document.getElementById("#C");
const counter = document.getElementById("#counter");
const timeGauge = document.getElementById("#timeGauge");
const progress = document.getElementById("#progress");
const score = document.getElementById("#score");

//create the quiz questions
let questions = [
  {
    question: "What is the capital of Angola?",
    imgSrc: "",
    choiceA: "Tirana",
    choiceB: "Luanda",
    choiceC: "Baku",
    correct: "B",
  },
  {
    question: "What is the capital of Cameroon?",
    imgSrc: "",
    choiceA: "Yaunde",
    choiceB: "Bangui",
    choiceC: "N'djamena",
    correct: "A",
  },
  {
    question: "What is the second tallest mountain in the world?",
    imgSrc: "",
    choiceA: "Lhotse",
    choiceB: "Mount Everest",
    choiceC: "K2",
    correct: "C",
  },
  {
    question: "The Danube flows into what body of water?",
    imgSrc: "",
    choiceA: "Caspian Sea",
    choiceB: "The Mediterranean Sea",
    choiceC: "The Black Sea",
    correct: "C",
  },
  {
    question: "In which country is the worlds highest waterfall?",
    imgSrc: "",
    choiceA: "China",
    choiceB: "Iceland",
    choiceC: "Venezuela",
    correct: "C",
  },
  {
    question: "What is the highest active volcano in Europe?",
    imgSrc: "",
    choiceA: "Mount Etna",
    choiceB: "Mount Vesuvius",
    choiceC: "Eyjafjallajokull",
    correct: "A",
  },
  {
    question: "What’s the world’s biggest port?",
    imgSrc: "",
    choiceA: "Shanghai",
    choiceB: "Singapore",
    choiceC: "Busan",
    correct: "A",
  },
  {
    question:
      "Which South American country has land borders with ten other countries?",
    imgSrc: "",
    choiceA: "Colombia",
    choiceB: "Brazil",
    choiceC: "Argentina",
    correct: "B",
  },
  {
    question: "What country has the longest coastline in the world?",
    imgSrc: "",
    choiceA: "Russia",
    choiceB: "Australia",
    choiceC: "Canada",
    correct: "C",
  },
  {
    question:
      "What country is the newest in the world to be recognised by the UN?",
    imgSrc: "",
    choiceA: "South Sudan",
    choiceB: "East Timor",
    choiceC: "Kosovo",
    correct: "A",
  },
];

//create some more variables
const lastQuestion = questions.length - 1;
let runningQuestions = 0;

//render a question
function renderQuestion() {
  let q = questions[runningQuestions];
}
