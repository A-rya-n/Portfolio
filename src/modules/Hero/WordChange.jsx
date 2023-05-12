import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const words = ["developer", "designer", "planner"];

const WordChange = () => {
  const [currentWord, setCurrentWord] = useState(words[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = words.indexOf(currentWord);
      const nextIndex = (currentIndex + 1) % words.length;

      setCurrentWord(words[nextIndex]);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [currentWord]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.0 }}
    >
      <span>
        This is Aryan Purohit. I am a{" "}
        <span className="bg-red-600 rounded-md px-2 py-1">{currentWord}</span>
      </span>
    </motion.div>
  );
};

export default WordChange;
