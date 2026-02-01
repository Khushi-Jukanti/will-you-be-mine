import { useEffect, useState } from 'react';

interface LoveCardProps {
  isOpen: boolean;
}

const LoveCard = ({ isOpen }: LoveCardProps) => {
  const [sparkles, setSparkles] = useState<{ id: number; x: number; y: number; delay: number }[]>([]);

  useEffect(() => {
    if (isOpen) {
      const newSparkles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2,
      }));
      setSparkles(newSparkles);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/20 backdrop-blur-sm animate-fade-in-up">
      {/* Sparkles */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute text-2xl animate-sparkle pointer-events-none"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            animationDelay: `${sparkle.delay}s`,
          }}
        >
          ✨
        </div>
      ))}

      {/* Card */}
      <div 
        className="valentine-card rounded-3xl p-8 md:p-12 max-w-md w-full mx-4 text-center relative overflow-hidden"
        style={{
          animation: 'fade-in-up 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        }}
      >
        {/* Decorative hearts */}
        <div className="absolute -top-4 -left-4 text-5xl opacity-20 animate-pulse-heart">💕</div>
        <div className="absolute -top-4 -right-4 text-5xl opacity-20 animate-pulse-heart" style={{ animationDelay: '0.5s' }}>💕</div>
        <div className="absolute -bottom-4 -left-4 text-5xl opacity-20 animate-pulse-heart" style={{ animationDelay: '1s' }}>💕</div>
        <div className="absolute -bottom-4 -right-4 text-5xl opacity-20 animate-pulse-heart" style={{ animationDelay: '0.3s' }}>💕</div>

        {/* Main heart */}
        <div className="text-8xl md:text-9xl mb-6 animate-pulse-heart heart-glow">
          ❤️
        </div>

        {/* Message */}
        <h2 className="font-romantic text-3xl md:text-4xl text-primary mb-6">
          I love you so much
        </h2>

        {/* GIF */}
        <div className="rounded-2xl overflow-hidden mb-6 bg-accent">
          <img
            src="https://c.tenor.com/51ZT-udb8KYAAAAC/tenor.gif"
            alt="Cute love animation"
            className="w-full h-auto"
          />
        </div>

        {/* Additional message */}
        <p className="text-muted-foreground text-lg font-medium">
          You make every day special 💖
        </p>

        {/* Floating mini hearts */}
        <div className="flex justify-center gap-2 mt-4">
          {['💗', '💓', '💕', '💖', '💝'].map((heart, i) => (
            <span 
              key={i} 
              className="text-2xl animate-bounce-subtle"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {heart}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoveCard;
