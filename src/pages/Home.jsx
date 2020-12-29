import darkShape from "../images/darkShape.svg";
import lightShape from "../images/lightShape.svg";

import Button from "../components/ui/Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  slideUp,
  slideDown,
  zoomIn,
  slideToLeft,
} from "../utils/motionVariants";

function Home({ darkTheme }) {
  return (
    <section className='relative min-h-screen'>
      <div className='max-w-screen-2xl mx-auto px-6 min-h-screen'>
        <div className='grid xl:grid-cols-2 items-center gap-2 absolute top-1/2 transform -translate-y-1/2'>
          <div className='home-text'>
            <motion.h2
              variants={slideDown}
              initial='initial'
              animate='visible'
              custom={0.3}
              className='text-4xl font-bold font-nunito dark:text-white text-gray-900 mb-1'
            >
              Hi, I'm <span className='text-main'>Zineb</span>
            </motion.h2>
            <motion.h1
              variants={slideUp}
              initial='initial'
              animate='visible'
              custom={0.6}
              className='text-6xl text-gray-900 dark:text-white mb-4 font-bold font-custom'
            >
              Web Developer & <br /> Designer
            </motion.h1>
            <motion.p
              variants={slideUp}
              initial='initial'
              animate='visible'
              custom={0.7}
              className='dark:text-gray-50 font-nunito mb-16 text-gray-500'
            >
              Front-end Reactjs Developer
            </motion.p>

            <Link to='/projects'>
              <Button
                variants={zoomIn}
                custom={0.9}
                rounded='rounded-3xl'
                className='text-main'
              >
                View Projects
              </Button>
            </Link>
          </div>
          <motion.div
            className='home-img'
            variants={slideToLeft}
            initial='initial'
            animate='visible'
            custom={0.9}
          >
            <img
              src={darkTheme ? darkShape : lightShape}
              alt='web illustration'
            />
          </motion.div>
        </div>
        {/* <div className='cursor-pointer absolute bottom-6 left-1/2 transform -translate-x-1/2'>
          <span className='h-16 w-10 block rounded-3xl bg-light-theme flex items-center justify-center shadow-light-inset dark:bg-dark-theme dark:shadow-dark-inset'>
            <span className='rounded-full w-4 h-4 bg-main block animate-bounce'></span>
          </span>
        </div> */}
      </div>
    </section>
  );
}

export default Home;
