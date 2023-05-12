import gitImg from "../assets/github-icon.png";
import twitImg from "../assets/twitter.png";
import instaImg from "../assets/insta.png";

import { motion } from "framer-motion";

const FindMe = () => {
  return (
    <div className="bg-red-600 hover:bg-red-500 rounded-lg font-bold text-white px-4 py-1 flex w-fit h-fit ml-40 -mr-60 shadow-lg">
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }}>
        <img src={gitImg} alt="my github!" className="mr-2" />
      </motion.div>
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }}>
        <img src={twitImg} alt="my twitter!" className="mr-2" />
      </motion.div>
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }}>
        <img src={instaImg} alt="my Instagram!" className="mr-2" />
      </motion.div>
    </div>
  );
};

export default FindMe;
