import { resolveCompositeKey } from '@brysonandrew/utils-key';

export const resolveOutlineKeys = (id: string) => {
  return {
    COLOR:resolveCompositeKey(id, 'COLOR'),
    THICKNESS:resolveCompositeKey(
      id,
      'THICKNESS'
    ),
    OUTLINE:resolveCompositeKey(
      id,
      'OUTLINE'
    ),
  };
};
