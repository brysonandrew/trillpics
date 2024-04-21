import type { FC } from "react";

export const ScrollbarSeam: FC = () => {
  return (
    <div className="fixed h-screen w-[14px] top-0 bottom-0 right-0 bg-gradient-to-l dark:bg-black bg-white-5 border-black dark:border-white-5 border-l" />
  );
};
