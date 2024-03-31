import { P2 } from '@components/layout/space/P2';
import { TInputProps } from '@t/inputs';
import { FC, Fragment } from 'react';
import { Title } from '../Title';

export const NO_RADIO_KEY = 'no';
export const YES_RADIO_KEY = 'yes';

type TNoRadioKey = typeof NO_RADIO_KEY;
type TYesRadioKey = typeof YES_RADIO_KEY;

export type TRadioKey = TNoRadioKey | TYesRadioKey;

type TProps = { inputProps: TInputProps };
export const YesNo: FC<TProps> = ({ inputProps }) => {
  const INPUTS = [
    ['No', NO_RADIO_KEY],
    ['Yes', YES_RADIO_KEY],
  ];
  return (
    <div className='row-start'>
      {INPUTS.map(([label, key], index) => (
        <Fragment key={key}>
          {index !== 0 && <P2 />}
          <label className='row w-1/2'>
            <input type='radio' value={key} {...inputProps} />
            <P2 />
            <Title>{label}</Title>
          </label>
        </Fragment>
      ))}
    </div>
  );
};
