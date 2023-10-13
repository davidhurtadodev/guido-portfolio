import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full px-6 py-9 sticky lg:px-[110px]">
      <nav className="w-full">
        <ul className="flex w-full justify-between lg:justify-start lg:gap-x-10">
          <li className="font-mono uppercase text-secondary text-[28px] lg:text-[32px] hover:text-accent">
            <Link href="#hero">Journey</Link>
          </li>

          <li className="font-mono uppercase text-secondary text-[28px] lg:text-[32px] hover:text-accent">
            <Link href="#projects">Projects</Link>
          </li>

          <li className="font-mono uppercase text-secondary text-[28px] lg:text-[32px] hover:text-accent">
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
