import { useMidisPattern } from "~/hooks/music/midis/pattern";

export const useMidisRandom = () => {
  const handlePattern =
    useMidisPattern();
  const handler = () => {
    handlePattern("random");
  };

  return handler;
};
