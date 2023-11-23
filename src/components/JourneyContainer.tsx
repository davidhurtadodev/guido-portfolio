'use client';

import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import useWindowWidth from '@/lib/hooks/useWindowWidth';
import JourneyMobile from './JourneyMobile';
import JourneyDesktop from './JourneyDesktop';

export default function JourneyContainer() {
  const { width } = useWindowWidth();

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  return (
    <section
      className=" bg-primary w-full flex flex-col items-center pt-[148px] lg:pt-10 lg:mb-[80px]"
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
