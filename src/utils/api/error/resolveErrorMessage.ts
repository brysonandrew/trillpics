import { TError } from '@t/index';
import message from 'message-like-antd';

const toMessage = (
  content: string,
  source: string,
) => `${content} ${source}`.trim();

export const resolveErrorMessage = (
  error: TError,
  source = '',
) => {
  console.log(error);
  if (typeof error === 'string')
    return toMessage(error, source);
  let content =
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof error.message === 'string' &&
    error.message;
  content = toMessage(error, source);
  if (content) {
    message.error(content);
  }
};
