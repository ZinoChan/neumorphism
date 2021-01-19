import { motion } from "framer-motion";

const Button = ({
  children,
  rounded = "rounded",
  padding = "md:px-6 md:py-2 sm:px-6 px-4 py-2",
  className = "",
  inset = false,
  onClick = null,
  variants = null,
  custom = null,
}) => {
  return (
    <motion.button
      variants={variants}
      custom={custom}
      initial='initial'
      animate='visible'
      onClick={onClick}
      className={`
      font-nunito
          dark:text-gray-300
          transition duration-100
            dark:hover:text-main
            text-gray-900
            focus:outline-none 
           ${rounded} ${padding} 
            ${className} md:text-xl text-md text-dark-theme
            bg-light-theme ${
              inset
                ? "shadow-light-inset dark:shadow-dark-inset text-main dark:text-main"
                : "shadow-light-theme dark:shadow-dark-theme"
            }
            active:shadow-light-inset
            
            dark:bg-dark-theme 
            font-bold dark:active:shadow-dark-inset`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
