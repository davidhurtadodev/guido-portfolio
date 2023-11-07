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
            text={
              <>
                <p className="text-secondary font-mono text-[20px]  leading-[20px] mb-4">
                  Todo el mundo dice que nací con un control de Nintendo en las
                  manos y es que no lo puedo evitar, me apasionan los
                  videojuegos. Mi primer recuerdo gráfico e interactivo me
                  transporta a un mundo donde un personaje amarillo se come a
                  sus enemigos (Pacman).
                </p>
                <p className="text-secondary font-mono text-[20px]  leading-[20px]">
                  El anime, los comics, la fotografía, el cine y los videojuegos
                  no solo llenan mi tiempo libre de experiencias satisfactorias
                  sino que a través de los años me han alimentado a tal punto de
                  que influyen en una parte importante de mi trabajo.
                </p>
              </>
            }
          />
        </motion.div>
        <motion.div className="mt-[15%]" style={{ opacity: rightTextOpacity }}>
          <TextContainer
            text={
              <>
                <p className="text-secondary font-mono text-[20px]  leading-[20px] mb-4 ">
                  Todo el mundo dice que nací con un control de Nintendo en las
                  manos y es que no lo puedo evitar, me apasionan los
                  videojuegos. Mi primer recuerdo gráfico e interactivo me
                  transporta a un mundo donde un personaje amarillo se come a
                  sus enemigos (Pacman).
                </p>
                <p className="text-secondary font-mono text-[20px]  leading-[20px]">
                  El anime, los comics, la fotografía, el cine y los videojuegos
                  no solo llenan mi tiempo libre de experiencias satisfactorias
                  sino que a través de los años me han alimentado a tal punto de
                  que influyen en una parte importante de mi trabajo.
                </p>
              </>
            }
          />
        </motion.div>
      </div>
    </div>
  );
}
