"use strict";
const display1 = document.querySelector("#player1-display");
const display2 = document.querySelector("#player2-display");
const maxPoint = document.querySelector("#max-point");
const button1 = document.querySelector("#player1-button");
const button2 = document.querySelector("#player2-button");
const resetButton = document.querySelector("#reset-button");
const winningScoreSelect = document.querySelector("#winning-point");
let score1 = 0;
let score2 = 0;
let winningPoint = 3;
let isGameOver = false;
button1.addEventListener("click", function () {
    if (!isGameOver) {
        score1 += 1;
        display1.textContent = score1.toString();
        if (score1 === winningPoint) {
            isGameOver = true;
            display1.classList.add("has-text-success");
            display2.classList.add("has-text-danger");
            button1.disabled = true;
            button2.disabled = true;
        }
    }
});
button2.addEventListener("click", function () {
    if (!isGameOver) {
        score2 += 1;
        display2.textContent = score2.toString();
        if (score2 === winningPoint) {
            isGameOver = true;
            display2.classList.add("has-text-success");
            display1.classList.add("has-text-danger");
            button1.disabled = true;
            button2.disabled = true;
        }
    }
});
winningScoreSelect.addEventListener("change", function () {
    winningPoint = parseInt(this.value);
    reset();
});
resetButton.addEventListener("click", reset);
function reset() {
    isGameOver = false;
    score1 = 0;
    score2 = 0;
    display1.textContent = "0";
    display2.textContent = "0";
    display1.classList.remove("has-text-success", "has-text-danger");
    display2.classList.remove("has-text-success", "has-text-danger");
    button1.disabled = false;
    button2.disabled = false;
}
//# sourceMappingURL=app.js.map