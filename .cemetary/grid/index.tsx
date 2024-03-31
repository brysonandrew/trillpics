import { GRID_CLASS_VALUE } from "@components/collection";
import { Pics } from "@components/collection/variants/Pics";
import clsx from "clsx";

export const Home = () => {
  return (
    <main className="relative w-full column">
      <div className="w-container">
        <ul
          className={clsx(
            "grid grid-cols-1",
            GRID_CLASS_VALUE
          )}
        >
          <Pics />
        </ul>
      </div>
    </main>
  );
};
