import { Results } from './results';
import { withProvider } from './context/withProvider';
import 'message-like-antd/src/theme/message.css';

export const Gallery = withProvider(
  () => (
    <>
      <Results />
    </>
  ),
);
