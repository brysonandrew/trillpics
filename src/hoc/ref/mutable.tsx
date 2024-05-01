import {
  FC,
  ForwardRefExoticComponent,
  ForwardedRef,
  MutableRefObject,
  RefAttributes,
  forwardRef,
  useRef,
} from "react";

export type TRefMutable<T> =
  MutableRefObject<T | null>;
export const withRefMutable = <
  T,
  P extends object
>(
  I: ForwardRefExoticComponent<
    P & RefAttributes<any>
  >
) => {
  const C = (props: P) => {
    const ref = useRef<T | null>(null);

    return <I ref={ref} {...props} />;
  };
  return C;
};

const Example = forwardRef<any, object>(
  (
    props: object,
    ref: ForwardedRef<any>
  ) => {
    return <span ref={ref} />;
  }
);
Example.displayName = "Example";
export { Example };
