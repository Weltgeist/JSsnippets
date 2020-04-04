const getUserChoice = userInput => { 
  userInput = userInput.toLowerCase();
  if (userInput==="rock" || userInput==="paper" || userInput==="scissors"){
    return userInput;
  } else {
    console.log("ERROR:Input must be either rock,paper or scissor string input.");
  }
};

