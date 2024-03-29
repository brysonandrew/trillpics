import { Footer } from "@pages/gallery/footer";
import { List } from "./list";
import { withProvider } from "./context/withProvider";

export const Gallery = withProvider(
  () => (
    <>
      <List />
      <Footer />
    </>
  )
);
