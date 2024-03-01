import {
  ChangeEvent,
  FC,
  useEffect,
  useState,
} from 'react';
import styled from '@emotion/styled';
import { Button } from './Button';
import { TIconConfigProps } from '@t/icons';
import { I } from '@components/Icon';
import { useTimeoutRef } from '@hooks/window/useTimeoutRef';
import { Text } from '../../../text';
import { TInputProps } from '@t/inputs';
import {
  CARET_DOWN_ICON,
  CARET_UP_ICON,
  CROSS_ICON,
} from '@brysonandrew/icons-keys';
import clsx from 'clsx';
import { TClassValueProps } from '@brysonandrew/config-types';

const Root = styled.div``;

type TProps = Omit<
  TInputProps,
  'onChange'
> &
  TIconConfigProps &
  TClassValueProps & {
    isSuggestionsCount: boolean;
    isSuggestionsShown: boolean;
    value: string;
    debounceMs?: number;
    onToggle(): void;
    onClear(): void;
    onChange(nextValue: string): void;
  };
export const Input: FC<TProps> = ({
  isSuggestionsCount,
  isSuggestionsShown,
  value: initialValue,
  onToggle,
  onClear,
  iconConfig,
  onChange,
  debounceMs = 700,
  classValue,
  children,
  disabled,
  ...props
}) => {
  const { timeoutRef, endTimeout } =
    useTimeoutRef();
  const [value, setValue] = useState(
    initialValue,
  );
  const isValue = Boolean(value);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    endTimeout();
    timeoutRef.current = setTimeout(
      () => {
        onChange(value);
      },
      debounceMs,
    );

    return () => {
      endTimeout();
    };
  }, [value]);

  return (
    <Root
      className={clsx(
        'relative row',
        classValue,
      )}
    >
      <div className='center w-9 h-full shrink-0'>
        <I {...iconConfig} />
      </div>
      {!disabled && (
        <div className='row grow pr-0.5'>
          <div className='grow'>
            <Text
              inputProps={{
                disabled,
                autoComplete: 'off',
                value,
                onChange: ({
                  currentTarget,
                }: ChangeEvent<HTMLInputElement>) =>
                  setValue(
                    currentTarget.value,
                  ),
                ...props,
              }}
            />
          </div>
          {isValue && (
            <ul className='row'>
              <li>
                <Button
                  title='close'
                  onClick={onClear}
                >
                  <I
                    icon={CROSS_ICON}
                    className='w-4.5 h-4.5'
                  />
                </Button>
              </li>
              {isSuggestionsCount && (
                <li>
                  <Button
                                    title='toggle'
                    onClick={onToggle}
                  >
                    <I
                      icon={
                        isSuggestionsShown
                          ? CARET_UP_ICON
                          : CARET_DOWN_ICON
                      }
                    />
                  </Button>
                </li>
              )}
            </ul>
          )}
        </div>
      )}
    </Root>
  );
};
