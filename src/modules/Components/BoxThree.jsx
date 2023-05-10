import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const BoxThree = () => {
  const boxRef = useRef();

  useFrame(() => {
    boxRef.current.rotation.x += 0.01;
    boxRef.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={boxRef}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"darkred"} />
    </mesh>
  );
};

export default BoxThree;
