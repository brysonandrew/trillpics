const resolveSrc = (
  dir: string,
  name: string | number,
  ext = "avif"
) => `remotion/${dir}/${name}.${ext}`;

export const resolvePicSrc = (
  name: string | number
) => resolveSrc("pics", name);

export const resolveAudioSrc = (
  name: string | number
) => resolveSrc("audio", name, "mp3");
