import {
  forwardRef,
  PointerEventHandler,
  PropsWithChildren,
  useImperativeHandle,
  useRef,
} from "react";
import clsx from "clsx";
import { useTrillPicsStore } from "~/store/middleware";
import { useContextGrid } from "~/context";

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
    const { main, scrollY } =
      useContextGrid();
    const {
      hoverKeys,
      set,
      toggleOnscreen,
    } = useTrillPicsStore(
      ({
        hoverKeys,
        set,
        toggleOnscreen,
      }) => ({
        hoverKeys,
        set,
        toggleOnscreen,
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
    const handleEnter: PointerEventHandler<
      HTMLUListElement
    > = (e) => {
      main.cursor.isOnGrid = true;

      const target = e.currentTarget;
      const bb =
        target.getBoundingClientRect();
      scrollY.set(bb.top);
      toggleOnscreen(true);
      // console.log("enter", e);
      if (hoverKeys.length > 0) {
        set({ hoverKeys: [] });
      }
      // eventRef.current.isHovering =
      //   true;

      main.cursor.x.set(e.pageX);
      main.cursor.y.set(e.pageY);
    };
    const handleLeave: PointerEventHandler<
      HTMLUListElement
    > = (e) => {
      // console.log(e);
      main.cursor.x.set(e.pageX);
      main.cursor.y.set(e.pageY);
      main.cursor.isOnGrid = false;

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
