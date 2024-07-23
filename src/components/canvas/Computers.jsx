import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const bmw = useGLTF('./bmw_m5_cs/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor="black"/>
      <directionalLight 
        intensity={15} 
        position={[0, 10, 0]} 
        castShadow 
      />
      <pointLight 
        intensity={5000} 
        position={[10, 0, 10]}
      />
      <spotLight 
        position={[-10, 20, 10]} 
        angle={0.3} 
        penumbra={1} 
        intensity={200} 
        castShadow 
        shadow-mapSize={1024} 
      />
      <primitive 
        object={bmw.scene} 
        scale={isMobile? 1.5 : 3}
        position={isMobile ? [0, -3, -1.8] : [0, -4, -4]} 
        rotation={[-0.01, -0.2, -0.1]} 
      />
    </mesh>
  )
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px )');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) =>{
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change',
    handleMediaQueryChange);

    return () =>{
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])

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
        <Computers isMobile={isMobile}/>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas