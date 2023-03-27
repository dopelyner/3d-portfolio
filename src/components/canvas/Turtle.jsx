import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Turtle = () => {
  const turtle = useGLTF("./turtle/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor='black' />
      <spotLight
        position={[-50, 15, 5]}
        angle={0.1}
        intensity={1}
      />
      <pointLight intensity={1} />
      <primitive object={turtle.scene} scale={0.04} position-y={0} rotation-y={0} />
    </mesh>
  );
};

const TurtleCanvas = () => {
  return (
    <Canvas
      shadows
      intensity={1}
      frameloop='demand'
      camera={{
        fov: 60,
        near: 0.1,
        far: 200,
        position: [5, 5, 3],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
        />
        <Turtle />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default TurtleCanvas;