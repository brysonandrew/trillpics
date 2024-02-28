import { List } from './list';
import { withProvider } from './context/withProvider';
import { Boundary } from '@components/boundary';

export const Results = withProvider(
  () => {
    return (
      <Boundary>
        <List />
      </Boundary>
    );
  },
);
  