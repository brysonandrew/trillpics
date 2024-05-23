import {
  forwardRef,
  PropsWithChildren,
  useImperativeHandle,
  useRef,
} from "react";
import clsx from "clsx";
import { useTrillPicsStore } from "~/store/middleware";

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
    const { hoverKeys, set } =
      useTrillPicsStore(
        ({ hoverKeys, set }) => ({
          hoverKeys,
          set,
        })
      );

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
    const handleEnter = () => {
      if (hoverKeys.length > 0) {
        set({ hoverKeys: [] });
      }
      eventRef.current.isHovering =
        true;
    };
    const handleLeave = () => {
      // if (hoverKeys.length > 0) {
      //   set({ hoverKeys: [] });
      // }
      eventRef.current.isHovering =
        false;
    };
    return (
      <ul
        ref={ref}
        className={clsx(className)}
        onPointerOver={handleEnter}
        onPointerEnter={handleEnter}
        onPointerLeave={handleLeave}
        onPointerOut={handleLeave}
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
