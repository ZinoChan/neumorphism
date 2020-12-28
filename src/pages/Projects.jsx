import { useState } from "react";

import ProjectCard from "../components/ui/ProjectCard";
import Button from "../components/ui/Button";

import { slideUp, slideDown } from "../utils/motionVariants";
import { motion } from "framer-motion";

const Projects = () => {
  const [current, setCurrent] = useState("React");

  const onTopicClick = (topic) => {
    setCurrent(topic);
  };

  return (
    <section className='min-h-screen relative'>
      <div className='absolute  top-1/2 transform -translate-y-1/2 w-full'>
        <motion.h2
          variants={slideUp}
          initial='initial'
          animate='visible'
          custom={0.1}
          className='text-6xl font-bold font-custom text-main mb-10'
        >
          Projects
        </motion.h2>

        <div className='flex justify-between max-w-screen-md mx-auto mb-12'>
          {["React", "Nextjs", "Gatsbyjs", "Web Design"].map((topic, i) => (
            <Button
              onClick={() => onTopicClick(topic)}
              className='dark:text-white'
              inset={topic === current}
              variants={slideDown}
              custom={0.1 * i}
            >
              {topic}
            </Button>
          ))}
        </div>
        <div className='grid xl:grid-cols-2 gap-4 max-w-screen-xl mx-auto'>
          <ProjectCard custom={0.6} />
          <ProjectCard custom={0.7} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
