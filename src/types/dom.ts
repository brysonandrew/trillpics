import { ClassValue } from 'clsx';
import { HTMLMotionProps } from 'framer-motion';
import {
  HTMLAttributes,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  ImgHTMLAttributes,
  ThHTMLAttributes,
  TdHTMLAttributes,
  SourceHTMLAttributes,
  FormHTMLAttributes,
} from 'react';
import { LinkProps } from 'react-router-dom';
import { TTitleProps } from '.';

export type TRect = DOMRect | null;

export type TElementProps =
  HTMLAttributes<HTMLElement>;

export type TSectionMotionProps =
  HTMLMotionProps<'section'>;

export type TDivProps =
  HTMLAttributes<HTMLDivElement>;
export type TDivMotionProps =
  HTMLMotionProps<'div'>;
export type TSampMotionProps =
  HTMLMotionProps<'samp'>;
export type TFigureMotionProps =
  HTMLMotionProps<'figure'>;

export type THeadingProps =
  HTMLAttributes<HTMLHeadingElement>;

export type TUlProps =
  HTMLAttributes<HTMLUListElement>;
export type TUlMotionProps =
  HTMLMotionProps<'ul'>;

export type TLiProps =
  HTMLAttributes<HTMLLIElement>;
export type TLiMotionProps =
  HTMLMotionProps<'li'>;

export type TButtonProps =
  ButtonHTMLAttributes<HTMLButtonElement> &
    TClassValueProps;

export type TButtonMotionProps =
  HTMLMotionProps<'button'> &
    TClassValueProps;

export type TAnchorProps =
  AnchorHTMLAttributes<HTMLAnchorElement>;

export type TLinkProps = LinkProps;

export type TParagraphProps =
  HTMLAttributes<HTMLParagraphElement>;

export type TFormProps =
  FormHTMLAttributes<HTMLFormElement> &
    TClassValueProps;

export type TFormMotionProps =
  HTMLMotionProps<'form'> &
    TClassValueProps;

export type TImgProps =
  ImgHTMLAttributes<HTMLImageElement>;

export type TImgMotionProps =
  HTMLMotionProps<'img'> &
    TClassValueProps;

export type TClassValueProps = {
  classValue?: ClassValue;
};

export type TThProps =
  ThHTMLAttributes<HTMLTableCellElement>;

export type TTdProps =
  TdHTMLAttributes<HTMLTableCellElement>;

export type TSource =
  SourceHTMLAttributes<HTMLSourceElement>;

export type TReplacedElement =
  | HTMLImageElement
  | HTMLVideoElement;

export type TElement =
  | HTMLButtonElement
  | HTMLDivElement;

export type TAnchorMotionProps =
  HTMLMotionProps<'a'> & TTitleProps;
