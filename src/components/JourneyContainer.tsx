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

export default function VerticalShipContainer() {
  const { width } = useWindowWidth();
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    setIsMobile(width! < 1024);
    //   const handleResizeWindow = () => {
    //     window.innerWidth >= 1024 ? setIsMobile(false) : setIsMobile(true);
    //   };
    //   // subscribe to window resize event "onComponentDidMount"
    //   window.addEventListener('resize', handleResizeWindow);

    //   return () => {
    //     // unsubscribe "onComponentDestroy"
    //     window.removeEventListener('resize', handleResizeWindow);
    //   };
  });
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const position = useTransform(scrollYProgress, [0, 1], ['-150%', '150%']);

  const leftTextOpacity = useTransform(
    scrollYProgress,
    [0, 0.6, 0.8, 1],
    ['0', '0.01', '0.8', '1']
  );
  const rightTextOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 1],
    ['1', '1', '0.01', '0']
  );

  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (isMobile !== null) {
      const animation = animate(
        'div',
        { x: '-350vw' },
        { duration: 6, repeat: Infinity, ease: 'linear' }
      );

      scrollYProgress.on('change', (latest) => {
        console.log(isMobile);
        // if (latest < 0.01) {
        //   animation.pause();
        //   return;
        // } else animation.play();
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
  }, [scrollYProgress, isMobile]);

  return (
    <section
      ref={ref}
      className=" bg-primary w-full flex flex-col items-center pt-[148px] lg:pt-10"
    >
      <h2 className="uppercase text-[40px] text-secondary font-mono lg:text-[62px] lg:mb-[50px]">
        The journey
      </h2>
      <div className="hidden lg:block h-[200vh]   w-full ">
        <div
          className=" w-full  sticky top-[30vh] left-0 right-0  h-screen overflow-hidden flex justify-around
            max-h-screen pt-[100px]"
        >
          {isMobile === false && (
            <div ref={scope}>
              {linesArr.map((line, index) => (
                <MovementLines
                  initial={0}
                  top={line.top}
                  width={line.width}
                  right={line.right}
                  containerRef={ref}
                  key={index}
                  animate={animate}
                />
              ))}
            </div>
          )}

          <motion.div
            className="fixed top-[30%] bg-[url('/assets/images/spaceship.png')]   w-[335px] h-[186.111px] lg:w-[540px] lg:h-[300px] animate-animateY animate-rotateShip bg-contain "
            style={{ left: position }}
          />
          <motion.div style={{ opacity: leftTextOpacity }}>
            <TextContainer
              text={
                <>
                  <p className="text-secondary font-mono text-[20px]  leading-[20px] mb-4">
                    Todo el mundo dice que nací con un control de Nintendo en
                    las manos y es que no lo puedo evitar, me apasionan los
                    videojuegos. Mi primer recuerdo gráfico e interactivo me
                    transporta a un mundo donde un personaje amarillo se come a
                    sus enemigos (Pacman).
                  </p>
                  <p className="text-secondary font-mono text-[20px]  leading-[20px]">
                    El anime, los comics, la fotografía, el cine y los
                    videojuegos no solo llenan mi tiempo libre de experiencias
                    satisfactorias sino que a través de los años me han
                    alimentado a tal punto de que influyen en una parte
                    importante de mi trabajo.
                  </p>
                </>
              }
            />
          </motion.div>
          <motion.div style={{ opacity: rightTextOpacity }}>
            <TextContainer
              text={
                <>
                  <p className="text-secondary font-mono text-[20px]  leading-[20px] mb-4">
                    Todo el mundo dice que nací con un control de Nintendo en
                    las manos y es que no lo puedo evitar, me apasionan los
                    videojuegos. Mi primer recuerdo gráfico e interactivo me
                    transporta a un mundo donde un personaje amarillo se come a
                    sus enemigos (Pacman).
                  </p>
                  <p className="text-secondary font-mono text-[20px]  leading-[20px]">
                    El anime, los comics, la fotografía, el cine y los
                    videojuegos no solo llenan mi tiempo libre de experiencias
                    satisfactorias sino que a través de los años me han
                    alimentado a tal punto de que influyen en una parte
                    importante de mi trabajo.
                  </p>
                </>
              }
            />
          </motion.div>
        </div>
      </div>
      <div className="lg:hidden w-full flex  h-[600vh] justify-start flex-col items-center">
        <div className="mt-0 ">
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
        </div>
        {/* OJO no mover el height de 100vh */}
        <div
          className="sticky top-[1px] h-screen overflow-hidden   left-0 right-0  w-full  mb-[500px] max-h-screen"
          ref={isMobile ? scope : undefined}
        >
          {isMobile &&
            linesArr.map((line, index) => (
              <MovementLines
                initial={0}
                top={line.top}
                width={line.width}
                right={line.right}
                containerRef={ref}
                key={index}
                animate={animate}
              />
            ))}
          <motion.div
            className="fixed top-[20%] bg-[url('/assets/images/spaceship.png')]   w-[335px] h-[186.111px] lg:w-[540px] lg:h-[300px] animate-animateY animate-rotateShip bg-contain"
            style={{ left: position }}
          />
        </div>
        <div className="mt-auto mb-0 shrink-0">
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
        </div>
      </div>
    </section>
  );
}
