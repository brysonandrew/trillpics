import { Results } from './results';
import { withProvider } from './context/withProvider';

export const Gallery = withProvider(
  () => <Results />,
);
