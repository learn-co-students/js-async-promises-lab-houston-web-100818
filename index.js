const questionContainer = document.querySelector(".question-container")
const askButton = document.querySelector("#ask-button")

const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;


function appendQuestion(question) {
  questionContainer.innerHTML = ``
  questionContainer.append( question.questionText );
}

function askQuestionThen(time) {
  question = questions[0]
  appendQuestion(question);
  return new Promise(function( resolve, reject ){
    setTimeout(resolve, time)
  })
}


function removeQuestion() {
  questionContainer.innerHTML = ``
}

function askQuestionThenRemoveQuestion(time){
  let promise = askQuestionThen(time)
  return promise.then(removeQuestion)
}

function trueAndFalseButtons() {
  let collection = [] 
  collection.push(document.querySelector("#greenButton"))
  collection.push(document.querySelector("#redButton"))
  return collection
}

function toggleTrueAndFalseButtons() {
  const collection = trueAndFalseButtons()
  
  collection.forEach(b => {
    if (b.classList.contains("hide")){ 
      b.classList.remove("hide")
    } 
    else {
      b.classList.add("hide")
  }
     
  });
}

function displayQuestionOnClick() {
  askButton.addEventListener("click", function(){
    toggleTrueAndFalseButtons();
    
    setTimeout(function(){ 
      removeQuestion()
      toggleTrueAndFalseButtons()
     }, 5000);
  })
}

displayQuestionsOnClick();