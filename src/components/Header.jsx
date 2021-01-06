import NavList from "./ui/NavList";
import { useState } from "react";
import MobileNav from "./ui/MobileNav";
import Theme from "./Theme";
import { Squash as Hamburger } from "hamburger-react";
import darkLogo from "../images/dark_logo.svg";
import lightLogo from "../images/light_logo.svg";

const Header = ({ darkTheme, toggleTheme }) => {
  const [isOpen, setOpen] = useState(false);

  const toggleNav = () => setOpen(!isOpen);

  return (
    <header className='absolute top-0 left-0 w-screen lg:py-6 py-2 top-0 left-0 z-10 overflow-x-hidden'>
      <div className='max-w-screen-2xl mx-auto px-6'>
        <nav className='flex items-center justify-between'>
          <div className='logo'>
            <img
              src={darkTheme ? darkLogo : lightLogo}
              alt='logo'
              className='w-28'
            />
          </div>

          <NavList darkTheme={darkTheme} toggleTheme={toggleTheme} />

          <div className='flex space-x-6 items-center lg:hidden'>
            <Theme darkTheme={darkTheme} toggleTheme={toggleTheme} />

            <Hamburger color='#D5668A' toggled={isOpen} toggle={setOpen} />
            <MobileNav active={isOpen} toggleNav={toggleNav} />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
