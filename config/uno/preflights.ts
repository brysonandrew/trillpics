import type { Preflight, PreflightContext } from 'unocss';
import type { TTheme, TAnyTheme } from './theme';
import { SANS, MONO } from './typography';

export const PRE_FLIGHT: Preflight<TAnyTheme> = {
  getCSS: ({ theme }: PreflightContext<TTheme>) => `
      html, body {
        font-family: ${SANS}, Chakra Petch, Rubik, Noto Kufi Arabic, Noto Sans JP, -apple-system,
          BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
          Helvetica Neue, sans-serif;
      }

      body:not(.dark) {
        background-color: ${theme.colors.black};
      }

      html.dark body {
        background-color: ${theme.colors.black};
      } 

      h1,
      code,
      kbd,
      samp,
      pre {
        font-family: ${MONO}, Courier, Menlo, and Consolas, monospace;
      }
      kbd {
        font-weight: bold;
      }

      ::-webkit-scrollbar {
        background-color: ${theme.colors['white-2']};
      }

      html.dark ::-webkit-scrollbar {
        background-color: ${theme.colors['black-2']};
      }

      ::-webkit-scrollbar-thumb {
        background-color: ${theme.colors['gray']};
        border: 1px solid ${theme.colors['gray-1']};
      }

      html.dark ::-webkit-scrollbar-thumb {
        background-color: ${theme.colors['teal-bright']};
        border: 1px solid ${theme.colors['baby-blue']};
      }

      ::-webkit-scrollbar-thumb:hover {
        background-color: ${theme.colors['gray-3']};
      }

      html.dark ::-webkit-scrollbar-thumb:hover {
        background-color: ${theme.colors['white-08']};
      }

      input:-webkit-autofill {
        -webkit-text-fill-color: ${theme.colors['black-1']} !important;
        text-fill-color: ${theme.colors['black-1']} !important;
      }

      html.dark input:-webkit-autofill {
        -webkit-text-fill-color: ${theme.colors['baby-blue']} !important;
        text-fill-color: ${theme.colors['baby-blue']} !important;
      }

    `,
} as const;
