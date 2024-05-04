import { Pic, TPicProps } from "~/pics/pic";

type TProps = TPicProps;
export const Cell = (props: TProps) => {
  return <Pic {...props} />;
};
