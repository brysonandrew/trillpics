export const coloredSource = (
  key: string,
  color = "purple"
) => {
  return (
    <>
      <feFlood
        in="SourceGraphic"
        floodColor={color}
        result="P"
      />
      <feComposite
        in="P"
        in2="SourceGraphic"
        operator="in"
        result={key}
      />
    </>
  );
};