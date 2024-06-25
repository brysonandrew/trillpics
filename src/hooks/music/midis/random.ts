import { useNodesPattern } from "~/hooks/scale/pattern";

export const useNodesRandom = () => {
  const handlePattern =
    useNodesPattern();
  const handler = () => {
    handlePattern.update("random");
  };

  return handler;
};
