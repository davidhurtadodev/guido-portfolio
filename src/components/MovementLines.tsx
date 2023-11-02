import { useScroll } from 'framer-motion';
import { MutableRefObject, useEffect } from 'react';

interface MovementLinesI {
  width: string;
  top: string;
  initial: string | number;
  animate: any;
  right: string;
  containerRef: MutableRefObject<null>;
}

export default function MovementLines({
  width,
  top,
  right,
  containerRef,
  animate,
}: MovementLinesI) {
  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  // });

  return (
    <div
      className={` h-[5px]  bg-secondary absolute  ${width} ${top} ${
        right ? right : null
      }`}
    ></div>
  );
}
