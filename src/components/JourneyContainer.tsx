'use client';
import TextContainer from './TextContainer';
import Image from 'next/image';
import ship from '@assets/images/spaceship.png';
import Line from '@assets/images/line.svg';
import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
export default function VerticalShipContainer() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const position = useTransform(scrollYProgress, [0, 1], ['-100%', '100%']);

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

  return (
    <section
      ref={ref}
      className=" bg-primary w-full flex flex-col items-center pt-[148px] lg:pt-10"
    >
      <h2 className="uppercase text-[40px] text-secondary font-mono lg:text-[62px] lg:mb-[188px]">
        The journey
      </h2>
      <div className="hidden lg:block min-h-[200vh]  w-full ">
        <div className="flex w-full justify-around sticky top-[30vh]">
          <motion.div
            className="fixed top-[20%] bg-[url('/assets/images/spaceship.png')]   w-[335px] h-[186.111px] lg:w-[540px] lg:h-[300px] animate-animateY animate-rotateShip bg-contain"
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
      <div className="lg:hidden">
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

        <div className="min-h-[1600px]   w-full overflow-hidden">
          <motion.div
            className="fixed top-[20%] bg-[url('/assets/images/spaceship.png')]   w-[335px] h-[186.111px] lg:w-[540px] lg:h-[300px] animate-animateY animate-rotateShip bg-contain"
            style={{ left: position }}
          />
        </div>
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
    </section>
  );
}
