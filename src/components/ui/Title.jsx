const Title = ({ motion, variants, children }) => {
  return (
    <motion.h2
      variants={variants}
      initial='initial'
      animate='visible'
      custom={0.1}
      className='text-6xl font-bold font-custom text-main mb-10'
    >
      {children}
    </motion.h2>
  );
};

export default Title;
