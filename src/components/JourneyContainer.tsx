'use client';
import TextContainer from './TextContainer';
import { useEffect, useRef, useState } from 'react';
import {
  motion,
  useAnimate,
  useScroll,
  useTransform,
  inView,
} from 'framer-motion';
import MovementLines from './MovementLines';
import { linesArr } from '@/lib/linesArray';
import useWindowWidth from '@/lib/hooks/useWindowWidth';
import JourneyMobile from './JourneyMobile';
import JourneyDesktop from './JourneyDesktop';

export default function VerticalShipContainer() {
  const { width } = useWindowWidth();

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  return (
    <section
      ref={ref}
      className=" bg-primary w-full flex flex-col items-center pt-[148px] lg:pt-10"
      id="journeySection"
    >
      <h2 className="uppercase text-[40px] text-secondary font-mono lg:text-[62px] lg:mb-[50px]">
        The journey
      </h2>
      {width && width < 1024 && (
        <JourneyMobile containerRef={ref} scrollYProgress={scrollYProgress} />
      )}

      {width && width >= 1024 && (
        <JourneyDesktop containerRef={ref} scrollYProgress={scrollYProgress} />
      )}
    </section>
  );
}
