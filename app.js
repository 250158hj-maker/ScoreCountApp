"use strict";
const player1 = {
    score: 0,
    button: document.querySelector("#player1-button"),
    display: document.querySelector("#player1-display"),
};
const player2 = {
    score: 0,
    button: document.querySelector("#player2-button"),
    display: document.querySelector("#player2-display"),
};
const maxPoint = document.querySelector("#max-point");
const resetButton = document.querySelector("#reset-button");
const winningScoreSelect = document.querySelector("#winning-point");
let winningPoint = 3; // 最低で3点
let isGameOver = false;
player1.button.addEventListener("click", function () {
    updateScores(player1, player2);
});
player2.button.addEventListener("click", function () {
    updateScores(player2, player1);
});
winningScoreSelect.addEventListener("change", function () {
    winningPoint = parseInt(this.value);
    reset();
});
resetButton.addEventListener("click", reset);
function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        player.display.textContent = player.score.toString();
        if (player.score === winningPoint) {
            isGameOver = true;
            player.display.classList.add("has-text-success");
            opponent.display.classList.add("has-text-danger");
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
    }
}
function reset() {
    isGameOver = false;
    player1.score = 0;
    player2.score = 0;
    player1.display.textContent = "0";
    player2.display.textContent = "0";
    player1.display.classList.remove("has-text-success", "has-text-danger");
    player2.display.classList.remove("has-text-success", "has-text-danger");
    player1.button.disabled = false;
    player2.button.disabled = false;
}
//# sourceMappingURL=app.js.map