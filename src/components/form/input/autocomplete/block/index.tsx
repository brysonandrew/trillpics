import { useState } from 'react';
import type { FC } from 'react';
import { Suggestions } from '../common/suggestions';
import { Values } from '../common/values';
import { Input } from '../common/input';
import { useInputHandlers } from '../common/useInputHandlers';
import { useSuggestions } from '../common/useSuggestions';
import clsx from 'clsx';
import { TIconConfigProps } from '@t/icons';
import { TAG_ICON } from '@constants/icons';
import { resolveCompositeKey } from '@utils/keys';
import { Cell } from '@components/layout/cells/Cell';
import { TChildren } from '@t/index';
import { motion } from 'framer-motion';

type TProps =
  Partial<TIconConfigProps> & {
    id?: string;
    title?: string;
    header?: TChildren;
    placeholder?: string;
    items: readonly string[];
    values: string[];
    onAdd(value: string): void;
    onRemove(index?: number): void;
  };
export const Block: FC<TProps> = ({
  iconConfig = { icon: TAG_ICON },
  id,
  title,
  header,
  items,
  values,
  onAdd,
  onRemove,
  placeholder,
  ...props
}) => {
  const valueState = useState('');
  const [value, setValue] = valueState;
  const suggestionsOpenState =
    useState(false);
  const [
    isSuggestionsShown,
    setSuggestionsOpen,
  ] = suggestionsOpenState;
  const handleOpen = () =>
    setSuggestionsOpen(true);
  const handleClose = () =>
    setSuggestionsOpen(false);
  const handleAdd = (match: string) => {
    onAdd(match);
  };
  const handleEnterClick = (
    match: string,
  ) => {
    if (!values.includes(match)) {
      handleAdd(match);
      setValue('');
    }
  };
  const {
    hoverKeyConfig,
    ...inputHandlers
  } = useInputHandlers({
    onEnterClick: handleEnterClick,
    suggestionsOpenState,
    valueState,
  });

  const {
    suggestions,
    isSuggestionsCount,
  } = useSuggestions({
    value,
    values,
    items,
  });
  const isValue = Boolean(value);
  const isValues = values.length > 0;
  const isSuggestions =
    isSuggestionsShown && isValue;
  const isSomeItems =
    isSuggestions || isValues;
  const isAllItems =
    isSuggestions || isValues;

  return (
    <motion.label
      className={clsx(
        'relative column-start gap-2 w-full z-10 h-full',
      )}
      {...hoverKeyConfig.handlers('1')}
    >
      <div className='column-start gap-1 self-stretch'>
        <div className='column-start gap-1 self-stretch'>
          <div
            className={clsx(
              'absolute inset-0 pointer-events-none',
              isSomeItems
                ? 'rounded-t-md'
                : 'rounded-md',
            )}
          />
          <div className='row w-full gap-4'>
            {title && (
              <kbd>{title}</kbd>
            )}
            {header && <>{header}</>}
            <Input
              name={resolveCompositeKey(
                'autocomplete',
                id,
              )}
              classValue='input input-border'
              iconConfig={iconConfig}
              isSuggestionsShown={
                isSuggestionsShown
              }
              isSuggestionsCount={
                isSuggestionsCount
              }
              value={value}
              placeholder={
                placeholder ??
                'Search...'
              }
              {...inputHandlers}
              {...props}
            />
          </div>
          {isSuggestions && (
            <Cell
              colorClassValue='bg-black-4'
              insetClassValue='inset-0'
            >
              <Suggestions
                key={resolveCompositeKey(
                  id,
                  value,
                )}
                value={value}
                suggestions={
                  suggestions
                }
                onSelect={handleAdd}
              />
            </Cell>
          )}
        </div>
        {isValues && (
          <Cell
            colorClassValue='bg-black-4'
            insetClassValue='inset-0'
          >
            <Values
              key={resolveCompositeKey(
                id,
                value,
                'values',
              )}
              id={id}
              values={values}
              onRemove={onRemove}
            />
          </Cell>
        )}
      </div>
    </motion.label>
  );
};
