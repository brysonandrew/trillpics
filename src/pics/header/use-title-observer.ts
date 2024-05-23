import {
  useState,
  useEffect,
} from "react";

export const useTitleObserver = () => {
  const [title, setTitle] = useState<
    string | null
  >(document.title);

  useEffect(() => {
    const titleElement =
      document.querySelector("title");
    if (!titleElement) return;
    new MutationObserver(function (
      mutations
    ) {
      for (const mutation of mutations) {
        if (
          mutation.target
            .textContent !== title
        ) {
          setTitle(
            mutation.target.textContent
          );
        }
      }
    }).observe(titleElement, {
      subtree: true,
      characterData: true,
      childList: true,
    });
  }, [document.title]);

  return title;
};
export type TUseTitleObserverResult =
  ReturnType<typeof useTitleObserver>;
