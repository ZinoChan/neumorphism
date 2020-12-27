import { useState } from "react";
import Theme from "../components/Theme";
import ProjectCard from "../components/ui/ProjectCard";
import Button from "../components/ui/Button";

const Projects = ({ darkTheme, toggleTheme }) => {
  const [current, setCurrent] = useState("React");

  const onTopicClick = (topic) => {
    setCurrent(topic);
  };

  return (
    <section className='min-h-screen relative'>
      <div className='absolute  top-1/2 transform -translate-y-1/2 w-full'>
        <h2 className='text-6xl font-bold font-custom text-main mb-10'>
          Projects
        </h2>

        <div className='flex justify-between max-w-screen-md mx-auto mb-12'>
          {["React", "Nextjs", "Gatsbyjs", "Web Design"].map((topic) => (
            <Button
              onClick={() => onTopicClick(topic)}
              className='dark:text-white'
              inset={topic === current}
            >
              {topic}
            </Button>
          ))}
        </div>
        <div className='grid xl:grid-cols-2 gap-4 max-w-screen-xl mx-auto'>
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
      <Theme darkTheme={darkTheme} toggleTheme={toggleTheme} />
    </section>
  );
};

export default Projects;
