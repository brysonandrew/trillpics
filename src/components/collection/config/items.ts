export const resolveSrc = (
  name: string | number,
  dir = "pics",
  ext = "avif"
) => `video/${dir}/${name}.${ext}`;

export const resolvePicsSrc = (
  name: string | number
) => resolveSrc(name);

export const resolveAudioSrc = (
  name: string | number
) => resolveSrc(name, 'audio', 'mp3');

// export const PICS_COUNT = precache.length;
// const INIT: string[] = [
//   ...Array(PICS_COUNT),
// ].map((_, index) => resolveSrc(`${index + 1}`));
// export const PICS = shuffle(INIT);
