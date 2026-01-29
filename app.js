const display1 = document.querySelector("#player1-display");
const display2 = document.querySelector("#player2-display");
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
let isGameOver = false;

button1.addEventListener("click", function () {
  if (!isGameOver) {
    score1 += 1;
    display1.textContent = score1;
    if (score1 === gamePoint) {
      isGameOver = true;
    }
  }
});

button2.addEventListener("click", function () {
  if (!isGameOver) {
    score2 += 1;
    display2.textContent = score2;
    if (score2 === gamePoint) {
      isGameOver = true;
    }
  }
});

resetButton.addEventListener('click', function() {
  isGameOver = false;
  score1 = 0;
  score2 = 0;
  display1.textContent = 0;
  display2.textContent = 0;
})