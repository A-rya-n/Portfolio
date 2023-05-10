import logo from "../../../public/kawaii-dino.png";
import { motion } from "framer-motion";

function Logo() {
  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: [-10, 10, -10],
      transition: {
        duration: 0.5,
        loop: Infinity,
        repeatDelay: 1,
      },
    },
  };
  return (
    <>
      <motion.div initial="hidden" animate="visible" variants={imageVariants}>
        <img src={logo} className="w-15 h-15 mr-5" />
      </motion.div>
    </>
  );
}

export default Logo;
