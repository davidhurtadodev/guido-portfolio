import Image from 'next/image';
import ship from '@assets/images/spaceship.png';
export default function VerticalShipContainer() {
  return (
    <section className="min-h-[200vh] bg-primary w-full flex flex-col items-center pt-[148px] lg:pt-10">
      <h2 className="uppercase text-[40px] text-secondary font-mono lg:text-[62px]">
        The journey
      </h2>
      <div className="relative w-[335px] h-[186.111px] lg:w-[540px] lg:h-[300px]">
        <Image src={ship} alt="spaceship" fill />
      </div>
    </section>
  );
}
