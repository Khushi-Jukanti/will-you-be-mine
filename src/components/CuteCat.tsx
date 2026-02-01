const CuteCat = () => {
  return (
    <div className="relative animate-float">
      {/* Cat face */}
      <svg
        width="150"
        height="120"
        viewBox="0 0 150 120"
        className="drop-shadow-lg"
      >
        {/* Head with slight heart-shape curve at top */}
        <path
          d="M 75 15
             Q 45 15 30 35
             Q 10 55 15 80
             Q 20 105 50 115
             Q 75 120 100 115
             Q 130 105 135 80
             Q 140 55 120 35
             Q 105 15 75 15"
          fill="#E8A87C"
        />
        
        {/* Small ear - starting from inside head, cute triangle */}
        <polygon
          points="32,38 18,12 48,32"
          fill="#E8A87C"
        />
        
        {/* Left eye - simple dot */}
        <ellipse
          cx="52"
          cy="60"
          rx="4"
          ry="5"
          fill="#333"
        />
        {/* Right eye - simple dot */}
        <ellipse
          cx="98"
          cy="60"
          rx="4"
          ry="5"
          fill="#333"
        />
        
        {/* Nose - small pink/red */}
        <ellipse
          cx="75"
          cy="75"
          rx="5"
          ry="4"
          fill="#E85A7B"
        />
        
        {/* Mouth - cute smile curves */}
        <path
          d="M 68 82 Q 62 88 56 84"
          stroke="#555"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 82 82 Q 88 88 94 84"
          stroke="#555"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Blush left - soft pink */}
        <ellipse
          cx="38"
          cy="78"
          rx="12"
          ry="7"
          fill="#F5A9B8"
          opacity="0.5"
        />
        {/* Blush right - soft pink */}
        <ellipse
          cx="112"
          cy="78"
          rx="12"
          ry="7"
          fill="#F5A9B8"
          opacity="0.5"
        />
      </svg>
      
      {/* Heart decoration - layered hearts like reference */}
      <div className="absolute -top-2 -right-3 animate-pulse-heart">
        <svg width="40" height="45" viewBox="0 0 40 45">
          {/* Outer pink heart */}
          <path
            d="M20 38 L8 24 Q2 16 8 10 Q14 4 20 12 Q26 4 32 10 Q38 16 32 24 Z"
            fill="#E85A9F"
          />
          {/* Inner magenta heart */}
          <path
            d="M20 30 L12 22 Q8 17 12 13 Q16 9 20 14 Q24 9 28 13 Q32 17 28 22 Z"
            fill="#D6336C"
          />
        </svg>
      </div>
    </div>
  );
};

export default CuteCat;
