'use client';
import { useEffect, useState } from 'react';
import useYScroll from '@/lib/hooks/useYOffset';
import Link from 'next/link';

export default function Header() {
  // const [offset, setOffset] = useState(0);
  const { YScroll } = useYScroll();
  // useEffect(() => {
  //   const onScroll = () => setOffset(window.scrollY);
  //   // clean up code
  //   window.removeEventListener('scroll', onScroll);
  //   window.addEventListener('scroll', onScroll, { passive: true });
  //   return () => window.removeEventListener('scroll', onScroll);
  // }, []);

  return (
    <header
      className={`w-full px-6 py-9  lg:px-[110px] z-50 bg-primary fixed top-0 ${
        YScroll && YScroll > 10
          ? 'shadow-[0px_3px_4px_0px_rgba(0,0,0,0.25)] bg-primary'
          : 'bg-transparent'
      }`}
    >
      <nav className="w-full">
        <ul className="flex w-full justify-between lg:justify-start lg:gap-x-10">
          <li className="font-mono uppercase text-secondary text-[28px] lg:text-[32px] hover:text-accent">
            <Link href="#main">Top</Link>
          </li>
          <li className="font-mono uppercase text-secondary text-[28px] lg:text-[32px] hover:text-accent">
            <Link href="#journeySection">Journey</Link>
          </li>

          <li className="font-mono uppercase text-secondary text-[28px] lg:text-[32px] hover:text-accent">
            <Link href="#projectsSection">Projects</Link>
          </li>

          <li className="font-mono uppercase text-secondary text-[28px] lg:text-[32px] hover:text-accent">
            <Link href="#footer">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
