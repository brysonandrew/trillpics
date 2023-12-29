import { Collection } from '@components/collection';
import { Inits } from '@components/collection/variants/Inits';

export const Main = () => {
  return (
    <main className='relative column'>
   
      <div className='py-16'>
        <Collection>
          <Inits />
        </Collection>
      </div>
    </main>
  );
};
