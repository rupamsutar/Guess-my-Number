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
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";  
})

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(typeof guess);

    //No Number
  if (!guess) {
    document.querySelector(".message").textContent = "😵 No Number !";

    // Player Wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "😍 Correct Number";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60B347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    //Refactoring the code !
  } else if (guess !== secretNumber) {
    
    if (score > 1) {
      document.querySelector(".message").textContent = guess > secretNumber ? "📈 Too High !" : "📉 Too Low !" ;
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost the game !";
      document.querySelector(".score").textContent = 0;
    }

  } //else if (guess < secretNumber) {

  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📉 Too Low !";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "You Lost the game !";
  //     document.querySelector(".score").textContent = 0;
  //   }

  //   //Number Too High
  // } else if (guess > secretNumber) {

  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📈 Too High !";
  //     score--;
  //     document.querySelector(".score").textContent = score;

  //   } else {
  //     document.querySelector(".message").textContent = "You Lost the Game !";
  //     document.querySelector(".score").textContent = 0;      
  //   }
  // }
    
});
