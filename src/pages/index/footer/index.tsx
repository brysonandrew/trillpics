import { Divider } from '@components/decoration/Divider';
import { I } from '@components/Icon';
import { FadeUp } from '@components/vertical-fade/FadeUp';
import { motion } from 'framer-motion';
import { ITEMS } from './config';

export const Footer = () => {
  return (
    <>
      <Divider classValue='sticky left-0 bottom-0 right-0 h-3 z-50' />
      <footer className='relative column bg-section py-16 z-50'>
        <div className='w-container row-space'>
          <div />
          <ul className='column-end gap-4'>
            {ITEMS.map(
              ({
                title,
                value,
                href,
                iconProps,
              }) => (
                <li key={value}>
                  <motion.a
                    title={title}
                    className='row gap-2'
                    href={href}
                  >
                    <I {...iconProps} />
                    <kbd className='tracking-widest text-sm'>
                      {value}
                    </kbd>
                  </motion.a>
                </li>
              ),
            )}
          </ul>
        </div>
      </footer>
      <FadeUp />
    </>
  );
};
