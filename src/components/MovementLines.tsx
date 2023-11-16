interface MovementLinesI {
  width: string;
  top: string;
  right: string;
}

export default function MovementLines({ width, top, right }: MovementLinesI) {
  return (
    <div
      className={` h-[5px]  bg-secondary absolute  ${width} ${top} ${
        right ? right : null
      }`}
    ></div>
  );
}
