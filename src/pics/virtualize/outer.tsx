import {
  forwardRef,
  PropsWithChildren,
  useImperativeHandle,
  useRef,
} from "react";
import clsx from "clsx";

export type TOuterHandle = {
  isHovering: () => boolean;
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
    const eventRef = useRef<{
      isHovering: boolean;
    }>({ isHovering: false });

    const sourceRef =
      useRef<null | HTMLDivElement>(
        null
      );
    const source = sourceRef.current;
    useImperativeHandle(
      ref,
      () => {
        return {
          isHovering: () => {
            return eventRef.current
              .isHovering;
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
          // ...MOTION_BLUR_FILTER_X_PROPS,
        }}
        ref={(instance) => {
          if (instance && !source) {
            sourceRef.current =
              instance;
          }
        }}
        onPointerOver={() => {
          eventRef.current.isHovering =
            true;
        }}
        onPointerEnter={() => {
          eventRef.current.isHovering =
            true;
        }}
        onPointerLeave={() => {
          eventRef.current.isHovering =
            false;
        }}
        
        {...props}
      >
        {children}
      </div>
    );
  }
);
Outer.displayName = "Outer";
export { Outer };
