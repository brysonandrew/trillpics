import { useState, useEffect } from "react";

export const useNoPointer = () => {
  const [isPointer, setPointer] = useState<null | boolean>(
    null,
  );
  useEffect(() => {
    const isNoPointer =
      window.matchMedia("(pointer: none)").matches ||
      window.matchMedia("(hover: none)").matches ||
      window.matchMedia("(any-hover: none)").matches;
    setPointer(!isNoPointer);
  }, []);

  return isPointer;
};
