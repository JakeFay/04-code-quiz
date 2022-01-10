var timer = document.getElementById('timer')
var startContainer = document.getElementById('start')
var startBtn = document.getElementById('startBtn')
var questionsContainer = document.getElementById('questions')
var title = document.getElementById('title')
var options = document.getElementById('options')
var gameOverContainer = document.getElementById('gameOver')
var score = document.getElementById('score')
var time = 60
var countdown;
var index = 0
var initials = document.getElementById('initials')
var submitInitialsBtn = document.getElementById('submitInitials')


var questions = [
    {
        qTitle: 'which is a data type in javascript',
        choices: ['44', '25', '24', 'string'],
        answer: 'string'
    },
    {
        qTitle: 'what is a dom?',
        choices: ['25', '2', 'dominic toretto', 'document object model'],
        answer: 'document object model'
    },
    {
        qTitle: 'what are the benifits of arrow functions?',
        choices: ['none', 'they do things', '25', 'They provide us with a new and shorter syntax for declaring functions'],
        answer: 'They provide us with a new and shorter syntax for declaring functions'
    }
]

function start() {
    startContainer.setAttribute('class', 'hide')
    questionsContainer.removeAttribute('class')

    countdown = setInterval(function () {
        time--
        
        timer.textContent = time

        if (time <= 0) {
            gameEnd()
        } 

    }, 1000)

    timer.textContent = time

    showQuestion()
}

function showQuestion() {
    var currentQ = questions[index];
    title.textContent = currentQ.qTitle;

    options.innerHTML = '';
    currentQ.choices.forEach(function (choice) {
        var choiceEl = document.createElement('button');
        choiceEl.setAttribute('value', choice)

        choiceEl.textContent = choice

        choiceEl.onclick = checkAnswer

        options.append(choiceEl)
    })
}

function checkAnswer() {
    if (this.value !== questions[index].answer) {
        time -= 10
        if (time < 0) {
            time = 0
        }

        timer.textContent = time
    }

    index++

    if (index === questions.length) {
        gameEnd()
    }
    else {
        showQuestion()
    }
}

function gameEnd() {
    clearInterval(countdown)
    score.textContent = time;

    startContainer.setAttribute('class', 'hide')
    questionsContainer.setAttribute('class', 'hide')
    gameOverContainer.removeAttribute('class')

}
submitInitials.addEventListener('click', function() {

        var highscores = JSON.parse(localStorage.getItem('highscores')) || [];

        var userScore = {
            score: time,
            initials: initials.value
        }

  console.log(highscores)
        highscores.push(userScore)

      localStorage.setItem('highscores', JSON.stringify(highscores));
})

startBtn.addEventListener('click', start)