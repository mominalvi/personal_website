import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = () => {
  const bmw = useGLTF('./bmw_m5_cs/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor="black"/>
      <directionalLight 
        intensity={5} 
        position={[0, 10, 0]} 
        castShadow 
      />
      <pointLight 
        intensity={1000} 
        position={[10, 0, 10]}
      />
      <spotLight 
        position={[-10, 20, 10]} 
        angle={0.3} 
        penumbra={1} 
        intensity={2} 
        castShadow 
        shadow-mapSize={1024} 
      />
      <primitive 
        object={bmw.scene} 
        scale={3}
        position={[0, -3, -4]} 
        rotation={[-0.01, -0.2, -0.1]} 
      />
    </mesh>
  )
};

const ComputersCanvas = () => {
  return (
    <Canvas 
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 10], fov: 25 }} 
      gl={{ preserveDrawingBuffer: true }} 
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas