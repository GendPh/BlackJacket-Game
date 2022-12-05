let cards = [];
let sum = 0;
let hasBlackJacket = false;
let isALive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("cards-el");
let extraCardOne = false;
let player = {
  name: "Gabriel",
  money: 150
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": " + player.money + "€";

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
  player.money -= 15;
  playerEl.textContent = player.name + ": " + player.money + "€";
  let firstCard = randomCard();
  let secondCard = randomCard();
  extraCardOne = false;
  $("#extraCardDisplay").remove();
  $("#extraCardTwoDisplay").remove();
  $("#extraCardThreeDisplay").remove();
  console.log(extraCardOne)

  if (firstCard === 11) {
    $("#cardOne").removeClass();
    $("#cardOne").addClass("cardOne")
  } else if (firstCard === 2) {
    $("#cardOne").removeClass();
    $("#cardOne").addClass("cardTwo")
  } else if (firstCard === 3) {
    $("#cardOne").removeClass();
    $("#cardOne").addClass("cardThree")
  } else if (firstCard === 4) {
    $("#cardOne").removeClass();
    $("#cardOne").addClass("cardFour")
  } else if (firstCard === 5) {
    $("#cardOne").removeClass();
    $("#cardOne").addClass("cardFive")
  } else if (firstCard === 6) {
    $("#cardOne").removeClass();
    $("#cardOne").addClass("cardSix")
  } else if (firstCard === 7) {
    $("#cardOne").removeClass();
    $("#cardOne").addClass("cardSeven")
  } else if (firstCard === 8) {
    $("#cardOne").removeClass();
    $("#cardOne").addClass("cardEight")
  } else if (firstCard === 9) {
    $("#cardOne").removeClass();
    $("#cardOne").addClass("cardNine")
  } else if (firstCard === 10) {
    $("#cardOne").removeClass();
    $("#cardOne").addClass("cardTen")
  } else {
    $("#cardOne").removeClass();
    $("#cardOne").addClass("cardError")
  }

  if (secondCard === 11) {
    $("#cardTwo").removeClass();
    $("#cardTwo").addClass("cardOne")
  } else if (secondCard === 2) {
    $("#cardTwo").removeClass();
    $("#cardTwo").addClass("cardTwo")
  } else if (secondCard === 3) {
    $("#cardTwo").removeClass();
    $("#cardTwo").addClass("cardThree")
  } else if (secondCard === 4) {
    $("#cardTwo").removeClass();
    $("#cardTwo").addClass("cardFour")
  } else if (secondCard === 5) {
    $("#cardTwo").removeClass();
    $("#cardTwo").addClass("cardFive")
  } else if (secondCard === 6) {
    $("#cardTwo").removeClass();
    $("#cardTwo").addClass("cardSix")
  } else if (secondCard === 7) {
    $("#cardTwo").removeClass();
    $("#cardTwo").addClass("cardSeven")
  } else if (secondCard === 8) {
    $("#cardTwo").removeClass();
    $("#cardTwo").addClass("cardEight")
  } else if (secondCard === 9) {
    $("#cardTwo").removeClass();
    $("#cardTwo").addClass("cardNine")
  } else if (secondCard === 10) {
    $("#cardTwo").removeClass();
    $("#cardTwo").addClass("cardTen")
  } else {
    $("#cardTwo").removeClass();
    $("#cardTwo").addClass("cardError")
  }

  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
  console.log(firstCard + ": " + secondCard);
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
    player.money += 30;
    playerEl.textContent = player.name + ": " + player.money + "€";
    hasBlackJacket = true;
  } else {
    message = "You are out of game!";
    isALive = false;
    if (player.money <= 0) {
      alert("You lost your money! " + player.name);
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
      console.log("extraCardOne:false");
      extraCardOne = true;
      $("#cardDisplay").append(extraCardDisplay)
      if (card === 11) {
        $("#extraCardDisplay").removeClass();
        $("#extraCardDisplay").addClass("cardOne")
      } else if (card === 2) {
        $("#extraCardDisplay").removeClass();
        $("#extraCardDisplay").addClass("cardTwo")
      } else if (card === 3) {
        $("#extraCardDisplay").removeClass();
        $("#extraCardDisplay").addClass("cardThree")
      } else if (card === 4) {
        $("#extraCardDisplay").removeClass();
        $("#extraCardDisplay").addClass("cardFour")
      } else if (card === 5) {
        $("#extraCardDisplay").removeClass();
        $("#extraCardDisplay").addClass("cardFive")
      } else if (card === 6) {
        $("#extraCardDisplay").removeClass();
        $("#extraCardDisplay").addClass("cardSix")
      } else if (card === 7) {
        $("#extraCardDisplay").removeClass();
        $("#extraCardDisplay").addClass("cardSeven")
      } else if (card === 8) {
        $("#extraCardDisplay").removeClass();
        $("#extraCardDisplay").addClass("cardEight")
      } else if (card === 9) {
        $("#extraCardDisplay").removeClass();
        $("#extraCardDisplay").addClass("cardNine")
      } else if (card === 10) {
        $("#extraCardDisplay").removeClass();
        $("#extraCardDisplay").addClass("cardTen")
      } else {
        $("#extraCardDisplay").removeClass();
        $("#extraCardDisplay").addClass("cardError")
      }
    } else if (extraCardOne == true && extraCardThreeD === false) {
      $("#cardDisplay").append(extraCardTwo)
      if (card === 11) {
        $("#extraCardTwoDisplay").removeClass();
        $("#extraCardTwoDisplay").addClass("cardOne")
      } else if (card === 2) {
        $("#extraCardTwoDisplay").removeClass();
        $("#extraCardTwoDisplay").addClass("cardTwo")
      } else if (card === 3) {
        $("#extraCardTwoDisplay").removeClass();
        $("#extraCardTwoDisplay").addClass("cardThree")
      } else if (card === 4) {
        $("#extraCardTwoDisplay").removeClass();
        $("#extraCardTwoDisplay").addClass("cardFour")
      } else if (card === 5) {
        $("#extraCardTwoDisplay").removeClass();
        $("#extraCardTwoDisplay").addClass("cardFive")
      } else if (card === 6) {
        $("#extraCardTwoDisplay").removeClass();
        $("#extraCardTwoDisplay").addClass("cardSix")
      } else if (card === 7) {
        $("#extraCardTwoDisplay").removeClass();
        $("#extraCardTwoDisplay").addClass("cardSeven")
      } else if (card === 8) {
        $("#extraCardTwoDisplay").removeClass();
        $("#extraCardTwoDisplay").addClass("cardEight")
      } else if (card === 9) {
        $("#extraCardTwoDisplay").removeClass();
        $("#extraCardTwoDisplay").addClass("cardNine")
      } else if (card === 10) {
        $("#extraCardTwoDisplay").removeClass();
        $("#extraCardTwoDisplay").addClass("cardTen")
      } else {
        $("#extraCardTwoDisplay").removeClass();
        $("#extraCardTwoDisplay").addClass("cardError")
      }
      extraCardThreeD = true;
    } else if (extraCardThreeD === true) {
      $("#cardDisplay").append(extraCardThree)
      if (card === 11) {
        $("#extraCardThreeDisplay").removeClass();
        $("#extraCardThreeDisplay").addClass("cardOne")
      } else if (card === 2) {
        $("#extraCardThreeDisplay").removeClass();
        $("#extraCardThreeDisplay").addClass("cardTwo")
      } else if (card === 3) {
        $("#extraCardThreeDisplay").removeClass();
        $("#extraCardThreeDisplay").addClass("cardThree")
      } else if (card === 4) {
        $("#extraCardThreeDisplay").removeClass();
        $("#extraCardThreeDisplay").addClass("cardFour")
      } else if (card === 5) {
        $("#extraCardThreeDisplay").removeClass();
        $("#extraCardThreeDisplay").addClass("cardFive")
      } else if (card === 6) {
        $("#extraCardThreeDisplay").removeClass();
        $("#extraCardThreeDisplay").addClass("cardSix")
      } else if (card === 7) {
        $("#extraCardThreeDisplay").removeClass();
        $("#extraCardThreeDisplay").addClass("cardSeven")
      } else if (card === 8) {
        $("#extraCardThreeDisplay").removeClass();
        $("#extraCardThreeDisplay").addClass("cardEight")
      } else if (card === 9) {
        $("#extraCardThreeDisplay").removeClass();
        $("#extraCardThreeDisplay").addClass("cardNine")
      } else if (card === 10) {
        $("#extraCardThreeDisplay").removeClass();
        $("#extraCardThreeDisplay").addClass("cardTen")
      } else {
        $("#extraCardThreeDisplay").removeClass();
        $("#extraCardThreeDisplay").addClass("cardError")
      }
      extraCardThreeD = false;
    }
    cards.push(card);
    sum += card;
    renderGame();

  }
}




