type TConfig = any;
export const resolveComposition = (
  inputProps: TConfig
) => {
  const cwd = process.cwd();

  console.log(inputProps);
  // const isLocal = (
  //   import.meta.env ?? process.env
  // )._IS_LOCAL;
  // const serveUrl = await bundle({
  //   publicDir: path.join(cwd, REMOTION_PUBLIC_DIR),
  //   entryPoint: path.join(cwd, REMOTION_ENTRY_POINT),
  //   onProgress: inputProps.onProgress ?? onProgress,
  //   webpackOverride,
  // });
};
export type TResolveCompositionResult =
  ReturnType<typeof resolveComposition>;
