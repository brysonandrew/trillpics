import type { FC } from "react";

export const Empty: FC = () => {
  return (
    <div className="row gap-2 px-2 py-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M3 3h2v18H3zm16 0H5v2h14v14H5v2h16V3zm-8 6h2V7h-2zm2 8h-2v-6h2z"
        />
      </svg>
      Please select some pics
    </div>
  );
};
