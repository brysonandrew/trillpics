import { z } from "zod";
import { PIC_SERIES_SCHEMA } from "~/components/remotion/pic-series/schema";

export type TPicSeriesSchema = typeof PIC_SERIES_SCHEMA
export type TPicSeriesProps = z.infer<TPicSeriesSchema>