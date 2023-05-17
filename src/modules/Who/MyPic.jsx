import Me from "../../assets/Me.jpg";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { AmbientLight, DirectionalLight } from "three";

const MyPic = () => {
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
    <motion.div
      initial="hidden"
      animate="visible"
      variants={imageVariants}
      className="flex relative h-full w-full "
    >
      <Canvas camera={{ position: [0, 0, 5] }} className="absolute bottom-8">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <Sphere args={[1, 100, 200]} scale={2.7}>
          <MeshDistortMaterial
            color="#e3d7b6"
            attach="material"
            distort={0.5}
            speed={2}
          />
        </Sphere>
      </Canvas>
      <img
        src={Me}
        alt="My profile picture"
        className="w-80  h-72 rounded-3xl absolute left-32 top-16 border border-2 p-2 shadow-2xl"
      />
    </motion.div>
  );
};

export default MyPic;
