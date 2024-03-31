import { TColorKey } from '@app/color';
import { css } from '@emotion/react';

type TConfig = {
  primary: TColorKey;
  secondary: TColorKey;
  shadow: TColorKey;
  thumbSize: number;
} & any;
export const resolveInputTrackCss = ({
  primary,
  secondary,
  shadow,
  thumbSize,
}: TConfig) => {
  return css`
    &::-ms-track {
      width: 100%;
      cursor: pointer;
      background: transparent;
      border-color: transparent;
      color: transparent;
    }

    &::-webkit-slider-runnable-track {
      width: 100%;
      height: ${thumbSize - 2}px;
      cursor: pointer;
      box-shadow: 0px 0px 1px ${primary};
      background-color: ${secondary};
      border-radius: 1.3px;
      border: 0.2px solid var(--black-1);
    }

    &:focus::-webkit-slider-runnable-track {
      background-color: ${secondary};
    }

    &::-moz-range-track {
      width: 100%;
      height: ${thumbSize - 2}px;
      cursor: pointer;
      box-shadow: 0px 0px 1px ${primary};
      background-color: ${secondary};
      border-radius: 1.3px;
      border: 0.2px solid var(--black-1);
    }

    &::-ms-track {
      width: 100%;
      height: ${thumbSize - 2}px;
      cursor: pointer;
      background-color: transparent;
      border-color: transparent;
      border-width: ${thumbSize - 2}px 0;
      color: transparent;
    }
    &::-ms-fill-lower {
      background-color: ${secondary};
      border: 0.2px solid var(--black-1);
      border-radius: 2.6px;
      box-shadow: 0px 0px 1px ${primary};
    }
    &:focus::-ms-fill-lower {
      background: ${secondary};
    }
    &::-ms-fill-upper {
      background-color: ${secondary};
      border: 0.2px solid var(--black-1);
      border-radius: 2.6px;
      box-shadow: 0px 0px 1px ${primary};
    }
    &:focus::-ms-fill-upper {
      background: ${secondary};
    }
  `;
};

export const resolveInputThumbCss = ({
  primary,
  secondary,
  shadow,
  thumbSize,
}: TConfig) => css`
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  &:focus {
    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
  }
  /* Special styling for WebKit/Blink */
  &::-webkit-slider-thumb {
    pointer-events: all;
    -webkit-appearance: none;
    border: 1px solid var(--gray);
    height: ${thumbSize - 2}px;
    width: ${thumbSize - 2}px;
    border-radius: 3px;
    background-color: ${primary};
    cursor: pointer;
    box-shadow: 1px 1px 1px ${shadow},
      0px 0px 1px ${primary}; /* Add cool effects to your sliders! */
  }

  /* All the same stuff for Firefox */
  &::-moz-range-thumb {
    pointer-events: all;
    box-shadow: 1px 1px 1px ${shadow},
      0px 0px 1px ${primary};
    border: 1px solid var(--gray);
    height: ${thumbSize - 2}px;
    width: ${thumbSize - 2}px;
    border-radius: 3px;
    background-color: ${primary};
    cursor: pointer;
  }

  /* All the same stuff for IE */
  &::-ms-thumb {
    pointer-events: all;
    box-shadow: 0px 0px 1px ${primary};
    border: 1px solid var(--gray);
    height: ${thumbSize - 2}px;
    width: ${thumbSize - 2}px;
    border-radius: 3px;
    background-color: ${primary};
    cursor: pointer;
  };
`;
