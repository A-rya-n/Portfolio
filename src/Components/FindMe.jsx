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
        <a
          href="https://github.com/A-rya-n"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gitImg} alt="my github!" className="mr-2" />
        </a>
      </motion.div>
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }}>
        <a
          href="https://twitter.com/a_ashu_u"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitImg} alt="my twitter!" className="mr-2" />
        </a>
      </motion.div>
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }}>
        <a
          href="https://www.instagram.com/a_ashuu_u/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instaImg} alt="my Instagram!" className="mr-2" />
        </a>
      </motion.div>
    </div>
  );
};

export default FindMe;
