import { useEffect, useRef } from 'react'

const LINE_COUNT = 21
const POINTS_PER_LINE = 120
const BASE_COLOR = [120, 120, 120]
const HIGHLIGHT_COLOR = [255, 255, 255]
const CURSOR_RADIUS = 250
const CURSOR_PUSH = 30
const AMBIENT_SPEED = 0.3
const LINE_WIDTH_BASE = 0.5
const LINE_WIDTH_HOVER = 2
const GLOW_RADIUS = 180

// Lightning strike config
const STRIKE_MIN_INTERVAL = 3
const STRIKE_DURATION = 4
const STRIKE_GLOW_WIDTH = 120

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

    // Lightning strike state
    let strike = null
    let nextStrikeTime = 6 + Math.random() * 4

    const maybeSpawnStrike = (time) => {
      if (time < nextStrikeTime) return
      strike = {
        lineIndex: Math.floor(Math.random() * LINE_COUNT),
        startTime: time,
        direction: Math.random() > 0.5 ? 1 : -1,
      }
      nextStrikeTime = time + 6 + Math.random() * 4
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
      const lineSpacing = h / (LINE_COUNT + 1)

      // Maybe spawn a new lightning strike
      maybeSpawnStrike(time)

      // Expire old strike
      if (strike && time - strike.startTime > STRIKE_DURATION) {
        strike = null
      }

      for (let i = 0; i < LINE_COUNT; i++) {
        const baseY = lineSpacing * (i + 1)
        // Each line has unique phase and frequency offsets
        const phase = i * 0.7
        const freqMod = 1 + (i % 5) * 0.15

        // Compute all points first
        const points = []
        for (let p = 0; p <= POINTS_PER_LINE; p++) {
          const ratio = p / POINTS_PER_LINE
          const x = ratio * w

          // Layered ambient waves
          const wave1 = Math.sin(x * 0.008 * freqMod + time * AMBIENT_SPEED + phase) * 12
          const wave2 = Math.sin(x * 0.003 + time * AMBIENT_SPEED * 0.6 + phase * 1.3) * 8
          const wave3 = Math.cos(x * 0.012 + time * AMBIENT_SPEED * 1.4 + phase * 0.5) * 4
          const ambientY = wave1 + wave2 + wave3

          // Breathing amplitude modulation
          const breathe = 1 + Math.sin(time * 0.8 + phase * 0.4) * 0.3

          let y = baseY + ambientY * breathe

          // Cursor interaction — smooth vertical push
          const dx = x - mx
          const dyBase = baseY - my
          const dist = Math.sqrt(dx * dx + dyBase * dyBase)
          const t = Math.max(0, 1 - dist / CURSOR_RADIUS)
          const ease = t * t * t * (t * (t * 6 - 15) + 10) // quintic smoothstep

          // Smooth push direction using atan to avoid hard flip at dyBase=0
          const pushDir = (2 / Math.PI) * Math.atan(dyBase * 0.08)
          y += pushDir * ease * CURSOR_PUSH

          // Per-point cursor proximity for local glow
          const glowDist = Math.sqrt(dx * dx + (y - my) * (y - my))
          const glowT = Math.max(0, 1 - glowDist / GLOW_RADIUS)
          const glow = glowT * glowT * (3 - 2 * glowT)

          points.push({ x, y, glow })
        }

        // Build one continuous smooth path
        const buildPath = () => {
          ctx.beginPath()
          ctx.moveTo(points[0].x, points[0].y)
          for (let p = 1; p < points.length - 1; p++) {
            const midX = (points[p].x + points[p + 1].x) / 2
            const midY = (points[p].y + points[p + 1].y) / 2
            ctx.quadraticCurveTo(points[p].x, points[p].y, midX, midY)
          }
          const last = points[points.length - 1]
          ctx.lineTo(last.x, last.y)
        }

        // Ambient brightness pulsing (per-line base)
        const ambBright = 0.5 + Math.sin(time * 0.6 + phase) * 0.15
        const baseAlpha = 0.15 + ambBright * 0.1
        const br = Math.round(BASE_COLOR[0] + (HIGHLIGHT_COLOR[0] - BASE_COLOR[0]) * ambBright * 0.15)
        const bg = Math.round(BASE_COLOR[1] + (HIGHLIGHT_COLOR[1] - BASE_COLOR[1]) * ambBright * 0.15)
        const bb = Math.round(BASE_COLOR[2] + (HIGHLIGHT_COLOR[2] - BASE_COLOR[2]) * ambBright * 0.15)

        // Draw base line as one continuous path
        buildPath()
        ctx.strokeStyle = `rgba(${br},${bg},${bb},${baseAlpha})`
        ctx.lineWidth = LINE_WIDTH_BASE
        ctx.stroke()

        // Draw glow pass: same path clipped by radial gradient
        // Find max glow on this line to skip if no cursor influence
        let maxGlow = 0
        for (let p = 0; p < points.length; p++) {
          if (points[p].glow > maxGlow) maxGlow = points[p].glow
        }

        if (maxGlow > 0.01) {
          const grad = ctx.createRadialGradient(mx, my, 0, mx, my, GLOW_RADIUS)
          const hr = HIGHLIGHT_COLOR[0]
          const hg = HIGHLIGHT_COLOR[1]
          const hb = HIGHLIGHT_COLOR[2]
          grad.addColorStop(0, `rgba(${hr},${hg},${hb},0.85)`)
          grad.addColorStop(0.5, `rgba(${hr},${hg},${hb},0.4)`)
          grad.addColorStop(1, `rgba(${hr},${hg},${hb},0)`)

          buildPath()
          ctx.strokeStyle = grad
          ctx.lineWidth = LINE_WIDTH_BASE + maxGlow * (LINE_WIDTH_HOVER - LINE_WIDTH_BASE)
          ctx.stroke()
        }

        // Lightning strike glow traveling along the line
        if (strike && strike.lineIndex === i) {
          const elapsed = time - strike.startTime
          const progress = elapsed / STRIKE_DURATION
          // Position travels from one end to the other
          const strikeX = strike.direction > 0
            ? progress * (w + STRIKE_GLOW_WIDTH * 2) - STRIKE_GLOW_WIDTH
            : w - progress * (w + STRIKE_GLOW_WIDTH * 2) + STRIKE_GLOW_WIDTH

          // Find the y position on the line at strikeX
          const pIdx = Math.min(
            POINTS_PER_LINE,
            Math.max(0, Math.round((strikeX / w) * POINTS_PER_LINE))
          )
          const strikeY = points[pIdx] ? points[pIdx].y : baseY

          // Fade in at start, fade out at end
          const fadeIn = Math.min(1, progress * 5)
          const fadeOut = Math.min(1, (1 - progress) * 5)
          const intensity = fadeIn * fadeOut

          const sGrad = ctx.createRadialGradient(
            strikeX, strikeY, 0,
            strikeX, strikeY, STRIKE_GLOW_WIDTH
          )
          sGrad.addColorStop(0, `rgba(255,255,255,${0.9 * intensity})`)
          sGrad.addColorStop(0.3, `rgba(255,255,255,${0.5 * intensity})`)
          sGrad.addColorStop(0.6, `rgba(200,220,255,${0.2 * intensity})`)
          sGrad.addColorStop(1, `rgba(200,220,255,0)`)

          buildPath()
          ctx.strokeStyle = sGrad
          ctx.lineWidth = LINE_WIDTH_BASE + 1.5 * intensity
          ctx.stroke()
        }
      }

      animFrameRef.current = requestAnimationFrame(draw)
    }

    resize()
    animFrameRef.current = requestAnimationFrame(draw)

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
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
