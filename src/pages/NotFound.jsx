import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

const NotFound = () => {
  return (
    <section className='relative min-h-screen flex flex-col items-center justify-center'>
      <h1
        style={{
          textShadow: `0 0 5px #fff, 0 0 10px #fff, 
      0 0 15px #D5668A, 0 0 20px #D5668A,
       0 0 25px #D5668A, 0 0 30px #D5668A, 
       0 0 35px #D5668A`,
        }}
        className='sm:text-9xl text-7xl text-main font-bold mb-6'
      >
        4 0 4
      </h1>
      <p className='dark:text-white text-3xl font-custom mb-6 font-bold text-dark-theme'>
        Page Not Found
      </p>
      <Button>
        <Link to='/' className='font-bold font-custom text-main'>
          Back Home
        </Link>
      </Button>
    </section>
  );
};

export default NotFound;
