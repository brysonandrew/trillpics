import type {
  FC,
  PropsWithChildren,
} from "react";
import { PillBText } from "~/components/buttons/pill/b/text";
import { box } from "~uno/rules/box";

export const MusicLayoutHeaderTitleText: FC<
  PropsWithChildren
> = ({ children }) => {
  return (
    <PillBText
    textSizeClass="text-xl"
    style={{ top: box.m0125 / 2 }}
  >
    {children}
  </PillBText>
  );
};
