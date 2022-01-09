var timer = document.getElementById('timer')
var startContainer = document.getElementById('start')
var startBtn = document.getElementById('startBtn')
var questionsContainer = document.getElementById('questions')
var title = document.getElementById('title')
var options = document.getElementById('options')
var gameOverContainer = document.getElementById('gameOver')
var score = document.getElementById('score')
var time = 20
var countdown;
var index = 0
var initials = document.getElementById('initials')
var submitInitialsBtn = document.getElementById('submitInitials')


var questions = [
    {
        qTitle: '1+1',
        choices: ['1', '2', '3', '4'],
        answer: '2'
    },
    {
        qTitle: '1+3',
        choices: ['1', '2', '3', '4'],
        answer: '4'
    }
]

// on start btn click the start container is hidden and the question container is shown. A timer is start on the page. the first question is dynamically shown along with any anser options as buttons. When an answer button is clicked we need to check if the answer is correct or wrong. if wrong we need to deduct x from the time and then we need to move to the following question. 


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
//Ifwe run out of questions or the time runs out we need to show the game over container and show the users final score. We need to capture the score and user intitals and save then to local storage. 

function gameEnd() {
    clearInterval(countdown)
    // var finalScore = document.createTextNode(time)
    // score.appendChild(finalScore)
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