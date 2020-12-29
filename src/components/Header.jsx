import NavList from "./ui/NavList";
import { useState } from "react";
import MobileNav from "./ui/MobileNav";
import Theme from "./Theme";

const Header = ({ darkTheme, toggleTheme }) => {
  const [active, setActive] = useState(false);

  const toggleNav = () => setActive(!active);

  return (
    <header className='absolute top-0 left-0 w-screen py-6 top-0 left-0 z-10 overflow-x-hidden'>
      <div className='max-w-screen-2xl mx-auto px-6'>
        <nav className='flex items-center justify-between'>
          <div className='logo'>
            <h1 className='text-3xl font-bold font-custom text-dark-theme dark:text-light-theme'>
              Zinochan
            </h1>
          </div>

          <NavList darkTheme={darkTheme} toggleTheme={toggleTheme} />

          <div className='flex space-x-6 items-center lg:hidden'>
            <Theme darkTheme={darkTheme} toggleTheme={toggleTheme} />
            <div
              onClick={toggleNav}
              className='flex flex-col space-y-2 relative z-20'
            >
              <span className='w-10 h-1 bg-main rounded'></span>
              <span className='w-10 h-1 bg-main rounded'></span>
              <span className='w-10 h-1 bg-main rounded'></span>
            </div>
            <MobileNav active={active} toggleNav={toggleNav} />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
