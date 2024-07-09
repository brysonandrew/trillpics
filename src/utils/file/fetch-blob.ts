type TConfig = any;
export const resolveFetchBlob = (
  config: TConfig
) => {
  const getFromCacheOrDownload = async (
    url: string
  ) => {
    const base64CachedImg =
      localStorage.getItem(url);
    if (base64CachedImg) {
      const response = await fetch(
        base64CachedImg
      );
      const blob =
        await response.blob();
      return URL.createObjectURL(blob);
    } else {
      const response = await fetch(url);
      if (response.status === 429) {
        console.log(
          "too many requests"
        );
      }
      const blob =
        await response.blob();
      const imageUrl =
        URL.createObjectURL(blob);
      // const base64String = (await convertBlobToBase64(blob))
      // localStorage.setItem(url, base64String)
      return imageUrl;
    }
  };
};
export type TResolveFetchBlobResult =
  ReturnType<typeof resolveFetchBlob>;
