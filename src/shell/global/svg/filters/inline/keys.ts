import { resolveCompositeKey } from '@brysonandrew/utils-key';

export const resolveInlineKeys = (id: string) => {
  return {
    COLOR:resolveCompositeKey(id, 'COLOR'),
    EROSION:resolveCompositeKey(
      id,
      'EROSION'
    ),
    OUTLINE:resolveCompositeKey(
      id,
      'OUTLINE'
    ),
  };
};
