import { useEffect, useRef } from 'react'

const COLORS = {
  coral: [252, 107, 85],
}

function smoothstep(t) {
  t = Math.max(0, Math.min(1, t))
  return t * t * (3 - 2 * t)
}

const STAR_COUNT = 60
const CONNECTION_DIST = 120
const CURSOR_CONNECTION_DIST = 180

function initStars(w, h) {
  return Array.from({ length: STAR_COUNT }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 12,
    vy: (Math.random() - 0.5) * 8,
    radius: 1 + Math.random() * 1.5,
    phase: Math.random() * Math.PI * 2,
  }))
}

function drawConstellation(ctx, w, h, time, stars, mx, my) {
  // Update positions
  for (const s of stars) {
    s.x += s.vx * 0.016
    s.y += s.vy * 0.016

    if (s.x < 0) s.x = w
    if (s.x > w) s.x = 0
    if (s.y < 0) s.y = h
    if (s.y > h) s.y = 0
  }

  // Draw connections
  for (let i = 0; i < stars.length; i++) {
    for (let j = i + 1; j < stars.length; j++) {
      const dx = stars[i].x - stars[j].x
      const dy = stars[i].y - stars[j].y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < CONNECTION_DIST) {
        const alpha = (1 - dist / CONNECTION_DIST) * 0.08
        ctx.beginPath()
        ctx.moveTo(stars[i].x, stars[i].y)
        ctx.lineTo(stars[j].x, stars[j].y)
        ctx.strokeStyle = `rgba(${COLORS.coral[0]},${COLORS.coral[1]},${COLORS.coral[2]},${alpha})`
        ctx.lineWidth = 0.5
        ctx.stroke()
      }
    }

    // Cursor connections
    const cdx = stars[i].x - mx
    const cdy = stars[i].y - my
    const cdist = Math.sqrt(cdx * cdx + cdy * cdy)
    if (cdist < CURSOR_CONNECTION_DIST) {
      const alpha = (1 - cdist / CURSOR_CONNECTION_DIST) * 0.25
      ctx.beginPath()
      ctx.moveTo(stars[i].x, stars[i].y)
      ctx.lineTo(mx, my)
      ctx.strokeStyle = `rgba(255,255,255,${alpha})`
      ctx.lineWidth = 0.8
      ctx.stroke()
    }
  }

  // Draw stars
  for (const s of stars) {
    const pulse = 1 + Math.sin(time * 2 + s.phase) * 0.3
    const r = s.radius * pulse

    // Brighter near cursor
    const dx = s.x - mx
    const dy = s.y - my
    const dist = Math.sqrt(dx * dx + dy * dy)
    const cursorT = smoothstep(1 - dist / CURSOR_CONNECTION_DIST)

    const baseAlpha = 0.15 + Math.sin(time + s.phase) * 0.05
    const alpha = baseAlpha + cursorT * 0.6

    const cr = Math.round(COLORS.coral[0] + (255 - COLORS.coral[0]) * cursorT)
    const cg = Math.round(COLORS.coral[1] + (255 - COLORS.coral[1]) * cursorT)
    const cb = Math.round(COLORS.coral[2] + (255 - COLORS.coral[2]) * cursorT)

    ctx.beginPath()
    ctx.arc(s.x, s.y, r, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(${cr},${cg},${cb},${alpha})`
    ctx.fill()
  }
}

function WorkBackground() {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const animFrameRef = useRef(null)
  const timeRef = useRef(0)
  const lastFrameRef = useRef(0)
  const stateRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let w, h

    const resize = () => {
      const parent = canvas.closest('section') || canvas.parentElement
      const dpr = window.devicePixelRatio || 1
      w = parent.offsetWidth
      h = parent.offsetHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      stateRef.current = initStars(w, h)
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }

    const draw = (timestamp) => {
      if (!lastFrameRef.current) lastFrameRef.current = timestamp
      const delta = (timestamp - lastFrameRef.current) / 1000
      lastFrameRef.current = timestamp
      timeRef.current += delta

      ctx.clearRect(0, 0, w, h)
      drawConstellation(ctx, w, h, timeRef.current, stateRef.current, mouseRef.current.x, mouseRef.current.y)

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
      className="absolute inset-0 w-full h-full z-0"
      aria-hidden="true"
      style={{ pointerEvents: 'none' }}
    />
  )
}

export default WorkBackground
