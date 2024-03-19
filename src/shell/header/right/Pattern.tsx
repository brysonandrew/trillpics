import type { FC } from 'react';

export const Pattern: FC = () => {
  return (
    <div>
      {/* <AnimatePresence>
          {!isScroll && (
            <motion.div
              key={resolveCompositeKey(
                title,
                '--rotate',
              )}
              className='bg-main absolute -inset-4 transition-colors duration-1000'
              style={{ rotate: 45 }}
            />
          )}
          {!isScroll && (
            <motion.div
              key={resolveCompositeKey(
                title,
                '--border',
              )}
              className='absolute border-1-gray-01 inset-2'
            />
          )}
        </AnimatePresence> */}
      Pattern
    </div>
  );
};
