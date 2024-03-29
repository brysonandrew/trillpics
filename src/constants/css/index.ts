import { screen } from "../../../config/uno/index";
import { resolveIntRecord } from "../../utils/css";

export const BREAKPOINT_RECORD = screen;

export const BREAKPOINT_INT_RECORD =
  resolveIntRecord(BREAKPOINT_RECORD);
