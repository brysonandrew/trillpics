import { css } from '@emotion/react';
import { TBreakpointKey } from '@uno/index';
import { resolveBreakpoint } from './breakpoints';
import {
  BASE_CSS,
  TGridRecord,
} from './config';
import { resolveCssTemplate } from './resolveCssTemplate';
import { resolveGridTemplateConfig } from './resolveGridTemplateConfig';

export const resolveResponsiveGridTempateAreas =
  <K extends string>(
    record: TGridRecord<K>,
  ) => {
    const entries =
      Object.entries(record);
    const template =
      entries.reduce<string>(
        (a, [key, grid]) => {
          const gridTemplateConfig =
            resolveGridTemplateConfig<K>(
              grid,
            );
          const cssTemplate =
            resolveCssTemplate<K>(
              gridTemplateConfig,
            );
          if (key) {
            const breakpoint =
              resolveBreakpoint(
                key as TBreakpointKey,
              );
            a = `${a}\n${breakpoint}{\n${cssTemplate}\n}`;
          } else {
            a = `${a}\n${BASE_CSS};\n${cssTemplate};`;
          }
          return a;
        },
        '',
      );
    return css`
      ${template};
    `;
  };
