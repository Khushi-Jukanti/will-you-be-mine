const CuteCat = () => {
  return (
    <div className="relative animate-float">
      {/* Cat face */}
      <svg
        width="120"
        height="100"
        viewBox="0 0 120 100"
        className="drop-shadow-lg" >
        {/* Left ear */}
        <polygon
          points="26,38 18,16 30,10 42,16 36,38"
          className="fill-[hsl(30,70%,70%)]" />
        {/* Right ear */}
        <polygon
          points="94,38 82,16 90,10 102,16 96,38"
          className="fill-[hsl(30,70%,70%)]" />
        {/* Inner left ear */}
        <polygon
          points="27,32 18,12 38,27"
          className="fill-[hsl(30,50%,80%)]" />
        {/* Inner right ear */}
        <polygon
          points="93,32 102,12 82,27"
          className="fill-[hsl(30,50%,80%)]" />
        {/* Head */}
        <ellipse cx="60" cy="55" rx="50" ry="45" className="fill-[hsl(30,70%,75%)]" />
        {/* Left eye */}
        <ellipse cx="40" cy="50" rx="6" ry="8" className="fill-foreground" />
        {/* Right eye */}
        <ellipse cx="80" cy="50" rx="6" ry="8" className="fill-foreground" />
        {/* Eye shine left */}
        <ellipse cx="42" cy="47" rx="2" ry="2.5" className="fill-background" />
        {/* Eye shine right */}
        <ellipse cx="82" cy="47" rx="2" ry="2.5" className="fill-background" />
        {/* Nose */}
        <ellipse cx="60" cy="65" rx="5" ry="4" className="fill-primary" />
        <path
          d="M 54 70 Q 60 74 66 70"
          stroke="hsl(var(--foreground))"
          strokeWidth="1.5" fill="none"
          strokeLinecap="round" />
        {/* Mouth left */}
        {/* <path d="M 55 72 Q 50 78 45 75" stroke="hsl(var(--foreground))" strokeWidth="2" fill="none" strokeLinecap="round" /> */}
        {/* Mouth right */}
        {/* <path d="M 65 72 Q 70 78 75 75" stroke="hsl(var(--foreground))" strokeWidth="2" fill="none" strokeLinecap="round" /> */}
        {/* Whiskers left */}
        {/* <line x1="10" y1="58" x2="35" y2="62" stroke="hsl(var(--foreground))" strokeWidth="1.5" /> */}
        {/* <line x1="12" y1="68" x2="35" y2="68" stroke="hsl(var(--foreground))" strokeWidth="1.5" /> */}
        {/* Whiskers right */}
        {/* <line x1="110" y1="58" x2="85" y2="62" stroke="hsl(var(--foreground))" strokeWidth="1.5" /> */}
        {/* <line x1="108" y1="68" x2="85" y2="68" stroke="hsl(var(--foreground))" strokeWidth="1.5" /> */}
        {/* Blush left */}
        <ellipse cx="30" cy="65" rx="8" ry="5" className="fill-primary/30" />
        {/* Blush right */}
        <ellipse cx="90" cy="65" rx="8" ry="5" className="fill-primary/30" />
      </svg>
      {/* Heart decoration */}
      <div className="absolute -top-2 -right-2 text-2xl animate-pulse-heart"> 💕 </div>
    </div>);
};
export default CuteCat;