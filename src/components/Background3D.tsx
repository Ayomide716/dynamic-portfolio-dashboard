import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

const Background3D = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <ErrorBoundary>
        <Canvas
          camera={{ position: [0, 0, 5] }}
          style={{ background: "transparent" }}
          dpr={[1, 2]}
        >
          <Suspense fallback={null}>
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
          </Suspense>
        </Canvas>
      </ErrorBoundary>
    </div>
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
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-background/50 to-background" />
      );
    }

    return this.props.children;
  }
}

export default Background3D;
