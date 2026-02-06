// import { useState } from 'react';
// import FloatingHearts from '@/components/FloatingHearts';
// import ShyNoButton from '@/components/ShyNoButton';
// import LoveCard from '@/components/LoveCard';
// import CuteCat from '@/components/CuteCat';

// const Index = () => {
//   const [showLoveCard, setShowLoveCard] = useState(false);

//   const handleYesClick = () => {
//     setShowLoveCard(true);
//   };

//   return (
//     <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
//       {/* Background floating hearts */}
//       <FloatingHearts />

//       {/* Main card */}
//       <div
//         className="valentine-card rounded-3xl p-8 md:p-12 max-w-lg w-full relative z-10 text-center animate-fade-in-up"
//         style={{ animationDelay: '0.2s' }}
//       >
//         {/* Cute cat decoration */}
//         <div className="flex justify-center mb-6">
//           <CuteCat />
//         </div>

//         {/* Main question */}
//         <h1 className="font-romantic whitespace-nowrap text-[1rem] sm:text-[1.4rem] md:text-[1.6rem] text-foreground mb-10 leading-tight">
//           Hrithika, will you be my Valentine?
//         </h1>


//         {/* Buttons container */}
//         <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
//           {/* Yes button */}
//           <button
//             onClick={handleYesClick}
//             className="btn-yes active:scale-95 touch-manipulation"
//           >
//             Yes
//           </button>

//           {/* Shy No button */}
//           <ShyNoButton />
//         </div>

//         {/* Playful text */}
//         <p className="text-muted-foreground text-base md:text-[0.8rem] animate-bounce-subtle font-medium">
//           "No" seems a bit shy… 🙈
//         </p>
//       </div>

//       {/* Love card modal */}
//       <LoveCard isOpen={showLoveCard} />
//     </div>
//   );
// };

// export default Index;


import { useState } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import RoseOffer from "@/components/RoseOffer";
import LoveCard from "@/components/LoveCard";

const Index: React.FC = () => {
  const [roseGiven, setRoseGiven] = useState<boolean>(false);

  const handleRoseClick = (): void => {
    setRoseGiven(true);
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-rose-100 via-pink-200 to-rose-300">
      {/* Ambient background */}
      <FloatingHearts />

      {/* Main content */}
      {!roseGiven ? (
        <RoseOffer onOffer={handleRoseClick} />
      ) : (
        <LoveCard
          message="Not asking anything. Just giving you a rose."
        />
      )}
    </div>
  );
};

export default Index;
