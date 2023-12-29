import { motion } from 'framer-motion';
import { Paging } from './Paging';

export const Footer = () => {
  return (
    <motion.footer
      layout
      className='row-space p-4'
    >
      <div />
      <Paging />
    </motion.footer>
  );
};
