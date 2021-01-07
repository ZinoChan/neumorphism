const CardCircle = ({ motion, slideToLeft, custom, borderColor, bgColor }) => {
  return (
    <motion.span
      variants={slideToLeft}
      initial='initial'
      animate='visible'
      custom={custom}
      className={`border border-full 
      ${borderColor} inline-blobk relative
      w-8 h-8 mr-4  rounded-full 
      bg-light-theme shadow-light-theme 
      dark:bg-dark-theme 
      dark:shadow-dark-theme`}
    >
      <span
        className={`absolute top-1/2 left-1/2 
        transform -translate-y-1/2 
        -translate-x-1/2 inline-block 
        w-6 h-6 rounded-full ${bgColor}`}
      ></span>
    </motion.span>
  );
};

export default CardCircle;
