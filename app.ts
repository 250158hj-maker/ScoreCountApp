const display1 = document.querySelector("#player1-display")!;
const display2 = document.querySelector("#player2-display")!;
const maxPoint = document.querySelector("#max-point")!;
const button1 = document.querySelector("#player1-button")!;
const button2 = document.querySelector("#player2-button")!;
const resetButton = document.querySelector("#reset-button")!;
const winningScoreSelect = document.querySelector(
  "#winning-point",
)! as HTMLSelectElement;

const WIN_PLAYER_1 = "Player1";
const WIN_PLAYER_2 = "Player2";
const PLAY_NOW = "PlayNow";

const WIN_BUTTON_COLOR = "text-success";
const LOSE_BUTTON_COLOR = "text-danger";
const PLAYER_BUTTON_DEFAULT = "btn btn-primary";
const RESET_BUTTON_DEFAULT = "btn btn-secondary";

let score1: number = 0;
let score2: number = 0;
let winningPoint: number = 3;
let isGameOver: boolean = false;

button1.addEventListener("click", function () {
  if (!isGameOver) {
    score1 += 1;
    display1.textContent = score1.toString();
    if (score1 === winningPoint) {
      isGameOver = true;
    }
  }
});

button2.addEventListener("click", function () {
  if (!isGameOver) {
    score2 += 1;
    display2.textContent = score2.toString();
    if (score2 === winningPoint) {
      isGameOver = true;
    }
  }
});

winningScoreSelect.addEventListener("change", function () {
  winningPoint = parseInt(this.value);
  reset()
});

resetButton.addEventListener("click", reset);

function reset() : void {
  isGameOver = false;
  score1 = 0;
  score2 = 0;
  display1.textContent = "0";
  display2.textContent = "0";
}
