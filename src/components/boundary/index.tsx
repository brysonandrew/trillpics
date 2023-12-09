import type {
  ErrorInfo,
  PropsWithChildren,
  FC,
} from 'react';
import { Component } from 'react';
import type { TFallbackProps } from './Fallback';
import { Fallback } from './Fallback';
import { TChildren } from '@t/index';

export type TBoundaryProps = {
  children: TChildren;
  onError?: (error: Error, info: ErrorInfo) => void;
  Fallback: FC<TFallbackProps>;
};

export type TState =
  | {
      error: Error;
      hasError: true;
    }
  | {
      error: null;
      hasError: false;
    };

export class Boundary extends Component<
  TBoundaryProps,
  TState
> {
  static defaultProps = {
    Fallback: Fallback,
  };
  constructor(props: TBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  reset() {
    this.setState({ hasError: false, error: null });
  }

  override componentDidCatch(
    error: Error,
    errorInfo: ErrorInfo,
  ) {
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    } else {
      console.error(
        'Error Rendering Components:',
        error,
        errorInfo,
      );
    }
  }

  override shouldComponentUpdate(
    nextProps: PropsWithChildren<TBoundaryProps>,
    nextState: TState,
  ) {
    if (this.state.hasError !== nextState.hasError) {
      return true;
    }
    if (
      this.state.error &&
      !Object.is(this.props.Fallback, nextProps.Fallback)
    ) {
      return true;
    }
    if (
      !this.state.error &&
      !Object.is(this.props.children, nextProps.children)
    ) {
      return true;
    }
    return false;
  }

  override render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.Fallback;
      <FallbackComponent
        reset={this.reset}
        error={this.state.error}
      />;
    }
    return this.props.children;
  }
}
