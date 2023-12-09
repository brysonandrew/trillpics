import { Shell as _Header } from '@components/form/header/shell';
import { Row } from '@components/interactive/Row';
import { TBaseFieldValues } from '../config';
import {
  ALL_OPTIONS,
  ONLY_IF_VALUE_NAMES,
  TMainProps,
  TOption,
} from './config';

export const Header = <
  T extends TBaseFieldValues,
>({
  options = ALL_OPTIONS,
  showResolver,
  ...props
}: TMainProps<T>) => {
  const value = props.form.watch(
    props.name,
  );
  const isEmpty = !value;
  return (
    <_Header
      left={props.title}
      right={
        <Row
          isInline
          resolvers={options
            .filter(
              ({
                name,
              }: TOption<T>) => {
                return (
                  !(
                    isEmpty &&
                    ONLY_IF_VALUE_NAMES.includes(
                      name,
                    )
                  ) &&
                  (!showResolver ||
                    showResolver({
                      name,
                      value,
                    }))
                );
              },
            )
            .map(
              (Component: TOption<T>) =>
                () =>
                  (
                    <Component
                      key={
                        Component.name
                      }
                      value={value}
                      {...props}
                    />
                  ),
            )}
        />
      }
    />
  );
};
