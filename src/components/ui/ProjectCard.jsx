import CardCircle from "./CardCircle";
import Button from "./Button";
import { motion } from "framer-motion";
import {
  fadeIn,
  slideUp,
  slideToLeft,
  slideToRight,
} from "../../utils/motionVariants";
import Img from "react-cool-img";
import loader from '../../images/loader.gif'

const ProjectCard = ({ custom, img, name, linkToPage, linkToSrc }) => {
  return (
    <motion.div
      variants={slideUp}
      initial='initial'
      animate='visible'
      custom={custom}
      className='rounded bg-light-theme
     shadow-light-theme dark:bg-dark-theme 
     dark:shadow-dark-theme md:p-4 p-2'
    >
      <motion.div
        variants={slideUp}
        initial='initial'
        animate='visible'
        custom={custom + 0.1}
        className='rounded w-full flex 
      bg-light-theme shadow-light-theme 
      dark:bg-dark-theme dark:shadow-dark-theme p-2 mb-4'
      >
        <CardCircle
          borderColor='border-red-400'
          bgColor='bg-red-400'
          slideToLeft={slideToLeft}
          motion={motion}
          custom={custom + 0.2}
        />
        <CardCircle
          borderColor='border-yellow-300'
          bgColor='bg-yellow-300'
          slideToLeft={slideToLeft}
          motion={motion}
          custom={custom + 0.2}
        />
        <CardCircle
          borderColor='border-green-500'
          bgColor='bg-green-500'
          slideToLeft={slideToLeft}
          motion={motion}
          custom={custom + 0.2}
        />

        <h4
          className='dark:text-white text-dark-theme 
        text-2xl font-bold font-custom 
        capitalize ml-auto'
        >
          {name}
        </h4>
      </motion.div>
      <motion.div
        variants={fadeIn}
        initial='initial'
        animate='visible'
        custom={custom + 0.9}
        className='rounded md:p-6 p-2  bg-light-theme 
        shadow-light-theme dark:bg-dark-theme dark:shadow-dark-theme mb-4'
      >
        
        <Img
          className='w-full rounded 2xl:h-80 lg:h-72'
          placeholder={loader}
          src={img}
          alt='project'
        />
      </motion.div>
      <div className='flex justify-between items-center'>
        <Button
          variants={slideToRight}
          custom={custom + 1}
          className='border border-main dark:text-white'
        >
          <a href={linkToPage} target='_blank' rel='noreferrer noopener'>
            Visit Page
          </a>
        </Button>
        <Button
          variants={slideToLeft}
          custom={custom + 1}
          className='dark:text-white'
        >
          <a href={linkToSrc} target='_blank' rel='noreferrer noopener'>
            View Source
          </a>
        </Button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
