let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegistry = true;
let runnerAge = 28;
(runnerAge>18)&&(earlyRegistry)?raceNumber+=1000:raceNumber+=0;
if ((runnerAge>18)&&(earlyRegistry)) {
  console.log(`You are racenumber (${raceNumber}) and you are running at 9:30am`)
}