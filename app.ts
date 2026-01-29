const display1 = document.querySelector("#player1-display")!;
const display2 = document.querySelector("#player2-display")!;
const maxPoint = document.querySelector("#max-point")!;
const button1 = document.querySelector("#player1-button")!;
const button2 = document.querySelector("#player2-button")!;
const resetButton = document.querySelector("#reset-button")!;
const winningScoreSelect = document.querySelector(
  "#winning-point",
)! as HTMLSelectElement;

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
      display1.classList.add("winner");
      display2.classList.add("loser");
    }
  }
});

button2.addEventListener("click", function () {
  if (!isGameOver) {
    score2 += 1;
    display2.textContent = score2.toString();
    if (score2 === winningPoint) {
      isGameOver = true;
      display2.classList.add("winner");
      display1.classList.add("loser");
    }
  }
});

winningScoreSelect.addEventListener("change", function () {
  winningPoint = parseInt(this.value);
  reset();
});

resetButton.addEventListener("click", reset);

function reset(): void {
  isGameOver = false;
  score1 = 0;
  score2 = 0;
  display1.textContent = "0";
  display2.textContent = "0";
  display1.classList.remove("winner", "loser");
  display2.classList.remove("winner", "loser");
}
