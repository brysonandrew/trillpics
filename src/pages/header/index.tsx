import { I } from '@components/Icon';
import { B } from '@components/interactive/B';
import { Title3 } from '@components/layout/text/Title3';

export const Header = () => {
  return (
    <header className='w-container row-space'>
      <Title3>
        <kbd className='text-xl italic'>
          gypsydrip
        </kbd>
      </Title3>
      <div>
        <B>
          <I icon='line-md:light-dark' />
        </B>
      </div>
    </header>
  );
};
