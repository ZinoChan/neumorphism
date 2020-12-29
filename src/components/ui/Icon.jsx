import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ icon, motion, variants }) => {
  return (
    <motion.span
      variants={variants}
      initial='initial'
      animate='visible'
      custom={0.6}
      className=' cursor-pointer
                  inline-blobk relative 
                   w-12 h-12 rounded-full bg-light-theme 
                   shadow-light-theme 
                  dark:bg-dark-theme dark:shadow-dark-theme
                  flex items-center justify-center text-xl text-main
                  active:shadow-light-inset dark:active:shadow-dark-inset
                  active:text-dark-theme dark:active:text-white
                  '
    >
      <FontAwesomeIcon icon={icon} />
    </motion.span>
  );
};

export default Icon;
