import { Fragment } from 'react';
import type { FC } from 'react';
import {
  REPLACE_TEXT_DELIMITER_START,
  REPLACE_TEXT_DELIMITER_END,
} from './constants';

const resolveReplacer = (v: string) =>
  `${REPLACE_TEXT_DELIMITER_START}${v}${REPLACE_TEXT_DELIMITER_END}`;

type TProps = {
  highlight: string;
  text: string;
};
export const HighlightText: FC<
  TProps
> = ({ highlight, text }) => (
  <>
    {text
      .replace(
        new RegExp(highlight, 'gi'),
        resolveReplacer,
      )
      .split(
        REPLACE_TEXT_DELIMITER_START,
      )
      .map((v, suggestionIndex) => {
        if (
          v.includes(
            REPLACE_TEXT_DELIMITER_END,
          )
        ) {
          const [head, tail] = v.split(
            REPLACE_TEXT_DELIMITER_END,
          );
          return (
            <Fragment
              key={`${suggestionIndex}`}
            >
              <span className='text-highlight'>
                {head}
              </span>
              {tail}
            </Fragment>
          );
        } else {
          return v;
        }
      })}
  </>
);
