import CardCircle from "./CardCircle";
import run from "../../images/run.jpg";
import Button from "./Button";
import { motion } from "framer-motion";
import {
  zoomIn,
  slideUp,
  slideToLeft,
  slideToRight,
} from "../../utils/motionVariants";

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
        {[
          { color: "red-400", id: 0.2 },
          { color: "yellow-300", id: 0.3 },
          { color: "green-500", id: 0.4 },
        ].map(({ color, id }) => (
          <CardCircle
            color={color}
            slideToLeft={slideToLeft}
            motion={motion}
            custom={custom + id}
            key={id}
          />
        ))}
        <h4
          className='dark:text-white text-dark-theme 
        text-2xl font-bold font-custom 
        capitalize ml-auto'
        >
          {name}
        </h4>
      </motion.div>
      <motion.div
        variants={zoomIn}
        initial='initial'
        animate='visible'
        custom={custom + 0.9}
        className='rounded md:p-6 p-2  bg-light-theme 
        shadow-light-theme dark:bg-dark-theme dark:shadow-dark-theme mb-4'
      >
        <img src={img} alt='project' className='w-full rounded' />
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
