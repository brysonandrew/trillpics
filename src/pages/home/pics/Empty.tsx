import { Delay } from "@/components/layout/layout-animaters";

export const Empty = () => {
  return (
    <Delay className="p-4 pointer-events-none">
      <kbd className="text-gray-1">
        No profiles
      </kbd>
    </Delay>
  );
};
