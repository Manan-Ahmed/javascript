let allQuestion = [
    {        questions : "Which is largest animal in the world",

       answer: [
        { text: "shark",correct: false },
        { text: "Blue Whale",correct: false },
        { text: "Elephant",correct: false },
        { text: "Giraf",correct: false }

       ]
    },
    {
        questions : "Which is the capital of Pakistan",
        answer : [
            { text : "Karachi", correct : false},
            { text : "Islamabad", correct : true},
            { text : "Mulatan", correct : false},
            { text : "Lahore", correct : false},
        ]
    },
    {
        questions : "Which is the national game of Pakistan",
        answer : [
            { text : "Hockey", correct : true},
            { text : "Circket", correct : false},
            { text : "Football", correct : false},
            { text : "Basketball", correct : false},
        ]
    },
    {
        questions : "Which is the national animal of pakistan",
        answer : [
            { text : "Elepahant", correct : false},
            { text : "Tiger", correct : false},
            { text : "Markhore", correct : true},
            { text : "Giraf", correct : false},
        ]
    },

]



let containerElement = document.querySelectorAll(".container")[0]
let quizEl = document.querySelectorAll(".quiz")[0]
let questionElement = document.querySelectorAll("#question")[0]
let answareElement = document.querySelectorAll("#answare-buttons")[0]
let nextBtnElement = document.querySelectorAll("#next-btn")[0]
let loaderEle = document.querySelectorAll(".loader")[0];



let currentQuestionIndex = 0

let score = 0

// const startQuiz = () => {
//     currentQuestionIndex = 0
//     score = 0;
//     nextBtnElement.innerHTML = "Next"
//     shoewQuestions()
// }

const startQuiz = () =>{
    currentQuestionIndex = 0
    score = 0
    nextBtnElement.innerHTML = 'Next'
    showQuestion()

}



const showQuestion = () =>{
    reset()
    let currentQuestion = allQuestion[currentQuestionIndex]
    let qNo = currentQuestionIndex + 1
console.log(qNo,currentQuestion.questions)
    questionElement.innerHTML = `${qNo} . ${currentQuestion.questions}`

    console.log(currentQuestion.answer)
    currentQuestion.answer.forEach((answers)=>{
        const button = document.createElement("BUTTON")
        button.innerHTML = answers.text
        button.classList.add("btn")
        answareElement.appendChild(button)
       console.log(answers.correct)
        if(answers.correct){
            console.log(answers.correct)

            button.dataset.correct = answers.correct
        }
        //  answareElement.innerHTML = e.answer
        button.addEventListener("click",selectAnser)
    
    })
}




const  reset = () => {
    nextBtnElement.style.display = "none"
    while(answareElement.firstChild){
      answareElement.removeChild(answareElement.firstChild)
    }
}

function selectAnser(e){
    let selectBtn = e.target
    console.log(selectBtn)
   let isCorrect = selectBtn.dataset.correct === "true"
   if(isCorrect){
    selectBtn.classList.add("correct")
    score++
   }
   else{
    selectBtn.classList.add("incorrect")

   }

   Array.from(answareElement.children).forEach((button)=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }

   })
   nextBtnElement.style.display = 'block'

}


function showScore(){
    reset()
     questionElement.innerHTML = `You scored ${score} out of ${allQuestion.length} `
     nextBtnElement.innerHTML = 'play again'
     nextBtnElement.style.display = 'block'
};


function hadleBtn(){
    currentQuestionIndex++
    if(currentQuestionIndex < allQuestion.length){
        showQuestion()
    }
    else{
        showScore()
    }

}


nextBtnElement.addEventListener("click",()=>{
if(currentQuestionIndex < allQuestion.length){
    hadleBtn()
}
else{
    startQuiz()
}
})







showQuestion()









