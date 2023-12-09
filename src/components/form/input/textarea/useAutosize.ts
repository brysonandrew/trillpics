import {
  useEffect,
  useState,
} from 'react';

type TConfig = {
  textarea: HTMLTextAreaElement | null;
  value: string;
  isResizing?: boolean;
};
export const useAutosize = ({
  textarea,
  value,
  isResizing,
}: TConfig) => {
  const [isInit, setInit] =
    useState(false);

  useEffect(() => {
    if (
      textarea !== null &&
      !isResizing
    ) {
      const clone = textarea.cloneNode(
        true,
      ) as HTMLDivElement;
      textarea.after(clone);
      clone.style.height = '0px';
      const next = `${clone.scrollHeight}px`;
      textarea.style.height = next;
      clone.remove();
      if (!isInit) {
        setInit(true);
      }
    }
  }, [textarea, value, isResizing]);

  return isInit;
};
