import { Link } from "react-router-dom";
import { socials } from "../../data";
import Icon from "./Icon";
import { motion } from "framer-motion";
import { slideDown } from "../../utils/motionVariants";
import Theme from "../Theme";

const NavList = ({ darkTheme, toggleTheme }) => {
  return (
    <>
      <ul className='lg:flex space-x-6 items-center hidden'>
        <li className='text-2xl text-gray-900 dark:text-gray-100 font-medium font-nunito'>
          <Link to='/'>Home</Link>
        </li>
        <li className='text-2xl text-gray-900 dark:text-gray-100 font-medium font-nunito'>
          <Link to='/projects'>Projects</Link>
        </li>
        <li className='text-2xl text-gray-900 dark:text-gray-100 font-medium font-nunito'>
          <Link to='/about'>About</Link>
        </li>
        <li className='text-2xl text-gray-900 dark:text-gray-100 font-medium font-nunito'>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
      <div className='hidden lg:flex'>
        <Theme darkTheme={darkTheme} toggleTheme={toggleTheme} />
        <div className='flex ml-10 space-x-6'>
          {socials.map(({ link, icon, id }) => (
            <a href={link} key={id}>
              <Icon icon={icon} motion={motion} variants={slideDown} />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavList;
