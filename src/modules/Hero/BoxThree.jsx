import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RenderTexture, Text } from "@react-three/drei";

const BoxThree = () => {
  const boxRef = useRef();
  const textRef = useRef();

  useFrame(
    (state) =>
      (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 3)
  );

  useFrame(() => {
    boxRef.current.rotation.x += 0.01;
    boxRef.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={boxRef}>
      <boxBufferGeometry args={[2, 2, 2]} />
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <color attach="background" args={["#d43f3f"]} />
          <Text ref={textRef} fontSize={4} color="#fff">
            Hello!
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default BoxThree;
