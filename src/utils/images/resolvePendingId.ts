import { PENDING_DELIMITER } from '@constants/images';
import {
  TChosen,
  TPendingId,
} from '@t/image';
import { resolvePendingRecordId } from './resolvePendingRecordId';

type TConfig = TChosen & {
  index: number;
};
export const resolvePendingId = ({
  index,
  ...config
}: TConfig): TPendingId => {
  return `${resolvePendingRecordId(
    config,
  )}${PENDING_DELIMITER}${index}`;
};
