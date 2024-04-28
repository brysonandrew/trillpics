import { Pic, TPicProps } from "~/shell/pics/pic";

type TProps = TPicProps;
export const Cell = (props: TProps) => {
  return <Pic {...props} />;
};
