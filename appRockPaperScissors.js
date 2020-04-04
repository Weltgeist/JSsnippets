const getUserChoice = userInput => { 
  userInput = userInput.toLowerCase();
  if (userInput==="rock" || userInput==="paper" || userInput==="scissors"){
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
}