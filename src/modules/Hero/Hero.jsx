import { Canvas } from "@react-three/fiber";

const Hero = () => {
  return (
    <div>
      <div className="text-3xl font-bold h-screen px-4 text-white">Hello</div>
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
          <boxGeometry args={[2, 2, 2]} attach="geometry" />
          <meshStandardMaterial attach="material" />
        </mesh>
      </Canvas>
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
