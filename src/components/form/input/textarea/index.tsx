import {
  TChildren,
  TClassValueProps,
} from '@t/index';
import { Label } from '../Label';
import {
  Path,
  UseFormReturn,
} from 'react-hook-form';
import { useState } from 'react';
import { useAutosize } from './useAutosize';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useViewport } from '@context/viewport';
import { resolveRegisterProps } from '@utils/form';
import {
  TTextAreaProps,
} from '@t/inputs';
import { TBaseFieldValues } from '@components/form/config';
import { TOptionsProps } from '@components/form/header/config';
import { Header } from '@components/form/header';

type TProps<
  T extends TBaseFieldValues,
> = {
  title: string;
  label?: TChildren;
  name: Path<T>;
  form: UseFormReturn<T>;
  isFixed?: boolean;
  inputProps?: Omit<
    Partial<TTextAreaProps>,
    'name'
  >;
} & TOptionsProps<T> &
  TClassValueProps;
export const Textarea = <
  T extends TBaseFieldValues,
>({
  title,
  name,
  form,
  options,
  isFixed,
  label,
  inputProps: _inputProps = {},
  ...props
}: TProps<T>) => {
  const value = form.watch(name as any);
  const [textarea, setTextarea] =
    useState<HTMLTextAreaElement | null>(
      null,
    );
  const { isResizing } = useViewport();
  const isInit = useAutosize({
    textarea,
    value,
    isResizing,
  });
  const promptLabelProps = {
    title,
    name,
    form,
  };
  const inputProps = {
    ...resolveRegisterProps<T>({
      register: form.register,
      name,
      title,
      ..._inputProps,
    }),
    value,
    label: (
      <div className='w-full'>
        {label}
        <Header<T>
          options={options}
          {...promptLabelProps}
        />
      </div>
    ),
    classValue: 'gp',
  };

  const { classValue, ref, ...rest } =
    inputProps;

  return (
    <Label
      {...props}
      title={title}
      label={inputProps.label}
      layout={isInit}
    >
      <motion.div
        layout
        initial={false}
        animate={{
          opacity: isInit ? 1 : 0,
        }}
        className='relative input-border input overflow-hidden'
      >
        <motion.textarea
          layout
          transition={{ duration: 0 }}
          rows={1}
          className={clsx(
            'relative left-0 top-0 block m-0 w-full input-text',
            classValue,
          )}
          ref={(
            instance: HTMLTextAreaElement,
          ) => {
            if (
              typeof ref === 'function'
            ) {
              ref(instance);
            }
            if (instance && !textarea) {
              setTextarea(instance);
            }
          }}
          {...rest}
        />
      </motion.div>
    </Label>
  );
};
