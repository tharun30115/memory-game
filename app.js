const moves = document.getElementById("moves-count");
const timeValue = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const gameContainer = document.querySelector(".game-container");
const result = document.getElementById("result");
const controls = document.querySelector(".controls-container");
let cards;
let interval;
let firstCard = false;
let secondCard = false;

const items = [
    { name: "bee", image: "assets/bee.png" },
    { name: "crocodile", image: "assets/crocodile.png" },
    { name: "macaw", image: "assets/macaw.png" },
    { name: "gorilla", image: "assets/gorilla.png" },
    { name: "tiger", image: "assets/tiger.png" },
    { name: "monkey", image: "assets/monkey.png" },
    { name: "chameleon", image: "assets/chameleon.png" },
    { name: "piranha", image: "assets/piranha.png" },
    { name: "anaconda", image: "assets/anaconda.png" },
    { name: "sloth", image: "assets/sloth.png" },
    { name: "cockatoo", image: "assets/cockatoo.png" },
    { name: "toucan", image: "assets/toucan.png" },
  ];
  
  