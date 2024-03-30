import { useGallery } from '@pages/gallery/context';
import { AnimatePresence } from 'framer-motion';
import { Handler } from './Handler';

export const Clipboard = () => {
  const { clipboardContext } =
    useGallery();
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
