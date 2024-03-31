import styled from '@emotion/styled';
import {
  FieldValues,
  Path,
  PathValue,
} from 'react-hook-form';
import { numberInputCss } from './css/numberInputCss';
import { TBaseProps } from './config';
import {
  ChangeEventHandler,
  FormEventHandler,
} from 'react';
import { TMinMax } from './twin/sliders/resolveThresholds';

const Root = styled.div``;

type TProps<T extends FieldValues> =
  TMinMax &
    TBaseProps<T> & {
      name: Path<T>;
      onInput?: FormEventHandler<HTMLInputElement>;
    };
export const Number = <
  T extends FieldValues,
>(
  props: TProps<T>,
) => {
  const {
    classValue,
    form,
    name,
    ...rest
  } = props;

  const handleChange: ChangeEventHandler<
    HTMLInputElement
  > = ({
    currentTarget: { value },
  }) => {
    form.setValue(
      name,
      value as PathValue<T, Path<T>>,
    );
  };
  const value = form.watch(name);
  return (
    <Root className='relative shrink-0 w-16'>
      <input
        className='input input-text input-border'
        // css={numberInputCss}
        type='number'
        value={value}
        onChange={handleChange}
        {...rest}
      />
    </Root>
  );
};
