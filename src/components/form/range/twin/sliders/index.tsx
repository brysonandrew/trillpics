import {
  THUMB_SIZE,
  TSharedProps,
} from '../../config';
import {
  FieldValues,
  Path,
} from 'react-hook-form';
import {
  inputCss,
  inputThumbCss,
  inputTwinSliderCss,
} from '../../css/inputCss';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useChangeHandlers } from '../useChangeHandlers';
import { useBackgroundRangeColor } from './background-range-color/useBackgroundRangeColor';
import {
  TNames,
  TProps as _TProps,
} from '..';

const Root = styled.label`
  height: ${THUMB_SIZE}px;
`;

const fromSliderCss = css`
  position: absolute;
  ${inputTwinSliderCss}
`;

const toSliderCss = css`
  ${inputCss}
  ${inputThumbCss}
`;

type TProps<T extends FieldValues> =
  _TProps<T> &
    ReturnType<
      typeof useChangeHandlers
    > &
    TNames<T> &
    TSharedProps;
export const Sliders = <
  T extends FieldValues,
>(
  props: TProps<T>,
) => {
  const {
    form,
    fromName,
    toName,
    classValue,
    onFromChange,
    onToChange,
    minMax,
    ...inputProps
  } = props;
  const { watch, register } = form;
  const from = watch(fromName);
  const to = watch(toName);
  const backgroundImage =
    useBackgroundRangeColor({
      to,
      from,
      ...minMax,
    });

  return (
    <Root className='center w-full'>
      <input
        css={fromSliderCss}
        type='range'
        onInput={onFromChange}
        {...register(
          fromName as Path<T>,
        )}
        {...inputProps}
        {...minMax}
      />
      <input
        css={toSliderCss}
        style={{
          backgroundImage,
        }}
        type='range'
        onInput={onToChange}
        {...register(toName as Path<T>)}
        {...inputProps}
        {...minMax}
      />
    </Root>
  );
};
