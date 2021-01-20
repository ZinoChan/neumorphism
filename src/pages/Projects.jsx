import { useState } from "react";
import ProjectCard from "../components/ui/ProjectCard";
import Button from "../components/ui/Button";
import { slideUp, slideDown } from "../utils/motionVariants";
import { motion } from "framer-motion";
import Title from "../components/ui/Title";
import { projects } from "../data";

const Projects = () => {
  const [current, setCurrent] = useState("React");

  const currentProjects = projects.filter(
    ({ category }) => category === current
  );

  const onTopicClick = (topic) => {
    setCurrent(topic);
  };

  return (
    <section className=' overflow-x-hidden pt-10'>
      <div className='max-w-screen-2xl relative mx-auto px-6 '>
        <div>
          <Title variants={slideUp} motion={motion}>
            Projects
          </Title>

          <div className='flex justify-between flex-wrap max-w-screen-sm  mx-auto mb-14'>
            {["React", "Nextjs", "Gatsbyjs"].map((topic, i) => (
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
          <div
            className='grid lg:grid-cols-2 
          gap-8 lg:px-4 xl:px-0 
          2xl:max-w-screen-xl 
          lg:max-w-screen-lg md:max-w-screen-sm mx-auto'
          >
            {currentProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                name={project.name}
                img={project.img}
                linkToPage={project.linkToPage}
                linkToSrc={project.linkToSrc}
                custom={0.6 + i / 2}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
