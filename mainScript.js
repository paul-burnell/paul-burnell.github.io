const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const scoreButton = document.getElementById('score-btn')
const endButton = document.getElementById('end-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex;
let correctAnswers = 0;
let totalQuestions = 0;

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
  // Display the counter
  totalQuestions++;
  const counterElement = document.createElement('div');
  scoreButton.classList.remove('hide')
  scoreButton.innerHTML = `Question ${totalQuestions} of ${shuffledQuestions.length} - ${correctAnswers} correct`;
  //counterElement.innerHTML = `Question ${totalQuestions} of ${shuffledQuestions.length}`;
  //questioncontainerElement.innerHTML = '';
  questionContainerElement.appendChild(counterElement);
}

function showQuestion(question) {
  questionElement.innerText = question.question
  shuffle(question.answers) // Shuffle the answers
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct === 'true';
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct === 'true')
  })
  if (correct) {
    correctAnswers++;
    scoreButton.innerHTML = `Question ${totalQuestions} of ${shuffledQuestions.length} - ${correctAnswers} correct`;
  }
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    nextButton.classList.add('hide');
    endButton.classList.remove('hide');
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

// Shuffle function to randomly order the answers
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
