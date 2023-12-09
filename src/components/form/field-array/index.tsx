import {
  UseFieldArrayProps,
  useFieldArray,
  UseFormReturn,
} from 'react-hook-form';
import { Inline as Autocomplete } from '@components/form/input/autocomplete';
import { TInputProps } from '@t/inputs';
import {
  TFieldArrayPartialForm,
  TNameTemplate,
} from './config';
import { Title } from '../Title';
import { PromptLabel } from '../PromptLabel';

type TProps<K extends string> =
  UseFieldArrayProps<TFieldArrayPartialForm> &
    Omit<
      TInputProps,
      'form' | 'title'
    > & {
      title: string;
      items: readonly K[];
      form: UseFormReturn<TFieldArrayPartialForm>;
      id?: string;
      onAdd?(value: K): void;
    };
export const FieldArray = <
  K extends string,
>({
  title,
  items,
  id,
  onAdd,
  form,
  ...props
}: TProps<K>) => {
  const { fields, append, remove } =
    useFieldArray<
      TFieldArrayPartialForm,
      TNameTemplate,
      'id'
    >({
      ...props,
      control: form.control,
    });

  const values = fields.map(
    (v) => v.value,
  );

  const handleRemove = (
    index?: number,
  ) => {
    if (typeof index === 'undefined') {
      remove();
    } else {
      remove(index);
    }
  };

  const handleSelect = (value: K) => {
    if (onAdd) {
      onAdd(value);
    }
    append({ value });
  };

  return (
    <Autocomplete
      id={id}
      header={
        <>
          <PromptLabel
            name={props.name}
            title={title}
            form={form}
          />
          <Title>{title}</Title>
        </>
      }
      items={items}
      values={values}
      onRemove={handleRemove}
      onAdd={handleSelect}
    />
  );
};
