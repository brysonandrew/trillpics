import { useEffect } from "react";

export const useBodyStyle = (
  style: string
) => {
  useEffect(() => {
    document.body.setAttribute(
      "style",
      style
    );

    return () => {
      document.body.setAttribute(
        "style",
        "unset"
      );
    };
  }, [style]);
};
