import {
  TSequenceKey,
  USequenceKey,
} from "~/store/state/music/types";

type TConfig = {
  base?: string;
  name: string | number;
};
const resolveSrc = (
  { base, name }: TConfig,
  ext = "avif"
) => `${base}/${name}.${ext}`;

const resolveBase = (
  base: string,
  tail: string
) => `${base ? `${base}/` : ""}${tail}`;
export const resolvePicSrc = ({
  base = "",
  name,
}: TConfig) =>
  resolveSrc({
    base: resolveBase(base, "pics"),
    name,
  });

export const resolveAudioSrc = ({
  base = "",
  name,
}: TConfig) =>
  resolveSrc(
    {
      base: resolveBase(base, "audio"),
      name,
    },
    "mp3"
  );

export const resolveAudioSampleSrc = (
  source: USequenceKey,
  name: string | number
) =>
  resolveSrc(
    { base: `music/${source}`, name },
    "wav"
  );
