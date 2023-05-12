import { Canvas } from "@react-three/fiber";
import BoxThree from "./BoxThree";
import Content from "./Content";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.0 }}
    >
      <div className=" px-4 h-screen flex">
        <div className="w-2/4 flex justify-center ">
          <Content />
        </div>
        <div className="w-2/4">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.1} />
            <directionalLight position={[0, 0, 5]} />
            <BoxThree />
          </Canvas>
        </div>
      </div>
    </motion.div>
  );
};

export default {
  routeProps: {
    path: "/",
    exact: true,
    element: <Hero />,
  },
  name: "Home",
};
