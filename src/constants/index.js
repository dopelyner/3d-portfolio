import {
  react,
  frontend,
  systemadmin,
  fullstack,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  academia,
  feralbyte,
  ist,
  umaia,
  cmv,
  artemis,
  imageguess,
  westsideadventure,
  bravoboy,
  threejs,
  bernie,
  buymecoffee,
  nikelp,
  marketplace,
  bayc
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Fullstack Developer",
    icon: fullstack,
  },
  {
    title: "React Developer",
    icon: react,
  },
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "System Administrator",
    icon: systemadmin,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Computer Science",
    company_name: "IST - Instituto Superior Técnico (Taguspark)",
    icon: ist,
    iconBg: "#00a0e4",
    date: "2015 - 2017",
    points: [
      "Attended Computer Science degree",
    ],
  },
  {
    title: "Computer Science",
    company_name: "UMAIA - Universidade da Maia",
    icon: umaia,
    iconBg: "#0cacdc",
    date: "2017 - 2020",
    points: [
      "Graduation  in Computer Science.",
    ],
  },
  {
    title: "Web developer",
    company_name: "Feralbyte – Technology Architects",
    icon: feralbyte,
    iconBg: "#FFFFFF",
    date: "May 2019 - Jul 2019",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Full stack Programming bootcamp",
    company_name: "<Academia de Código_>",
    icon: academia,
    iconBg: "#FFFFFF",
    date: "May 2020 - Aug 2020",
    points: [
      "A 14-Week Intensive && Immersive FullStack Programming Bootcamp",
      "Programming in Java",
      "Advanced Concepts and Tools",
      "Databases, Frameworks and Web Development",
      "JavaScript",
    ],
  },
  {
    title: "System Administrator",
    company_name: "Município de Velas",
    icon: cmv,
    iconBg: "#FFFFFF",
    date: "Oct 2020 - Present",
    points: [
      "Manage and maintain the organization's computer systems and network infrastructure",
      "Ensuring data security and implementing appropriate security measures",
      "Providing technical support to  non-technical colleagues and work with other departments to understand their technology needs",
      "Configure and responsible for the content of the mobile app, downloadable in Google Play and App Store as ''Município de Velas''",
      "Member of the team that build and configured the Online Services of the City Hall in 'servicos-online.cmvelas.pt'",
    ],
  },
  {
    title: "PoC Bootcamp",
    company_name: "Artemis Education - The premier academy for blockchain education",
    icon: artemis,
    iconBg: "#FFFFFF",
    date: "Jul 2022 - Sep 2022",
    points: [
      "Attended the first cohort of Artemis as a Proof of Concept.",
    ],
  },
  {
    title: "Frontend developer | Teacher Assistant",
    company_name: "Artemis Education - The premier academy for blockchain education",
    icon: artemis,
    iconBg: "#FFFFFF",
    date: "Sep 2022 - Feb 2023",
    points: [
      "Provide pre-recorded presentations on multiple Web3 technologies",
      "Interactive demonstration of various blockchain tools for practical use",
      "Participating in code reviews & providing constructive feedback to students.",
    ],
  },
];

const projects = [
  {
    name: "Bernardo Santo Tirso",
    description:
      "Portfolio website in order to show the work of the great artist and personal friend Bernardo.",
    tags: [
      {
        name: "NextJS",
        color: "",
      },
      {
        name: "TailwindCSS",
        color: "blue-text-gradient",
      },
    ],
    image: bernie,
    source_code_link: "https://github.com/dopelyner/bernardo-santo-tirso",
  },
  {
    name: "Buy me a Coffe",
    description:
      "Smart Contract that implements a tipping functionality.",
    tags: [
      {
        name: "Solidity",
        color: "black-text-gradient",
      },
      {
        name: "Foundry",
        color: "orange-text-gradient",
      },
    ],
    image: buymecoffee,
    source_code_link: "https://github.com/dopelyner/bernardo-santo-tirso",
  },
  {
    name: "NFT Marketplace",
    description:
      "An implemented marketplace allows the owner to establish and modify policy fees, assemble a collection of NFTs, adjust royalty fees, and list and purchase items within the marketplace.",
    tags: [
      {
        name: "Solidity",
        color: "black-text-gradient",
      },
      {
        name: "HardHat",
        color: "yellow-text-gradient",
      },
      {
        name: "React",
        color: "light-blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "blue-text-gradient",
      },
    ],
    image: marketplace,
    source_code_link: "https://github.com/dopelyner/nft-mark3tplace",
  },
  {
    name: "BAYC subgraph",
    description:
      "Bored Ape Yacht Club subgraph.",
    tags: [
      {
        name: "Typescript",
        color: "bluee-text-gradient",
      },

    ],
    image: bayc,
    source_code_link: "https://github.com/dopelyner/bayc-api",
  },
  {
    name: "Nike",
    description:
      "Nike Landing Page clone.",
    tags: [
      {
        name: "React",
        color: "light-blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "blue-text-gradient",
      },
    ],
    image: nikelp,
    source_code_link: "https://github.com/dopelyner/nike-lp",
  },
  {
    name: "Image-Guess",
    description:
      "Terminal-based multi-player game developed in a weekend, using Prompt-view library. The purpose of this game consists in guessing images in ASCII.",
    tags: [
      {
        name: "java",
        color: "orange-text-gradient",
      },
      {
        name: "ASCII",
        color: "blue-text-gradient",
      },
    ],
    image: imageguess,
    source_code_link: "https://github.com/image-guess/image-guess",
  },
  {
    name: "West Side Adventure",
    description:
      "Pixel art game developed in 48h, as an hackaton project, using libGDX library. The game was designed to be a metaphor about the difficulties Puerto Rico citizens face when immigrating to America.",
    tags: [
      {
        name: "java",
        color: "orange-text-gradient",
      },
      {
        name: "libGDX",
        color: "green-text-gradient",
      },
    ],
    image: westsideadventure,
    source_code_link: "https://github.com/programAzores/WestSideAdventure",
  },
  {
    name: "Bravo Boy",
    description:
      "Runner game developed in a week, using Simple Graphics library. The user embodies a boy who jumps to avoid getting hit by boxes.",
    tags: [
      {
        name: "java",
        color: "orange-text-gradient",
      },
      {
        name: "SimpleGraphics",
        color: "pink-text-gradient",
      },
    ],
    image: bravoboy,
    source_code_link: "https://github.com/Bravo-Team/bravo-boy",
  },
];

export { services, technologies, experiences, projects };