// Code adapted from:
// https://phrase.com/blog/posts/detecting-a-users-locale/

type THandlerConfig = {
  isLanguageCodeOnly: boolean;
};
type TReturn = (
  options?: THandlerConfig
) => string | string[] | null;
export const useLocales = (): TReturn => {
  const handler = (options?: THandlerConfig) => {
    const defaultOptions = {
      languageCodeOnly: false,
    };

    const opt = {
      ...defaultOptions,
      ...(options ?? {}),
    };

    const browserLocales =
      navigator.languages === undefined
        ? [navigator.language]
        : navigator.languages;

    if (!browserLocales) {
      return null;
    }

    return browserLocales.map((locale) => {
      const trimmedLocale = locale.trim();

      return opt.languageCodeOnly
        ? trimmedLocale.split(/-|_/)[0]
        : trimmedLocale;
    });
  };
  return handler;
};
