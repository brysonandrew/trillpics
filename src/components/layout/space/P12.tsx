import { FC } from 'react';
import { TSpaceProps } from './config';
import { Space } from '.';

type TProps = TSpaceProps;
export const P12: FC<TProps> = (props) => <Space spaceClass='p-12' {...props} />;
