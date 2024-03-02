import { ContactList } from '@brysonandrew/contact-list';
import {
  EMAIL,
  PHONE,
  PHONE_WITH_TRUNK,
} from './config';

export const Footer = () => {
  return (
    <footer className='relative w-container column-end py-16 z-50'>
      <ContactList
        isCopy
        email={EMAIL}
        phone={{
          display: PHONE,
          withTrunk: PHONE_WITH_TRUNK,
        }}
        classValue='gap-2'
        className="text-xs mt-1 mr-4"
      />
    </footer>
  );
};
