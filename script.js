//maak een array met alle kaarten
document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    {
      name: "cat",
      img: "Images/cat.jpg",
    },
    {
      name: "cat",
      img: "Images/cat.jpg",
    },
    {
      name: "cats",
      img: "Images/cats.jpg",
    },
    {
      name: "cats",
      img: "Images/cats.jpg",
    },
    {
      name: "dog",
      img: "Images/english-cocker-spaniel.jpg",
    },
    {
      name: "dog",
      img: "Images/english-cocker-spaniel.jpg",
    },
    {
      name: "puppy",
      img: "Images/puppy.jpg",
    },
    {
      name: "puppy",
      img: "Images/puppy.jpg",
    },
    {
      name: "giraffe",
      img: "Images/giraffe.jpg",
    },
    {
      name: "giraffe",
      img: "Images/giraffe.jpg",
    },
    {
      name: "giraffes",
      img: "Images/treegiraffe.jpg",
    },
    {
      name: "giraffes",
      img: "Images/treegiraffe.jpg",
    },
    {
      name: "turtle",
      img: "Images/turtle.jpg",
    },
    {
      name: "turtle",
      img: "Images/turtle.jpg",
    },
    {
      name: "waterturtle",
      img: "Images/waterturtle.jpg",
    },
    {
      name: "waterturtle",
      img: "Images/waterturtle.jpg",
    },
  ];
  // om de game te shufflen
  cardArray.sort(() => 0.5 - Math.random());

  //selecteer de attributen in de html
  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");

  //arrays voor de gekozen kaarten
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];

  // board creeeren door door de kaarten te loopen in de Cardarray boven aan
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "Images/letters.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  //functie om de kaart om te draaien
  function flipCard() {
    var cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img); //plaatje toevoegen aan de id
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  //check voor matches
  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      alert("Je hebt een match gevonden. Goed zo, ga zo door!");
      //event verwijderen zodat kaart niet meer clickable is
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
      // kaart terug draaien
    } else {
      cards[optionOneId].setAttribute("src", "Images/letters.png");
      cards[optionTwoId].setAttribute("src", "Images/letters.png");
      alert("Ai sorry, probeer het nog een keertje");
    }
    cardsChosen = [];
    cardsChosenId = [];

    //het aantal matches dat je gevonden hebt in de score zetten.
    resultDisplay.textContent = cardsWon.length;

    // je hebt gewonnen als het aantal matches gelijk is aan het aantal kaarten, gedeeld door 2
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent =
        "Yeeey! Gefeliciteerd je hebt alles gevonden.";
    }
  }

  createBoard();
});
