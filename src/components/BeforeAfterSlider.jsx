import { useState, useRef, useEffect } from 'react'

/**
 * BeforeAfterSlider - An interactive image comparison slider
 * Move mouse left/right to reveal different images
 */
function BeforeAfterSlider({ leftImage, rightImage, leftAlt = "Left image", rightAlt = "Right image" }) {
  const [progress, setProgress] = useState(0.5)
  const [targetProgress, setTargetProgress] = useState(0.5)
  const containerRef = useRef(null)

  // Smooth animation using requestAnimationFrame
  useEffect(() => {
    let animationId
    const animate = () => {
      setProgress(prev => {
        const diff = targetProgress - prev
        if (Math.abs(diff) < 0.001) return targetProgress
        return prev + diff * 0.1
      })
      animationId = requestAnimationFrame(animate)
    }
    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [targetProgress])

  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const newProgress = Math.max(0, Math.min(1, x / rect.width))
    setTargetProgress(newProgress)
  }

  const handleMouseLeave = () => {
    setTargetProgress(0.5)
  }

  const handleTouchMove = (e) => {
    if (!containerRef.current) return
    const touch = e.touches[0]
    const rect = containerRef.current.getBoundingClientRect()
    const x = touch.clientX - rect.left
    const newProgress = Math.max(0, Math.min(1, x / rect.width))
    setTargetProgress(newProgress)
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video cursor-ew-resize overflow-hidden rounded-lg"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseLeave}
    >
      {/* Right image (background - bottom layer) */}
      <img
        src={rightImage}
        alt={rightAlt}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Left image (top layer with clip-path) */}
      <img
        src={leftImage}
        alt={leftAlt}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ clipPath: `inset(0 ${(1 - progress) * 100}% 0 0)` }}
      />

      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg"
        style={{ left: `${progress * 100}%`, transform: 'translateX(-50%)' }}
      />
    </div>
  )
}

export default BeforeAfterSlider
