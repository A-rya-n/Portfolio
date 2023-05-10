import { Canvas } from "@react-three/fiber";
import BoxThree from "../Components/BoxThree";

const Hero = () => {
  return (
    <div className="text-3xl font-bold px-4 h-screen text-white flex">
      <div className="w-2/4">
        <h1>Hello!</h1>
      </div>
      <div className="w-2/4">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.1} />
          <directionalLight position={[0, 0, 1]} />
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
  name: "Hello",
};
