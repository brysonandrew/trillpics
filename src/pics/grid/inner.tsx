import {
  forwardRef,
  PointerEventHandler,
  PropsWithChildren,
  useImperativeHandle,
  useRef,
} from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useTrillPicsStore } from "~/store/middleware";
import { useContextReady } from "~/shell/ready/context";
import { MOTION_BLUR_SHUFFLE_PROPS } from "~/shell/init/svg/filters/blur/constants";

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
      useContextReady();
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

      if (hoverKeys.length > 0) {
        set({ hoverKeys: [] });
      }
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
      <motion.ul
        ref={ref}
        className={clsx(className)}
        onPointerOver={handleEnter}
        onPointerEnter={handleEnter}
        onPointerLeave={handleLeave}
        onPointerOut={handleLeave}
        // animate={{
        //   opacity:
        //     hoverKeys.length > 0
        //       ? 0.1
        //       : 1,
        // }}
        
        style={{
          cursor: "pointer",
          // ...DUO_TONE_PROPS,
          ...MOTION_BLUR_SHUFFLE_PROPS,
          ...style,
        }}
        {...props}
      >
        {children}
      </motion.ul>
    );
  }
);
Inner.displayName = "Inner";
export { Inner };
