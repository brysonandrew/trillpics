export const resolveTimerSeconds = (seconds: number) =>
  String(Math.floor(seconds % 60)).padStart(2, '0');
