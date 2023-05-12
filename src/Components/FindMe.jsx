import gitImg from "../assets/github-icon.png";
import twitImg from "../assets/twitter.png";
import instaImg from "../assets/insta.png";
import { useSelector } from "react-redux";

import { motion } from "framer-motion";

const FindMe = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <div
      className={`bg-red-600 hover:bg-red-500 rounded-lg font-bold text-white px-4 py-1 flex w-fit h-fit ml-40 ${
        isDarkMode ? "shadow-lg" : "shadow-2xl border border-gray-800 "
      }`}
    >
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
