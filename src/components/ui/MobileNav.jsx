import { Link } from "react-router-dom";
import { socials } from "../../data";
import Icon from "./Icon";
import { motion } from "framer-motion";
import { slideDown } from "../../utils/motionVariants";

const MobileNav = ({ active, toggleNav }) => {
  const navItems = [
    { link: "/", text: "Home" },
    { link: "/projects", text: "Projects" },
    { link: "/about", text: "About" },
    { link: "/contact", text: "Contact" },
  ];

  return (
    <div
      className={`
      ${!active ? "transform translate-x-full" : ""}
      fixed right-0 h-screen top-0
      bg-light-theme z-10
      transition duration-500 ease-in-out
     shadow-light-theme dark:bg-dark-theme 
     dark:shadow-dark-theme flex flex-col justify-center 
     align-center w-80  overflow-hidden`}
    >
      <ul className=' space-y-10 mb-10 text-center'>
        {navItems.map(({ link, text }) => (
          <li
            onClick={toggleNav}
            key={link}
            className='text-2xl text-gray-900 dark:text-gray-100 font-medium font-nunito'
          >
            <Link to={link}>{text}</Link>
          </li>
        ))}
      </ul>
      <div className='flex'>
        <div className='flex ml-10 space-x-6'>
          {socials.map(({ link, icon, id }) => (
            <a href={link} key={id}>
              <Icon icon={icon} motion={motion} variants={slideDown} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
