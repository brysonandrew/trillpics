import { TUseBeatsLookup } from "~/hooks/music/beats/lookup";
import { TBeatsStepsKey, TBeatValue } from "~/hooks/music/beats/types";
import { TUseNodesLookup } from "~/hooks/music/midis/lookup";
import { TNodesStepsKey, TMidiValue } from "~/hooks/music/midis/types";
import { TMusicKey } from "~/store/state/music/types";

export type TPlayOptions = {
  volume?: number;
};

export type TStepValue =
  | TMidiValue
  | TBeatValue;
export type TStepValues =
  readonly TStepValue[];

export type TUseMusicLookup<
  K extends TMusicKey
> = K extends "beats"
  ? TUseBeatsLookup
  : TUseNodesLookup;

  export type IUseMusicLookup =  TUseBeatsLookup
  & TUseNodesLookup;


