import { Header } from "@/pages/home/header";
import { Controls } from "@/pages/home/controls";
import { useIdleStatus } from "@/hooks/window/use-idle";
import { useVideoStore } from "@/store";
import { useEventListener } from "@brysonandrew/hooks-events";
import { List } from "./pics";

const Home = () => {
  const idleStatus = useIdleStatus();
  const { isControls } =
    useVideoStore();
  // const handleShow = () => {
  //   toggleControls(true);
  // };
  // useEventListener(
  //   isControls ? null : "mousemove",
  //   handleShow
  // );

  return (
    <>
      <List />
      {isControls && (
        <>
          <Header
            isCooldown={
              idleStatus === "cooldown"
            }
          />
          <Controls
            isCooldown={
              idleStatus === "cooldown"
            }
          />
        </>
      )}
    </>
  );
};
export { Home };
