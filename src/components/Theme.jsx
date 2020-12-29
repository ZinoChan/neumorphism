import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Theme = ({ darkTheme, toggleTheme }) => {
  return (
    <span
      onClick={toggleTheme}
      className='
      cursor-pointer 
      bg-light-theme shadow-light-theme 
      text-dark-theme active:shadow-light-inset 
      dark:active:shadow-dark-inset dark:text-white 
      dark:bg-dark-theme dark:shadow-dark-theme p-2 
      rounded-full text-2xl w-12 h-12 flex items-center justify-center'
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
