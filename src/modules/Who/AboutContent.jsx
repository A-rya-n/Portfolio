import { motion } from "framer-motion";
import Skills from "./Skills";

const AboutContent = () => {
  return (
    <div className="text-lg font-medium text-white leading-relaxed mb-4">
      <motion.p
        className="bg-slate-900 p-10 rounded-xl shadow-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      >
        As a frontend developer, I have a strong focus on animation and design
        to my work. With a solid foundation in{" "}
        <span className="text-yellow-200">HTML, CSS, and JavaScript</span>, I am
        proficient in creating interactive and visually appealing web
        experiences. I have experience using{" "}
        <span className="text-blue-400">React</span>, which allows me to build
        dynamic user interfaces. Additionally, I have explored{" "}
        <span className="text-teal-300">Three.js</span>, a 3D graphics library,
        and leveraged it to create immersive and engaging web experiences.
      </motion.p>
      <div className="bg-slate-900 p-10 rounded-xl mt-6 shadow-xl w-fit">
        <Skills />
      </div>
    </div>
  );
};

export default AboutContent;
