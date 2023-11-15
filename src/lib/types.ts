// export type Project = {
//   excerpt: string;
//   title: string;
//   uri: string;
//   featuredImage: {
//     node: {
//       sourceUrl: string;
//       altText: string | null;
//     };
//   };
// };

import { StaticImageData } from 'next/image';

export type Project = {
  title: string;
  text: string;
  url?: string;
  img: {
    src: StaticImageData;
    dimensions: string;
  };
};
