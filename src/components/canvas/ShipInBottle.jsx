import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const ShipInBottle = () => {
  const ship = useGLTF("./ship_in_a_bottle/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor='black' />
      <spotLight
        position={[-50, 15, 5]}
        angle={0.1}
        intensity={1}
      />
      <pointLight intensity={1} />
      <primitive object={ship.scene} scale={1.4} position-y={0} rotation-y={0} />
    </mesh>
  );
};

const ShipInBottleCanvas = () => {
  return (
    <Canvas
      shadows
      intensity={1}
      frameloop='demand'
      camera={{
        fov: 60,
        near: 0.2,
        far: 200,
        position: [5, 2, 3],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={true}
        />
        <ShipInBottle />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ShipInBottleCanvas;