"use strict";

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = " 🎉 Correct Number";
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

document.querySelector(".again").addEventListener("click", function() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayScore(score);
  displayMessage("Start guessing...");
  displayNumber("?");
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";  
})

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(typeof guess);
    //No Number
  if (!guess) {
    displayMessage("😵 No Number !");
    // Player Wins
  } else if (guess === secretNumber) {
    displayMessage("😍 Correct Number");
    displayNumber(secretNumber);
    document.querySelector("body").style.backgroundColor = "#60B347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {    
    if (score > 1) {
      const newMessage = guess > secretNumber ? "📈 Too High !" : "📉 Too Low !"
      displayMessage(newMessage);
      score--;
      displayScore(score);
    } else {
      displayMessage("You Lost the game !");
      displayScore(0);
    }
  }     
});

// Functions
function displayMessage(message) {
  document.querySelector(".message").textContent = message;
};
function displayNumber(number) {
  document.querySelector(".number").textContent = number;
};
function displayScore(score) {
  document.querySelector(".score").textContent = score;
};


