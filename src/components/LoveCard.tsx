// import { useEffect, useState } from 'react';

// interface LoveCardProps {
//   isOpen: boolean;
// }

// const LoveCard = ({ isOpen }: LoveCardProps) => {
//   const [sparkles, setSparkles] = useState<{ id: number; x: number; y: number; delay: number }[]>([]);

//   useEffect(() => {
//     if (isOpen) {
//       const newSparkles = Array.from({ length: 20 }, (_, i) => ({
//         id: i,
//         x: Math.random() * 100,
//         y: Math.random() * 100,
//         delay: Math.random() * 2,
//       }));
//       setSparkles(newSparkles);
//     }
//   }, [isOpen]);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/20 backdrop-blur-sm animate-fade-in-up">
//       {/* Sparkles */}
//       {sparkles.map((sparkle) => (
//         <div
//           key={sparkle.id}
//           className="absolute text-2xl animate-sparkle pointer-events-none"
//           style={{
//             left: `${sparkle.x}%`,
//             top: `${sparkle.y}%`,
//             animationDelay: `${sparkle.delay}s`,
//           }}
//         >
//           ✨
//         </div>
//       ))}
//       {/* Floating love symbols (NEW – does not replace sparkles) */}
//       {Array.from({ length: 10 }).map((_, i) => {
//         const loves = ['💖', '💕', '💗', '💘', '💝'];
//         return (
//           <div
//             key={`love-${i}`}
//             className="absolute text-2xl md:text-3xl animate-love-zigzag pointer-events-none opacity-70"
//             style={{
//               left: `${Math.random() * 100}%`,
//               animationDuration: `${10 + Math.random() * 6}s`,
//               animationDelay: `${Math.random() * 6}s`,
//             }}
//           >
//             {loves[i % loves.length]}
//           </div>
//         );
//       })}


//       {/* Card */}
//       <div
//         className="valentine-card rounded-3xl p-8 md:p-12 max-w-md w-full mx-4 text-center relative overflow-hidden"
//         style={{
//           animation: 'fade-in-up 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
//         }}
//       >
//         {/* Decorative hearts */}
//         <div className="absolute -top-4 -left-4 text-5xl opacity-20 animate-pulse-heart">💕</div>
//         <div className="absolute -top-4 -right-4 text-5xl opacity-20 animate-pulse-heart" style={{ animationDelay: '0.5s' }}>💕</div>
//         <div className="absolute -bottom-4 -left-4 text-5xl opacity-20 animate-pulse-heart" style={{ animationDelay: '1s' }}>💕</div>
//         <div className="absolute -bottom-4 -right-4 text-5xl opacity-20 animate-pulse-heart" style={{ animationDelay: '0.3s' }}>💕</div>

//         {/* Main heart */}
//         <div className="text-8xl md:text-9xl mb-6 animate-pulse-heart heart-glow">
//           ❤️
//         </div>

//         {/* Message */}
//         <h2 className="font-romantic text-3xl md:text-4xl text-primary mb-6">
//           Yay!🎉 <br /> Good Choice...
//         </h2>

//         {/* GIF */}
//         <div className="rounded-2xl overflow-hidden mb-6 bg-accent">
//           <img
//             src="https://c.tenor.com/51ZT-udb8KYAAAAC/tenor.gif"
//             alt="Cute love animation"
//             className="w-full h-auto"
//           />
//         </div>

//         {/* Additional message */}
//         <p className="text-muted-foreground text-lg font-medium">
//           Every day feels better with you in it
//         </p>
//         <p className="text-muted-foreground text-small font-medium">
//           I Love You so much💝
//         </p>

//         {/* Floating mini hearts */}
//         <div className="flex justify-center gap-2 mt-4">
//           {['💗', '💓', '💕', '💖', '💝'].map((heart, i) => (
//             <span
//               key={i}
//               className="text-2xl animate-bounce-subtle"
//               style={{ animationDelay: `${i * 0.15}s` }}
//             >
//               {heart}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoveCard;


// import { motion } from "framer-motion";

// interface LoveCardProps {
//   message: string;
// }

// const LoveCard: React.FC<LoveCardProps> = ({ message }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.85 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.7, ease: "easeOut" }}
//       className="bg-white/70 backdrop-blur-xl rounded-3xl px-10 py-12 text-center shadow-2xl max-w-md z-10"
//     >
//       <p className="text-lg md:text-xl font-medium text-rose-600 leading-relaxed">
//         {message}
//       </p>

//       <p className="mt-6 text-xs text-muted-foreground">
//         rose day, but make it intentional
//       </p>
//     </motion.div>
//   );
// };

// export default LoveCard;


import { motion } from "framer-motion";

const LoveCard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative bg-white/50 backdrop-blur-2xl border border-rose-100 rounded-[2.5rem] px-8 py-14 text-center shadow-xl max-w-xs mx-4 z-10"
    >
      {/* The Rose */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="text-6xl mb-8"
      >
        🌹
      </motion.div>

      {/* Simple, Deep Content */}
      <div className="space-y-6">
        {/* <h2 className="text-rose-500 font-medium tracking-widest text-[10px] uppercase">
          Rose Day
        </h2> */}

        <div className="space-y-2">
          <p className="font-serif text-2xl text-slate-900 italic">
            "Simply, you."
          </p>
          <p className="text-slate-500 text-sm font-light">
            Everything else is noise.
          </p>
        </div>

        <div className="py-2">
          <div className="h-[1px] w-6 bg-rose-200 mx-auto"></div>
        </div>

        <p className="text-slate-800 text-base leading-relaxed">
          I’m giving you this rose because <br />
          <span className="font-semibold text-rose-600">you are my favorite thought.</span>
        </p>
      </div>

      {/* Minimal Footer */}
      {/* <p className="mt-10 text-[10px] text-slate-400 font-light tracking-tighter">
        With love, 2026
      </p> */}
    </motion.div>
  );
};

export default LoveCard;