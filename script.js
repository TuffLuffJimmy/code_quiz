// timer variables
const second = 1000
let timer = 60 * second

// score variables
let correct = 0
let wrong = 0

// array of Question and answer objects
const questions = [
    {
        question: "What is my favorite color?",
        option1: "Red",
        option2: "Green",
        option3: "Seafoam",
        option4: "Grey",
        answer: "4"
    },
    {
        question: "What is my favorite animal?",
        option1: "penguin",
        option2: "dog",
        option3: "bat",
        option4: "snake",
        answer: "2"
    },
    {
        question: "What is the capital of Korea?",
        option1: "Pyongyang",
        option2: "Seoul",
        option3: "Washington",
        option4: "Phunket",
        answer: "1"
    },
    {
        question: "Commonly used data types does not include",
        option1: "strings",
        option2: "booleans",
        option3: "alerts",
        option4: "numbers",
        answer: "3"
    },
    {
        question: "The condition within an if/else statement is enclosed within ____",
        option1: "quotes",
        option2: "curly brackets",
        option3: "parentheses",
        option4: "square brackets",
        answer: "1"
    }
]

// used to cycle through array of questions
let currentQuestionIndex = 0
let lastQuestionIndex = questions.length - 1

//HTML elements
let questionH1 = document.getElementById("Question")
let optOne = document.getElementById("optOne")
let optTwo = document.getElementById("optTwo")
let optThree = document.getElementById("optThree")
let optFour = document.getElementById("optFour")
// listeners
let start = document.getElementById("startGame")



// Function to detect if start button is pressed and to begin game
start.onclick = () => {

}
// Function to detect when reset button is pressed and reset clock and score elements
const gameReset = () => {

}
// Function to Render Question
const renderQuestion = () => {
    let current = questions[currentQuestionIndex]
    console.log(current.question)
    questionH1.innerText = current.question
    optOne.innerText = current.option1
    optTwo.innerText = current.option2
    optThree.innerText = current.option3
    optFour.innerText = current.option4

}
//run this when the user selects the correct answer
const answerRight = () => {
    return
}

//run this when the user selects the wrong answer
const answerWrong = () => {
    return
}

//renders game over screen
const gameOverScreen = () => {

}

//saves score and initials to local storage
const sumbitScore = () => {

}

//renders timer
const renderTimer = () => {
    
}
/////////////////////// program start here

renderQuestion()