import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

const Background3D = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-70">
      <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <Sphere args={[1, 100, 200]} scale={2.4}>
          <MeshDistortMaterial
            color="#8B5CF6"
            attach="material"
            distort={0.5}
            speed={2}
          />
        </Sphere>
      </Canvas>
    </div>
  );
};

export default Background3D;