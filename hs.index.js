var HsList = document.querySelector('#HsList');

function SortLocalStorage(){
    if(localStorage.length > 0){
        var localStorageArray = new Array();
        for (i=0;i<localStorage.length;i++){
            localStorageArray[i] = localStorage.key(i)+localStorage.getItem(localStorage.key(i));
        }
    }
    var sortedArray = localStorageArray.sort();
    return sortedArray;
}

//var highScores = SortLocalStorage();
var highScores = JSON.parse(localStorage.getItem('highscores')) || [];

for (var i = 0; i < highScores.length; i++){
    var scoreEl = document.createElement('li')
    var score = highScores[i]
    console.log(score)
    scoreEl.append(score.score, score.initials)
    HsList.append(scoreEl)
}