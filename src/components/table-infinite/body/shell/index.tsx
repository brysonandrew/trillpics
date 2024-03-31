import {
  HTMLAttributes,
  forwardRef,
} from "react";
import { Footer } from "@pages/home/footer";
import { Header } from "@shell/header";
import { Context } from "./Context";

export const Shell = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ children, ...rest }, ref) => {
  return (
    <>
      <div {...rest} ref={ref}>
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

Shell.displayName = "Shell";

export { Context };
