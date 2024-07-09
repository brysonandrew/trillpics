export const SHORTCUTS_BOX_BACKGROUND_IMAGE =
  {
    "_bi-mesh":
      "dark:_dark-gradient-mesh _light-gradient-mesh",
    "_bi-mesh-inverted":
      "dark:_light-gradient-mesh _dark-gradient-mesh",
    "_bi-radial":
      "dark:_dark-radial-gradient _light-radial-gradient",
    "_bi-radial-inverted":
      "dark:_light-radial-gradient _dark-radial-gradient",
  };

export type TBackgroundImageShortcut =
  keyof typeof SHORTCUTS_BOX_BACKGROUND_IMAGE;

export const SHORTCUTS_BOX_BACKGROUND_COLOR =
  {
    "_bc-flat":
      "dark:bg-black-04 bg-gray-04",
    "_bc-blank":
      "dark:bg-black-06 bg-gray-06",
  };

export type TBackgroundColorShortcut =
  keyof typeof SHORTCUTS_BOX_BACKGROUND_COLOR;
