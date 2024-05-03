import type { FC } from "react";
import styled from "@emotion/styled";
import { carbonFiberCss } from "~/css/carbon/textures";
import { TDivProps } from "@brysonandrew/config-types";

const Root = styled.div``;
const Dark = styled.div`
  background-color: var(--black);
`;
const Light = styled.div`
  background-color: var(--white);
`;
const Texture = styled.div`
  ${carbonFiberCss}/* opacity: 0.4; */
`;

export const Carbon: FC<TDivProps> = (
  props
) => {
  return (
    <>
      <Root
        className="_gradient-mesh"
        {...props}
      />
      {/* <Metal {...props} /> */}
      <Texture {...props} />
    </>
  );
};
