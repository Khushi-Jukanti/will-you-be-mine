import { motion } from "framer-motion";

interface RoseOfferProps {
  onOffer: () => void;
}

const RoseOffer: React.FC<RoseOfferProps> = ({ onOffer }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative flex flex-col items-center text-center z-10"
    >
      <motion.svg
        width="200"
        height="300"
        viewBox="0 0 200 300"
        onClick={onOffer}
        className="cursor-pointer drop-shadow-2xl select-none"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        animate={{
          y: [0, -10, 0],
          rotate: [0, 1, -1, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Stem with Thorns */}
        <motion.path
          d="M100 280 Q105 180 100 120"
          stroke="#1a5d2c"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        {/* Thorns */}
        <path d="M102 240 L110 235" stroke="#1a5d2c" strokeWidth="2" />
        <path d="M98 200 L90 195" stroke="#1a5d2c" strokeWidth="2" />

        {/* Leaves */}
        <motion.path
          d="M102 210 Q140 210 150 180 Q110 170 102 210"
          fill="#2d8a43"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8 }}
        />
        <motion.path
          d="M98 190 Q60 190 50 160 Q90 150 98 190"
          fill="#3fae5a"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1 }}
        />

        {/* Rose Petals - Layered for depth */}
        <g transform="translate(60, 40)">
          {/* Outer Petals */}
          <motion.path
            d="M40 80 Q-10 60 10 20 Q40 0 70 20 Q90 60 40 80"
            fill="#be123c"
          />
          <motion.path
            d="M40 80 Q90 70 85 30 Q60 10 40 40"
            fill="#e11d48"
          />
          {/* Inner Petals (The "Heart") */}
          <motion.path
            d="M40 70 Q20 50 40 30 Q60 50 40 70"
            fill="#fb7185"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          {/* Petal Highlights */}
          <path d="M35 45 Q40 35 45 45" stroke="#fff" strokeWidth="1" strokeOpacity="0.3" fill="none" />
        </g>
      </motion.svg>

      {/* Glow effect */}
      <div className="absolute -z-10 w-64 h-64 bg-rose-500/20 blur-[80px] rounded-full top-10" />

      <p className="mt-8 text-sm font-medium tracking-widest uppercase text-rose-600/70 animate-pulse">
        Tap to bloom
      </p>
    </motion.div>
  );
};

export default RoseOffer;