 //selecting all required elements
var startButton = document.querySelector('.start')
 var nextButton = document.querySelector(".button .next-button");
var restart = document.querySelector(".botton .restart");
var quit = document.querySelector (".botton .quit");
var resultBox = document.querySelector (".result-box");
var quizzWindow = document.querySelector("#quizz-window");
var timerSec = document.querySelector(".timer-sec");
var questionText = document.querySelector (".que-text");
var questionDescription = document.querySelector(".question-description");


startButton.addEventListener("click", startQuiz)

function startQuiz() {
  console.log('start')
  startButton.classList.add('hide')
  quizzWindow.classList.remove('hide')
  setNextQuestion();
}

var answer0El = document.getElementById("answer-0")
var answer1El = document.getElementById("answer-1")
var answer2El = document.getElementById("answer-2")
var answer3El = document.getElementById("answer-3")

var questions = [
{
  qd:"What is styling in web development?",
  answer0:"HTML",
  answer1:"CSS",
  answer2:"JavaScript",
  answer3:"API",
  correct:"1"
},
{
  qd:"What is HTML?",
  answer0:"Markup language",
  answer1:"styling",
  answer2:"JavaScript",
  answer3:"Database",
  correct:"1"
},
{
  qd:"What does API stand for?",
  answer0:"Markup language",
  answer1:"application programming interface",
  answer2:"JavaScript",
  answer3:"Database",
  correct:"2"
},
{
  qd:"Which of the following will write the message “Hello DataFlair!” in an alert box?",
  answer0:"alertBox(“Hello DataFlair!”);",
  answer1:"alert(Hello DataFlair!);",
  answer2:"msgAlert(“Hello DataFlair!”);",
  answer3:"alert(“Hello DataFlair!”);",
  correct:"4"
}

]
//to-do this will increase any time an answer is chosen and check if we are already done with the last question

var i = 0 
var question = questions[i] // to-do everytime i increases we run this line again


questionDescription.textContent = question.qd
answer0El.textContent=question.answer0
answer1El.textContent=question.answer1
answer2El.textContent=question.answer2
answer3El.textContent=question.answer3


answer0El.addEventListener("click",function(){
    if (question.correct=="0")
    alert("correct")
    else alert ("wrong")
})
answer1El.addEventListener("click",function(){
  if (question.correct=="1")
  alert("correct")
  else alert ("wrong")
})
answer2El.addEventListener("click",function(){
  if (question.correct=="2")
  alert("correct")
  else alert ("wrong")
})
answer3El.addEventListener("click",function(){
  if (question.correct=="3")
  alert("correct")
  else alert ("wrong")
})

var secondsLeft = 15;


function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timerSec.textContent = secondsLeft;
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
      
      }
  
    }, 1000);
}

setTime()

