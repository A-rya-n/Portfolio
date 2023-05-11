import logo from "../assets/kawaii-dino.png";
import { motion } from "framer-motion";

function Logo() {
  const imageVariants = {
    hidden: {
      opacity: 1,
      scale: 1,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: [-10, 0, -10], // Specify the vertical translation values for the animation
      transition: {
        duration: 1,
        repeat: Infinity, // Set the animation to repeat indefinitely
        repeatType: "reverse",
      },
    },
  };
  return (
    <>
      <motion.div initial="hidden" animate="visible" variants={imageVariants}>
        <img src={logo} className="w-15 h-15 mr-0" />
      </motion.div>
    </>
  );
}

export default Logo;
