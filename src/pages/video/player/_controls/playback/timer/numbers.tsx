import {FC, HTMLAttributes} from 'react';

type Props = {children: string; width?: number} & HTMLAttributes<HTMLElement>;

export const MonoChars: FC<Props> = ({
  children,
  width = 14,
  style,
  ...props
}) => {
  return (
    <>
      {[...children].map((value, index) => (
        <div
          key={`${index}`}
          className="text-center"
          style={{width, ...style}}
          {...props}
        >
          {value}
        </div>
      ))}
    </>
  );
};
