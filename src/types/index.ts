export type TBaseChildren =
  | JSX.Element
  | null
  | string;
export type TChildrenElement =
  | TBaseChildren
  | TBaseChildren[];
export type TChildren =
  | string
  | TChildrenElement
  | null
  | false
  | number;
export type TError = any | unknown;
export type TEmptyRecord = Record<
  string,
  unknown
>;
export type TAnyRecord = Record<
  string,
  any
>;

export type TChildrenProps = {
  children: TChildren;
};
export type TChildrenHandlerProps<T> = {
  children(props: T): TChildren;
};

export type TChildrenPartialProps =
  Partial<TChildrenProps>;

export type TTitleProps = {
  title: string;
};
