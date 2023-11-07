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
          text={
            <>
              <p className="text-secondary font-mono text-[20px]  leading-[20px] mb-4">
                Todo el mundo dice que nací con un control de Nintendo en las
                manos y es que no lo puedo evitar, me apasionan los videojuegos.
                Mi primer recuerdo gráfico e interactivo me transporta a un
                mundo donde un personaje amarillo se come a sus enemigos
                (Pacman).
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
          text={
            <>
              <p className="text-secondary font-mono text-[20px]  leading-[20px] mb-4">
                Todo el mundo dice que nací con un control de Nintendo en las
                manos y es que no lo puedo evitar, me apasionan los videojuegos.
                Mi primer recuerdo gráfico e interactivo me transporta a un
                mundo donde un personaje amarillo se come a sus enemigos
                (Pacman).
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
      </div>
    </div>
  );
}
