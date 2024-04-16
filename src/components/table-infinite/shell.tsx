import {
  HTMLAttributes,
  forwardRef,
} from "react";

export const TableInfiniteShell =
  forwardRef<
    HTMLDivElement,
    HTMLAttributes<HTMLDivElement>
  >(({ children, ...props }, ref) => {
    return (
      <>
        <div {...props} ref={ref}>
          <div
            className="z-10"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            {children}
          </div>
        </div>
      </>
    );
  });

TableInfiniteShell.displayName =
  "TableInfiniteShell";
