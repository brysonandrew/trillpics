import {
  useEffect,
  useState,
} from 'react';

type TState = {
  suggestions:
    | string[]
    | readonly string[];
  isSuggestionsCount: boolean;
};

type TConfig = {
  wildValue?: string;
  items: string[] | readonly string[];
  value: string;
  values: string[];
};
export const useSuggestions = ({
  wildValue = 'all',
  items,
  value,
  values,
}: TConfig) => {
  const [state, setState] =
    useState<TState>({
      suggestions: [],
      isSuggestionsCount: false,
    });

  useEffect(() => {
    const isWild = value === wildValue;
    let nextItems = items.filter(
      (item) => !values.includes(item),
    );
    if (!isWild) {
      nextItems = items.filter((item) =>
        item
          .toLowerCase()
          .includes(
            value.toLowerCase(),
          ),
      );
    }
    setState({
      suggestions: nextItems,
      isSuggestionsCount:
        nextItems.length > 0,
    });
  }, [items, value, values]);
  return state;
};
