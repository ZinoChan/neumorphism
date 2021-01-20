import NavList from "./ui/NavList";
import { useState } from "react";
import MobileNav from "./ui/MobileNav";
import Theme from "./Theme";
import { Squash as Hamburger } from "hamburger-react";
import logo from "../images/logo.png";
import { Link } from 'react-router-dom';

const Header = ({ darkTheme, toggleTheme }) => {
  const [isOpen, setOpen] = useState(false);

  const toggleNav = () => setOpen(!isOpen);

  return (
    <header className=' w-screen lg:py-6 py-2 py-6 '>
      <div className='max-w-screen-2xl mx-auto px-4'>
        <nav className='flex items-center justify-between'>
          <div className='logo'>
           <Link to="/"> <img src={logo} alt='logo' className='w-32 h-12' /></Link>
          </div>

          <NavList darkTheme={darkTheme} toggleTheme={toggleTheme} />

          <div className='flex space-x-6 items-center lg:hidden'>
            <Theme darkTheme={darkTheme} toggleTheme={toggleTheme} />

            <Hamburger color='#03A9F4' toggled={isOpen} toggle={setOpen} />
            <MobileNav active={isOpen} toggleNav={toggleNav} />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
