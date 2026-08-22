import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Environment,
  ContactShadows,
  RoundedBox,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import { useRef, Suspense, useMemo } from "react";
import * as THREE from "three";

/* ══════════ shared lighting rig — bright studio on white ══════════ */
function Studio() {
  return (
    <>
      <ambientLight intensity={0.85} />
      <directionalLight position={[4, 6, 4]} intensity={1.4} castShadow />
      <directionalLight position={[-5, 2, -3]} intensity={0.5} />
      <pointLight position={[0, -3, 3]} intensity={0.6} />
      <Environment preset="studio" />
    </>
  );
}

/* ══════════ 1. HERO — glass disc stack ══════════ */
function DiscStack() {
  const g = useRef<THREE.Group>(null!);
  const inner = useRef<THREE.Group>(null!);

  useFrame((s) => {
    const t = s.clock.getElapsedTime();
    if (g.current) {
      g.current.rotation.y = t * 0.16;
      g.current.rotation.x = 0.42 + Math.sin(t * 0.35) * 0.05;
    }
    if (inner.current) inner.current.rotation.y = -t * 0.5;
  });

  const discs = useMemo(
    () => [
      { y: 0.55, r: 1.32, c: "#111114" },
      { y: 0.0, r: 1.5, c: "#ffffff" },
      { y: -0.55, r: 1.32, c: "#111114" },
    ],
    []
  );

  return (
    <Float speed={1.1} rotationIntensity={0.12} floatIntensity={0.35}>
      <group ref={g}>
        {discs.map((d, i) => (
          <mesh key={i} position={[0, d.y, 0]}>
            <cylinderGeometry args={[d.r, d.r, 0.075, 128]} />
            <meshPhysicalMaterial
              color={d.c}
              metalness={i === 1 ? 0.2 : 0.9}
              roughness={i === 1 ? 0.35 : 0.16}
              clearcoat={1}
              clearcoatRoughness={0.1}
            />
          </mesh>
        ))}
        {/* center spindle */}
        <group ref={inner}>
          <mesh>
            <cylinderGeometry args={[0.12, 0.12, 1.7, 32]} />
            <meshStandardMaterial color="#0d0d0f" metalness={1} roughness={0.2} />
          </mesh>
        </group>
        {/* orbit ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.05, 0.008, 12, 160]} />
          <meshBasicMaterial color="#0d0d0f" transparent opacity={0.28} />
        </mesh>
        <mesh rotation={[Math.PI / 2.3, 0.3, 0]}>
          <torusGeometry args={[2.35, 0.006, 12, 160]} />
          <meshBasicMaterial color="#0d0d0f" transparent opacity={0.16} />
        </mesh>
      </group>
    </Float>
  );
}

/* ══════════ 2. TWO SOURCES — paired glass slabs ══════════ */
function SourcePair() {
  const g = useRef<THREE.Group>(null!);
  const a = useRef<THREE.Mesh>(null!);
  const b = useRef<THREE.Mesh>(null!);
  useFrame((s) => {
    const t = s.clock.getElapsedTime();
    if (g.current) g.current.rotation.y = Math.sin(t * 0.3) * 0.5;
    const gap = 0.42 + Math.sin(t * 1.1) * 0.16;
    if (a.current) a.current.position.x = -gap;
    if (b.current) b.current.position.x = gap;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
      <group ref={g} rotation={[0.28, 0, 0]} scale={1.05}>
        <mesh ref={a}>
          <RoundedBox args={[0.72, 1.8, 0.72]} radius={0.09} smoothness={5}>
            <meshPhysicalMaterial color="#0d0d0f" metalness={0.85} roughness={0.18} clearcoat={1} />
          </RoundedBox>
        </mesh>
        <mesh ref={b}>
          <RoundedBox args={[0.72, 1.8, 0.72]} radius={0.09} smoothness={5}>
            <MeshTransmissionMaterial
              thickness={0.9}
              roughness={0.05}
              transmission={1}
              ior={1.45}
              chromaticAberration={0.03}
              backside
            />
          </RoundedBox>
        </mesh>
      </group>
    </Float>
  );
}

/* ══════════ 3. BINGE — nodes in sync ══════════ */
function SyncNodes() {
  const g = useRef<THREE.Group>(null!);
  const core = useRef<THREE.Mesh>(null!);
  useFrame((s) => {
    const t = s.clock.getElapsedTime();
    if (g.current) g.current.rotation.y = t * 0.4;
    if (core.current) {
      const p = 1 + Math.sin(t * 2.2) * 0.05;
      core.current.scale.setScalar(p);
    }
  });
  const nodes = useMemo(
    () =>
      Array.from({ length: 5 }, (_, i) => {
        const a = (i / 5) * Math.PI * 2;
        return [Math.cos(a) * 1.75, Math.sin(a * 2) * 0.34, Math.sin(a) * 1.75] as [number, number, number];
      }),
    []
  );
  return (
    <Float speed={1} rotationIntensity={0.1} floatIntensity={0.35}>
      <mesh ref={core}>
        <icosahedronGeometry args={[0.62, 3]} />
        <meshPhysicalMaterial color="#0d0d0f" metalness={0.95} roughness={0.14} clearcoat={1} />
      </mesh>
      <group ref={g}>
        {nodes.map((p, i) => (
          <group key={i}>
            <mesh position={p}>
              <sphereGeometry args={[0.19, 32, 32]} />
              <meshPhysicalMaterial
                color="#ffffff"
                metalness={0.15}
                roughness={0.12}
                clearcoat={1}
                clearcoatRoughness={0.05}
              />
            </mesh>
          </group>
        ))}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.75, 0.005, 10, 140]} />
          <meshBasicMaterial color="#0d0d0f" transparent opacity={0.25} />
        </mesh>
      </group>
    </Float>
  );
}

/* ══════════ 4. FORMAT — faceted crystal ══════════ */
function Crystal() {
  const m = useRef<THREE.Mesh>(null!);
  useFrame((s) => {
    const t = s.clock.getElapsedTime();
    if (!m.current) return;
    m.current.rotation.y = t * 0.32;
    m.current.rotation.x = t * 0.18;
  });
  return (
    <Float speed={1.3} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={m} scale={1.25}>
        <octahedronGeometry args={[1, 0]} />
        <MeshTransmissionMaterial
          thickness={1.4}
          roughness={0.02}
          transmission={1}
          ior={1.7}
          chromaticAberration={0.08}
          anisotropy={0.2}
          distortion={0.1}
          distortionScale={0.3}
          backside
        />
      </mesh>
    </Float>
  );
}

/* ══════════ 5. DEVICE — android handset ══════════ */
function Handset() {
  const g = useRef<THREE.Group>(null!);
  useFrame((s) => {
    const t = s.clock.getElapsedTime();
    if (!g.current) return;
    g.current.rotation.y = -0.42 + Math.sin(t * 0.4) * 0.28;
    g.current.rotation.x = 0.06 + Math.sin(t * 0.3) * 0.04;
  });
  return (
    <Float speed={1.1} rotationIntensity={0.1} floatIntensity={0.4}>
      <group ref={g} scale={0.95}>
        <RoundedBox args={[1.65, 3.35, 0.17]} radius={0.2} smoothness={6}>
          <meshPhysicalMaterial color="#101014" metalness={0.9} roughness={0.22} clearcoat={1} />
        </RoundedBox>
        {/* screen */}
        <mesh position={[0, 0, 0.089]}>
          <planeGeometry args={[1.48, 3.16]} />
          <meshBasicMaterial color="#fafaf8" />
        </mesh>
        {/* album art block */}
        <mesh position={[0, 0.62, 0.092]}>
          <planeGeometry args={[1.16, 1.16]} />
          <meshBasicMaterial color="#111114" />
        </mesh>
        {/* text lines */}
        {[-0.18, -0.32].map((y, i) => (
          <mesh key={y} position={[-0.2 + i * 0.12, y, 0.092]}>
            <planeGeometry args={[i === 0 ? 0.74 : 0.5, 0.055]} />
            <meshBasicMaterial color={i === 0 ? "#141418" : "#c9c9c4"} />
          </mesh>
        ))}
        {/* progress */}
        <mesh position={[0, -0.55, 0.092]}>
          <planeGeometry args={[1.16, 0.02]} />
          <meshBasicMaterial color="#dedeD8" />
        </mesh>
        <mesh position={[-0.34, -0.55, 0.093]}>
          <planeGeometry args={[0.48, 0.03]} />
          <meshBasicMaterial color="#141418" />
        </mesh>
        {/* controls */}
        {[-0.4, 0, 0.4].map((x, i) => (
          <mesh key={x} position={[x, -0.86, 0.092]}>
            <circleGeometry args={[i === 1 ? 0.15 : 0.075, 32]} />
            <meshBasicMaterial color={i === 1 ? "#141418" : "#9a9a95"} />
          </mesh>
        ))}
        {/* bottom nav */}
        <mesh position={[0, -1.35, 0.092]}>
          <planeGeometry args={[1.16, 0.012]} />
          <meshBasicMaterial color="#e6e6e1" />
        </mesh>
      </group>
    </Float>
  );
}

/* ══════════ 6. WAVE FIELD — audio ribbon ══════════ */
function WaveField() {
  const g = useRef<THREE.Group>(null!);
  const bars = useMemo(() => Array.from({ length: 34 }, (_, i) => i), []);
  useFrame((s) => {
    const t = s.clock.getElapsedTime();
    if (!g.current) return;
    g.current.rotation.y = Math.sin(t * 0.22) * 0.35;
    g.current.children.forEach((c, i) => {
      const h = 0.3 + Math.abs(Math.sin(i * 0.42 + t * 1.7)) * 1.5;
      c.scale.y = h;
      c.position.y = 0;
    });
  });
  return (
    <Float speed={1} rotationIntensity={0.08} floatIntensity={0.3}>
      <group ref={g} rotation={[0.12, 0, 0]}>
        {bars.map((i) => (
          <mesh key={i} position={[(i - bars.length / 2) * 0.13, 0, 0]}>
            <boxGeometry args={[0.055, 1, 0.055]} />
            <meshPhysicalMaterial
              color={i % 7 === 0 ? "#ffffff" : "#0d0d0f"}
              metalness={0.8}
              roughness={0.2}
              clearcoat={1}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

/* ══════════ exported canvas ══════════ */
export type SceneKind = "disc" | "pair" | "sync" | "crystal" | "device" | "wave";

export default function Scene({
  kind,
  zoom = 6,
  shadow = true,
}: {
  kind: SceneKind;
  zoom?: number;
  shadow?: boolean;
}) {
  return (
    <Canvas
      camera={{ position: [0, 0, zoom], fov: 42 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <Studio />
        {kind === "disc" && <DiscStack />}
        {kind === "pair" && <SourcePair />}
        {kind === "sync" && <SyncNodes />}
        {kind === "crystal" && <Crystal />}
        {kind === "device" && <Handset />}
        {kind === "wave" && <WaveField />}
        {shadow && (
          <ContactShadows
            position={[0, -2.3, 0]}
            opacity={0.28}
            scale={12}
            blur={3.2}
            far={5}
            color="#0d0d0f"
          />
        )}
      </Suspense>
    </Canvas>
  );
}
