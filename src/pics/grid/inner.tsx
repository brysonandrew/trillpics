import {
  forwardRef,
  PropsWithChildren,
  useImperativeHandle,
  useRef,
} from "react";
import clsx from "clsx";
import { useTrillPicsStore } from "~/store/middleware";

export type TInnerHandle = {
  isHovering(): boolean;
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
    const mutableRef =
      useRef<HTMLUListElement | null>(
        null
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
    const resolveRef = (
      instance: HTMLUListElement
    ) => {
      if (
        instance &&
        !mutableRef.current
      ) {
        mutableRef.current = instance;
      }
      // if (typeof ref === "function") {
      //   ref(instance);
      // } else if (ref) {
      //   ref.current = node;
      // }
    };
    return (
      <ul
      ref={ref}
        // ref={resolveRef}
        className={clsx(className)}
        onPointerOver={handleEnter}
        onPointerEnter={handleEnter}
        onPointerLeave={handleLeave}
        onPointerOut={handleLeave}
        style={{
          cursor: "pointer",
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
