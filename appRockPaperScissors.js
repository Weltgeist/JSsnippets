const getUserChoice = userInput => { 
  userInput = userInput.toLowerCase();
  if (userInput==="rock" || userInput==="paper" || userInput==="scissors"|| userInput==="bomb"){
    return userInput;
  } else {
    console.log("ERROR:Input must be either rock,paper or scissor string input.");
  }
};

const getComputerChoice = () => {
  let choice = Math.floor(Math.random()*3);
  switch (choice) {
    case 0:
      return "rock"
      break;
    case 1:
      return "paper"
      break;
    case 2:
      return "scissors"
      break;
    default:
      console.log("ERROR:Range must be between 0-2");
      break;

  }
};

const determineWinner = (userChoice,computerChoice) => {
  if ((userChoice == "rock" && computerChoice == "scissors")||(userChoice == "paper" && computerChoice == "rock")||(userChoice == "scissors" && computerChoice == "paper")) {
    return "Win"
  } else if ((computerChoice == "rock" && userChoice == "scissors")||(computerChoice == "paper" && userChoice == "rock")||(computerChoice == "scissors" && userChoice == "paper")) {
    return "Lost"
  } else if (computerChoice==userChoice) {
    return "Tied"
  } else {
    console.log("ERROR:Verify getComputerChoice or getUserChoice Functions");
  }
};
//playGame = () => {}; 
//function playGame() {} 
const playGame = () => {
  let userChoice = getUserChoice("paper");
  let computerChoice = getComputerChoice();
  console.log(`You choose : ${userChoice}\nComputer choose :  ${computerChoice}`);
  console.log(`You ${determineWinner(userChoice,computerChoice)} the game!`);
}

playGame();