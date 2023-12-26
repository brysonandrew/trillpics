import { resolveIntRecord } from '@utils/css';
import { THEME } from '@uno/theme/index';
export const BREAKPOINT_RECORD =
  THEME.breakpoints;

export const BREAKPOINT_INT_RECORD =
  resolveIntRecord(BREAKPOINT_RECORD);
