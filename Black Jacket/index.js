
let playerTest = {
  name: "",
  money: 150
}
let playerEl = document.getElementById("player-el");
$(document).ready(function () {
  let youWantToStartTheGame = confirm("This is a Black Jacket Game. \n How to play: \n 1 => Every time you start a new board you lose 15€ \n 2=> If your cards sum to 21 you Black Jacket and win 30€;\n 3=> If your cards sum is higher then 21 you lose the game;\n Do you want to play?");
  if (youWantToStartTheGame === true) {
    playerTest.name = prompt("Please insert your name below:");
  } else {
    location.reload();
  }
  playerEl.textContent = playerTest.name + ": " + playerTest.money + "€";
})


let cards = [];
let sum = 0;
let hasBlackJacket = false;
let isALive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("cards-el");
let extraCardOne = false;

function randomCard() {
  let randomNumbers = Math.floor(Math.random() * 13) + 1;
  if (randomNumbers > 10) {
    return 10;
  } else if (randomNumbers === 1) {
    return 11;
  }
  return randomNumbers;
}

function startGame() {
  isALive = true;
  hasBlackJacket = false
  playerTest.money -= 15;
  playerEl.textContent = playerTest.name + ": " + playerTest.money + "€";
  let firstCard = randomCard();
  let secondCard = randomCard();
  extraCardOne = false;
  $("#extraCardDisplay").remove();
  $("#extraCardTwoDisplay").remove();
  $("#extraCardThreeDisplay").remove();
  renderCard(firstCard, $("#cardOne"))
  renderCard(secondCard, $("#cardTwo"))
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}


function renderGame() {
  cardEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum < 21) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've BlackJacket!";
    playerTest.money += 30;
    playerEl.textContent = playerTest.name + ": " + playerTest.money + "€";
    hasBlackJacket = true;
  } else {
    message = "You are out of game!";
    isALive = false;
    if (playerTest.money <= 0) {
      alert("You lost your money! " + playerTest.name);
      location.reload();
    }
  }
  messageEl.textContent = message;
}


let extraCardDisplay;
let extraCardTwo;
let extraCardThreeD = false;

function newCard() {
  if (isALive === true && hasBlackJacket === false) {
    extraCardDisplay = "<div id='extraCardDisplay'></div>";
    extraCardTwo = "<div id='extraCardTwoDisplay'></div>";
    extraCardThree = "<div id='extraCardThreeDisplay'></div>";
    let card = randomCard();
    if (extraCardOne == false && extraCardThreeD === false) {
      extraCardOne = true;
      $("#cardDisplay").append(extraCardDisplay)
      renderCard(card, $("#extraCardDisplay"))
    } else if (extraCardOne == true && extraCardThreeD === false) {
      $("#cardDisplay").append(extraCardTwo)
      renderCard(card, $("#extraCardTwoDisplay"))
      extraCardThreeD = true;
    } else if (extraCardThreeD === true) {
      $("#cardDisplay").append(extraCardThree)
      renderCard(card, $("#extraCardThreeDisplay"))
      extraCardThreeD = false;
    }
    cards.push(card);
    sum += card;
    renderGame();
  }
}

function renderCard(cardNumber, position) {
  if (cardNumber === 11) {
    position.removeClass();
    position.addClass("cardOne")
  } else if (cardNumber === 2) {
    position.removeClass();
    position.addClass("cardTwo")
  } else if (cardNumber === 3) {
    position.removeClass();
    position.addClass("cardThree")
  } else if (cardNumber === 4) {
    position.removeClass();
    position.addClass("cardFour")
  } else if (cardNumber === 5) {
    position.removeClass();
    position.addClass("cardFive")
  } else if (cardNumber === 6) {
    position.removeClass();
    position.addClass("cardSix")
  } else if (cardNumber === 7) {
    position.removeClass();
    position.addClass("cardSeven")
  } else if (cardNumber === 8) {
    position.removeClass();
    position.addClass("cardEight")
  } else if (cardNumber === 9) {
    position.removeClass();
    position.addClass("cardNine")
  } else if (cardNumber === 10) {
    position.removeClass();
    position.addClass("cardTen")
  } else {
    position.removeClass();
    position.addClass("cardError")
  }
}