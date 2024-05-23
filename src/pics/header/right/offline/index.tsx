import type { FC } from "react";
import { IconsOffline } from "~/components/icons/offline";

export const OfflineFc: FC = () => {
  return (
    <div className="absolute left-0 top-full row gap-3 h-6 text-xs uppercase char-gap-5 whitespace-nowrap">
      <IconsOffline strokeWidth={0.1} stroke="#FFFFFF" />
      <span>
       you are offline
      </span>
    </div>
  );
};
