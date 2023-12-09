import styled from '@emotion/styled';
import {
  TNames,
  TProps as _TProps,
} from '.';
import { FieldValues } from 'react-hook-form';
import { P1 } from '@components/layout/space/P1';
import { Number } from '../Number';
import { useChangeHandlers } from './useChangeHandlers';
import { TSharedProps } from '../config';

const Root = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;
type TProps<T extends FieldValues> =
  Omit<
    _TProps<T>,
    'title' | 'classValue'
  > &
    ReturnType<
      typeof useChangeHandlers
    > &
    TNames<T> &
    TSharedProps;
export const Numbers = <
  T extends FieldValues,
>(
  props: TProps<T>,
) => {
  const {
    fromName,
    toName,
    onFromChange,
    onToChange,
    minMax,
    ...rest
  } = props;
  return (
    <Root>
      <Number<T>
        name={fromName}
        onInput={onFromChange}
        {...rest}
        {...minMax}
      />
      <P1 />
      <Number<T>
        name={toName}
        onInput={onToChange}
        {...rest}
        {...minMax}
      />
    </Root>
  );
};
