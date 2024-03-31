import styled from '@emotion/styled';
import { TBaseProps } from '../config';
import { Label } from './Label';
import clsx from 'clsx';
import { TStrRecord } from '@t/object';

const _Input = styled.input``;

type TProps<P extends TStrRecord> =
  TBaseProps<P>;
export const Base = <
  P extends TStrRecord,
>(
  props: TProps<P>,
) => {
  const {
    inputProps: {
      Label: _Label,
      Input = _Input,
      label,
      classValue: inputClassValue,
      ...inputProps
    },
    ...labelProps
  } = props;
  return (
    <Label
      Root={_Label}
      label={label}
      title={inputProps.title}
      {...labelProps}
    >
      <Input
        className={clsx(
          'relative input',
          inputClassValue,
        )}
        {...inputProps}
      />
    </Label>
  );
};
