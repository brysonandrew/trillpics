import { FC } from 'react';
import { TSpaceProps } from './config';
import { Space } from '.';

type TProps = TSpaceProps;
export const P6: FC<TProps> = (props) => <Space spaceClass='p-6' {...props} />;
