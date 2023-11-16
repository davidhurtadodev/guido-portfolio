import type { Project } from '@/lib/types';
import Image from 'next/image';

import { Button } from './ui/button';
import Tab from '@assets/images/icon/tab.svg';
import Link from 'next/link';

export default function ProjectPreview({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const orientation = index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row';

  return (
    <div
      className={`w-[305px] lg:w-auto lg:flex lg:items-center lg:gap-x-[240px] ${orientation}`}
    >
      <div className={`relative hidden lg:block    ${project.img.dimensions} `}>
        <Image
          className="object-contain"
          src={project.img.src}
          alt={project.title}
          fill
        />
      </div>

      <div className="lg:max-w-[695px]">
        <div className="flex gap-x-2 mb-2 items-center">
          <div
            className={`relative lg:hidden h-auto grow ${project.img.dimensions} `}
          >
            <Image
              className="object-contain "
              src={project.img.src}
              alt={project.title}
              fill
            />
          </div>
          <h2 className="text-[30px] font-mono font-normal text-secondary basis-[277px]">
            {project.title.toUpperCase()}
          </h2>
        </div>

        <div className="mb-6">
          <p className="font-mono text-secondary text-[27px] font-normal leading-5 lg:leading-7">
            {project.text}
          </p>
        </div>
        <Link
          className="hover:no-underline"
          target="_blank"
          href={project.url ?? '/#'}
        >
          <Button className="uppercase bg-transparent w-[253px]   flex justify-center gap-x-2 font-mono text-2xl text-secondary py-3 h-[49px] hover:bg-[#FF4C6C] [border-image-source:url(/assets/images/button-border.svg)] [border-image-slice:3]  [border-image-width:2] border  [border-image-repeat:stretch]">
            View project
            <Tab />
          </Button>
        </Link>
      </div>
    </div>
  );
}
