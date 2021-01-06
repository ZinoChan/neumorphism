import {
  slideUp,
  slideToRight,
  slideToLeft,
  slideDown,
} from "../utils/motionVariants";
import { motion } from "framer-motion";
import Title from "../components/ui/Title";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Icon from "../components/ui/Icon";
import { contactInfo } from "../data";

const Contact = () => {
  return (
    <section className=' min-h-screen 2xl:pt-0 pt-32 overflow-hidden'>
      <div className='relative  max-w-screen-2xl mx-auto px-6 min-h-screen'>
        <div className='2xl:absolute  2xl:top-1/2 2xl:transform 2xl:-translate-y-1/2 w-full'>
          <Title variants={slideUp} motion={motion}>
            Contact
          </Title>
          <motion.div
            className='rounded bg-light-theme
          shadow-light-theme dark:bg-dark-theme 
          dark:shadow-dark-theme py-6 md:px-10  
          flex justify-between flex-wrap'
            variants={slideUp}
            initial='initial'
            animate='visible'
            custom={0.1}
          >
            <form
              action='#'
              className='lg:w-3/5 w-full md:px-10 px-2 lg:mb-0 mb-20'
            >
              <Input type='text' label='Your Name :' input={true} />
              <Input type='email' label='Your Email :' input={true} />
              <Input type='text' label='Your Message :' input={false} />

              <div className='text-center'>
                <Button variants={slideUp} custom={0.5} className='text-main'>
                  Submit
                </Button>
              </div>
            </form>
            <div className='lg:w-2/5 w-full text-center'>
              <h3
                variants={slideDown}
                initial='initial'
                animate='visible'
                custom={0.6}
                className='text-main text-3xl font-bold font-nunito mb-20'
              >
                Contact Informations
              </h3>
              <div className='max-w-min mx-auto'>
                {contactInfo.map((info, i) => (
                  <div
                    key={`info-${i}`}
                    className='flex space-x-6  items-center mb-6'
                  >
                    <Icon
                      icon={info.icon}
                      motion={motion}
                      variants={slideToRight}
                    />
                    <motion.p
                      variants={slideToLeft}
                      initial='initial'
                      animate='visible'
                      custom={0.6}
                      className='sm:text-2xl text-lg text-gray-900  dark:text-white'
                    >
                      {info.text}
                    </motion.p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
