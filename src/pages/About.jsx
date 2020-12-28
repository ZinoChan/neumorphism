import { slideUp, slideDown } from "../utils/motionVariants";
import { motion } from "framer-motion";
import Title from "../components/ui/Title";
import darkCheckMark from "../images/dark_check.svg";
import lightCheckMark from "../images/light_check.svg";
import darkBg from "../images/darkBg.svg";
import lightBg from "../images/lightBg.svg";

const About = ({ darkTheme }) => {
  return (
    <section
      className='relative min-h-screen bg-right bg-right bg-no-repeat'
      style={{ backgroundImage: `url(${darkTheme ? darkBg : lightBg})` }}
    >
      <div className='max-w-screen-2xl mx-auto px-6 min-h-screen'>
        <div className='absolute  top-1/2 transform -translate-y-1/2 w-full'>
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
            I’m a self taught front-end developer based in Mohammedia, Morocco.
            I love to design and build powerful and elegant web apps, i'm
            continuessly learning more about web developement and design.
          </motion.p>
          <div
            className='rounded bg-light-theme
         shadow-light-theme dark:bg-dark-theme 
         dark:shadow-dark-theme px-6 py-10 
         max-w-screen-lg
         '
          >
            <h3 className='font-bold text-main font-nunito text-3xl mb-10'>
              My Skills :
            </h3>
            <motion.ul
              variants={slideUp}
              initial='initial'
              animate='visible'
              custom={0.4}
              className='grid xl:grid-cols-3 gap-8 xl:grid-rows-4'
            >
              {[
                "HTML/CSS",
                "Javascript",
                "Typescript",
                "Reactjs",
                "Nextjs",
                "Gatsbyjs",
                "Redux",
                "Figma",
                "Firebase",
                "Bootstrap",
                "Tailwindcss",
                "Webpack",
              ].map((skill, i) => (
                <motion.li
                  key={i}
                  variants={slideDown}
                  className='flex space-x-2 items-center'
                >
                  <img
                    src={darkTheme ? darkCheckMark : lightCheckMark}
                    alt='check mark'
                    className='w-12 h-12'
                  />
                  <span className='text-3xl font-bold text-gray-900 dark:text-white font-nunito max-w-screen-lg'>
                    {skill}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
