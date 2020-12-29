const Title = ({ motion, variants, children }) => {
  return (
    <motion.h2
      variants={variants}
      initial='initial'
      animate='visible'
      custom={0.1}
      className='mb-10 sm:text-6xl text-5xl font-bold font-custom text-main xl:mb-6'
    >
      {children}
    </motion.h2>
  );
};

export default Title;
