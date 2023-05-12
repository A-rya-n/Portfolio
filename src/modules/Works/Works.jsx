import { motion } from "framer-motion";

const Works = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.0 }}
    >
      <div className="text-3xl text-white font-bold h-screen px-4">My work</div>
    </motion.div>
  );
};

export default {
  routeProps: {
    path: "/Works",
    element: <Works />,
  },
  name: "My work",
};
