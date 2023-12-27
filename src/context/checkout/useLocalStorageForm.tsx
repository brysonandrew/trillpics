import { useEffect } from 'react';
import {
  DefaultValues,
  FieldValues,
  useForm,
} from 'react-hook-form';
import { useLocalStorage } from '@hooks/dom/useLocalStorage';

type TProps<T extends FieldValues> = {
  defaultValues: DefaultValues<T>;
};
export const useLocalStorageForm = <
  T extends FieldValues,
>(
  props: TProps<T>,
) => {
  const [
    defaultValues,
    setFieldValues,
  ] = useLocalStorage<DefaultValues<T>>(
    'ORDER_FORM',
    props.defaultValues,
  );
  const form = useForm<T>({
    defaultValues,
  });
  const { watch, setValue } = form;

  useEffect(() => {
    const { unsubscribe } = watch(
      (next, event) => {
        setFieldValues((prev) => {
          const nextFieldValues = {
            ...prev,
            ...next,
          };
          return nextFieldValues;
        });
      },
      props.defaultValues,
    );
    return () => unsubscribe();
  }, [watch]);

  return form;
};

export type TUseLocalStorageForm =
  ReturnType<
    typeof useLocalStorageForm
  >;
