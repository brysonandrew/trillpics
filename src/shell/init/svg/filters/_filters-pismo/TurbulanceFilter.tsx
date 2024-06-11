export const TURBULANCE_ID = "TURBULANCE_ID";

export const TurbulanceFilter = () => (
    <filter id={TURBULANCE_ID} x="-50%" y="-50%" width="200%" height="200%">
      <feTurbulence
        type="turbulence"
        in="SourceGraphic"
        baseFrequency="0.4 0.0"
        numOctaves="2"
        result="turbulence"
      />
      <feMorphology in="turbulence" operator="dilate" radius="1" result="fatty" />
      <feDisplacementMap
        in2="fatty"
        in="SourceGraphic"
        scale="150"
        xChannelSelector="R"
        yChannelSelector="G"
        result="displacement"
      />
      <feOffset in="displacement" dx="0" dy="-28" result="offset" />
      <feGaussianBlur in="offset" stdDeviation="6 6" result="glow" />
      <feGaussianBlur stdDeviation="4 4" result="glow1" />
      <feGaussianBlur stdDeviation="2 2" result="glow2" />
      <feMerge result="glow">
        <feMergeNode in="glow" />
        <feMergeNode in="glow1" />
        <feMergeNode in="glow2" />
      </feMerge>
  
    </filter>
  );
