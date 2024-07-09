import { useEventListener } from "@brysonandrew/hooks-events";

type TConfig = any;
export const usePreventVideoEffect = (config: TConfig) => {
  const h = (event: DocumentEventMap['DOMContentLoaded']) => {
    console.log(event,'DOMContentLoaded');
    window.scrollTo({top:500});// testing
  };
  useEventListener<'DOMContentLoaded'>('DOMContentLoaded', h, {
    current: document,
  });
};
