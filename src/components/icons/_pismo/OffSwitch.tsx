import { TIconsSvgProps } from "~/components/icons/svg";
import { IconsSvgGradient14vb24 } from "~/components/icons/svg/gradient/14vb24";

type TProps = TIconsSvgProps;
export const OffSwitch = ({
  ...props
}: TProps) => (
  <IconsSvgGradient14vb24
    viewBox="0 0 512 512"
    size={10}
    {...props}
    d="M279.273,0.593v184.995c0,12.87-10.403,23.273-23.273,23.273s-23.273-10.403-23.273-23.273V0.593 C102.26,12.369,0,121.891,0,255.407c0,141.405,114.618,256,256,256s256-114.595,256-256C512,121.891,409.74,12.369,279.273,0.593z"
  />
);
