import {
  slideUp,
  slideToRight,
  slideToLeft,
  slideDown,
} from "../utils/motionVariants";
import { motion } from "framer-motion";
import Title from "../components/ui/Title";
import darkCheckMark from "../images/dark_check.svg";
import lightCheckMark from "../images/light_check.svg";
import darkBg from "../images/darkBg.svg";
import lightBg from "../images/lightBg.svg";
import { skills } from "../data";

const About = ({ darkTheme }) => {
  return (
    <section
      className='relative min-h-screen bg-right bg-right bg-no-repeat 2xl:pt-0 pt-40'
      style={{ backgroundImage: `url(${darkTheme ? darkBg : lightBg})` }}
    >
      <div className='max-w-screen-2xl mx-auto px-6 min-h-screen'>
        <div className='xl:absolute  xl:top-1/2 xl:transform xl:-translate-y-1/2 w-full'>
          <Title variants={slideUp} motion={motion}>
            About
          </Title>
          <motion.p
            variants={slideUp}
            initial='initial'
            animate='visible'
            custom={0.3}
            className='mb-16 text-2xl text-gray-900 dark:text-white font-nunito max-w-screen-lg'
          >
            Hi, I'm Zineb and I’m a self taught front-end developer based in
            Mohammedia, Morocco. I love to design and build powerful and elegant
            web apps, i'm continuessly learning more about web developement and
            design.
          </motion.p>
          <div
            className='rounded bg-light-theme
         shadow-light-theme dark:bg-dark-theme 
         dark:shadow-dark-theme px-6 py-10 
         max-w-screen-lg
         '
          >
            <motion.h3
              variants={slideDown}
              initial='initial'
              animate='visible'
              custom={0.4}
              className='font-bold text-main font-nunito text-3xl mb-10'
            >
              My Skills :
            </motion.h3>
            <ul className='grid lg:grid-cols-3 gap-8 xl:grid-rows-4 md:grid-cols-2 md:grid-rows-3'>
              {skills.map((skill, i) => (
                <motion.li key={i} className='flex space-x-2 items-center'>
                  <motion.img
                    variants={slideToRight}
                    initial='initial'
                    animate='visible'
                    custom={0.5 * i}
                    src={darkTheme ? darkCheckMark : lightCheckMark}
                    alt='check mark'
                    className='w-12 h-12'
                  />
                  <motion.span
                    variants={slideToLeft}
                    initial='initial'
                    animate='visible'
                    custom={0.5 * i}
                    className='text-3xl font-bold text-gray-900 dark:text-white font-nunito max-w-screen-lg'
                  >
                    {skill}
                  </motion.span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
