import { FC } from "react";
import { motion } from "framer-motion";
import {
  PillB,
  TPillBProps,
} from "~/components/buttons/pill/b";
import { FADE_PRESENCE_DELAY_02 } from "~/constants/animation";
import { useHoverKey } from "~/hooks/use-hover-key";
import { isDefined } from "~/utils/validation/is/defined";

type TProps = TPillBProps;
export const PillBHover: FC<TProps> = ({
  title,
  children = title,
  disabled,
  ...props
}) => {
  const { motionHandlers, isHover } =
    useHoverKey();
  // const hasLeftRef = useRef(false);
  // const handleMouseLeave = () => {
  //   hasLeftRef.current = true;
  // };
  const isHovering =
    isDefined<typeof title>(title) &&
    isHover(title);
  return (
    <PillB
      title={title}
      // onMouseOut={handleMouseLeave}
      {...motionHandlers(title)}
      {...props}
    >
      {isHovering ? (
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
