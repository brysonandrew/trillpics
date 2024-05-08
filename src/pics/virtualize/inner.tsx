import {
  forwardRef,
  PropsWithChildren,
  useImperativeHandle,
  useRef,
} from "react";
import clsx from "clsx";

export type TInnerHandle = {
  isHovering: () => boolean;
};

const Inner = forwardRef<
  TInnerHandle,
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
      <ul
        ref={ref}
        className={clsx(className)}
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
        onPointerOut={() => {
          eventRef.current.isHovering =
            false;
        }}
        style={{
          ...style,
        }}
        {...props}
      >
        {children}
      </ul>
    );
  }
);
Inner.displayName = "Inner";
export { Inner };
