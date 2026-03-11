import { useState } from 'react'

const SLIDER_COUNT = 20

const panelStyle: React.CSSProperties = {
  position: 'fixed',
  top: '24px',
  right: '24px',
  width: '260px',
  height: '360px',
  background: 'rgba(255, 255, 255, 0.12)',
  border: '1px solid rgba(255, 255, 255, 0.35)',
  borderRadius: '20px',
  boxShadow: `
    0 8px 32px rgba(0, 0, 0, 0.45),
    0 1.5px 0px rgba(255,255,255,0.5) inset,
    0 -1px 0px rgba(255,255,255,0.08) inset
  `,
  backdropFilter: 'blur(28px) saturate(180%) brightness(1.1)',
  WebkitBackdropFilter: 'blur(28px) saturate(180%) brightness(1.1)',
  padding: '16px',
  zIndex: 10,
  display: 'flex',
  flexDirection: 'column',
  gap: '0',
  overflow: 'hidden',
}

const headerStyle: React.CSSProperties = {
  color: 'rgba(255,255,255,0.9)',
  fontSize: '13px',
  fontWeight: 600,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  marginBottom: '12px',
  flexShrink: 0,
  textShadow: '0 1px 4px rgba(0,0,0,0.5)',
}

const scrollAreaStyle: React.CSSProperties = {
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
  paddingRight: '4px',
  scrollbarWidth: 'thin',
  scrollbarColor: 'rgba(255,255,255,0.25) transparent',
}

const sliderRowStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
}

const labelStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  color: 'rgba(255,255,255,0.75)',
  fontSize: '12px',
  fontWeight: 500,
  textShadow: '0 1px 3px rgba(0,0,0,0.4)',
}

export default function DebugPanel() {
  const [values, setValues] = useState<number[]>(
    Array.from({ length: SLIDER_COUNT }, () => 50)
  )

  const handleChange = (i: number, v: number) => {
    setValues(prev => {
      const next = [...prev]
      next[i] = v
      return next
    })
  }

  return (
    <div style={panelStyle}>
      <div style={headerStyle}>Debug Panel</div>
      <div style={scrollAreaStyle}>
        {values.map((val, i) => (
          <div key={i} style={sliderRowStyle}>
            <div style={labelStyle}>
              <span>Test {i + 1}</span>
              <span>{val}</span>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={val}
              onChange={e => handleChange(i, Number(e.target.value))}
              style={{ width: '100%', accentColor: 'rgba(180,210,255,0.9)', cursor: 'pointer' }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
