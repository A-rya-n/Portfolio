import { useRef } from "react";
import { useFrame, Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three";
import icon from "../../../assets/threeIcon.png";
// import icon from "../../../assets/icon.svg";

const ThreeIcon = () => {
  const boxRef = useRef();

  useFrame(() => {
    boxRef.current.rotation.x += 0.01;
    boxRef.current.rotation.y += 0.01;
  });
  const Icon = useLoader(TextureLoader, icon);

  return (
    <mesh ref={boxRef}>
      <boxBufferGeometry args={[2, 2, 2]} />
      <meshStandardMaterial map={Icon} />
    </mesh>
  );
};

const ThreeCanvs = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 0, 5]} />
      <ThreeIcon />
    </Canvas>
  );
};

export default ThreeCanvs;
