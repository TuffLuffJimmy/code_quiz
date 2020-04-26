// create variables
const second = 1000
let correct = 0
let wrong = 0
let currentQuestionIndex = 0
let timer = 60 * second

//HTML elements
let questionH1 = document.getElementById("Question")
let optOne = document.getElementById("optOne")
let optTwo = document.getElementById("optTwo")
let optThree = document.getElementById("optThree")
let optFour = document.getElementById("optFour")

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
        question: "What is my favorite color?",
        option1: "Red",
        option2: "Green",
        option3: "Seafoam",
        option4: "Grey",
        answer: "4"
    },
    {
        question: "What is my favorite color?",
        option1: "Red",
        option2: "Green",
        option3: "Seafoam",
        option4: "Grey",
        answer: "4"
    },
    {
        question: "What is my favorite color?",
        option1: "Red",
        option2: "Green",
        option3: "Seafoam",
        option4: "Grey",
        answer: "4"
    }
]


// Function to detect if start button is pressed and to begin game
// Function to reset clock and score elements
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

renderQuestion()