import { hoverChecksActive } from "~/store/state/hover/checks/active";
import { hoverChecksActiveKey } from "~/store/state/hover/checks/active/key";
import { cooldownEnd } from "~/store/state/hover/cooldown/end";
import {
  THoverKey,
  THoverMultiState,
} from "~/store/state/hover/types";
import { TStateHandler } from "~/store/types";
import { isDefined } from "~/utils/validation/is/defined";

export const hoverMultiState: TStateHandler<
  THoverMultiState
> = (set, get) => ({
  isActiveHover: false,
  hoverKeys: [],
  hoverCooldownKeys: [],
  isHover: (hoverKey: THoverKey) => {
    return get().hoverKeys.includes(
      hoverKey
    );
  },
  isHoverCooldown: (
    hoverKey: THoverKey
  ) => {
    return get().hoverCooldownKeys.includes(
      hoverKey
    );
  },
  hover: (hoverKey: THoverKey) => {
    const hoverKeys = isDefined(
      hoverKey
    )
      ? [hoverKey, ...get().hoverKeys]
      : [];

    set({
      hoverKeys:[hoverKey, ...get().hoverKeys],
      isActiveHover:
        get().hoverChecksActive({
          hoverKeys,
        }),
    });
  },
  unhover: (hoverKey: THoverKey) => {
    const prevHoverKeys =
      get().hoverKeys;
    if (prevHoverKeys.length === 0)
      return;
    const hoverKeys =
      prevHoverKeys.filter(
        (v:THoverKey|null) => v !== hoverKey
      );
    const hoverCooldownKeys =
      prevHoverKeys;
    set({
      hoverKeys,
      hoverCooldownKeys,
      isActiveHover:
        get().hoverChecksActive({
          hoverKeys,
          hoverCooldownKeys,
        }),
    });
  },
  hoverChecksActive:
    hoverChecksActive(get),
  hoverChecksActiveKey:
    hoverChecksActiveKey(get),
  cooldownEnd: cooldownEnd(set, get),
});
