import { useWorkshop } from '@pages/gallery/context';
import { AnimatePresence } from 'framer-motion';
import { Handler } from './Handler';

export const Clipboard = () => {
  const { clipboardContext } =
    useWorkshop();
  return (
    <AnimatePresence>
      {clipboardContext.copying !==
        null && (
        <Handler
          {...clipboardContext}
        />
      )}
    </AnimatePresence>
  );
};
