import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { slideDown } from "../../utils/motionVariants";
import Theme from "../Theme";
import { navItems } from "../../data";
import SocialNav from "./SocialNav";

const NavList = ({ darkTheme, toggleTheme }) => {
  return (
    <>
      <ul className='lg:flex space-x-6 items-center hidden'>
        {navItems.map((item, i) => (
          <motion.li
            initial='initial'
            animate='visible'
            variants={slideDown}
            custom={0.2 * i}
            key={`nav-item${i}`}
            className='text-2xl text-gray-900 dark:text-gray-100
            
            font-medium font-nunito'
          >
            <Link className='hover:text-main' to={item.link}>
              {item.title}
            </Link>
          </motion.li>
        ))}
      </ul>
      <div className='hidden lg:flex'>
        <Theme darkTheme={darkTheme} toggleTheme={toggleTheme} />
        <SocialNav />
      </div>
    </>
  );
};

export default NavList;
