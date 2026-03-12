import { useState } from 'react'

const SLIDER_COUNT = 20

const wrapperStyle: React.CSSProperties = {
  position: 'fixed',
  top: '24px',
  right: '24px',
  width: '260px',
  zIndex: 10,
}

const panelStyle: React.CSSProperties = {
  position: 'relative',
  height: '360px',
  background: `
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 3px,
      rgba(0, 0, 0, 0.05) 3px,
      rgba(0, 0, 0, 0.05) 4px
    ),
    rgba(2, 8, 22, 0.95)
  `,
  border: '1px solid rgba(255, 90, 20, 0.25)',
  padding: '18px',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
}

const headerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  color: '#ff5a14',
  fontFamily: "'SykeMono', monospace",
  fontSize: '11px',
  fontWeight: 400,
  letterSpacing: '0.16em',
  textTransform: 'uppercase',
  marginBottom: '10px',
  flexShrink: 0,
  textShadow: '0 0 10px rgba(255, 90, 20, 0.7), 0 0 22px rgba(255, 90, 20, 0.25)',
}

const headerPrefixStyle: React.CSSProperties = {
  color: 'rgba(255, 90, 20, 0.3)',
  fontFamily: "'SykeMono', monospace",
  fontSize: '11px',
}

const headerDividerStyle: React.CSSProperties = {
  height: '1px',
  flexShrink: 0,
  marginBottom: '14px',
  background: 'linear-gradient(to right, rgba(255, 90, 20, 0.45), rgba(255, 90, 20, 0.08), transparent)',
}

const scrollAreaStyle: React.CSSProperties = {
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  paddingRight: '6px',
  flex: 1,
  scrollbarWidth: 'thin',
  scrollbarColor: 'rgba(255, 90, 20, 0.25) transparent',
}

const sliderRowStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
}

const labelRowStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
}

const labelNameStyle: React.CSSProperties = {
  fontFamily: "'AkkuratMono', monospace",
  color: 'rgba(255, 140, 80, 0.5)',
  fontSize: '10px',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
}

const labelValueStyle: React.CSSProperties = {
  fontFamily: "'AkkuratMono', monospace",
  color: '#ff5a14',
  fontSize: '10px',
  textShadow: '0 0 6px rgba(255, 90, 20, 0.5)',
  fontVariantNumeric: 'tabular-nums',
  minWidth: '28px',
  textAlign: 'right',
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
    <div style={wrapperStyle}>
      <div className="debug-panel" style={panelStyle}>
        <div style={headerStyle}>
          <span style={headerPrefixStyle}>//</span>
          Debug Panel
        </div>
        <div style={headerDividerStyle} />
        <div className="debug-scroll" style={scrollAreaStyle}>
          {values.map((val, i) => (
            <div key={i} style={sliderRowStyle}>
              <div style={labelRowStyle}>
                <span style={labelNameStyle}>Param_{String(i + 1).padStart(2, '0')}</span>
                <span style={labelValueStyle}>{String(val).padStart(3, '0')}</span>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                value={val}
                onChange={e => handleChange(i, Number(e.target.value))}
                className="debug-slider"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
