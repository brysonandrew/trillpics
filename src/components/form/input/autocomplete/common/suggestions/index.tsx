import type { FC } from 'react';
import { List } from '../list';
import { FADE_PRESENCE_WITH_DELAY } from '@constants/animation';
import { HighlightText } from '@components/highlight-text';
import { I } from '@brysonandrew/icons-i';
import { ADD_DUOTONE_ICON } from '@brysonandrew/icons-keys';
import { ItemBackground } from './ItemBackground';
import { TClassValueProps } from '@brysonandrew/config-types';

type TProps = TClassValueProps & {
  id?: string;
  value: string;
  suggestions: readonly string[];
  onSelect(index: string): void;
};
export const Suggestions: FC<
  TProps
> = ({
  id,
  value,
  suggestions,
  classValue,
  onSelect,
}) => (
  <List
    Empty={() => (
      <div className='text-gray'>
        No Matches for "{value}".
      </div>
    )}
    id={id ?? 'suggestions'}
    values={suggestions}
    classValue={classValue}
    {...FADE_PRESENCE_WITH_DELAY}
  >
    {(suggestion) => (
      <>
        <ItemBackground />
        <button
          type='button'
          className='relative group row gap-2'
          title={`Add ${suggestion}`}
          onClick={() => {
            onSelect(suggestion);
          }}
        >
          <div className='text-left'>
            <HighlightText
              highlight={value}
              text={suggestion}
            />
          </div>
          <div className='group-hover:text-highlight-2'>
            <I
              icon={ADD_DUOTONE_ICON}
            />
          </div>
        </button>
      </>
    )}
  </List>
);
