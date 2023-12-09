import { BLACK_RGB_RECORD } from '@app/colors/grayscale/black';
import { varRgb } from '@app/colors/utils';
import { P_5 } from '@components/layout/space/P_5';
import { TChildren } from '@t/index';
import { camelToTitle } from '@utils/format';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import {
  FC,
  InputHTMLAttributes,
} from 'react';

type TProps =
  InputHTMLAttributes<HTMLInputElement> & {
    name: string;
    isChecked: boolean;
    label?: TChildren;
  };
export const Checkbox: FC<TProps> = ({
  isChecked,
  label,
  ...props
}) => {
  return (
    <motion.label
      className={clsx(
        'row mr-2 my-1 px-2 py-1 border-1 border-black bg-black-3 text-highlight input-border rounded-md cursor-pointer',
        isChecked
          ? 'opacity-100'
          : 'opacity-40',
      )}
      whileHover={{
        backgroundColor:
          varRgb(BLACK_RGB_RECORD['black-5']),
      }}
    >
      <input
        type='checkbox'
        className='hidden'
        checked={isChecked}
        {...props}
      />
      <P_5 />
      <div>
        {label ??
          camelToTitle(props.name)}
      </div>
    </motion.label>
  );
};
