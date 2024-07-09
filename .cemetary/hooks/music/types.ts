import { TUseBeatsLookup } from "~/hooks/music/beats/lookup";
import { TBeatValue } from "~/hooks/music/beats/types";
import { TuseMidisLookup } from "~/hooks/music/midis/lookup";
import { TMidiValue } from "~/hooks/music/midis/types";
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
  : TuseMidisLookup;

  export type IUseMusicLookup =  TUseBeatsLookup
  & TuseMidisLookup;


