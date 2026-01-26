const sheet1 = document.querySelector('#player1-score');
const sheet2 = document.querySelector('#player2-score');
const maxPoint = document.querySelector('#max-point');
const button1 = document.querySelector('#player1-button');
const button2 = document.querySelector('#player2-button');
const resetButton = document.querySelector('#reset-button');

const WIN_PLAYER_1 = 'WINNER 1';
const WIN_PLAYER_2 = 'WINNER 2';
const PLAY_NOW = 'PLAY NOW'

let score1 = 0;
let score2 = 0;
let gamePoint = 1;

function mainProcess () {
    updateScoreAndSheet(this);
    const nowStatement = checkStatement(score1, score2, gamePoint);
    console.log(nowStatement)
}

function updateScoreAndSheet (button) {
    switch (button) {
        case button1:
            score1 += 1;
            sheet1.innerText = score1;
            break;
        case button2:
            score2 += 1;
            sheet2.innerText = score2;
            break;
        case resetButton:
            score1 = 0;
            score2 = 0;
            sheet1.innerText = score1;
            sheet2.innerText = score2;
            break;
    }
}

function checkStatement (score1, score2, gamePoint) {
    if (score1 === gamePoint) {
        return WIN_PLAYER_1;
    } else if (score2 === gamePoint) {
        return WIN_PLAYER_2;
    } else {
        return PLAY_NOW;
    }
}

button1.addEventListener('click', mainProcess)
button2.addEventListener('click', mainProcess);
resetButton.addEventListener('click', mainProcess);

maxPoint.addEventListener('change',  function () {
    gamePoint = parseInt(maxPoint.value);
});

