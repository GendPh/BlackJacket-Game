
let playerTest = {
  name: "",
  points: 150
}
const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}-${month}-${year}`;
$("#tableDate").text(currentDate);

$(document).ready(function () {
  let youWantToStartTheGame = confirm("This is a Black Jacket Game. \n How to play: \n 1 => Every time you start a new board you lose 15P;\n 2=> If your cards sum to 21 you Black Jacket and win 30P;\n 3=> If your cards sum is higher then 21 you lose the game;\n 4=> You cant Draw more then 5 cards;\n 6=> You start with 150P;\n Do you want to play?");
  if (youWantToStartTheGame === true) {
    const fullNameRule = /^[a-zA-Z]+ [a-zA-Z]+$/;
    const oneNameRule = '^[a-zA-Z]{3,16}$';
    const getPlayerName = prompt("Please insert your name below:");
    if (getPlayerName === null) {
      playerTest.name = "John Doe";
      alert("Invalid username.");
    } else if (getPlayerName.match(fullNameRule) || getPlayerName.match(oneNameRule)) {
      playerTest.name = getPlayerName;
    }
  } else {
    location.reload();
  }
  $("#tableUserName").text(playerTest.name);
  $("#tableUserPoints").text(playerTest.points + "P");
});
if ($(window).innerWidth() <= 500) {
  $("#tableUserLost").text("-15P").css("background-color", "red").css("color", "white");;
} else {
  $("#btn-StartGame").on("mouseover", function () {
    $("#tableUserLost").text("-15P").css("background-color", "red").css("color", "white");
  })
  $("#btn-StartGame").on("mouseout", function () {
    $("#tableUserLost").text("").css("background-color", "white");
  })
}

let cards = [];
let sum = 0;
let hasBlackJacket = false;
let isALive = false;
let message = "";
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
  playerTest.points -= 15;
  $("#tableUserPoints").text(playerTest.points + "P");
  $("#tableUserWon").text("");
  $("#tableUserWon").css("background-color", "white");
  $("#tableUserWon").css("color", "black");
  showBoard()
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
  if (playerTest.points < 0) {
    alert("You lost your points! " + playerTest.name);
    location.reload();
  }
}


function renderGame() {
  cardEl.textContent = "";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }
  $("#sum-el").text(sum);
  if (sum < 21) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've BlackJacket!";
    playerTest.points += 30;
    $("#tableUserWon").text("+30P");
    $("#tableUserWon").css("background-color", "green");
    $("#tableUserWon").css("color", "goldenrod");
    $("#tableUserPoints").text(playerTest.points + "P");
    hasBlackJacket = true;
  } else if (cards.length >= 5 && sum != 21) {
    message = "You are out of game!";
    isALive = false;
  } else {
    message = "You are out of game!";
    isALive = false;
    if (playerTest.points <= 0) {
      alert("You lost your points! " + playerTest.name);
      location.reload();
    }
  }
  $("#message-el").text(message);
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

function showBoard() {
  const boardGame = $("#cardDisplay");
  const btnNewCard = $("#btn-newCard");
  const visible = $("#cardDisplay").attr("data-visible");
  const visibleBtnNewCard = $("#btn-newCard").attr("data-visible");

  if (visible === "false" && visibleBtnNewCard === "false") {
    boardGame.attr("data-visible", true);
    btnNewCard.attr("data-visible", true);
  }
}