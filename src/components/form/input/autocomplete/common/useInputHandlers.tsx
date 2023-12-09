import {
  KeyboardEventHandler,
  useEffect,
} from 'react';
import { TStatePair } from '@t/state';
import { useHoverKey } from '@hooks/dom/useHoverKey';

type TConfig = {
  suggestionsOpenState: TStatePair<boolean>;
  valueState: TStatePair<string>;
  onEnterClick(value: string): void;
};
export const useInputHandlers = ({
  suggestionsOpenState: [
    isSuggestionsOpen,
    setSuggestionsOpen,
  ],
  valueState: [value, setValue],
  onEnterClick,
}: TConfig) => {
  const hoverKeyConfig = useHoverKey();
  const handleToggle = () => {
    setSuggestionsOpen(
      !isSuggestionsOpen,
    );
  };
  const handleChange = (
    nextValue: string,
  ) => {
    const isNextValue =
      Boolean(nextValue);
    setSuggestionsOpen(isNextValue);
    setValue(nextValue);
  };
  const handleClear = () => {
    setValue('');
  };
  const handleKeyDown: KeyboardEventHandler<
    HTMLInputElement
  > = (e) => {
    if (
      e.key === 'Enter' &&
      !e.repeat
    ) {
      onEnterClick(value);
      e.preventDefault();
    }
  };
  const handleFocus = () => {
    setSuggestionsOpen(true);
  };

  const handleBlur = () => {
    if (hoverKeyConfig.isNoHover) {
      setSuggestionsOpen(false);
    }
  };

  useEffect(() => {
    if (hoverKeyConfig.isNoHover) {
      setSuggestionsOpen(
        !hoverKeyConfig.isNoHover,
      );
    }
  }, [hoverKeyConfig.isNoHover]);

  return {
    onToggle: handleToggle,
    onChange: handleChange,
    onClear: handleClear,
    onKeyDown: handleKeyDown,
    onFocus: handleFocus,
    onBlur: handleBlur,
    hoverKeyConfig,
  };
};
