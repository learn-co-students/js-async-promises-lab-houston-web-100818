const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

const questionContainer = document.querySelector('.question-container')

let question;

function appendQuestion(question) {
  questionContainer.innerHTML = question.questionText;
}

function askQuestionThen(time) {
  question = questions[0]
  appendQuestion(question)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(question)
    }, time)
  })
}

function removeQuestion() {
  return new Promise((resolve, reject) => {
    questionContainer.innerHTML = '';
    resolve();
  })
}

function askQuestionThenRemoveQuestion(time) {
   return askQuestionThen(time).then(removeQuestion);
}

function trueAndFalseButtons() {
  let trueButton = document.querySelector('.green')
  let falseButton = document.querySelector('.red')
  return [trueButton, falseButton]
}

function toggleTrueAndFalseButtons() {
  for (let btn of trueAndFalseButtons()) {
    btn.classList.toggle('hide')
  }
}

function displayQuestionOnClick() {
  let btn = document.querySelector('a.waves-effect')
  btn.addEventListener('click', () => {
    toggleTrueAndFalseButtons()
    askQuestionThenRemoveQuestion(5000)
  })
}