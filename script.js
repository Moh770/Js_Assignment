function startGame(){
  playerScore = 0;
  computerScore = 0;
  roundCount = 0;
  game();
}

let player;
let computer;
let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

function playerPlay() {
  player = prompt(`Let's play Rock Paper Scissors!`);
  if(player === null){
    let playAgain = confirm("Another round?")
    if(playAgain){startGame()}
  }
  player = player.trim().toLowerCase();
  switch (player) {
    case "rock":
      player;
      computer = computerPlay();
      console.log(`You chose: ${player}\nComputer chose: ${computer}`);
      break;
    case "paper":
      player;
      computer = computerPlay();
      console.log(`You chose: ${player}\nComputer chose: ${computer}`);
      break;
    case "scissors":
      player;
      computer = computerPlay();
      console.log(`You chose: ${player}\nComputer chose: ${computer}`);
      break;
    default:
      window.alert("Enter a valid option")
      console.log("Wrong input")
      playerPlay();
  }
}

function computerPlay() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissors")
  ) {
    computerScore++;
    return `Computer win!  ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === computerSelection) {
    playerScore++;
    computerScore++;
    return "Draw!";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playerPlay();
    if (player === "rock") {
      roundCount = i + 1;
      console.log(
        playRound(player, computer) +
          `\nRound: ${roundCount}\nPlayer:${playerScore} - Computer:${computerScore}`
      );
    } else if (player === "paper") {
      roundCount = i + 1;
      console.log(
        playRound(player, computer) +
          `\nRound: ${roundCount}\nPlayer:${playerScore} - Computer:${computerScore}`
      );
    } else if (player === "scissors") {
      roundCount = i + 1;
      console.log(
        playRound(player, computer) +
          `\nRound: ${roundCount}\nPlayer:${playerScore} - Computer:${computerScore}`
      );
    }
  }
  if (playerScore <= computerScore) {
    window.alert("You lost!");
    let playAgain = confirm("Another round?")
    if(playAgain === true) {startGame()}
  } else if (playerScore > computerScore) {
    window.alert("You won!");
    let playAgain = confirm("Another round?")
    if(playAgain === true) {startGame()}
  } else if (playerScore === computerScore) {
    window.alert("DRAW!");
    let playAgain = confirm("Another round?")
    if(playAgain === true) {startGame()}
  }
}
game();