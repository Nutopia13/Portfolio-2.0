import { motion } from "framer-motion";

export const Box = ({ value, onClick }) => {
  const style = value === "X" ? "box x" : "box o";

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      className={style}
      onClick={onClick}
    >
      {value}
    </motion.button>
  );
};
