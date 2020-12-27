import darkShape from "../images/darkShape.svg";
import lightShape from "../images/lightShape.svg";
import Theme from "../components/Theme";
import Button from "../components/ui/Button";

function Home({ darkTheme, toggleTheme }) {
  return (
    <section className='relative min-h-screen'>
      <div className='grid xl:grid-cols-2 items-center gap-2 absolute top-1/2 transform -translate-y-1/2'>
        <div className='home-text'>
          <h2 className='text-4xl font-bold font-nunito dark:text-white text-gray-900 mb-1'>
            Hi, I'm <span className='text-main'>Zineb</span>
          </h2>
          <h1 className='text-6xl text-gray-900 dark:text-white mb-4 font-bold font-custom'>
            Web Developer & <br /> Designer
          </h1>
          <p className='dark:text-gray-50 font-nunito mb-16 text-gray-500'>
            Front-end Reactjs Developer
          </p>
          <Button rounded='rounded-3xl' className='text-main'>
            View Projects
          </Button>
        </div>
        <div className='home-img'>
          <img
            src={darkTheme ? darkShape : lightShape}
            alt='web illustration'
          />
        </div>
      </div>
      <div className='cursor-pointer absolute bottom-6 left-1/2 transform -translate-x-1/2'>
        <span className='h-16 w-10 block rounded-3xl bg-light-theme flex items-center justify-center shadow-light-inset dark:bg-dark-theme dark:shadow-dark-inset'>
          <span className='rounded-full w-4 h-4 bg-main block animate-bounce'></span>
        </span>
      </div>
      <Theme darkTheme={darkTheme} toggleTheme={toggleTheme} />
    </section>
  );
}

export default Home;
