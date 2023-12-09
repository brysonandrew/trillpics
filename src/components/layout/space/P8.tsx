import { FC } from 'react';
import { TSpaceProps } from './config';
import { Space } from '.';

type TProps = TSpaceProps;
export const P8: FC<TProps> = (props) => <Space spaceClass='p-8' {...props} />;
