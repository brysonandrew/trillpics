import styled from '@emotion/styled';
import { TOptionProps } from '@t/inputs';

const Option = styled.option``;

type TProps<
  K extends string | number,
  T extends
    | readonly (readonly [
        string,
        string,
      ])[]
    | void = void,
> = {
  items: T extends readonly (readonly [
    string,
    string,
  ])[]
    ? T
    : readonly K[];
} & TOptionProps;
export const Options = <
  K extends string | number,
  T extends
    | readonly (readonly [
        string,
        string,
      ])[]
    | void = void,
>({
  items,
}: TProps<K, T>) => {
  return (
    <>
      {(items ?? []).map((item) => {
        if (Array.isArray(item)) {
          const [key, label] = item;
          return (
            <Option
              key={key}
              value={key}
            >
              {label}
            </Option>
          );
        } else if (
          typeof item === 'string' ||
          typeof item === 'number'
        ) {
          return (
            <Option
              key={item}
              value={item}
            >
              {item}
            </Option>
          );
        }
        return null;
      })}
    </>
  );
};
