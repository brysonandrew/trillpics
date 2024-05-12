export type THoverPicKey = string;

export type THoverPicState = {
  hoverPicKey: THoverPicKey | null;
  hoverPicProps: TPicProps | null;
  hoverPic: THoverHandler;
  unhoverPic: THoverHandler;
};