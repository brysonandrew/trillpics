import { useNodesPattern } from "~/hooks/music/midis/scale/pattern";

export const useSequenceButtonsRandom = () => {
  const handlePattern =
    useNodesPattern();
  const handler = () => {
    handlePattern.update("random");
  };

  return handler;
};
