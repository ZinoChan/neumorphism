import { motion } from "framer-motion";
import { slideToRight, slideUp } from "../../utils/motionVariants";

const Input = ({ input, type, label }) => {
  return (
    <>
      <motion.label
        htmlFor={label}
        variants={slideToRight}
        initial='initial'
        animate='visible'
        custom={0.4}
        className=' text-xl font-medium 
        font-nunito text-gray-500 
        dark:text-gray-50 inline-block mb-4'
      >
        {label}
      </motion.label>
      {input ? (
        <motion.input
          variants={slideUp}
          initial='initial'
          animate='visible'
          custom={0.4}
          type={type}
          className='w-full block rounded bg-light-theme
                    shadow-light-inset dark:bg-dark-theme 
                     text-main dark:shadow-dark-inset 
                     h-12 px-4  mb-6 focus:outline-none border 
                     border-transparent focus:border-main'
        />
      ) : (
        <motion.textarea
          variants={slideUp}
          initial='initial'
          animate='visible'
          custom={0.4}
          type={type}
          className='w-full block rounded bg-light-theme
                    placeholder-main shadow-light-inset 
                    text-main dark:bg-dark-theme px-4 
                    dark:shadow-dark-inset 
                    h-32 mb-8 focus:outline-none border 
                    border-transparent focus:border-main'
        ></motion.textarea>
      )}
    </>
  );
};

export default Input;
