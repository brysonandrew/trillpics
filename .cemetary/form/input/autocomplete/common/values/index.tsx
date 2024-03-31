import type { FC } from 'react';
import { List } from '../list';
import { FADE_PRESENCE_WITH_DELAY } from '@constants/animation';
import { Clear } from './Clear';
import { Value } from './Value';
import { ItemBackground } from './ItemBackground';

type TProps = {
  id?: string;
  values: string[];
  onRemove(index?: number): void;
};
export const Values: FC<TProps> = ({
  id,
  values,
  onRemove,
}) => (
  <List
    id={id ?? 'values'}
    values={values}
    right={
      <Clear onRemove={onRemove} />
    }
    {...FADE_PRESENCE_WITH_DELAY}
  >
    {(value, index) => (
      <>
        <ItemBackground />
        <Value
          value={value}
          index={index}
          onRemove={onRemove}
        />
      </>
    )}
  </List>
);
