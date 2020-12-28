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

const ProjectCard = ({ custom }) => {
  return (
    <motion.div
      variants={slideUp}
      initial='initial'
      animate='visible'
      custom={custom}
      className='rounded bg-light-theme
     shadow-light-theme dark:bg-dark-theme 
     dark:shadow-dark-theme p-6'
    >
      <motion.div
        variants={slideUp}
        initial='initial'
        animate='visible'
        custom={custom + 0.1}
        className='rounded w-full flex 
      bg-light-theme shadow-light-theme 
      dark:bg-dark-theme dark:shadow-dark-theme p-2 mb-6'
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
      </motion.div>
      <motion.div
        variants={zoomIn}
        initial='initial'
        animate='visible'
        custom={custom + 0.9}
        className='rounded p-6 bg-light-theme shadow-light-theme dark:bg-dark-theme dark:shadow-dark-theme mb-6'
      >
        <img src={run} alt='ecommerce project' className='w-full rounded' />
      </motion.div>
      <div className='flex justify-between items-center'>
        <Button
          variants={slideToRight}
          custom={custom + 1}
          className='border border-main dark:text-white'
        >
          Visit Page
        </Button>
        <Button
          variants={slideToLeft}
          custom={custom + 1}
          className='dark:text-white'
        >
          View Source
        </Button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
