import { FC, useRef } from "react";
import { motion } from "framer-motion";
import {
  PillB,
  TPillBProps,
} from "~/components/buttons/pill/b";
import { FADE_PRESENCE_DELAY_02 } from "~/constants/animation";
import { useHoverKey } from "~/hooks/use-hover-key";

type TProps = TPillBProps;
export const PillBHover: FC<TProps> = ({
  title,
  children = title,
  ...props
}) => {
  const { handlers, isHover } =
    useHoverKey();
  // const hasLeftRef = useRef(false);
  // const handleMouseLeave = () => {
  //   hasLeftRef.current = true;
  // };
  return (
    <PillB
      title={title}
      // onMouseOut={handleMouseLeave}
      {...handlers(title)}
      {...props}
    >
      {isHover(title) ? (
        //&&
        // hasLeftRef.current
        <>
          <motion.div
            className="relative row gap-2 mr-2 -mb-0.75 whitespace-nowrap"
            {...FADE_PRESENCE_DELAY_02}
          >
            {children}
          </motion.div>
        </>
      ) : (
        ""
      )}
    </PillB>
  );
};
