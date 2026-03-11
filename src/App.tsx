import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import Stage from './Stage'
import Ground from './Ground'
import DebugPanel from './DebugPanel'

export default function App() {
  return (
    <>
      <Canvas
        shadows
        camera={{ position: [7, 6, 7], fov: 45, near: 0.1, far: 100 }}
        style={{ background: '#050c17', width: '100vw', height: '100vh' }}
      >
        <fog attach="fog" args={['#050c17', 20, 50]} />

        <ambientLight intensity={0.06} color="#1a3a6e" />

        <spotLight
          position={[0, 9, 0]}
          angle={0.65}
          penumbra={0.5}
          intensity={80}
          distance={16}
          castShadow
          shadow-mapSize={[2048, 2048]}
          color="#d0eeff"
        />

        <Ground />
        <Stage />

        <EffectComposer>
          <Bloom
            luminanceThreshold={0.6}
            luminanceSmoothing={0.4}
            intensity={1.2}
          />
        </EffectComposer>

        <OrbitControls
          enablePan={false}
          minDistance={4}
          maxDistance={20}
          maxPolarAngle={Math.PI / 2.1}
        />
      </Canvas>

      <DebugPanel />
    </>
  )
}
