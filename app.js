document.addEventListener("DOMContentLoaded", () => {

  const cardArray = [
    {
      name: "flag1",
      img: "./images/1.png"
    },
    {
      name: "flag1",
      img: "./images/1.png"
    },
    {
      name: "flag2",
      img: "./images/2.png"
    },
    {
      name: "flag2",
      img: "./images/2.png"
    },
    {
      name: "flag3",
      img: "./images/3.png"
    },
    {
      name: "flag3",
      img: "./images/3.png"
    },
    {
      name: "flag4",
      img: "./images/4.png"
    },
    {
      name: "flag4",
      img: "./images/4.png"
    },
    {
      name: "flag5",
      img: "./images/5.png"
    },
    {
      name: "flag5",
      img: "./images/5.png"
    },
    {
      name: "flag6",
      img: "./images/6.png"
    },
    {
      name: "flag6",
      img: "./images/6.png"
    },
    {
      name: "flag7",
      img: "./images/7.png"
    },
    {
      name: "flag7",
      img: "./images/7.png"
    },
    {
      name: "flag8",
      img: "./images/8.png"
    },
    {
      name: "flag8",
      img: "./images/8.png"
    },
  ]

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resutDisplay = document.querySelector("#result");
  var cardsChosen = [];
  var cardsChosenID = [];
  var cardsWon = []

  function createBoard(){
    for (let i = 0; i<cardArray.length; i++){
      var card = document.createElement("img");
      card.setAttribute("src", "./images/9.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);

      grid.appendChild(card);
    }
  }

  function checkForMatch(){
    var cards = document.querySelectorAll("img");
    const optionOneID = cardsChosenID[0];
    const optionTwoID = cardsChosenID[1];

    if (cardsChosen[0] === cardsChosen[1]){
      alert("You found a match");
      cards[optionOneID].setAttribute("src", "./images/10.png");
      cards[optionTwoID].setAttribute("src", "./images/10.png");
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneID].setAttribute("src", "./images/9.png");
      cards[optionTwoID].setAttribute("src", "./images/9.png");
      alert("Sorry, try again")
    }
    cardsChosen = [];
    cardsChosenID = [];
    resutDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length/2) {
      resutDisplay.textContent = "You found them all";
    }
  }

  function flipCard(){
    var cardID = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardID].name);
    cardsChosenID.push(cardID);
    this.setAttribute("src", cardArray[cardID].img);
    if (cardsChosen.length === 2){
      setTimeout(checkForMatch, 500);
    }
    console.log(cardsChosen);
    console.log(cardsChosenID);
  }

  createBoard();

})