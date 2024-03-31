import {
  useRef,
  useState,
} from 'react';
import type { FC } from 'react';
import { Suggestions } from '../common/suggestions';
import { Input } from '../common/input';
import { useInputHandlers } from '../common/useInputHandlers';
import { useSuggestions } from '../common/useSuggestions';
import { TIconConfigProps } from '@t/icons';
import {
  MAGNIFY_ICON,
  TAG_ICON,
} from '@brysonandrew/icons-keys';
import { resolveCompositeKey } from '@utils/keys';
import { Clear } from '../common/values/Clear';
import { Value } from '../common/values/Value';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { ItemBackground } from './ItemBackground';
import { TChildren } from '@brysonandrew/config-types';
import { useOutsideClick } from '@hooks/dom/useOutsideClick';

type TProps =
  Partial<TIconConfigProps> & {
    id?: string;
    header?: TChildren;
    placeholder?: string;
    items: readonly string[];
    values: string[];
    onAdd(value: string): void;
    onRemove(index?: number): void;
  };
export const Inline: FC<TProps> = ({
  iconConfig = { icon: TAG_ICON },
  id,
  header,
  items,
  values,
  onAdd,
  onRemove,
  placeholder,
  ...props
}) => {
  const ref =
    useRef<HTMLLabelElement | null>(
      null,
    );
  const valueState = useState('');
  const [value, setValue] = valueState;
  const suggestionsOpenState =
    useState(false);
  const [
    isSuggestionsShown,
    setSuggestionsOpen,
  ] = suggestionsOpenState;
  useOutsideClick({
    ref,
    handler: () =>
      setSuggestionsOpen(false),
  });
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

  const wildValue = '';
  const isWildValue =
    value === wildValue;

  const {
    suggestions,
    isSuggestionsCount,
  } = useSuggestions({
    wildValue,
    value,
    values,
    items,
  });
  const isValue = Boolean(value);
  const isValues = values.length > 0;

  const isDisabled =
    isWildValue && !isSuggestionsCount;

  const isSuggestions =
    isSuggestionsShown && !isDisabled;

  const isSomeItems =
    isSuggestions || isValues;
  const isAllItems =
    isSuggestions || isValues;

  const name = resolveCompositeKey(
    'autocomplete',
    'inline',
    id,
  );
  return (
    <motion.label
      ref={ref}
      layout
      className={clsx(
        'relative column-start gap-2 w-full z-10 h-full',
      )}
      {...hoverKeyConfig.handlers('1')}
    >
      {header}
      <motion.div
        layout
        className='relative row w-full gap-4'
      >
        <motion.div
          layout
          animate='animate'
          whileHover='hover'
          className='relative flex flex-wrap w-full input input-border px-2 py-0'
        >
          {values.length > 1 && (
            <Clear
              classValue='absolute top-0 right-0'
              onRemove={onRemove}
            />
          )}
          <Input
            name={name}
            classValue={clsx(
              'relative -left-1.75 top-0 mr-2.5 w-40',
              isDisabled && 'hidden',
            )}
            iconConfig={{
              ...iconConfig,
              icon: MAGNIFY_ICON,
            }}
            isSuggestionsShown={
              isSuggestionsShown
            }
            isSuggestionsCount={
              isSuggestionsCount
            }
            value={value}
            placeholder={
              placeholder ?? 'Search...'
            }
            disabled={isDisabled}
            {...inputHandlers}
            {...props}
          />

          {isValues && (
            <>
              {values.map(
                (
                  valuesValue,
                  index,
                ) => (
                  <motion.div
                    key={resolveCompositeKey(
                      id,
                      value,
                      index,
                    )}
                    className={clsx(
                      'relative -top-1 mt-2.5 mr-4 cursor-pointer',
                    )}
                    initial={false}
                    animate='animate'
                    whileHover='hover'
                    style={{
                      height: 24,
                    }}
                  >
                    <ItemBackground />
                    <Value
                      value={
                        valuesValue
                      }
                      index={index}
                      onRemove={
                        onRemove
                      }
                    />
                  </motion.div>
                ),
              )}
            </>
          )}
        </motion.div>
      </motion.div>
      {isSuggestions && (
        <motion.div className='absolute left-0 top-full w-full px-3 py-0 mt-0 bg-black-04 backdrop-blur-lg input-border'>
          <Suggestions
            key={resolveCompositeKey(
              id,
              value,
            )}
            value={value}
            suggestions={suggestions}
            onSelect={handleAdd}
          />
        </motion.div>
      )}
    </motion.label>
  );
};
