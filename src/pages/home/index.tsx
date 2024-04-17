import { AnimatePresence } from "framer-motion";
import { Header } from "@/pages/home/header";
import { Controls } from "@/pages/home/controls";
import { useIdleStatus } from "@/hooks/window/use-idle";
import { List } from "./pics";

const Home = () => {
  const idleStatus = useIdleStatus();
  return (
    <>
      <List />
      <AnimatePresence>
        {idleStatus !== "idle" && (
          <>
            <Header isCooldown={idleStatus==='cooldown'} />
            <Controls isCooldown={idleStatus==='cooldown'}  />
          </>
        )}
      </AnimatePresence>
    </>
  );
};
export { Home };
