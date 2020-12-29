import NavList from "./ui/NavList";

const Header = ({ darkTheme, toggleTheme }) => {
  return (
    <header className='absolute top-0 left-0 w-screen py-6 top-0 left-0 z-10 hidden lg:block'>
      <div className='max-w-screen-2xl mx-auto px-6'>
        <nav className='flex items-center justify-between'>
          <div className='logo'>
            <h1 className='text-3xl font-bold font-custom text-dark-theme dark:text-light-theme'>
              Zinochan
            </h1>
          </div>
          <NavList darkTheme={darkTheme} toggleTheme={toggleTheme} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
