import {
  TRANSITION_02_EASE_IN_04,
  PRESENCE_OPACITY,
  TRANSITION_02_EASE_IN_02,
} from "@brysonandrew/motion-config-constants";
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

export const DELAY_TRANSITION_PROPS = {
  transition: {
    ...TRANSITION,
    delay: TRANSITION.duration,
  },
};

export const DELAY_04_TRANSITION_PROPS = {
  transition: {
    ...TRANSITION,
    delay: TRANSITION.duration*2,
  },
};
export const DELAY_06_TRANSITION_PROPS = {
  transition: {
    ...TRANSITION,
    delay: TRANSITION.duration*3,
  },
};

export const FADE_PRESENCE_WITH_DELAY =
  resolvePresence(
    {
      opacity: 0,
      ...DELAY_TRANSITION_PROPS,
    },
    {
      opacity: 1,
      ...DELAY_TRANSITION_PROPS,
    }
  );

export const FADE_PRESENCE =
  resolvePresence(
    { opacity: 0 },
    { opacity: 1 }
  );

export const FADE_PRESENCE_DELAY_04_TRANSITION =
  {
    transition:
      TRANSITION_02_EASE_IN_04,
  };

export const FADE_PRESENCE_DELAY_02_TRANSITION =
  {
    transition:
      TRANSITION_02_EASE_IN_02,
  };
export const FADE_PRESENCE_DELAY_04 = {
  ...FADE_PRESENCE,
  animate: {
    ...FADE_PRESENCE.animate,
    ...FADE_PRESENCE_DELAY_04_TRANSITION,
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
      ...FADE_PRESENCE_DELAY_04_TRANSITION,
    },
  };

export const PRESENCE_OPACITY_ANIMATE_DELAY_02 =
  {
    ...PRESENCE_OPACITY,
    animate: {
      ...PRESENCE_OPACITY.animate,
      ...FADE_PRESENCE_DELAY_02_TRANSITION,
    },
  };

export const FADE_PRESENCE_DELAY_02 = {
  ...FADE_PRESENCE,
  ...FADE_PRESENCE_DELAY_02_TRANSITION,
};
export const PRESENCE_OPACITY_04 = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 0.4,
  },
  exit: {
    opacity: 0,
  },
};
export const PRESENCE_OPACITY_06 = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 0.6,
  },
  exit: {
    opacity: 0,
  },
};