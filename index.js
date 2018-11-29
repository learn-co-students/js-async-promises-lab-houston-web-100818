const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

const questionContainer = document.querySelector('.question-container')
const buttonContainer = document.querySelector('#button-container')


const appendQuestion = function(questionToAppend) {
  questionContainer.innerText = questionToAppend.questionText
}

const askQuestionThen = function(time) {
  question = questions[0]
  appendQuestion(question)
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve()
    }, time)
  })
  // .then(function(answer) {
  //   appendQuestion(answer)
  // })
}

const removeQuestion = function() {
  return new Promise(function(resolve, reject) {
    questionContainer.innerText = ''
  })
}

const askQuestionThenRemoveQuestion = function(time) {
  return askQuestionThen(time)
  .then(function(answer) {
    setTimeout(function() {
      removeQuestion()
    }, time)
  })
}

const trueAndFalseButtons = function() {
  return Array.prototype.slice.call(buttonContainer.children)
}

const toggleTrueAndFalseButtons = function() {
  trueAndFalseButtons().forEach(function(button) {
    if (button.className.includes('hide')) {
      button.className = 'btn center-align green lighten-2'
    } else {
      button.className = 'btn center-align hide green lighten-2'
    }
  })
}

const displayQuestionOnClick = function() {

}

document.querySelector('#ask-btn').addEventListener('click', function() {
  askQuestionThenRemoveQuestion(5000)
})
