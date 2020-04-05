getSleepHours = day => {
  switch (day) {
    case "monday":
      return 8;
      break;
    case "tuesday":
      return 6;
      break;
    case "wednesday":
      return 6;
      break;
    case "thursday":
      return 6;
      break;
    case "friday":
      return 8;
      break;
    case "saturday":
      return 10;
      break;
    case "sunday":
      return 10;
      break;
    default:
      break;
  }
};

getActualSleepHours = () => {
  let days = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];
  let sum = 0;
  for (i = 0;i < days.length;i++){
    sum += getSleepHours(days[i]);
  }
  return sum;
};

getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};

calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let IdealSleepHours = getIdealSleepHours();
  if (actualSleepHours > IdealSleepHours) {
    console.log("Sleeping too much, are you a zen master?");
    console.log(`You slept ${actualSleepHours-IdealSleepHours}h more than the recommended value`);
  } else if (actualSleepHours < IdealSleepHours) {
    console.log("Sleeping too little, are you an engineer?");
    console.log(`You slept ${-actualSleepHours+IdealSleepHours}h less than the recommended value`);
  } else if (actualSleepHours === IdealSleepHours) {
    console.log("Sleeping the recommended amount, good for you!");
  } 
}

calculateSleepDebt();