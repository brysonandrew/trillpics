import type { FC } from "react";

export const ShellGlobalBackground: FC =
  () => {
    return (
      <div
        className="fill bg-black-7 dark:bg-black-3"
        style={{
          minHeight: "100vh",
        }}
      >
        {/* <div
          style={{ opacity: 0.4 }}
          className="fill _gradient-mesh"
        /> */}

        {/* <div style={{opacity: 0.05}} className="fill inset-0 _gradient-radial-inverted dark:opacity-20" /> */}
      </div>
    );
  };
