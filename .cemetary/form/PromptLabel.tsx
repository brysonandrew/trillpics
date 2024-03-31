import styled from '@emotion/styled';
import {
  Checkbox2,
  resolveCheckbox2Title,
} from '@components/form/input/checkbox/Checkbox2';
import { resolveRegisterProps } from '@utils/form';
import { motion } from 'framer-motion';
import {
  FieldValues,
  Path,
  UseFormReturn,
} from 'react-hook-form';
import { TInputProps } from './config';

const Root = styled(motion.div)``;

type TProps<T extends FieldValues> =
  TInputProps<T> & {
    form: UseFormReturn<T>;
  };
export const PromptLabel = <
  T extends FieldValues,
>({
  title: shortTitle,
  form,
  ...props
}: TProps<T>) => {
  const { register } = form;
  const name =
    `included.${props.name}` as Path<T>;
  const value = form.getValues(name);

  const isInitChecked = Boolean(value);
  const title = resolveCheckbox2Title(
    shortTitle,
    isInitChecked,
  );

  return (
    <Root
      className='group'
      initial='animate'
      animate='animate'
      whileHover='hover'
    >
      <Checkbox2
        inputProps={resolveRegisterProps(
          {
            register,
            title,
            name,
          },
        )}
        shortTitle={shortTitle}
      />
    </Root>
  );
};
