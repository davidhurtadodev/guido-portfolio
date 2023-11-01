import {
  MotionValue,
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useAnimate,
} from 'framer-motion';
import { MutableRefObject, useEffect, useState } from 'react';

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
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  useEffect(() => {
    const animation = animate(
      'div',
      { x: '-350vw' },
      { duration: 6, repeat: Infinity, ease: 'linear' }
    );

    scrollYProgress.onChange((latest) => {
      if (latest < 0.1) {
        animation.speed = 1;
      } else if (latest >= 0.2 && latest < 0.3) {
        animation.speed = 2;
      } else if (latest >= 0.3 && latest < 0.4) {
        animation.speed = 4;
      } else if (latest >= 0.4 && latest < 0.8) {
        animation.speed = 6;
      } else if (latest >= 0.8 && latest < 0.85) {
        animation.speed = 4;
      } else if (latest >= 0.85) {
        animation.speed = 2;
      } else if (latest >= 0.9) {
        animation.speed = 1;
      }
    });
  }, [scrollYProgress]);

  return (
    <div
      className={` h-[5px]  bg-secondary absolute  ${width} ${top} ${
        right ? right : null
      }`}
    ></div>
  );
}
