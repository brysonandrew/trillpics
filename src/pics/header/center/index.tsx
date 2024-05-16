import type { FC } from "react";
import { LinesHorizontal } from "~/pages/video/_common/footer/nav/lines/horizontal";
import { HeaderSubtitle } from "~/pics/header/subtitle";

export const HeaderCenter: FC = () => {
  return (
    <>
      <LinesHorizontal
        classValue="opacity-50"
        // style={{
        //   top: size / 2,
        // }}
      />
      <HeaderSubtitle />

      <LinesHorizontal
        classValue="opacity-50"
        // style={{
        //   top: size / 2,
        // }}
      />
    </>
  );
};
