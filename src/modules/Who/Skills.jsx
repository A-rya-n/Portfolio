import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

const services = [
  {
    title: "React Developer",
    //   icon: web,
  },
  {
    title: "HTML CSS JavaScript",
    //   icon: mobile,
  },
  {
    title: "Three.js",
    //   icon: backend,
  },
  {
    title: "DevOps",
    //   icon: creator,
  },
  {
    title: "TypeScript",
  },
];

const ServiceCard = ({ index, title }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: index * 1, ease: "easeInOut" }}
    className="border-1 rounded-xl bg-gradient-to-tr from-green-600 to-pink-700"
  >
    <Tilt className="bg-blue-950 w-fit m-px rounded-xl justify-evenly items-center flex-col">
      <div className="py-5 px-12 flex justify-center">Image</div>
      <div className=" text-slate-50 font-bold rounded-xl p-1 flex justify-center">
        {title}
      </div>
    </Tilt>
  </motion.div>
);

const Skills = () => {
  return (
    <div className="flex flex-wrap gap-10">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
  );
};

export default Skills;
