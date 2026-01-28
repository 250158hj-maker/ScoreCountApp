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

/**
 * ボタン操作イベントが発火すると呼び出される。
 * 点数更新・ゲーム進行状況の取得・ゲーム終了時の画面更新を担う
 */
function mainProcess () {
    updateScoreAndSheet(this);
    const nowStatement = checkStatement(score1, score2, gamePoint);
    console.log(nowStatement)
    // TODO：勝敗が確定したらCSSの変更と得点追加ボタンのロックを実行する。
    switch (nowStatement) { 
        case WIN_PLAYER_1:
            break;
        case WIN_PLAYER_2:
            break;
        default:
            // ゲーム続行
            break;
    }
}

/**
 * ボタン操作に応じて画面の点数を更新
 * @param {Element} button - player1, player2, resetのいずれかのHTML要素 
 */
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

/**
 * ゲーム進行状態を調査する。点数が加算される度に実行される。
 * @param {*} score1 - player1の現在の点数
 * @param {*} score2 - player2の現在の点数
 * @param {*} gamePoint 
 * @returns {String} 現在のゲーム進行状態
 */
function checkStatement (score1, score2, gamePoint) {
    if (score1 === gamePoint) {
        return WIN_PLAYER_1;
    } else if (score2 === gamePoint) {
        return WIN_PLAYER_2;
    } else {
        return PLAY_NOW;
    }
}

// ボタン操作監視
button1.addEventListener('click', mainProcess)
button2.addEventListener('click', mainProcess);
resetButton.addEventListener('click', mainProcess);

// セレクトオプション操作監視
maxPoint.addEventListener('change',  function () {
    gamePoint = parseInt(maxPoint.value);
});

