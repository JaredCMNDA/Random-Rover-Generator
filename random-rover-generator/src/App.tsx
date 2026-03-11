import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Stage from './Stage'

export default function App() {
  return (
    <Canvas
      shadows
      camera={{ position: [7, 6, 7], fov: 45 }}
      style={{ background: '#050c17', width: '100vw', height: '100vh' }}
    >
      <fog attach="fog" args={['#050c17', 15, 40]} />

      <ambientLight intensity={0.08} color="#1a3a6e" />

      <spotLight
        position={[0, 7, 0]}
        angle={0.45}
        penumbra={0.6}
        intensity={4}
        castShadow
        shadow-mapSize={[1024, 1024]}
        color="#d0e8ff"
      />

      <pointLight position={[4, 3, 4]} intensity={0.3} color="#1a3a6e" />

      <Stage />

      <OrbitControls
        enablePan={false}
        minDistance={4}
        maxDistance={20}
        maxPolarAngle={Math.PI / 2.1}
      />
    </Canvas>
  )
}
