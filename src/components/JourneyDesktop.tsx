import useWindowWidth from '@/lib/hooks/useWindowWidth';
import { linesArr } from '@/lib/linesArray';
import { MotionValue, motion, useAnimate, useTransform } from 'framer-motion';
import { MutableRefObject, useEffect, useState } from 'react';
import MovementLines from './MovementLines';
import TextContainer from './TextContainer';

export default function JourneyDesktop({
  scrollYProgress,
  containerRef,
}: {
  scrollYProgress: MotionValue<number>;
  containerRef: MutableRefObject<null>;
}) {
  const { width } = useWindowWidth();

  const position = useTransform(
    scrollYProgress,
    [0, 0.2, 0.7, 1],
    ['-100%', '5%', '5%', '150%']
  );

  const leftTextOpacity = useTransform(
    scrollYProgress,
    [0, 0.8, 0.9],
    ['0', '0', '1']
  );
  const rightTextOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7],
    ['0', '0.001', '1', '0']
  );

  const [scope, animate] = useAnimate();

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
    <div className="hidden lg:block h-[400vh]   w-full ">
      <div
        className=" w-full  sticky top-0 left-0 right-0  h-screen overflow-hidden flex justify-around
            max-h-screen pt-[100px]"
      >
        <div ref={scope}>
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
        </div>

        <motion.div
          className="fixed top-[30%] bg-[url('/assets/images/spaceship.png')]   w-[335px] h-[186.111px] lg:w-[540px] lg:h-[300px] animate-shipAnimation bg-contain "
          style={{ left: position }}
        />
        <motion.div className="mt-[15%]" style={{ opacity: leftTextOpacity }}>
          <TextContainer
            height="290px"
            text={
              <>
                <p className="text-secondary font-mono text-[20px]  leading-[20px] mb-4 ">
                  Later, my path led me to pursue postgraduate studies in
                  Barcelona, Spain. One in digital editions and another in
                  innovation and design thinking.
                </p>
                <p className="text-secondary font-mono text-[20px]  leading-[20px] mb-4">
                  Now, I am dedicated to working with companies developing SaaS
                  products, apps, and websites.
                </p>
                <p className="text-secondary font-mono text-[20px]  leading-[20px]">
                  Additionally, in my free time, I work on personal projects
                  related to video games.
                </p>
              </>
            }
          />
        </motion.div>
        <motion.div className="mt-[15%]" style={{ opacity: rightTextOpacity }}>
          <TextContainer
            height="290px"
            className="w-[315px] h-[410px]
          lg:w-[590px] lg:h-[310px]"
            text={
              <>
                <p className="text-secondary font-mono text-[20px]  leading-[20px] mb-4 ">
                  It all started with the little yellow character (Pacman) on an
                  Atari 2600. Since then, my interest and passion for
                  interaction in various digital media have only grown.
                </p>
                <p className="text-secondary font-mono text-[20px]  leading-[20px] mb-4">
                  At the age of 18, I decided to study graphic design, and from
                  there, my professional career began, focused on designing and
                  developing Websites for various clients.
                </p>
                <p className="text-secondary font-mono text-[20px]  leading-[20px]">
                  I lived in Costa Rica for 4 years, where I had the opportunity
                  to work on platforms for the financial, governmental, tourism,
                  and NGO sectors.
                </p>
              </>
            }
          />
        </motion.div>
      </div>
    </div>
  );
}
