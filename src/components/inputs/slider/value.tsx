import { type FC } from "react";
import { TPillProps } from "~/components/layout/pill";
import { MeshBackgroundText } from "~/components/layout/background/mesh/text";

type TProps = TPillProps;
export const UiInputsSliderValue: FC<
  TProps
> = ({ children }) => {
  return (
    <MeshBackgroundText classValue='text-sm'>
      {children}
    </MeshBackgroundText>
  );
};
