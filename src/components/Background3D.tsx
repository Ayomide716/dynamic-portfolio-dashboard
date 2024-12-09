import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

const Background3D = () => {
  const [isWebGLAvailable, setIsWebGLAvailable] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check if WebGL is available
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setIsWebGLAvailable(!!gl);
    } catch (e) {
      setIsWebGLAvailable(false);
      console.error('WebGL not available:', e);
    }
    setMounted(true);
  }, []);

  if (!mounted || !isWebGLAvailable) {
    return (
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-primary/20 to-purple-600/20 opacity-30" />
    );
  }

  return (
    <div className="fixed inset-0 -z-10">
      <ErrorBoundary>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          style={{ background: "transparent" }}
          dpr={Math.min(window.devicePixelRatio, 2)}
        >
          <Scene />
        </Canvas>
      </ErrorBoundary>
    </div>
  );
};

// Separate Scene component to handle Three.js elements
const Scene = () => {
  return (
    <Suspense fallback={null}>
      <mesh>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Stars 
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </mesh>
    </Suspense>
  );
};

// Custom error boundary to handle Three.js errors gracefully
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error("Three.js Error:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-primary/20 to-purple-600/20 opacity-30" />
      );
    }

    return this.props.children;
  }
}

export default Background3D;