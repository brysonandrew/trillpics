import { useEffect } from 'react';

export const useFreezeScrollBar = (
  isDisabled = false,
) => {
  useEffect(() => {
    const setOverflow = (
      next: 'hidden' | 'unset',
    ) => {
      document.documentElement.style.overflow =
        next;
      document.body.style.overflow =
        next;
      const d =
        document.documentElement;

      if (d !== null) {
        const hs =
          d.scrollWidth > d.clientWidth;
        const vs =
          d.scrollHeight >
          d.clientHeight;
        if (hs) {
          console.log(
            `DOC: 'Horizontal Scrollbar - '${hs}`,
          );
        }
        if (vs) {
          console.log(
            `DOC: 'Vertical Scrollbar - ${vs}'`,
          );
        }
      }
      const body = document.body;
      if (body !== null) {
        const hs =
          body.scrollWidth >
          body.clientWidth;
        const vs =
          body.scrollHeight >
          body.clientHeight;
        if (hs) {
          console.log(
            `BODY: 'Horizontal Scrollbar - '${hs}`,
          );
        }
        if (vs) {
          console.log(
            `BODY: 'Vertical Scrollbar - ${vs}'`,
          );
        }
      }
    };

    if (isDisabled) {
      setOverflow('unset');
    } else {
      setOverflow('hidden');
    }
    return () => {
      setOverflow('unset');
    };
  }, [isDisabled]);
};
