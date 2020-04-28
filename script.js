// timer variables
let timer = 60

// score
let score

// array of Question and answer objects
const questions = [
  {
    question: 'What is my favorite color?',
    option1: 'Red',
    option2: 'Green',
    option3: 'Seafoam',
    option4: 'Grey',
    answer: '4'
  },
  {
    question: 'What is my favorite animal?',
    option1: 'penguin',
    option2: 'dog',
    option3: 'bat',
    option4: 'snake',
    answer: '2'
  },
  {
    question: 'What is the capital of Korea?',
    option1: 'Pyongyang',
    option2: 'Seoul',
    option3: 'Washington',
    option4: 'Phunket',
    answer: '1'
  },
  {
    question: 'Commonly used data types does not include',
    option1: 'strings',
    option2: 'booleans',
    option3: 'alerts',
    option4: 'numbers',
    answer: '3'
  },
  {
    question: 'The condition within an if/else statement is enclosed within ____',
    option1: 'quotes',
    option2: 'curly brackets',
    option3: 'parentheses',
    option4: 'square brackets',
    answer: '1'
  }
]

// used to cycle through array of questions
let currentQuestionIndex = 0
const lastQuestionIndex = questions.length - 1

// HTML elements
const questionH1 = document.getElementById('Question')
const optOne = document.getElementById('optOne')
const optTwo = document.getElementById('optTwo')
const optThree = document.getElementById('optThree')
const optFour = document.getElementById('optFour')
// listeners
const start = document.getElementById('startGame')
const timeLeft = document.getElementById('timer')

// Function to detect if start button is pressed and to begin game
start.onclick = () => {
  gameReset()
}
// Function to detect when reset button is pressed and reset clock and score elements
const gameReset = () => {
  timer = 60
  correct = 0
  wrong = 0
  currentQuestionIndex = 0
  renderQuestion(currentQuestionIndex)
}
// Function to Render Question
const renderQuestion = (num) => {
  if (currentQuestionIndex >= lastQuestionIndex) {
    gameOverScreen()
  }
  const current = questions[currentQuestionIndex]
  console.log(current.question)
  questionH1.innerText = current.question
  optOne.innerText = current.option1
  optTwo.innerText = current.option2
  optThree.innerText = current.option3
  optFour.innerText = current.option4
}
// checks to see if the user selected the right answer
const checkAnswer = (selection) => {
  if (selection === parseInt(questions[currentQuestionIndex].answer)) {
    answerRight()
    console.log('correct')
  } else {
    answerWrong()
    console.log('incorrect')
  }
}
// run this when the user selects the correct answer
const answerRight = () => {
  timer += 5
  currentQuestionIndex++
  if (currentQuestionIndex >= lastQuestionIndex) {
    gameOverScreen()
  } else {
    renderQuestion(currentQuestionIndex)
  }
}

// run this when the user selects the wrong answer
const answerWrong = () => {
  timer -= 10
  currentQuestionIndex++
  if (currentQuestionIndex >= lastQuestionIndex) {
    gameOverScreen()
  } else {
    renderQuestion(currentQuestionIndex)
  }
}

// renders game over screen
const gameOverScreen = () => {
  score = timer
  document.getElementById('contain').classList.add('d-none')
  document.getElementById('gameOver').classList.remove('d-none')
  document.getElementById('finalScore').textContent = score
}

// saves score and initials to local storage
const sumbitScore = () => {

}

// renders timer
const renderTimer = () => {
  if (timer >= 0) {
    timeLeft.innerText = timer
  } else {
    gameOverScreen()
  }
}

/// //////////////////// program start here
setInterval(() => {
  timer--
  renderTimer()
}, 1000)
renderQuestion(currentQuestionIndex)
