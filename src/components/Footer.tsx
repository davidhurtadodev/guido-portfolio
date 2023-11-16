import Linkedin from '@assets/images/icon/linkedin.svg';
import Youtube from '@assets/images/icon/youtube.svg';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-[#21201C] px-5 pt-7 pb-4 mt-[100px] lg:p-[93px] lg:pb-10 "
    >
      <div className="lg:flex lg:gap-x-[283px] lg:mb-12">
        <div>
          <div className="mb-5">
            <h2 className="font-sans text-[54px] font-normal text-secondary">
              Guido Hurtado
            </h2>
            <h2 className="font-sans text-[54px] font-thin text-secondary">
              UX/UI Designer
            </h2>
          </div>
          <div className="mb-2">
            <p className="font-mono text-[27px] mb-1 text-secondary">
              guidohurtadog@gmail.com
            </p>
            <p className="font-mono text-[27px] text-secondary">
              +34 650 779 404
            </p>
          </div>
        </div>
        <div className="flex  ml-1 mb-7 lg:mb-0 lg:flex-col">
          <p className="hidden lg:block text-secondary text-[27px] mb-4 font-mono uppercase lg:mt-3">
            You can also find me on:
          </p>
          <div className="flex gap-x-2">
            <Link target="_blank" className="block" href="/#">
              <Linkedin className="fill-secondary hover:fill-accent" />
            </Link>
            <Link
              target="_blank"
              className="block"
              href="https://www.youtube.com/nipkowtv"
            >
              <Youtube className="fill-secondary hover:fill-accent" />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full text-center">
        <small className="font-mono text-secondary text-[17px]">
          © 2023 GUIDO DESIGN
        </small>
      </div>
    </footer>
  );
}
