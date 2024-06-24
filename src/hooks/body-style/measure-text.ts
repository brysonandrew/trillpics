import { useMemo } from "react";

export type TFontWeight =
  | "lighter"
  | "normal"
  | "bold"
  | "bolder";
export type TWeightSizeFamily = {
  weight: TFontWeight;
  size: string;
  family: string;
};

export type THandlerConfig = {
  content: string;
  weightSizeFamily: TWeightSizeFamily;
};
type THandler = ((
  config: THandlerConfig
) => null | number) & {
  canvas?: HTMLCanvasElement;
};
export const useMeasureTextWidth =
  () => {
    const context = useMemo(() => {
      const canvas =
        document.createElement(
          "canvas"
        );
      const context =
        canvas.getContext("2d");
      return context;
    }, []);

    const handler: THandler = ({
      content,
      weightSizeFamily,
    }: THandlerConfig) => {
      if (context) {
        const nextFont = Object.values(
          weightSizeFamily
        ).join(" ");
        context.font = nextFont;
        const textMetrics =
          context.measureText(content);
        const width = textMetrics.width;
        return Math.ceil(width);
      } else {
        return null;
      }
    };

    return handler;
  };
