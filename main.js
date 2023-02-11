`use strict`;
/*
The logic ->
1) Have the buttons listen for player input. Then when user clicks on one of the 3 buttons and 
    it will respectively asign playerInput as either rock, paper, or scissors. 
2) Invoke the computer random number and assign computerInput as either rock, paper, or scissors
3) Compare and get the winner the display the winner on screen.
*/
//Variables
let playerInput;
let computerInput;
//Functions

function selectComputerInput() {
  let randomNumber = Math.trunc(Math.random() * 3);
  if (randomNumber === 0) {
    computerInput = "ROCK";
  } else if (randomNumber === 1) {
    computerInput = "PAPER";
  } else {
    computerInput = "SCISSORS";
  }
}
function selectWinner() {
  const winnerSpan = document.getElementById("winner");
  if (playerInput === "ROCK") {
    if (computerInput === "ROCK") {
      winnerSpan.innerHTML = "TIE";
    } else if (computerInput === "PAPER") {
      winnerSpan.innerHTML = "COMPUTER";
    } else {
      winnerSpan.innerHTML = "PLAYER";
    }
  } else if (playerInput === "PAPER") {
    if (computerInput === "ROCK") {
      winnerSpan.innerHTML = "PLAYER";
    } else if (computerInput === "PAPER") {
      winnerSpan.innerHTML = "TIE";
    } else {
      winnerSpan.innerHTML = "COMPUTER";
    }
  } else {
    if (computerInput === "ROCK") {
      winnerSpan.innerHTML = "COMPUTER";
    } else if (computerInput === "PAPER") {
      winnerSpan.innerHTML = "PLAYER";
    } else {
      winnerSpan.innerHTML = "TIE";
    }
  }
}
function initGame(userSelection) {
  //1
  playerInput = userSelection;
  //2
  selectComputerInput();
  let computerResultSpan = document.getElementById("cresult");
  computerResultSpan.innerHTML = computerInput;
  //3
  selectWinner();
}
//1
document.getElementById("bRock").addEventListener("click", function () {
  initGame("ROCK");
});
document.getElementById("bPaper").addEventListener("click", function () {
  initGame("PAPER");
});
document.getElementById("bScissors").addEventListener("click", function () {
  initGame("SCISSORS");
});
