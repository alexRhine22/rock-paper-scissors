const lossText = "Computer Wins!";
const tieText = "Tie!";
const winText = "You Win!";

const rock = 0;
const paper = 1;
const scissors = 2;

let userScore = document.getElementById("user-score");
let computerScore = document.getElementById("computer-score");

let userInput = document.getElementsByClassName("game__input");

for (let i = 0; i < userInput.length; i++) {
  userInput[i].addEventListener("click", (e) => {
    let computerChoice = randomInt();

    updateComputerChoice(computerChoice); 

    // if (i === 0) {
    //   console.log(rock);
    // } else if (i === 1) {
    //   console.log(paper);
    // } else if (i === 2) {
    //   console.log(scissors);
    // }

    // if (i === computerChoice) {
    //   console.log(tieText);
    // } else if (i === 0 && computerChoice === 2) {
    //   console.log(winText + " rock beats paper");
    // }
  });
}

function randomInt() {
  const min = 0;
  const max = 3;
  return Math.floor(Math.random() * (max - min)) + min;
}

function updateComputerChoice(computerNum) {
  let computerImg = document.getElementById("computer-input");

  if (computerNum === 0) {
    computerImg.src = "/images/rock.png";

    console.log(rock);
  } else if (computerNum === 1) {
    computerImg.src = "/images/paper.png";
    console.log(paper);
  } else if (computerNum === 2) {
    computerImg.src = "/images/scissors.png";
    console.log(scissors);
  }
} 
