
export default function Stage() {
  return (
    <mesh receiveShadow position={[0, -0.1, 0]}>
      <boxGeometry args={[5, 0.2, 5]} />
      <meshStandardMaterial color="#0d1b2a" roughness={0.65} metalness={0.3} />
    </mesh>
  )
}
