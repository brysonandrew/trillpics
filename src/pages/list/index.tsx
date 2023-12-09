import { Results } from './results';
import { withProvider } from './context/withProvider';
import { Notifications } from '@components/notifications';
import 'message-like-antd/src/theme/message.css';

export const List = withProvider(() => (
  <>
    <Results />
    <Notifications />
  </>
));
