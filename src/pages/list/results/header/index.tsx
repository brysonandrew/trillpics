import { Title2 } from '@components/layout/text/Title2';
import { motion } from 'framer-motion';

export const Header = () => {
  return (
    <motion.header layout className='row-space p-4'>
      <Title2>PRINTS ANDREW</Title2>
    </motion.header> 
  );
};
