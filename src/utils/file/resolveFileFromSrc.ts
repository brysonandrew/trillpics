type TConfig = string;
export const resolveFileFromSrc =
  async (value: TConfig) => {
    const blob = await fetch(
      value,
    ).then((r) => r.blob());
    const file = new File(
      [blob],
      value,
      {
        type: 'image/png',
      },
    );
    console.log(file);
    return file;
  };
