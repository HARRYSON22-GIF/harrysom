const quizData= [
    {
        question: "which language runs in web browser?",
        a: "java",
        b: "c",
        c: "python",
        d: "javascript",
        correct: "d",
    },
    {
        question: "what does css stand for?",
        a: "central style sheet",
        b: "cascading style sheet",
        c: "cascading simple sheet",
        d: "cara susv sallboats",
        correct: "b",
    },
    {
        question: "what does css stand for?",
        a: "central style sheet",
        b: "cascading style sheet",
        c: "cascading simple sheet",
        d: "cara susv sallboats",
        correct: "b",
    },
    {
        question: "what does html stand for?",
        a: "Hypertext markup language",
        b: "Hypertext markdown language",
        c: "Hyperloop machine language",
        d: "helicopter terminals motorboats lamborginis",
        correct: "a",
    },
    {
        question: "what year was java script launched?",
        a: "1996",
        b: "1955",
        c: "1994",
        d: "none of the above",
        correct: "d",
    },
];
const quiz= document.getElementById('quiz')
const answerEls= document.querySelectorAll('.answer')
const questionEL= document.getElementById('question')
const a_text= document.getElementById('a_text')
const b_text= document.getElementById('b_text')
const c_text= document.getElementById('c_text')
const d_text= document.getElementById('d_text')
const submit$tn= document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()
function loadQuiz(){
    deselectAnswers()
    const currentQuizData = quizData(currentQuiz)
    questionEL.innerText=currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers(){
    answerEls.forEach(answerEls => answerEls.checked =false)
}
function getSelected(){
    let answerEls
    answerEls.forEach(answerEls =>{
        if(answerEls.checked){
            answer=answerEls.id
        }
    })
    return answer
}
submit$tn.addEventListener('click',() =>{
    const answer = getSelected()
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++
        if(currentQuiz < quizData.length){
            loadQuiz()
        }else{
            quiz.innerHTML =' <h2>You answered $(score)/$(quizData.length) question correctly</h2><button onclick="location.reload()">reload</button>'
        }
    }
})