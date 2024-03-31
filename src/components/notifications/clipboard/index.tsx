import { useClipboard } from "@store/clipboard";
import { AnimatePresence } from "framer-motion";
import { Handler } from "./Handler";

export const Clipboard = () => {
  const clipboard = useClipboard();
  return (
    <AnimatePresence>
      {clipboard.copying !== null && (
        <Handler {...clipboard} />
      )}
    </AnimatePresence>
  );
};
