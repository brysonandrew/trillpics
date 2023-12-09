import { ChangeEvent } from 'react';
import {
  FieldValues,
  Path,
  PathValue,
  UseFormReturn,
} from 'react-hook-form';

type TConfig<T extends FieldValues> = {
  form: UseFormReturn<T>;
  fromName: Path<T>;
  toName: Path<T>;
};
export const useChangeHandlers = <
  T extends FieldValues,
>({
  form: { watch, setValue },
  fromName,
  toName,
}: TConfig<T>) => {
  const from = watch(
    fromName,
  ) as PathValue<T, Path<T>>;
  const to = watch(toName) as PathValue<
    T,
    Path<T>
  >;

  const handleFromChange = ({
    currentTarget: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    const next = Number(
      value,
    ) as PathValue<T, Path<T>>;

    const handleTo = (
      nextTo: PathValue<T, Path<T>>,
    ) => {
      setValue(toName, nextTo);
      setValue(fromName, from);
    };

    const handleFrom = (
      nextFrom: PathValue<T, Path<T>>,
    ) => {
      setValue(fromName, nextFrom);
      setValue(toName, to);
    };

    if (next === to || next === from) {
      // thumb click
      setValue(fromName, from);
      setValue(toName, to);

      return;
    }

    if (next > to) {
      // end click
      handleTo(next);
      return;
    }

    if (next < from) {
      // start click
      handleFrom(next);
      return;
    }

    if (next > from && next < to) {
      // middle click
      const fromDiff = next - from;
      const toDiff = to - next;
      if (fromDiff < toDiff) {
        // closest to from
        handleFrom(next);
        return;
      }
      handleTo(next); // closest to "to"
      return;
    }

  };

  const handleToChange = ({
    currentTarget: { value: nextTo },
  }: ChangeEvent<HTMLInputElement>) => null;

  return {
    onFromChange: handleFromChange,
    onToChange: handleToChange,
  };
};
