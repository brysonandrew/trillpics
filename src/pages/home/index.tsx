import { AnimatePresence } from "framer-motion";
import { Header } from "~/pages/home/header";
import { Controls } from "~/pages/home/controls";
import { useVideoStore } from "~/store";
import { useShallow } from "zustand/react/shallow";
import { useIdleStatus } from "~/hooks/use-idle";
import { SEARCH_PARAM_ID } from "~/components/pic/use-pic";
import { useSearchParams } from "react-router-dom";
import { List } from "./pics";
const Home = () => {
  const [searchParams] =
    useSearchParams();
  const searchParam = searchParams.get(
    SEARCH_PARAM_ID
  );
  const isImageZoomed = Boolean(
    searchParam
  );
  useIdleStatus();
  const { isControls } = useVideoStore(
    useShallow(({ isControls }) => ({
      isControls,
    }))
  );

  return (
    <>
      <List />
      <AnimatePresence>
        {isControls &&
          !isImageZoomed && (
            <>
              <Header key="header" />
              <Controls key="controls" />
            </>
          )}
      </AnimatePresence>
    </>
  );
};
export { Home };
