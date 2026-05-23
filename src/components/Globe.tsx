"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Points, PointMaterial, Stars } from "@react-three/drei";
import * as random from "maath/random";

function GlobePoints() {
  const sphere = random.onSphere(new Float32Array(4000), {
    radius: 1.5,
  });

  return (
    <Points positions={sphere} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#c084fc"
        size={0.012}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function Globe() {
  return (
    <div className="relative w-[420px] h-[420px] md:w-[520px] md:h-[520px]">
      <div className="absolute inset-0 rounded-full bg-purple-700/10 blur-[120px]" />

      <div className="absolute inset-8 rounded-full border border-purple-500/20 rotate-12" />
      <div className="absolute inset-16 rounded-full border border-purple-400/10 -rotate-12" />
      <div className="absolute inset-0 rounded-full border border-purple-500/10" />

      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.4} />

        <Stars
          radius={80}
          depth={50}
          count={1200}
          factor={2}
          saturation={0}
          fade
          speed={0.5}
        />

        <GlobePoints />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}