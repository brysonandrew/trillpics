import { resolveIntRecord } from "@brysonandrew/utils-unit";
import { screen } from "~uno/index";

export const BREAKPOINT_RECORD = screen;

export const BREAKPOINT_INT_RECORD =
  resolveIntRecord(BREAKPOINT_RECORD);
