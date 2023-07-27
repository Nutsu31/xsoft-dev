export function divPosition(num) {
  switch (num) {
    case 1:
      return "1 / 1 / 2 / 2";
    case 2:
      return "1 / 2 / 2 / 3";
    case 3:
      return "1 / 3 / 2 / 4";
    case 4:
      return "2 / 1 / 3 / 2";
    case 5:
      return "2 / 2 / 3 / 3";
    case 6:
      return "2 / 3 / 3 / 4";
    default:
      return;
  }
}
