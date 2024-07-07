import { FC } from "react";
import { UGraphNodeWithId } from "~/pages/video/music/_context/refs/audio/graph/types";

export type TSynthNodeTitleFc<
  P = object
> = FC<{ node: UGraphNodeWithId } & P>;
