import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Theme = ({ darkTheme, toggleTheme }) => {
  return (
    <span
      onClick={toggleTheme}
      className='
      absolute bottom-6 left-0 cursor-pointer 
      bg-light-theme shadow-light-theme 
      text-dark-theme active:shadow-light-inset 
      dark:active:shadow-dark-inset dark:text-white 
      dark:bg-dark-theme dark:shadow-dark-theme p-2 
      rounded-full text-2xl'
    >
      {darkTheme ? (
        <FontAwesomeIcon icon={faSun} />
      ) : (
        <FontAwesomeIcon icon={faMoon} />
      )}
    </span>
  );
};

export default Theme;
