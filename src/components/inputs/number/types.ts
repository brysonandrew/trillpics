import { TClassValueProps, TInputProps, TTitleProps } from "@brysonandrew/config-types";
import { FC, PropsWithChildren } from "react";
import { InputsBox } from "~/components/inputs/box";
import { InputsBoxTitle } from "~/components/inputs/box/title";
import { TNumberInputProps, TInputSizeProps } from "~/components/inputs/number/input";
import { TInputsNumberSliderProps } from "~/components/inputs/number/slider";
import { TUpdateNumberHandler } from "~/components/inputs/slider/types";

export type TInputRangeProps = Record<
  "min" | "max" | "step",
  number
>;
export type TInputsNumberBaseProps =
  TInputRangeProps & {
    defaultValue?: number | string;
  };
  
export type TSliderFc = FC<
  Partial<TInputsNumberSliderProps>
>;
export type TNumberInputFc = FC<
  Partial<TNumberInputProps>
>;
export type TInputsNumberChildrenProps =
  {
    Box: FC<PropsWithChildren>;
    Background: FC;
    Info: FC;
    Header: typeof InputsBox;
    Title: typeof InputsBoxTitle;
    Number: TNumberInputFc;
    Slider: TSliderFc;
  };

export type TInputsNumberProps =
  TInputSizeProps &
    Omit<TInputProps, "children"> &
    TTitleProps & TClassValueProps &
    TInputsNumberBaseProps & {
      name: string;
      onUpdate: TUpdateNumberHandler;
      replacer?: (
        value: number
      ) => string;
      children?(
        props: TInputsNumberChildrenProps
      ): JSX.Element;
    };