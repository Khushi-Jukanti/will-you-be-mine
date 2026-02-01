const CuteCat = () => {
  return (
    <div className="relative animate-float">
      {/* Cat face */}
      <svg
        width="140"
        height="110"
        viewBox="0 0 140 110"
        className="drop-shadow-lg"
      >
        {/* Left ear */}
        <polygon
          points="25,45 15,15 45,35"
          fill="#E8A87C"
        />
        {/* Right ear */}
        <polygon
          points="115,45 125,15 95,35"
          fill="#E8A87C"
        />
        {/* Head - rounder oval shape */}
        <ellipse
          cx="70"
          cy="60"
          rx="55"
          ry="48"
          fill="#E8A87C"
        />
        {/* Left eye - simple dots */}
        <ellipse
          cx="50"
          cy="55"
          rx="4"
          ry="5"
          className="fill-foreground"
        />
        {/* Right eye - simple dots */}
        <ellipse
          cx="90"
          cy="55"
          rx="4"
          ry="5"
          className="fill-foreground"
        />
        {/* Nose - small pink oval */}
        <ellipse
          cx="70"
          cy="70"
          rx="6"
          ry="5"
          fill="#E85A7B"
        />
        {/* Mouth left curve */}
        <path
          d="M 64 76 Q 58 82 52 78"
          stroke="#444"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        {/* Mouth right curve */}
        <path
          d="M 76 76 Q 82 82 88 78"
          stroke="#444"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        {/* Blush left */}
        <ellipse
          cx="35"
          cy="70"
          rx="10"
          ry="6"
          fill="#F5A9B8"
          opacity="0.5"
        />
        {/* Blush right */}
        <ellipse
          cx="105"
          cy="70"
          rx="10"
          ry="6"
          fill="#F5A9B8"
          opacity="0.5"
        />
      </svg>
      {/* Heart decoration - positioned like reference */}
      <div className="absolute top-0 -right-1 text-3xl animate-pulse-heart">
        💗
      </div>
    </div>
  );
};

export default CuteCat;
