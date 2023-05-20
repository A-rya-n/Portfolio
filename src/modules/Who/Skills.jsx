import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import ReactCanvs from "./iconRenders/ReactIcon";
import JsCanvs from "./iconRenders/JsIcon";
import ThreeCanvs from "./iconRenders/ThreeIcon";
import DevopsCanvs from "./iconRenders/DevopsIcon";

const services = [
  {
    title: "React Developer",
    icon: <ReactCanvs />,
  },
  {
    title: "HTML CSS JavaScript",
    icon: <JsCanvs />,
  },
  {
    title: "Three.js",
    icon: <ThreeCanvs />,
  },
  {
    title: "DevOps",
    icon: <DevopsCanvs />,
  },
];

const ServiceCard = ({ index, title, icon }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: index * 1, ease: "easeInOut" }}
    className="border-1 rounded-xl bg-gradient-to-tr from-green-600 to-pink-700 shadow-2xl w-fit h-fit mr-10"
  >
    <Tilt className="bg-blue-950 m-px rounded-xl justify-evenly items-center flex-col">
      <div className="flex justify-center">{icon}</div>
      <div className=" text-slate-50 font-bold rounded-xl flex justify-center">
        {title}
      </div>
    </Tilt>
  </motion.div>
);

const Skills = () => {
  return (
    <div className="flex flex-wrap gap-5 ">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
  );
};

export default Skills;
