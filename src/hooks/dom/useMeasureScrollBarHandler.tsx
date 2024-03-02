import { useEffect } from 'react';

export const useMeasureScrollBarHandler =
  () => {
    const handler = () => {
      // const root =
      //   document.getElementById('root');
      // console.log('RUNNING');
      // if (root !== null) {
      //   const hs =
      //     root.scrollWidth >
      //     root.clientWidth;
      //   const vs =
      //     root.scrollHeight >
      //     root.clientHeight;

      //   console.log(
      //     `ROOT: 'Horizontal Scrollbar - '${hs} Vertical Scrollbar - ${vs}'`,
      //   );
      // }
      // const body = document.body;
      // console.log('RUNNING');
      // if (body !== null) {
      //   const hs =
      //     body.scrollWidth >
      //     body.clientWidth;
      //   const vs =
      //     body.scrollHeight >
      //     body.clientHeight;
      //   console.log(
      //     `BODY: 'Horizontal Scrollbar - '${hs} Vertical Scrollbar - ${vs}'`,
      //   );
      // }

      const d =
        document.documentElement;
      console.log('RUNNING');

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
    };
    useEffect(() => {
      handler();
    }, []);

    return handler;
  };
