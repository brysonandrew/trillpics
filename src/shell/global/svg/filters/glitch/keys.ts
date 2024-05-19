import { resolveCompositeKey } from '@brysonandrew/utils-key';

export const resolveBlurMotionKeys = (id: string) => {
  const TURBULANCE_KEY = resolveCompositeKey(
    id,
    'TURBULANCE'
  );
  
  const MORPH_KEY = resolveCompositeKey(id, 'MORPH');
  const DISPLACEMENT_KEY = resolveCompositeKey(
    id,
    'DISPLACEMENT'
  );
  const OFFSET_KEY = resolveCompositeKey(id, 'OFFSET');
  const COMPOSITE_KEY = resolveCompositeKey(
    id,
    'COMPOSITE'
  );
  return {
    TURBULANCE_KEY,
    MORPH_KEY,
    DISPLACEMENT_KEY,
    OFFSET_KEY,
    COMPOSITE_KEY
  };
};
