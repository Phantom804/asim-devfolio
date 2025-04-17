export const METADATA = {
  author: "Muhammad Asim",
  title: "Portfolio | Asim Javed",
  description:
    "Muhammad Asim is a Full Stack Web Developer from Pakistan, interested in crafting beautiful and functional applications.",
  siteUrl: process.env.NEXT_PUBLIC_PORTFOLIO_URL,
  twitterHandle: process.env.NEXT_PUBLIC_X_HANDLER,
  keywords: [
    "Muhammad Asim Arain",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Web Developer",
    "MERN Developer",
    "Developer From Pakistan",
    "Portfolio",
    "Devfolio",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dfwccwtsq/image/upload/v1714486188/preview_zgud9z.png",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A pragmatic Full Stack Developer",
  "I build things for the web",
  "I am constantly learning and always growing.",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: process.env.NEXT_PUBLIC_EMAIL,
  },
  {
    name: "linkedin",
    url: process.env.NEXT_PUBLIC_LINKDIN_URL,
  },
  {
    name: "github",
    url: process.env.NEXT_PUBLIC_GITHUB_URL,
  },
  {
    name: "instagram",
    url: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
  },
  {
    name: "twitter",
    url: process.env.NEXT_PUBLIC_X_URL,
  },
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "typescript",
    "php",
    "graphql",
    "sass",
    "nodejs",
    "webpack",
    "firebase",
    "figma",
  ],
  librariesAndFrameworks: [
    "react",
    "redux",
    "nextjs",
    "express",
    "socket",
    "tailwindcss",
    "styledcomponents",
    "antdesign",
    "chakra-ui",
  ],
  databases: ["mysql", "mongodb"],
  other: ["git", "aws", "docker", "sanity-io"],
};

export const PROJECTS = [

  {
    name: "Dev-finder",
    image: "/projects/devfinder.webp",
    blurImage: "/projects/blur/devfinder-blur.webp",
    description:
      "A platform for developers seeking online collaboration 👨‍💻",
    gradient: ["#000066", "#6699FF"],
    url: "https://github.com/Phantom804/dev-finder",
    tech: ["nextjs", "typescript", "tailwindcss", "react"],
  },
  {
    name: "Digital E-commerce",
    image: "/projects/digital-ecommerce.webp",
    blurImage: "/projects/blur/digital-ecommerce-blur.webp",
    description: " A digital e-commerce platform for buying courses & templates 💻📦",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://github.com/Phantom804/mern-ecommerce",
    tech: ["nodejs", "express", "react", "mongodb"],
  },
  {
    name: "tic-tac-toe",
    image: "/projects/ticgame.webp",
    blurImage: "/projects/blur/ticgame-blur.webp",
    description: "A multiplayer Tic-Tac-Toe game using React, Node & socket.io 🎮",
    gradient: ["#F14658", "#DC2537"],
    url: "https://github.com/Phantom804/tic-tac-toe-multiplayer-game",
    tech: ["nodejs", "react", "socket"],
  },
];


export const WORK_CONTENTS = {
  ImCodeZero: [
    {
      title: "ImCodeZero",
      description:
        "Full Stack Developer Intern - (Nov 24 - Apr 25)",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Creating a synergy of business and the digital world.
        </div>
      ),
    },
    {
      title: "Description",
      description:
        "Developing and maintaining web applications with React, Next.js, and Express, focusing on responsiveness and performance, Collaborated with cross-functional teams to integrate frontend and backend features, ensuring a seamless user experience.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Full Stack Developer Intern - Nov 24 - Apr 25
        </div>
      ),
    },

  ],
  JPMorgan: [
    {
      title: "J.P. Morgan",
      description:
        "Software Engineer",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Make Momentum Happen
        </div>
      ),
    },
    {
      title: "Description",
      description:
        "Set up a local dev environment by downloading the necessary files, tools and dependencies, Fixed broken files in the repository to make web application output correctly, daily traffic. Used JPMorgan Chase’s open source library called Perspective to generate a live graph that displays a data feed in a clear and visually appealing way for traders to monitor.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Software Engineer
        </div>
      ),
    },
  ],

};

export const GTAG = "GTM-NK5XKVJ5";
