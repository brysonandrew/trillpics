import { TError } from '@brysonandrew/config-types';
import { toast } from 'react-hot-toast';

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
    toast.error(content);
  }
};
