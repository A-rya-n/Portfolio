import { Canvas } from "@react-three/fiber";
import BoxThree from "./BoxThree";
import Content from "./Content";

const Hero = () => {
  return (
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