/* $("#cardDisplay").append(extraCardDisplay)
      if (card === 11) {
        $("#extraCardDisplay").removeClass();
        $("#extraCardDisplay").addClass("cardOne")
      } else if (card === 2) {
        $("#extraCardDisplay").removeClass();
        $("#extraCardDisplay").addClass("cardTwo")
      } else if (card === 3) {
        $("#extraCardDisplay").removeClass();
        $("#extraCardDisplay").addClass("cardThree")
      } else if (card === 4) {
        $("#extraCardDisplay").removeClass();
        $("#extraCardDisplay").addClass("cardFour")
      } else if (card === 5) {
        $("#extraCardDisplay").removeClass();
        $("#extraCardDisplay").addClass("cardFive")
      } else if (card === 6) {
        $("#extraCardDisplay").removeClass();
        $("#extraCardDisplay").addClass("cardSix")
      } else if (card === 7) {
        $("#extraCardDisplay").removeClass();
        $("#extraCardDisplay").addClass("cardSeven")
      } else if (card === 8) {
        $("#extraCardDisplay").removeClass();
        $("#extraCardDisplay").addClass("cardEight")
      } else if (card === 9) {
        $("#extraCardDisplay").removeClass();
        $("#extraCardDisplay").addClass("cardNine")
      } else if (card === 10) {
        $("#extraCardDisplay").removeClass();
        $("#extraCardDisplay").addClass("cardTen")
      } else {
        $("#extraCardDisplay").removeClass();
        $("#extraCardDisplay").addClass("cardError")
      } */