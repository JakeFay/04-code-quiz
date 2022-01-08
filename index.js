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
       qTitle: '1+1',
       choices: ['1', '2', '3', '4'] ,
       answer: '2'
    },
    {
        qTitle: '1+3',
        choices: ['1', '2', '3', '4'] ,
        answer: '4'
    }
]

// on start btn click the start container is hidden and the question container is shown. A timer is start on the page. the first question is dynamically shown along with any anser options as buttons. When an answer button is clicked we need to check if the answer is correct or wrong. if wrong we need to deduct x from the time and then we need to move to the following question. Ifwe run out of questions or the time runs out we need to show the game over container and show the users final score. We need to capture the score and user intitals and save then to local storage. 


function start {

}





startBtn.addEventListener('click', start)