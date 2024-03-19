import {
  ChangeEvent,
  FC,
  InputHTMLAttributes,
  MutableRefObject,
  OptionHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';
import {
  RefCallBack,
  UseFormRegister,
} from 'react-hook-form';

import { SerializedStyles } from '@emotion/react';
import { HTMLMotionProps } from 'framer-motion';
import { TClassValueProps, TChildren } from '@brysonandrew/config-types';

export type TInputElementUnion =
  | HTMLInputElement
  | HTMLTextAreaElement
  | HTMLSelectElement;
export type TChangeEvent =
  ChangeEvent<TInputElementUnion>;
export type TChangeHandler = (
  event: TChangeEvent,
) => void;
export type TChangeHandlerProps = {
  onChange: TChangeHandler;
};
export type TRegisterProps = {
  register: UseFormRegister<any>;
};

export type TNameValue = {
  name: string;
  value: string;
};

export type TInputControlProps = (
  | TChangeHandlerProps
  | TRegisterProps
) & {
  disabled?: boolean;
} & TClassValueProps;

export type TLabelProps =
  HTMLMotionProps<'label'> &
    // LabelHTMLAttributes<HTMLLabelElement> &
    TClassValueProps;

export type TInputProps =
  InputHTMLAttributes<HTMLInputElement> &
    TClassValueProps & {
      ref?:
        | MutableRefObject<HTMLInputElement | null>
        | RefCallBack;
      label?: TChildren;
      Input?: FC | FC<TInputProps>;
      Label?: FC<TLabelProps>;
      css?: SerializedStyles;
    };

export type TTextAreaProps =
  TextareaHTMLAttributes<HTMLTextAreaElement> &
    TClassValueProps;
export type TTextareaMotionProps =
  HTMLMotionProps<'textarea'> &
    TClassValueProps;
export type TSelectProps =
  SelectHTMLAttributes<HTMLSelectElement> &
    TClassValueProps;
export type TOptionProps =
  OptionHTMLAttributes<HTMLOptionElement>;
