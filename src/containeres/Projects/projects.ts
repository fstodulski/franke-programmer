export type Asset = {
  url: string;
  alt: string;
  width?: number;
  cssClass?: string;
  height?: number;
};

export enum Composition {
  SingleRotated = 'singleRotated',
  Single = 'single',
  Double = 'double',
  Triple = 'triple'
}

export type ProjectLink = {
  href: string;
  alt: string;
  ariaLabel: string;
};

export type Project = {
  title: string;
  points: Array<string>;
  height?: number;
  link: ProjectLink;
  assets: Asset[];
  composition: Composition;
  backgroundColor?: string;
  fontColor?: string;
};

export const TECH_STACK: string[] = [
  'Svelte',
  'Angular',
  'React/Next.js',
  'Node.js',
  'TypeScript',
  'Astro',
  'TailwindCSS',
  'SCSS',
  'Prisma',
  'PostgreSQL',
  'Google Cloud',
  'Firebase',
  'Docker'
];

export const PROJECTS: Project[] = [
  {
    title: 'Flip.shop',
    points: ['FrontEnd Team Lead', '6 Web apps', 'Leading team of 10+'],
    link: {
      href: 'https://flip.shop',
      alt: 'Flip.shop',
      ariaLabel: 'Flip.shop - link to the website'
    },
    backgroundColor: '#c964d7',
    fontColor: '#EFBAFC',
    composition: Composition.Triple,
    assets: [
      {
        url: '/assets/flip-shop/Flip-Shop-2.webp',
        alt: 'Flip.shop - website screenshot',
        width: 438,
        height: 798
      },
      {
        url: '/assets/flip-shop/Flip-Shop-1.webp',
        alt: 'Flip.shop - website screenshot',
        width: 438,
        height: 798
      },
      {
        url: '/assets/flip-shop/Flip-Shop-3.webp',
        alt: 'Flip.shop - website screenshot',
        width: 438,
        height: 798
      }
    ]
  },
  {
    title: 'Tiny Heroes',
    points: ['Google Cloud', 'Front + Backend', 'NFT Smart Contracts'],
    height: 420,
    link: {
      href: 'https://tiny-heroes-svelte.vercel.app',
      alt: 'Tiny Heroes',
      ariaLabel: 'Tiny Heroes - link to the website'
    },
    backgroundColor: '#2e9f3d',
    fontColor: '#9EEEA9',
    composition: Composition.SingleRotated,
    assets: [
      {
        url: '/assets/tiny-heroes/tiny-heroes.webp',
        alt: 'Flip.shop - website screenshot',
        width: 1440,
        height: 1415,
        cssClass: 'border-green-100'
      }
    ]
  },
  {
    title: 'kubamikolajczyk.pl',
    points: ['Front'],
    link: {
      href: 'https://www.kubamikolajczyk.pl',
      alt: 'Flip.shop',
      ariaLabel: 'Flip.shop - link to the website'
    },
    backgroundColor: '#4b47ff',
    fontColor: '#A3B5FA',
    composition: Composition.Single,
    assets: [
      {
        url: '/assets/kubu/kubu.webp',
        alt: 'Flip.shop - website screenshot',
        width: 1440,
        height: 1071
      }
    ]
  },
  {
    title: 'Givt',
    points: ['Frontend', 'Dynamic Forms'],
    link: {
      href: 'https://givt.com/en/',
      alt: 'Givt.com',
      ariaLabel: 'Givt.com - link to the website'
    },
    backgroundColor: '#d32f37',
    fontColor: '#FFC8CA',
    composition: Composition.Single,
    assets: [
      {
        url: '/assets/givt/givt.webp',
        alt: 'GIVT - website screenshot',
        width: 1920,
        height: 900
      }
    ]
  },
  {
    title: 'FarmRentCar',
    points: ['Front + Backend', 'Design', 'DevOps'],
    link: {
      href: 'https://farmrentacar.com/',
      alt: 'Farm Rent a Car',
      ariaLabel: 'Farm Rent a Car - link to the website'
    },
    backgroundColor: '#4cabf2',
    fontColor: '#B7E1FF',
    composition: Composition.Double,
    assets: [
      {
        url: '/assets/farm-rent/farm-rent-2.webp',
        alt: 'Farn Rent A Car - website screenshot',
        width: 438,
        height: 798
      },
      {
        url: '/assets/farm-rent/farm-rent-1.webp',
        alt: 'Farm Rent A Car - second website screenshot',
        width: 438,
        height: 798
      }
    ]
  },

  {
    title: 'Retail Me Not',
    points: ['Front + Backend', 'Refactoring', 'Maintenance'],
    height: 420,
    link: {
      href: 'https://www.retailmenot.com/',
      alt: 'Retail Me Not',
      ariaLabel: 'Retail Me Not - link to the website'
    },
    backgroundColor: '#561d86',
    fontColor: '#D8AAFF',
    composition: Composition.SingleRotated,
    assets: [
      {
        url: '/assets/retail-me-not/retail-me-not.webp',
        alt: 'Retail Me Not - website screenshot',
        width: 4320,
        height: 3762
      }
    ]
  },
  {
    title: 'Home & Living',
    points: ['FrontEnd', 'Angular', 'Custom bed configurator'],
    height: 420,
    link: {
      href: 'https://pd.agency/en/realizations/home-and-living-web/',
      alt: 'Home & Living - Podwysocki Design, Website Design Agency',
      ariaLabel: 'Home & Living - Podwysocki Design, Website Design Agency - link to the website'
    },
    backgroundColor: '#A58F57',
    fontColor: '#FFEBBB',
    composition: Composition.Single,
    assets: [
      {
        url: '/assets/h&l/h&l.webp',
        alt: 'Home & Living - website screenshot',
        width: 1280,
        height: 811
      }
    ]
  }
];
