'use client';
import { useEffect, useState } from 'react';
import useYScroll from '@/lib/hooks/useYOffset';
import Link from 'next/link';

export default function Header({ className }: { className?: string }) {
  const [BG, setBG] = useState('rgba(33,32,28,0)');

  const handleScroll = () => {
    const YScroll = window.scrollY;
    let calc = YScroll / 40;
    if (calc > 1) calc = 1;

    setBG(`rgba(33,32,28,${calc})`);
  };

  useEffect(() => {
    window.removeEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="w-full px-6   pt-9 pb-8 lg:px-[105px] z-50 ${BG} fixed  top-0"
      style={{ background: BG }}
    >
      <nav className="w-full">
        <ul className="flex w-full justify-between lg:justify-start lg:gap-x-10">
          <li className="font-mono uppercase text-secondary text-[28px] lg:text-[32px] hover:text-accent">
            <Link className="hover:!text-accent" href="#main">
              Top
            </Link>
          </li>
          <li className="font-mono uppercase text-secondary text-[28px] lg:text-[32px] hover:text-accent">
            <Link className="hover:!text-accent" href="#journeySection">
              Journey
            </Link>
          </li>

          <li className="font-mono uppercase text-secondary text-[28px] lg:text-[32px] hover:text-accent">
            <Link className="hover:!text-accent" href="#projectsSection">
              Projects
            </Link>
          </li>

          <li className="font-mono uppercase text-secondary text-[28px] lg:text-[32px] hover:text-accent">
            <Link className="hover:!text-accent" href="#footer">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
