
import { TRANSITION_02_EASE_IN_04, PRESENCE_OPACITY, TRANSITION_02_EASE_IN_02 } from "@brysonandrew/motion-config-constants";
import { resolvePresence } from "~/utils/animation";

export const DURATION = 0.2;

export const TRANSITION = {
  duration: DURATION,
  ease: "linear",
};

export const DELAY_TRANSITION = {
  ...TRANSITION,
  delay: TRANSITION.duration,
};

export const FADE_PRESENCE_WITH_DELAY =
  resolvePresence(
    {
      opacity: 0,
      transition: DELAY_TRANSITION,
    },
    {
      opacity: 1,
      transition: DELAY_TRANSITION,
    }
  );

export const FADE_PRESENCE =
  resolvePresence(
    { opacity: 0 },
    { opacity: 1 }
  );
export const FADE_PRESENCE_DELAY_04 = {
  ...FADE_PRESENCE,
  animate: {
    ...FADE_PRESENCE.animate,
    transition:
      TRANSITION_02_EASE_IN_04,
  },
};
export const MOTION_CONFIG = {
  transition: TRANSITION,
};
export const FADE_PRESENCE_05 =
  resolvePresence(
    { opacity: 0 },
    { opacity: 0.5 }
  );
export const FADE_PRESENCE_05_DELAY_04 =
  {
    ...FADE_PRESENCE_05,
    animate: {
      ...FADE_PRESENCE_05.animate,
      transition:
        TRANSITION_02_EASE_IN_04,
    },
  };

export const PRESENCE_OPACITY_ANIMATE_DELAY_02 =
  {
    ...PRESENCE_OPACITY,
    animate: {
      ...PRESENCE_OPACITY.animate,
      transition:
        TRANSITION_02_EASE_IN_02,
    },
  };

export const FADE_PRESENCE_DELAY_02 = {
  ...FADE_PRESENCE,
  transition: TRANSITION_02_EASE_IN_02,
};
