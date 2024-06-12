import type {
  TMusicState,
  TReducerAction,
} from "./types";

export const reducer = (
  state: TMusicState,
  { type, value }: TReducerAction
) => {
  switch (type) {
    case "toggle-ready": {
      return {
        ...state,
        isReady: value,
      };
    }
    case "playing": {
      return {
        ...state,
        playKey: value,
      };
    }
    case "update-options": {
      return {
        ...state,
        options: {
          ...state.options,
          ...value,
        },
      };
    }
    case "update-multi": {
      return {
        ...state,
        multi: {
          ...state.multi,
          ...value,
        },
      };
    }
    default: {
      console.error(type);
      throw new Error(
        `⚠ Action type invalid. ${type}`
      );
    }
  }
};
