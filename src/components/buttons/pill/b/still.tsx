import { FC, MouseEvent } from "react";
import { motion } from "framer-motion";
import {
  PillB,
  TPillBProps,
} from "~/components/buttons/pill/b";
import { TButtonMotionProps } from "@brysonandrew/config-types";
const Root =
  motion.div as FC<TButtonMotionProps>;
const FakeButton: FC<
  TButtonMotionProps
> = ({ ...props }) => (
  <Root {...props} />
);

type TProps = TPillBProps;
export const PillBStill: FC<TProps> = ({
  title,
  children = title,
  ...props
}) => {
  const handleClick = (
    e: MouseEvent<HTMLButtonElement>
  ) => {
    console.log(e);
    if (props.onClick) {
      props.onClick(e);
    }
  };
  return (
    <PillB
      Root={FakeButton}
      title={title}
      onClick={handleClick}
      {...props}
    />
  );
};
