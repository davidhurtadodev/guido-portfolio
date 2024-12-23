import coin from '@assets/images/projects/coin.gif';
import youtube from '@assets/images/projects/youtube.gif';
import survivor from '@assets/images/projects/survivor.gif';
import disk from '@assets/images/projects/disk.gif';
import wallet from '@assets/images/projects/wallet.gif';
import type { Project } from './types';

export const projectsData: Array<Project> = [
    {
    title: 'Credicore',
    text: 'Credicore is a Chilean SaaS Product for grant and manage differents types of bank credtis. The product was created to distribuited in all LATAM ',
    img: {
      src: wallet,
      dimensions: 'w-[19px] lg:w-[185px] h-[32px] lg:h-[307px]',
    },
    url: 'https://invis.io/2A13EVBP9YK8#/430892144_LOGIN_FINAL',
    openBlank: true,
  },
  {
    title: 'RVIEWER',
    text: 'Rviewer is a digital product that connect high tech profiles with companies. My roles initially was to create high fidelity wireframes and UI for some features of the product and then the creation of all the pieces of design required by the marketing department',
    img: {
      src: disk,
      dimensions: 'w-[19px] lg:w-[185px] h-[32px] lg:h-[307px]',
    },
    url: 'http://portfolio.guidohurtado.com/rviewer',
    openBlank: false,
  },
  {
    title: 'Sysde SAF+',
    text: 'Saf+ is beautiful software that processes and automates the operations for the financial institutions. My tasks were to create an intuitive interface that can be used by anyone with financial and technological knowledge.',
    img: {
      src: coin,
      dimensions: 'w-[30px] lg:w-[192px] h-[30px] lg:h-[192px]',
    },
    url: `https://projects.invisionapp.com/share/8V13CWE54Z9D#/screens/474909251_LOGIN
    `,
    openBlank: true,
  },
  {
    title: 'Survivor 01',
    text: 'Survivor 01 is a runner game where our protagonist travel to different planets to to discover the reason of his tragic accident in the space station. My role was to create all the illustrations, animations and interface of the game',
    img: {
      src: survivor,
      dimensions: 'w-[68px] lg:w-[300px] h-[55px] lg:h-[240px]',
    },
    url: `https://www.figma.com/proto/9NlFabbDGMTQz8u1MapMu6/Suvivor-01?page-id=1%3A29990&node-id=1-29991&viewport=599%2C489%2C0.09&t=rpLyQvQwW2oX9VEo-1&scaling=min-zoom&content-scaling=fixed`,
    openBlank: true,
  },

  {
    title: 'Nipkow',
    text: `NIPKOW is the youtube channel where I speak about videogames, anime and manga. I'm in charge in all the writing, designing, animate, recording and editing.`,
    img: {
      src: youtube,
      dimensions: 'w-[27px] lg:w-[192px] h-[27px] lg:h-[192px]',
    },
    url: `http://portfolio.guidohurtado.com/nipkow`,
    openBlank: false,
  },
];
