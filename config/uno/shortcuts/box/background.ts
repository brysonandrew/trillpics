export const SHORTCUTS_BOX_BACKGROUND_IMAGE =
  {
    "_weave-gradient":
      "dark:_dark-gradient-weave _light-gradient-weave",
    "_radial-gradient":
      "dark:_dark-radial-gradient _light-radial-gradient",
  };

export type TBackgroundImageShortcut =
  keyof typeof SHORTCUTS_BOX_BACKGROUND_IMAGE;

export const SHORTCUTS_BOX_BACKGROUND_COLOR =
  {
    "background-flat":
      "dark:bg-black-04 bg-gray-04",
    background:
      "dark:bg-black-06 bg-gray-06",
  };

export type TBackgroundColorShortcut =
  keyof typeof SHORTCUTS_BOX_BACKGROUND_COLOR;
