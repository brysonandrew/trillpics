import {
  IconWithText,
  TProps as TIconWithTextProps,
} from './IconWithText';
import { Sight } from './Sight';
import { Box } from './Box';

export const Notification = ({
  children,
}: TIconWithTextProps) => {
  return (
    <Sight>
      <Box>
        <IconWithText>
          {children}
        </IconWithText>
      </Box>
    </Sight>
  );
};
