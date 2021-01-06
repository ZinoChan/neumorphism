import { socials } from "../../data";
import Icon from "./Icon";
import { motion } from "framer-motion";
import { slideDown } from "../../utils/motionVariants";

const SocialNav = () => {
  return (
    <div className='flex ml-10 space-x-6'>
      {socials.map(({ link, icon }, i) => (
        <a href={link} key={`social-${i}`}>
          <Icon icon={icon} motion={motion} variants={slideDown} />
        </a>
      ))}
    </div>
  );
};

export default SocialNav;
