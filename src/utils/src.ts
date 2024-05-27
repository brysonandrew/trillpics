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
