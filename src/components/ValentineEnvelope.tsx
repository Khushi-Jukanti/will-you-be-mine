// import { motion } from "framer-motion";

// interface Props { onOpen: () => void; }

// const ValentineEnvelope: React.FC<Props> = ({ onOpen }) => {
//   return (
//     <motion.div 
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ scale: 0, opacity: 0, transition: { duration: 0.5 } }}
//       onClick={onOpen}
//       className="relative cursor-pointer group"
//     >
//       {/* Envelope Body */}
//       <motion.div 
//         whileHover={{ y: -10 }}
//         className="w-64 h-44 bg-rose-600 rounded-b-lg shadow-2xl relative flex items-center justify-center"
//       >
//         {/* Flap */}
//         <div className="absolute top-0 left-0 w-0 h-0 border-l-[128px] border-l-transparent border-r-[128px] border-r-transparent border-t-[80px] border-t-rose-500" />
        
//         {/* The Wax Seal (Heart) */}
//         <motion.div 
//           animate={{ scale: [1, 1.2, 1] }}
//           transition={{ repeat: Infinity, duration: 1.5 }}
//           className="z-10 bg-white text-rose-600 rounded-full p-3 shadow-lg text-3xl"
//         >
//           ❤️
//         </motion.div>
//       </motion.div>

//       <p className="mt-8 text-rose-400 font-serif italic text-center animate-bounce">
//         Tap to reveal your destiny...
//       </p>
//     </motion.div>
//   );
// };

// export default ValentineEnvelope;


import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";

interface Props { onOpen: () => void; }

const ValentineEnvelope: React.FC<Props> = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = async () => {
    setIsOpening(true);
    // Wait for the flap animation to finish before switching components
    setTimeout(() => {
      onOpen();
    }, 800); 
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ scale: 0.5, opacity: 0, transition: { duration: 0.5 } }}
      onClick={handleOpen}
      className="relative cursor-pointer perspective-1000"
      style={{ perspective: "1000px" }}
    >
      {/* Envelope Body */}
      <motion.div 
        animate={isOpening ? { y: 100, opacity: 0.8 } : { y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-72 h-48 bg-rose-600 rounded-b-lg shadow-2xl relative flex items-center justify-center z-20"
      >
        {/* The Flap (Top part that opens) */}
        <motion.div 
          initial={false}
          animate={isOpening ? { rotateX: 180, zIndex: 0 } : { rotateX: 0, zIndex: 30 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ transformOrigin: "top", transformStyle: "preserve-3d" }}
          className="absolute top-0 left-0 w-0 h-0 border-l-[144px] border-l-transparent border-r-[144px] border-r-transparent border-t-[90px] border-t-rose-500"
        />
        
        {/* The Wax Seal (Heart) */}
        {!isOpening && (
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="z-40 bg-white text-rose-600 rounded-full p-3 shadow-lg text-3xl"
          >
            ❤️
          </motion.div>
        )}

        {/* Shadow/Inside of Envelope */}
        <div className="absolute inset-0 bg-rose-700 rounded-b-lg -z-10" />
      </motion.div>

      {!isOpening && (
        <p className="mt-8 text-rose-500 font-serif italic text-center animate-bounce">
          Tap to open this moment 💝...
        </p>
      )}
    </motion.div>
  );
};

export default ValentineEnvelope;