export const Mirror = () => (
  <filter id="glitch">
    <feTurbulence
      type="turbulance"
      in="SourceGraphic"
      baseFrequency="0.0 0.4"
      numOctaves="2"
      result="turbulence"
    />
    <feMorphology in="turbulence" operator="dilate" radius="1" result="fatty" />
    <feDisplacementMap
      in2="fatty"
      in="SourceGraphic"
      scale="60"
      xChannelSelector="R"
      yChannelSelector="G"
      result="displacement"
    />
    <feOffset in="displacement" dx="-12" dy="-10" />
  </filter>
);
