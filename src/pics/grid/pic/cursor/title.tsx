import type {
  FC,
  PropsWithChildren,
} from "react";
import { TypographyBordered } from "~/components/typography/bordered";

export const PicCursorTitle: FC<
  PropsWithChildren
> = ({ children }) => {
  return (
    <TypographyBordered
      classValue="text-main-inverted"
      shadow={{
        classValue: "text-gray-9",
      }}
    >
      {children}
    </TypographyBordered>
  );
};
