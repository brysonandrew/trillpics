import type {
  Preflight,
  PreflightContext,
} from 'unocss';
import type {
  TTheme,
  TAnyTheme,
} from './theme';

export const PRE_FLIGHT: Preflight<TAnyTheme> =
  {
    getCSS: ({
      theme,
    }: PreflightContext<TTheme>) => `
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
