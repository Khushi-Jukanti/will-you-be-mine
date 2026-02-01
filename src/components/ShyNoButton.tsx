import { useState, useRef, useCallback } from 'react';

const ShyNoButton = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const moveButton = useCallback(() => {
    if (!buttonRef.current || !containerRef.current) return;

    const container = containerRef.current.getBoundingClientRect();
    const button = buttonRef.current.getBoundingClientRect();
    
    // Calculate safe bounds with padding
    const padding = 20;
    const maxX = Math.min(150, (window.innerWidth - button.width) / 2 - padding);
    const maxY = Math.min(100, 150);

    // Generate random position
    const newX = (Math.random() - 0.5) * maxX * 2;
    const newY = (Math.random() - 0.5) * maxY * 2;

    setPosition({ x: newX, y: newY });
  }, []);

  const handleInteraction = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    moveButton();
  };

  return (
    <div 
      ref={containerRef}
      className="relative"
      style={{ minWidth: '100px', minHeight: '60px' }}
    >
      <button
        ref={buttonRef}
        className="btn-no select-none cursor-pointer"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
        onMouseEnter={handleInteraction}
        onTouchStart={handleInteraction}
        onClick={handleInteraction}
      >
        No
      </button>
    </div>
  );
};

export default ShyNoButton;
