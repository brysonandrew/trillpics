import { FC } from 'react';
import { TSpaceProps } from './config';
import { Space } from '.';

type TProps = TSpaceProps;
export const P24Y: FC<TProps> = (props) => <Space spaceClass='py-24' {...props} />;
