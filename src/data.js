import {
  faPhone,
  faEnvelope,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";

import {
  faGithub,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import sushio from "./images/projects/sushio.webp";
import perfume from "./images/projects/perfume.webp";
import jagaimo from "./images/projects/jagaimo.webp";
import run from "./images/projects/run.webp";
import recipe from "./images/projects/recipe.webp";
import gamer from "./images/projects/gamer.webp";

export const contactInfo = [
  { text: "devzinochan@gmail.com", icon: faEnvelope },
  { text: "+212 629872534", icon: faPhone },
  { text: "Mohammedia, Morocco", icon: faLocationArrow },
];

export const socials = [
  { link: "https://github.com/ZinoChan", icon: faGithub },
  { link: "https://github.com/ZinoChan", icon: faFacebook },
  { link: "https://github.com/ZinoChan", icon: faInstagram },
  { link: "https://github.com/ZinoChan", icon: faTwitter },
];

export const skills = [
  "HTML/CSS",
  "Javascript",
  "Typescript",
  "Reactjs",
  "Nextjs",
  "Gatsbyjs",
  "Redux",
  "Figma",
  "Firebase",
  "Bootstrap",
  "Tailwindcss",
  "Webpack",
];

export const navItems = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Projects",
    link: "/projects",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

export const projects = [
  {
    id: "9f4d390d-1291-4523-8875-3422c0d37ba3",
    category: "React",
    name: "Run",
    img: run,
    linkToPage: "",
    linkToSrc: "",
    description: "sneakers ecommerce app",
    tools: ["React", "Redux", "Redux Saga", "Firebase", "Bootstrap"],
  },
  {
    id: "6a29d826-fbba-4093-8eef-ac3642c79bbf",
    category: "React",
    name: "Jagaimo",
    img: jagaimo,
    linkToPage: "https://pizza-16763.firebaseapp.com/",
    linkToSrc: "https://github.com/ZinoChan/jagaimo",
    description: "fast food order and delivery app",
    tools: ["React", "Redux", "Redux Saga", "Firebase", "Scss"],
  },
  {
    id: "e6b700d5-1110-4de3-8d4f-102aa947437d",
    category: "Gatsbyjs",
    name: "Perfume",
    img: perfume,
    linkToPage: "https://admiring-pare-23678f.netlify.app/",
    linkToSrc: "https://github.com/ZinoChan/Perfume",
    description: "Perfume landing page",
    tools: ["Gatsby", "Gsap", "tailwindcss"],
  },
  {
    id: "5ff76e76-4fc3-4ba4-8652-1866a8e734db",
    category: "Gatsbyjs",
    name: "Sushio",
    img: sushio,
    linkToPage:
      "https://5ff1d56239a3006208762b5c--sad-hermann-2f743a.netlify.app/",
    linkToSrc: "https://github.com/ZinoChan/sushio",
    description: "japanese restaurant booking ",
    tools: ["Gatsby", "gsap", "tailwindcss"],
  },
  {
    id: "4e701cf5-98a2-4f42-95b5-758cc122d08d",
    category: "Nextjs",
    name: "Gamer",
    img: gamer,
    linkToPage: "#",
    linkToSrc: "#",
    description: "gamer accessoiries ecommerce",
    tools: ["nextjs", "framer-motion", "tailwindcss", "firebase", "redux"],
  },
  {
    id: "60d6f7ec-e798-4699-9729-7f1a4089b713",
    category: "Nextjs",
    name: "recipe",
    img: recipe,
    linkToPage: "#",
    linkToSrc: "#",
    description: "recipe web app ",
    tools: ["nextjs", "framer-motion", "tailwindcss", "firebase"],
  },
];
