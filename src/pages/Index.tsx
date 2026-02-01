import { useState } from 'react';
import FloatingHearts from '@/components/FloatingHearts';
import ShyNoButton from '@/components/ShyNoButton';
import LoveCard from '@/components/LoveCard';
import CuteCat from '@/components/CuteCat';

const Index = () => {
  const [showLoveCard, setShowLoveCard] = useState(false);

  const handleYesClick = () => {
    setShowLoveCard(true);
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
      {/* Background floating hearts */}
      <FloatingHearts />

      {/* Main card */}
      <div 
        className="valentine-card rounded-3xl p-8 md:p-12 max-w-lg w-full relative z-10 text-center animate-fade-in-up"
        style={{ animationDelay: '0.2s' }}
      >
        {/* Cute cat decoration */}
        <div className="flex justify-center mb-6">
          <CuteCat />
        </div>

        {/* Main question */}
        <h1 className="font-romantic text-3xl sm:text-4xl md:text-5xl text-foreground mb-10 leading-relaxed">
          Ishu, will you be my Valentine?
        </h1>

        {/* Buttons container */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
          {/* Yes button */}
          <button
            onClick={handleYesClick}
            className="btn-yes active:scale-95 touch-manipulation"
          >
            Yes
          </button>

          {/* Shy No button */}
          <ShyNoButton />
        </div>

        {/* Playful text */}
        <p className="text-muted-foreground text-base md:text-lg animate-bounce-subtle font-medium">
          "No" seems a bit shy… 🙈
        </p>
      </div>

      {/* Love card modal */}
      <LoveCard isOpen={showLoveCard} />
    </div>
  );
};

export default Index;
