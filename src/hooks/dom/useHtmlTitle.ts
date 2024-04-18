import { useLocation } from 'react-router';
import {
  useEffect,
  useRef,
} from 'react';
import { APP_TITLE } from '~/app/base';

const TITLE_FROM_PATHNAME_LOOKUP: Record<
  string,
  string | null
> = {
  '/': `${APP_TITLE} store`,
};

export const useHtmlTitle = () => {
  const prevTimestampRef = useRef(0);

  const { pathname } = useLocation();
  const route =
    TITLE_FROM_PATHNAME_LOOKUP[
      pathname
    ];

  useEffect(() => {
    // const fetchIp = async () => {
    //   const ip = await fetch(
    //     'https://api.ipify.org?format=json',
    //   );
    //   console.log(ip);

    //   const json = await ip.json();
    //   console.log(json);
    // };
    // fetchIp();
    const insertEntry = async () => {
      try {
      } catch (error) {
        console.log(error);
      }
    };
    const timestamp = Date.now();
    const prevTimestamp =
      prevTimestampRef.current;
    const diff =
      timestamp - prevTimestamp;
    if (
      diff > 1000 &&
      !import.meta.env.DEV
    ) {
      insertEntry();
    }
  }, []);
  return APP_TITLE;
};
