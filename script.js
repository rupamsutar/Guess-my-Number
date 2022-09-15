"use strict";

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = " 🎉 Correct Number";
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

const SecretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector(".number").textContent = SecretNumber;

let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(typeof guess);

    //No Number
  if (!guess) {
    document.querySelector(".message").textContent = "😵 No Number !";

    // Player Wins
  } else if (guess === SecretNumber) {
    document.querySelector(".message").textContent = "😍 Correct Number";

    document.querySelector("body").style.backgroundColor = "#60B347";

    // Number too Low !
  } else if (guess < SecretNumber) {

    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too Low !";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost the game !";
      document.querySelector(".score").textContent = 0;
    }

    //Number Too High
  } else if (guess > SecretNumber) {

    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too High !";
      score--;
      document.querySelector(".score").textContent = score;

    } else {
      document.querySelector(".message").textContent = "You Lost the Game !";
      document.querySelector(".score").textContent = 0;      
    }
  }
    
});
