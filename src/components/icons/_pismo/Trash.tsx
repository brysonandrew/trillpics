import type { ClassValue } from "clsx";
import clsx from "clsx";
import type { FC, SVGAttributes } from "react";

type TProps = SVGAttributes<SVGSVGElement> & {
  classValue?: ClassValue;
};
export const Trash: FC<TProps> = ({
  classValue,
  ...props
}) => (
  <svg
    className={clsx(classValue)}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
  </svg>
);
