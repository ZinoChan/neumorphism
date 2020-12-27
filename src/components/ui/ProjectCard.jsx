import CardCircle from "./CardCircle";
import run from "../../images/run.jpg";
import Button from "./Button";

const ProjectCard = () => {
  return (
    <div className='rounded bg-light-theme shadow-light-theme dark:bg-dark-theme dark:shadow-dark-theme p-6'>
      <div className='rounded w-full flex bg-light-theme shadow-light-theme dark:bg-dark-theme dark:shadow-dark-theme p-2 mb-6'>
        <CardCircle color='red-400' />
        <CardCircle color='yellow-300' />
        <CardCircle color='green-500' />
      </div>
      <div className='rounded p-6 bg-light-theme shadow-light-theme dark:bg-dark-theme dark:shadow-dark-theme mb-6'>
        <img src={run} alt='ecommerce project' className='w-full rounded' />
      </div>
      <div className='flex justify-between items-center'>
        <Button className='border border-main dark:text-white'>
          Visit Page
        </Button>
        <Button className='dark:text-white'>View Source</Button>
      </div>
    </div>
  );
};

export default ProjectCard;
