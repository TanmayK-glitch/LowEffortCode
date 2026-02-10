/**
 * Particle positions for a running human silhouette.
 * ViewBox: 0 0 140 300. Denser in core, sparser at extremities.
 * Trailing particles have negative x offset and lower opacity.
 */
const PARTICLE_DATA = [
  // Head - dense cluster
  { x: 70, y: 25, r: 3, opacity: 1, trailing: false },
  { x: 68, y: 22, r: 2.5, opacity: 0.95, trailing: false },
  { x: 72, y: 22, r: 2.5, opacity: 0.95, trailing: false },
  { x: 70, y: 20, r: 2, opacity: 0.9, trailing: false },
  { x: 66, y: 25, r: 2, opacity: 0.9, trailing: false },
  { x: 74, y: 25, r: 2, opacity: 0.9, trailing: false },
  { x: 69, y: 28, r: 2, opacity: 0.85, trailing: false },
  { x: 71, y: 28, r: 2, opacity: 0.85, trailing: false },
  // Trailing from head
  { x: 58, y: 24, r: 2, opacity: 0.5, trailing: true },
  { x: 55, y: 26, r: 1.5, opacity: 0.4, trailing: true },
  // Neck
  { x: 70, y: 35, r: 2, opacity: 0.9, trailing: false },
  { x: 68, y: 38, r: 1.5, opacity: 0.85, trailing: false },
  { x: 72, y: 38, r: 1.5, opacity: 0.85, trailing: false },
  // Torso - dense
  { x: 70, y: 50, r: 4, opacity: 1, trailing: false },
  { x: 68, y: 48, r: 2.5, opacity: 0.95, trailing: false },
  { x: 72, y: 48, r: 2.5, opacity: 0.95, trailing: false },
  { x: 66, y: 52, r: 2, opacity: 0.9, trailing: false },
  { x: 74, y: 52, r: 2, opacity: 0.9, trailing: false },
  { x: 70, y: 60, r: 4, opacity: 1, trailing: false },
  { x: 68, y: 58, r: 2.5, opacity: 0.95, trailing: false },
  { x: 72, y: 58, r: 2.5, opacity: 0.95, trailing: false },
  { x: 67, y: 65, r: 2, opacity: 0.9, trailing: false },
  { x: 73, y: 65, r: 2, opacity: 0.9, trailing: false },
  { x: 70, y: 72, r: 3.5, opacity: 0.95, trailing: false },
  { x: 68, y: 78, r: 2.5, opacity: 0.9, trailing: false },
  { x: 72, y: 78, r: 2.5, opacity: 0.9, trailing: false },
  { x: 70, y: 85, r: 3, opacity: 0.95, trailing: false },
  // Trailing from torso
  { x: 52, y: 55, r: 2, opacity: 0.45, trailing: true },
  { x: 48, y: 65, r: 1.5, opacity: 0.4, trailing: true },
  { x: 50, y: 78, r: 2, opacity: 0.4, trailing: true },
  // Forward arm (left - reaching forward)
  { x: 55, y: 45, r: 2, opacity: 0.9, trailing: false },
  { x: 48, y: 48, r: 2, opacity: 0.85, trailing: false },
  { x: 42, y: 52, r: 2, opacity: 0.8, trailing: false },
  { x: 38, y: 58, r: 2, opacity: 0.75, trailing: false },
  { x: 35, y: 65, r: 1.5, opacity: 0.7, trailing: false },
  { x: 32, y: 72, r: 1.5, opacity: 0.65, trailing: false },
  // Trailing from forward arm
  { x: 22, y: 55, r: 1.5, opacity: 0.5, trailing: true },
  { x: 18, y: 62, r: 1, opacity: 0.4, trailing: true },
  // Back arm (right - pulling back)
  { x: 85, y: 48, r: 2, opacity: 0.85, trailing: false },
  { x: 92, y: 55, r: 2, opacity: 0.8, trailing: false },
  { x: 98, y: 62, r: 2, opacity: 0.75, trailing: false },
  { x: 102, y: 72, r: 1.5, opacity: 0.7, trailing: false },
  { x: 105, y: 82, r: 1.5, opacity: 0.65, trailing: false },
  // Trailing from back arm
  { x: 88, y: 48, r: 1.5, opacity: 0.45, trailing: true },
  { x: 82, y: 55, r: 1, opacity: 0.4, trailing: true },
  // Forward leg (left - extended forward)
  { x: 62, y: 92, r: 2.5, opacity: 0.9, trailing: false },
  { x: 58, y: 100, r: 2.5, opacity: 0.9, trailing: false },
  { x: 55, y: 110, r: 2.5, opacity: 0.85, trailing: false },
  { x: 52, y: 120, r: 2.5, opacity: 0.85, trailing: false },
  { x: 50, y: 132, r: 2, opacity: 0.8, trailing: false },
  { x: 48, y: 145, r: 2, opacity: 0.75, trailing: false },
  { x: 46, y: 160, r: 2, opacity: 0.7, trailing: false },
  { x: 45, y: 175, r: 2, opacity: 0.7, trailing: false },
  { x: 44, y: 190, r: 1.5, opacity: 0.65, trailing: false },
  { x: 42, y: 205, r: 1.5, opacity: 0.6, trailing: false },
  { x: 40, y: 220, r: 2, opacity: 0.65, trailing: false },
  // Trailing from forward leg
  { x: 35, y: 130, r: 1.5, opacity: 0.45, trailing: true },
  { x: 30, y: 160, r: 1, opacity: 0.4, trailing: true },
  { x: 28, y: 195, r: 1.5, opacity: 0.4, trailing: true },
  // Back leg (right - pushing back)
  { x: 78, y: 92, r: 2.5, opacity: 0.9, trailing: false },
  { x: 82, y: 102, r: 2.5, opacity: 0.85, trailing: false },
  { x: 86, y: 115, r: 2.5, opacity: 0.85, trailing: false },
  { x: 90, y: 130, r: 2, opacity: 0.8, trailing: false },
  { x: 92, y: 145, r: 2, opacity: 0.75, trailing: false },
  { x: 94, y: 162, r: 2, opacity: 0.7, trailing: false },
  { x: 95, y: 180, r: 2, opacity: 0.7, trailing: false },
  { x: 96, y: 198, r: 1.5, opacity: 0.65, trailing: false },
  { x: 97, y: 215, r: 1.5, opacity: 0.6, trailing: false },
  { x: 98, y: 235, r: 2, opacity: 0.65, trailing: false },
  { x: 100, y: 255, r: 2, opacity: 0.6, trailing: false },
  // Trailing from back leg
  { x: 72, y: 105, r: 1.5, opacity: 0.5, trailing: true },
  { x: 68, y: 125, r: 1, opacity: 0.45, trailing: true },
  { x: 65, y: 165, r: 1.5, opacity: 0.4, trailing: true },
  { x: 70, y: 210, r: 1, opacity: 0.4, trailing: true },
  // Hip/core transition
  { x: 68, y: 88, r: 2.5, opacity: 0.9, trailing: false },
  { x: 72, y: 88, r: 2.5, opacity: 0.9, trailing: false },
  { x: 70, y: 90, r: 2, opacity: 0.85, trailing: false },
]

export default function ParticleSilhouette() {
  return (
    <svg
      viewBox="0 0 140 300"
      className="w-full h-full object-contain"
      preserveAspectRatio="xMidYMid meet"
    >
      {PARTICLE_DATA.map((p, i) => (
        <circle
          key={i}
          cx={p.x}
          cy={p.y}
          r={p.r}
          fill="#ff6b6b"
          opacity={p.opacity}
          className={p.trailing ? 'animate-pulse-subtle' : undefined}
          style={
            p.trailing
              ? { animationDelay: `${(i % 15) * 0.08}s` }
              : undefined
          }
        />
      ))}
    </svg>
  )
}
