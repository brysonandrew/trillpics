export type TPic = string | number;
export type TPics = TPic[];

export type TPicsState = {
  picsCount: number;
  pics: TPics;
  updatePics(config?: {
    pics: TPics;
  }): void;
};
