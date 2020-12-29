import { useState } from "react";
import ProjectCard from "../components/ui/ProjectCard";
import Button from "../components/ui/Button";
import { slideUp, slideDown } from "../utils/motionVariants";
import { motion } from "framer-motion";
import Title from "../components/ui/Title";

const Projects = () => {
  const [current, setCurrent] = useState("React");

  const onTopicClick = (topic) => {
    setCurrent(topic);
  };

  return (
    <section className='min-h-screen 2xl:p-0 pt-32'>
      <div className='max-w-screen-2xl relative mx-auto px-6 min-h-screen'>
        <div className=' xl:absolute  xl:top-1/2 xl:transform xl:-translate-y-1/2 w-full'>
          <Title variants={slideUp} motion={motion}>
            Projects
          </Title>

          <div className='flex justify-between flex-wrap max-w-screen-md  mx-auto mb-10'>
            {["React", "Nextjs", "Gatsbyjs", "Web Design"].map((topic, i) => (
              <Button
                onClick={() => onTopicClick(topic)}
                className='dark:text-white md:mb-0 mb-6 md:mx-0 mx-auto'
                inset={topic === current}
                variants={slideDown}
                custom={0.1 * i}
                key={i * 92}
              >
                {topic}
              </Button>
            ))}
          </div>
          <div className='grid lg:grid-cols-2 gap-8 lg:px-4 xl:px-0 2xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-sm mx-auto'>
            <ProjectCard custom={0.6} />
            <ProjectCard custom={0.7} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
