
export default function Ground() {
  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.21, 0]}>
      <planeGeometry args={[80, 80]} />
      <meshStandardMaterial color="#04080f" roughness={0.9} metalness={0.1} />
    </mesh>
  )
}
