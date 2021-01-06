import { Link } from "react-router-dom";

import { navItems } from "../../data";

import SocialNav from "../../components/ui/SocialNav";

const MobileNav = ({ active, toggleNav }) => {
  return (
    <div
      className={`
      ${!active ? "transform translate-x-full" : ""}
      fixed right-0 h-screen top-0
      bg-light-theme z-10
      transition duration-150 ease-in-out
     shadow-light-theme dark:bg-dark-theme 
     dark:shadow-dark-theme flex flex-col justify-center 
     align-center w-80  overflow-hidden`}
    >
      <ul className=' space-y-10 mb-10 text-center'>
        {navItems.map((item, i) => (
          <li
            onClick={toggleNav}
            key={`nav-link-${i}`}
            className='text-2xl text-gray-900 dark:text-gray-100 font-medium font-nunito'
          >
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <div className='flex'>
        <SocialNav />
      </div>
    </div>
  );
};

export default MobileNav;
