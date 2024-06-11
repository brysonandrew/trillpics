export const GlowFilter = () => (
    <filter id="glow1" x="0%" y="0%" width="160%" height="160%">
    <feGaussianBlur stdDeviation="10 10" result="glow" />
    <feGaussianBlur stdDeviation="5 5" result="glow1" />
    <feGaussianBlur stdDeviation="1 1" result="glow2" />
    <feMerge result="glow">
      <feMergeNode in="glow" />
      <feMergeNode in="glow1" />
      <feMergeNode in="glow2" />
    </feMerge>
  </filter>
  );
