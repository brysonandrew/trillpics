import {
  forwardRef,
  PropsWithChildren,
  useImperativeHandle,
  useRef,
} from "react";
import clsx from "clsx";
import { MOTION_BLUR_FILTER_SCROLL_Y_PROPS } from "~/shell/init/svg/filters/blur/constants";

export type TOuterHandle = {
  scrollTo(next: number): void;
  disableScroll(): void;
  enableScroll(): void;
};
const Outer = forwardRef<
  TOuterHandle,
  PropsWithChildren<any>
>(
  (
    {
      children,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const eventRef = useRef<any>(null);

    // const sourceRef =
    //   useRef<null | HTMLDivElement>(
    //     null
    //   );
    // const source = sourceRef.current;
    useImperativeHandle(
      ref,
      () => {
        return {
          disableScroll: () => {
            // console.log(sourceRef.current)
            if (!eventRef.current)
              return;

            (
              eventRef.current
                .style as CSSStyleDeclaration
            ).setProperty(
              "overflow",
              "hidden"
            );
          },
          enableScroll: () => {
            // console.log(sourceRef.current)
            if (!eventRef.current)
              return;
            (
              eventRef.current
                .style as CSSStyleDeclaration
            ).setProperty(
              "overflow",
              "auto"
            );
          },
          scrollTo: (next: number) => {
            eventRef.current.scrollTop =
              next;
          },
        };
      },
      []
    );
    return (
      <div
        className={clsx(className)}
        style={{
          ...style,
          ...MOTION_BLUR_FILTER_SCROLL_Y_PROPS,

          // ...MOTION_BLUR_FILTER_SCROLL_PROPS,
          // ...MOTION_BLUR_FILTER_X_PROPS,
        }}
        ref={eventRef}
        // ref={(instance) => {
        //   if (instance && !source) {
        //     sourceRef.current =
        //       instance;
        //   }
        // }}
        // onPointerOver={() => {
        //   eventRef.current.isHovering =
        //     true;
        // }}
        // onPointerEnter={() => {
        //   eventRef.current.isHovering =
        //     true;
        // }}
        // onPointerLeave={() => {
        //   eventRef.current.isHovering =
        //     false;
        // }}

        {...props}
      >
        {children}
      </div>
    );
  }
);
Outer.displayName = "Outer";
export { Outer };
