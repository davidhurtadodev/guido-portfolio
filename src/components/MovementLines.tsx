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

  right: string;
  left?: string;
  containerRef: MutableRefObject<null>;
}

export default function MovementLines({
  width,
  top,
  right,
  containerRef,
}: MovementLinesI) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animation = animate(
      'div',
      { x: '-200vw' },
      { duration: 2, repeat: Infinity, ease: 'linear' }
    );

    scrollYProgress.onChange((latest) => {
      if (latest < 0.2) {
        animation.speed = 1;
      } else if (latest >= 0.2 && latest < 0.3) {
        animation.speed = 2;
      } else if (latest >= 0.3 && latest < 0.8) {
        animation.speed = 3;
      } else if (latest >= 0.8) {
        animation.speed = 1;
      }
    });
    console.log(animation.speed);
  }, [scrollYProgress]);

  return (
    <div ref={scope}>
      <div
        className={` h-[5px]  bg-secondary absolute  ${width} ${top} ${
          right ? right : null
        }`}
      ></div>
    </div>
  );
}
