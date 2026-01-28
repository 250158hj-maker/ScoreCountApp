const sheet1 = document.querySelector("#player1-score");
const sheet2 = document.querySelector("#player2-score");
const maxPoint = document.querySelector("#max-point");
const button1 = document.querySelector("#player1-button");
const button2 = document.querySelector("#player2-button");
const resetButton = document.querySelector("#reset-button");

const WIN_PLAYER_1 = "Player1";
const WIN_PLAYER_2 = "Player2";
const PLAY_NOW = "PlayNow";

const WIN_BUTTON_COLOR = "text-success";
const LOSE_BUTTON_COLOR = "text-danger";
const PLAYER_BUTTON_DEFAULT = "btn btn-primary";
const RESET_BUTTON_DEFAULT = "btn btn-secondary";

let score1 = 0;
let score2 = 0;
let gamePoint = 1;

/**
 * ボタン操作イベントが発火すると呼び出される。
 * 点数更新・ゲーム進行状況の取得・ゲーム終了時の画面更新を担う
 */
function mainProcess() {
  const eventButton = this;
  updateScoreAndSheet(eventButton);
  // リセットボタンの場合はスタイルしてゲームの終了
  if (eventButton === resetButton) {
    resetDisplayStyles();
    return;
  }

  // リセットではない場合
  const nowStatement = checkStatus(score1, score2, gamePoint);
  switch (nowStatement) {
    case WIN_PLAYER_1:
      updateDisplayStyles(WIN_PLAYER_1);
      break;
    case WIN_PLAYER_2:
      updateDisplayStyles(WIN_PLAYER_2);
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
function updateScoreAndSheet(button) {
  if (button === resetButton) {
    score1 = 0;
    score2 = 0;
    sheet1.innerText = score1;
    sheet2.innerText = score2;
    return;
  }

  switch (button) {
    case button1:
      score1 += 1;
      sheet1.innerText = score1;
      break;
    case button2:
      score2 += 1;
      sheet2.innerText = score2;
      break;
    default:
      break;
  }
}

/**
 * ゲーム進行状態を調査する。点数が加算される度に実行される。
 * @param {number} score1 - player1の現在の点数
 * @param {number} score2 - player2の現在の点数
 * @param {number} gamePoint - ゲーム終了点数
 * @returns {String} 現在のゲーム進行状態
 */
function checkStatus(score1, score2, gamePoint) {
  if (score1 === gamePoint) {
    return WIN_PLAYER_1;
  } else if (score2 === gamePoint) {
    return WIN_PLAYER_2;
  } else {
    return PLAY_NOW;
  }
}

/**
 * リセットボタンが押されたときのみ実行。スタイルを初期状態に戻す
 */
function resetDisplayStyles() {
  sheet1.className = "";
  sheet2.className = "";
  button1.className = PLAYER_BUTTON_DEFAULT;
  button2.className = PLAYER_BUTTON_DEFAULT;
  button1.disabled = false;
  button2.disabled = false;
  resetButton.className = RESET_BUTTON_DEFAULT;
}

/**
 * 勝敗が決定したときのみ実行。スタイルを変更する
 * @param {String} statement - WIN_PlAYER1 or WIN_PLAYER_2
 */
function updateDisplayStyles(statement) {
  if (statement === WIN_PLAYER_1) {
    sheet1.classList.add(WIN_BUTTON_COLOR);
    sheet2.classList.add(LOSE_BUTTON_COLOR);
    button1.disabled = true;
    button2.disabled = true;
  } else {
    sheet1.classList.add(LOSE_BUTTON_COLOR);
    sheet2.classList.add(WIN_BUTTON_COLOR);
    button1.disabled = true;
    button2.disabled = true;
  }
}

// ボタン操作監視
button1.addEventListener("click", mainProcess);
button2.addEventListener("click", mainProcess);
resetButton.addEventListener("click", mainProcess);

// セレクトオプション操作監視
maxPoint.addEventListener("change", function () {
  gamePoint = parseInt(maxPoint.value);
});
