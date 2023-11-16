import { MutableRefObject, useEffect, useState } from 'react';
import TextContainer from './TextContainer';
import { MotionValue, motion, useAnimate, useTransform } from 'framer-motion';
import MovementLines from './MovementLines';
import { linesArr } from '@/lib/linesArray';
import useWindowWidth from '@/lib/hooks/useWindowWidth';

export default function JourneyMobile({
  scrollYProgress,
  containerRef,
}: {
  scrollYProgress: MotionValue<number>;
  containerRef: MutableRefObject<null>;
}) {
  const [scope, animate] = useAnimate();

  const position = useTransform(scrollYProgress, [0, 1], ['-150%', '150%']);
  const { width } = useWindowWidth();

  useEffect(() => {
    if (width !== undefined) {
      const animation = animate(
        'div',
        { x: '-350vw' },
        { duration: 6, repeat: Infinity, ease: 'linear' }
      );

      scrollYProgress.on('change', (latest) => {
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
    }
  }, [scrollYProgress, width, animate]);
  return (
    <div className="lg:hidden w-full flex  h-[600vh] justify-start flex-col items-center">
      <div className="mt-0 ">
        <TextContainer
          height="290px"
          className="w-[315px] h-[410px]
        lg:w-[590px] lg:h-[310px]"
          text={
            <>
              <p className="text-secondary font-mono text-[20px]  leading-[20px] mb-4 lg:text-[27px]">
                It all started with the little yellow character (Pacman) on an
                Atari 2600. Since then, my interest and passion for interaction
                in various digital media have only grown.
              </p>
              <p className="text-secondary font-mono text-[20px]  leading-[20px] mb-4 lg:text-[27px]">
                At the age of 18, I decided to study graphic design, and from
                there, my professional career began, focused on designing and
                developing Websites for various clients.
              </p>
              <p className="text-secondary font-mono text-[20px]  leading-[20px]lg:text-[27px]">
                I lived in Costa Rica for 4 years, where I had the opportunity
                to work on platforms for the financial, governmental, tourism,
                and NGO sectors.
              </p>
            </>
          }
        />
      </div>
      {/* OJO no mover el height de 100vh */}
      <div
        className="sticky top-[1px] h-screen overflow-hidden   left-0 right-0  w-full  mb-[500px] max-h-screen"
        ref={scope}
      >
        {linesArr.map((line, index) => (
          <MovementLines
            initial={0}
            top={line.top}
            width={line.width}
            right={line.right}
            containerRef={containerRef}
            key={index}
            animate={animate}
          />
        ))}
        <motion.div
          className="fixed top-[20%] bg-[url('/assets/images/spaceship.png')]   w-[335px] h-[186.111px] lg:w-[540px] lg:h-[300px] animate-shipAnimation bg-contain"
          style={{ left: position }}
        />
      </div>
      <div className="mt-auto mb-0 shrink-0">
        <TextContainer
          className="w-[315px] h-[290px]
        lg:w-[590px] lg:h-[290px]"
          height="290px"
          text={
            <>
              <p className="text-secondary font-mono text-[20px]  leading-[20px] mb-4 lg:text-[27px]">
                Later, my path led me to pursue postgraduate studies in
                Barcelona, Spain. One in digital editions and another in
                innovation and design thinking.
              </p>
              <p className="text-secondary font-mono text-[20px]  leading-[20px]mb-4 lg:text-[27px]">
                Now, I am dedicated to working with companies developing SaaS
                products, apps, and websites.
              </p>
              <p className="text-secondary font-mono text-[20px]  leading-[20px]lg:text-[27px]">
                Additionally, in my free time, I work on personal projects
                related to video games.
              </p>
            </>
          }
        />
      </div>
    </div>
  );
}
