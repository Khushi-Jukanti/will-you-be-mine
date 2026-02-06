import { motion } from "framer-motion";

const RosePetals = () => {
  return [...Array(12)].map((_, i) => (
    <motion.span
      key={i}
      className="absolute w-3 h-3 bg-rose-500 rounded-full"
      initial={{ opacity: 0, y: 0 }}
      animate={{
        opacity: 1,
        y: 200,
        x: Math.random() * 200 - 100,
        rotate: Math.random() * 360
      }}
      transition={{ duration: 2, ease: "easeOut" }}
    />
  ));
};

export default RosePetals;
