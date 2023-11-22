import Arrow from '@assets/images/icon/arrow.svg';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="pl-5 lg:pl-24 relative mt-auto mb-0 grow">
      <div className="mt-[126px]">
        <p className="uppercase font-mono text-[28px]z text-secondary lg:text-[40px] xl:text-[40px] 2xl:text-[50px] -mb-4  lg:mt-[12%] lg:-mb-6">
          I’m Guido, a venezuelan
        </p>
        <h1 className="font-sans text-[89px] uppercase text-secondary leading-[98px] lg:text-[120px] xl:text-[150px] 2xl:text-[189px] lg:leading-[189px] ">
          UI/UX Designer
        </h1>
        <p className="uppercase font-mono text-[28px] text-secondary mb-10 lg:text-[40px] xl:text-[40px] 2xl:text-[50px] lg:pl-3">
          with a passion in videogames
        </p>
        <Link href="#journeySection">
          <Arrow className="m-auto animate-moveArrow" />
        </Link>
      </div>
      <div className="w-[142.839px] h-[356.807px] xl:w-[256px] xl:h-[640px] bg-[url('/assets/images/guido-idle.gif')] hover:bg-[url('/assets/images/guido-drinking.gif')] absolute right-0 bottom-0 bg-contain lg:right-[90px]"></div>
    </section>
  );
}
