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
        {/* Left ear */}
        <polygon
          points="26,38 18,16 30,10 42,16 36,38"
          className="fill-[hsl(30,70%,70%)]"
        />

        {/* Right ear */}
        <polygon
          points="94,38 82,16 90,10 102,16 96,38"
          className="fill-[hsl(30,70%,70%)]"
        />

        {/* Inner left ear */}
        <polygon
          points="27,32 18,12 38,27"
          className="fill-[hsl(30,50%,80%)]"
        />
        {/* Inner right ear */}
        <polygon
          points="93,32 102,12 82,27"
          className="fill-[hsl(30,50%,80%)]"
        />
        {/* Head */}
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
        <path
          d="M 54 70 Q 60 74 66 70"
          stroke="hsl(var(--foreground))"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        {/* Mouth left */}
        {/* <path
          d="M 55 72 Q 50 78 45 75"
          stroke="hsl(var(--foreground))"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        /> */}
        {/* Mouth right */}
        {/* <path
          d="M 65 72 Q 70 78 75 75"
          stroke="hsl(var(--foreground))"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        /> */}
        {/* Whiskers left */}
        {/* <line x1="10" y1="58" x2="35" y2="62" stroke="hsl(var(--foreground))" strokeWidth="1.5" /> */}
        {/* <line x1="12" y1="68" x2="35" y2="68" stroke="hsl(var(--foreground))" strokeWidth="1.5" /> */}
        {/* Whiskers right */}
        {/* <line x1="110" y1="58" x2="85" y2="62" stroke="hsl(var(--foreground))" strokeWidth="1.5" /> */}
        {/* <line x1="108" y1="68" x2="85" y2="68" stroke="hsl(var(--foreground))" strokeWidth="1.5" /> */}
        {/* Blush left */}
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
