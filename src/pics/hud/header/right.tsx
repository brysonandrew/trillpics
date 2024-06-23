import { FC } from "react";
import { box } from "~uno/rules/box";
import { LinesHorizontal } from "~/components/lines/horizontal";
import { LinesTopRight } from "~/components/lines/top-right";
import { THudContainer } from "~/pics/hud";
import { resolveCompositeKey } from "@brysonandrew/utils-key";
import { NAV_ITEMS } from "~/pics/hud/nav/constants";
import { useLocation } from "react-router";
import { PicsHudFooterNavSelected } from "~/pics/hud/nav/selected";

type TProps = {
  container: THudContainer;
  foundation: DOMRect;
};
export const PicsHudHeaderRight: FC<
  TProps
> = ({ foundation, container }) => {
  
  const { pathname } = useLocation();
  return (
    <div
      key="header-right"
      className="absolute row-start h-0"
      style={{
        left: foundation.width + box.m05,
        width:
          container.width -
          foundation.width,
        top: box.m05,
        gap: box.m05,
      }}
    >
      <LinesHorizontal
        classValue="hidden lg:flex"
        sizeClass="border-t"
      />
      {NAV_ITEMS.map(
        (
          [Icon, _, title],
          index,
          arr
        ) => {
          const selectedIndex =
            arr.findIndex(
              ([_, to]) =>
                to === pathname
            );
          const isSelected =
            selectedIndex === index;

          if (isSelected)
            return (
              <PicsHudFooterNavSelected
                key={resolveCompositeKey(
                  "selected",
                  title
                )}
                title={title}
                Icon={Icon}
                container={container}
              />
            );
          return null;
        }
      )}
      {/* <HeaderSubtitle classValue="hidden lg:flex" /> */}
      <LinesTopRight
        container={container}
      />
    </div>
  );
};
