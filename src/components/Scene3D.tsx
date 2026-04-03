'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortionMaterial, Environment, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function Bottle() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={meshRef}>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.8, 1, 4, 32]} />
          <MeshDistortionMaterial
            color="#c9a962"
            distort={0.1}
            speed={2}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
        <mesh position={[0, 2.2, 0]}>
          <cylinderGeometry args={[0.3, 0.4, 0.5, 32]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[0, 2.7, 0]}>
          <cylinderGeometry args={[0.2, 0.25, 0.3, 32]} />
          <meshStandardMaterial color="#c9a962" metalness={1} roughness={0} />
        </mesh>
      </group>
    </Float>
  );
}

function Liquid() {
  const liquidRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (liquidRef.current) {
      liquidRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  return (
    <mesh ref={liquidRef} position={[0, -0.3, 0]}>
      <cylinderGeometry args={[0.75, 0.95, 3.5, 32]} />
      <meshStandardMaterial
        color="#8b6914"
        transparent
        opacity={0.6}
        metalness={0.5}
        roughness={0.2}
      />
    </mesh>
  );
}

function Particles() {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 200;

  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#c9a962" transparent opacity={0.6} />
    </points>
  );
}

export default function Scene3D() {
  return (
    <Canvas className="w-full h-full">
      <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
      <ambientLight intensity={0.2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#c9a962" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#e8d5a3" />
      <Environment preset="night" />
      <Bottle />
      <Liquid />
      <Particles />
    </Canvas>
  );
}
