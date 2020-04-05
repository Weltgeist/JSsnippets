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
}