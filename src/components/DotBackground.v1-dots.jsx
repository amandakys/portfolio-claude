import { useEffect, useRef } from 'react'

const DOT_SPACING = 28
const DOT_RADIUS = 0.75
const WAVE_RADIUS = 200
const MAX_WAVE_HEIGHT = 18
const BASE_COLOR = [120, 120, 120]
const HIGHLIGHT_COLOR = [255, 255, 255]

// Ambient animation config
const AMBIENT_SPEED = 0.4
const AMBIENT_WAVE_HEIGHT = 3
const AMBIENT_BRIGHTNESS = 0.12

function DotBackground() {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const animFrameRef = useRef(null)
  const timeRef = useRef(0)
  const lastFrameRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let w, h

    const resize = () => {
      const parent = canvas.parentElement
      const dpr = window.devicePixelRatio || 1
      w = parent.offsetWidth
      h = parent.offsetHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 }
    }

    const draw = (timestamp) => {
      if (!lastFrameRef.current) lastFrameRef.current = timestamp
      const delta = (timestamp - lastFrameRef.current) / 1000
      lastFrameRef.current = timestamp
      timeRef.current += delta

      const time = timeRef.current

      ctx.clearRect(0, 0, w, h)

      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      const cols = Math.ceil(w / DOT_SPACING) + 1
      const rows = Math.ceil(h / DOT_SPACING) + 1
      const padX = (w - (cols - 1) * DOT_SPACING) / 2
      const padY = (h - (rows - 1) * DOT_SPACING) / 2

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const baseX = padX + col * DOT_SPACING
          const baseY = padY + row * DOT_SPACING

          // Ambient: layered sine waves for organic breathing motion
          const amb1 = Math.sin(baseX * 0.02 + time * AMBIENT_SPEED) *
                       Math.cos(baseY * 0.025 + time * AMBIENT_SPEED * 0.7)
          const amb2 = Math.sin((baseX + baseY) * 0.015 + time * AMBIENT_SPEED * 1.3) * 0.5
          const ambient = (amb1 + amb2) * 0.67 // -1 to 1 range
          const ambientNorm = (ambient + 1) / 2 // 0 to 1

          const ambientOffsetY = ambient * AMBIENT_WAVE_HEIGHT

          // Cursor interaction
          const dx = baseX - mx
          const dy = baseY - my
          const dist = Math.sqrt(dx * dx + dy * dy)
          const t = Math.max(0, 1 - dist / WAVE_RADIUS)
          const ease = t * t * (3 - 2 * t)

          const cursorOffsetY = -ease * MAX_WAVE_HEIGHT * Math.cos((dist / WAVE_RADIUS) * Math.PI * 0.5)
          const cursorScale = ease * 1.2

          // Combine ambient + cursor (ambient always applies)
          const finalY = baseY + ambientOffsetY + cursorOffsetY
          const ambientPulse = 1 + Math.sin(time * 2.5 + baseX * 0.03 + baseY * 0.03) * 0.15
          const scale = (1 + ambientNorm * 0.3 + cursorScale) * ambientPulse

          const brightness = Math.min(1, ambientNorm * AMBIENT_BRIGHTNESS + ease)
          const r = Math.round(BASE_COLOR[0] + (HIGHLIGHT_COLOR[0] - BASE_COLOR[0]) * brightness)
          const g = Math.round(BASE_COLOR[1] + (HIGHLIGHT_COLOR[1] - BASE_COLOR[1]) * brightness)
          const b = Math.round(BASE_COLOR[2] + (HIGHLIGHT_COLOR[2] - BASE_COLOR[2]) * brightness)
          const alpha = 0.25 + ambientNorm * 0.1 + ease * 0.65

          ctx.beginPath()
          ctx.arc(baseX, finalY, DOT_RADIUS * scale, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`
          ctx.fill()
        }
      }

      animFrameRef.current = requestAnimationFrame(draw)
    }

    resize()
    animFrameRef.current = requestAnimationFrame(draw)

    window.addEventListener('resize', resize)
    canvas.parentElement.addEventListener('mousemove', handleMouseMove)
    canvas.parentElement.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('resize', resize)
      canvas.parentElement?.removeEventListener('mousemove', handleMouseMove)
      canvas.parentElement?.removeEventListener('mouseleave', handleMouseLeave)
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
      style={{ pointerEvents: 'all' }}
    />
  )
}

export default DotBackground
