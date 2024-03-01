import { TBackC } from '@brysonandrew/layout-back';
import { Metal } from '.';

// export const MetalDark: FC<TRootProps> = ({ ...props }) => (
//   <Metal {...props} />
// );
export const MetalDark: TBackC = ({
  classValue,
  ...props
}) => <Metal classValue={classValue} />;
