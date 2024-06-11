import { motion } from "framer-motion";
export const GRADIENT_ID = "Gradient_linearGradient";
const RANDOM = ~~Math.random() * 3.99;
const CLOSED = ["rgba(255,255,255,0.6)", "rgba(255,255,255,0.8)", "rgba(255,255,255,0.6)"];
const OPEN = ["rgba(155,155,155,0.6)", "rgba(155,155,155,0.8)", "rgba(155,155,155,0.6)"];
const OPEN1 = ["rgba(255,0,0,0.6)", "rgba(255,0,0,0.8)", "rgba(255,0,0,0.6)"];
const OPEN2 = ["rgba(255,185,155,0.6)", "rgba(255,185,155,0.8)", "rgba(255,185,155,0.6)"];

const COLORS = [OPEN1, OPEN2, OPEN];

export const Gradient = () => (
  <motion.linearGradient id={GRADIENT_ID} gradientTransform="rotate(90)">
    <motion.stop
      offset="100%"
      stopColor="rgba(255,255,255,0.6)"
      variants={{
        initial: { stopColor: "#000" },
        init: {
          stopColor: CLOSED,
        },
        closed: {
          stopColor: CLOSED,
        },
        open: {
          stopColor: COLORS[RANDOM],
        },
        // hover: {
        //   stopColor: ,
        //   transition: {
        //     repeat: Infinity,
        //     duration: 4,
        //     repeatType: "loop",
        //   },
        // },
      }}
    />
  </motion.linearGradient>
);
