import { PENDING_DELIMITER } from '@/constants/images';
import {
  TChosen,
  TPendingRecordId,
} from '@/types/image';

type TConfig = TChosen;
export const resolvePendingRecordId = ({
  name,
  color,
  size,
}: TConfig): TPendingRecordId => {
  const id = [name, color, size].join(
    PENDING_DELIMITER,
  ) as TPendingRecordId;
  return id;
};
