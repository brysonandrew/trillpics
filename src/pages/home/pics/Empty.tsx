import { Delay } from '@components/layout/pieces/Piece';

export const Empty = () => {
  return (
    <Delay className='p-4 pointer-events-none'>
      <kbd className='text-gray-1'>
        No profiles generated
      </kbd>
    </Delay>
  );
};
