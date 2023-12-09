import { P2 } from '@components/layout/space/P2';
import { FieldValues, UseFormReturn } from 'react-hook-form';
import { TDayMonthYear } from './config';
import { Years } from './units/Years';
import { Days } from './units/Days';
import { Month } from './units/Month';

type TProps<T extends FieldValues> = {
  form: UseFormReturn<T, any, undefined>;
  dayMonthYear: TDayMonthYear;
};
export const DateOfBirth = <T extends FieldValues>({ form, dayMonthYear }: TProps<T>) => {
  return (
    <div className='column sm:row w-full'>
      <Days form={form} />
      <P2 />
      <Month form={form} />
      <P2 />
      <Years form={form} />
    </div>
  );
}; 
