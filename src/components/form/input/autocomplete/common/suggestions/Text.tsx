import { Fragment } from 'react';
import type { FC } from 'react';
import {
  REPLACE_TEXT_DELIMITER_START,
  REPLACE_TEXT_DELIMITER_END,
} from '../../../../../highlight-text/constants';

const resolveReplacer = (v: string) =>
  `${REPLACE_TEXT_DELIMITER_START}${v}${REPLACE_TEXT_DELIMITER_END}`;

type TProps = {
  value: string;
  suggestion: string;
};
export const Text: FC<TProps> = ({
  value,
  suggestion,
}) => (
  <>
    {suggestion
      .replace(
        new RegExp(value, 'gi'),
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
              <span className='text-blue'>
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
