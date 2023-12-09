import { useEffect, useState } from "react";

export const useDomCondition = (handler: () => boolean) => {
  const [is, setIs] = useState<boolean | null>(null);

  useEffect(() => {
    const result = handler();
    setIs(result);
  }, []);

  return is;
};
