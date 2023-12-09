import { FC } from 'react';
import { TSpaceProps } from './config';
import { Space } from '.';

type TProps = TSpaceProps;
export const P_5: FC<TProps> = (props) => <Space spaceClass='p-0.5' {...props} />;
