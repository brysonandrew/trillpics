import styled from '@emotion/styled';
import { TProps as _TProps } from '../config';
import {
  FieldValues,
  Path,
} from 'react-hook-form';
import { Numbers } from './Numbers';
import { Ticks } from '../Ticks';
import { resolveThresholds } from './sliders/resolveThresholds';
import { WithPadding as Header } from '@components/form/header/shell/WithPadding';
import { useChangeHandlers } from './useChangeHandlers';
import { Sliders } from './sliders';

const Root = styled.div``;

export type TNames<T> = {
  fromName: Path<T>;
  toName: Path<T>;
};

export type TProps<
  T extends FieldValues,
> = _TProps<T> & TNames<T>;
export const Twin = <
  T extends FieldValues,
>(
  props: TProps<T>,
) => {
  const {
    form,
    fromName,
    toName,
    classValue,
    label,
    ...inputProps
  } = props;

  const names = {
    fromName,
    toName,
  };

  const { tickCount, ...minMax } =
    resolveThresholds(props);

  const changeHandlers =
    useChangeHandlers({
      form,
      ...names,
    });

  const sharedProps = {
    form,
    minMax,
    ...names,
    ...changeHandlers,
  };

  return (
    <Root className='relative text-white w-full h-full'>
      <div className='absolute left-0 w-full bottom-3'>
        <Ticks count={tickCount} />
      </div>
      <div className='column-start gap-1'>
        <Header
          left={
            label ?? inputProps.title
          }
          right={
            <Numbers<T>
              {...sharedProps}
              {...inputProps}
            />
          }
        />
        <Sliders<T>
          {...sharedProps}
          {...inputProps}
        />
      </div>
    </Root>
  );
};
