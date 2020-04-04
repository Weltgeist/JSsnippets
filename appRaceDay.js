let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegistry = true;
let runnerAge = 28;
(runnerAge>18)&&(earlyRegistry)?raceNumber+=1000:raceNumber+=0;
if ((runnerAge>18)&&(earlyRegistry)) {
  console.log(`You are racenumber (${raceNumber}) and you are running at 9:30am`);
} else if ((runnerAge>18)&&(!earlyRegistry)) {
  console.log(`You are racenumber (${raceNumber}) and you are running at 11:00am, because you late to register`);
} else if (runnerAge<18) {
  console.log(`You are racenumber (${raceNumber}) little one, and you are running at 12:30pm.`);
} else {
  console.log("You are 18?Hum!Please see registration desk.")
}