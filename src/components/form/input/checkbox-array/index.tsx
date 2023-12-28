import styled from '@emotion/styled';
import {
  ChangeEvent,
  useMemo,
} from 'react';
import {
  ArrayPath,
  FieldValues,
  UseFormReturn,
  useFieldArray,
} from 'react-hook-form';
import { Label } from '@components/form/input/Label';
import { HeaderMenu } from '@components/form/header/HeaderMenu';
import { NOOP } from '@constants/functions';
import { TPromptKeyResolver } from '@t/ai/prompt';
import { Checkbox } from '../checkbox';
import {
  CHECKBOX_MULTIPLE_BLANK,
  CHECKBOX_MULTIPLE_MARKED,
} from '@constants/icons';

const keyName = 'id';
type TKeyName = typeof keyName;

const Root = styled.div``;

export type TProps<
  T extends FieldValues,
  N extends ArrayPath<T>,
  K extends string,
> = {
  name: N;
  title: string;
  form: UseFormReturn<T>;
  items: readonly TPromptKeyResolver<K>[];
};
export const CheckboxArray = <
  T extends FieldValues,
  N extends ArrayPath<T>,
  K extends string,
>(
  props: TProps<T, N, K>,
) => {
  const { name, title, form, items } =
    props;

  const keys: K[] = useMemo(() => {
    return items.map(
      ([key]: TPromptKeyResolver<K>) =>
        key,
    );
  }, []);

  const { fields, append, remove } =
    useFieldArray<T, N, TKeyName>({
      control: form.control,
      keyName,
      name,
    });

  const fieldKeys = fields.map(
    (v: any) => v.key,
  );
  const isEmpty =
    fieldKeys.length === 0;
  const isAllChecked = !keys.some(
    (key) => !fieldKeys.includes(key),
  );

  const handleCheck = (key: K) => {
    const next = { key } as any;
    append(next);
  };
  const handleUncheck = (key: K) => {
    const index =
      fieldKeys.indexOf(key);
    remove(index);
  };

  const handleCheckAll = () => {
    const all = items.map(([key]) => ({
      key,
    })) as any;

    append(all);
  };

  const handleUncheckAll = () => {
    const all: number[] = fields.map(
      (_, index) => index,
    );
    remove(all);
  };

  const handleChange = ({
    currentTarget: {
      name: _name,
      checked,
    },
  }: ChangeEvent<HTMLInputElement>) => {
    const key = _name as K;
    if (checked) {
      handleCheck(key);
    } else {
      handleUncheck(key);
    }
  };

  return (
    <Root className='input'>
      <Label
        title={title}
        label={
          <HeaderMenu
            title={title} 
            buttons={[
              {
                title: 'clear all',
                classValue: isEmpty
                  ? 'interactive-disabled'
                  : '',
                icon: CHECKBOX_MULTIPLE_BLANK,
                disabled: isEmpty,
                onClick: isEmpty
                  ? NOOP
                  : handleUncheckAll,
              },
              {
                title: 'add all',
                disabled: isAllChecked,
                classValue: isAllChecked
                  ? 'interactive-disabled'
                  : '',
                icon: CHECKBOX_MULTIPLE_MARKED,
                onClick: isAllChecked
                  ? NOOP
                  : handleCheckAll,
              },
            ]}
          />
        }
      />
      <ul className='w-full row-wrap'>
        {items.map(
          ([
            key,
            _,
            label,
          ]: TPromptKeyResolver<K>) => {
            const isChecked =
              fieldKeys.includes(key);
            return (
              <li key={key}>
                <Checkbox
                  name={key}
                  label={label}
                  isChecked={isChecked}
                  onChange={
                    handleChange
                  }
                />
              </li>
            );
          },
        )}
      </ul>
    </Root>
  );
};
