import {PropsWithChildren, type FC} from 'react';

type TProps = PropsWithChildren;
export const UiInputsSliderValue: FC<TProps> = ({children}) => {
  return (
    <div className="leading-18 bg-_neutral-100 flex h-[20px] w-[46px] items-center justify-center rounded-[4px] text-center font-mono">
      {children}
    </div>
  );
};
