export const resolveTimerMilliseconds = (frame: number, fps: number) =>
  String((frame * (60 / fps)) % 60).padStart(2, '0');
