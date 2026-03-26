import { useState, useEffect } from 'react'
import RoleDisplayRow from './RoleDisplayRow'
import DotBackground from './DotBackground'
import designerBackground from '../assets/backgrounds/designer-background.png'
import builderBackground from '../assets/backgrounds/builder-background.png'
import researcherBackground from '../assets/backgrounds/researcher-background.png'
import avatar1 from '../assets/avatars/avatar1.png'
import avatar2 from '../assets/avatars/avatar2.png'
import avatar3 from '../assets/avatars/avatar3.png'
import rolesData from '../data/roles.json'

// Map background image paths to imported images
const backgroundImages = {
  'designer-background.png': designerBackground.src,
  'builder-background.png': builderBackground.src,
  'researcher-background.png': researcherBackground.src,
}

/**
 * Hero - The main hero section of the portfolio
 *
 * Features:
 * - Navigation bar (ABOUT, WORK, BLOG)
 * - Main hero content with intro text and avatar
 * - Three role display cards at the bottom
 */
const LIKE_TO_USE = 'like to use'
const STRIKE_DRAW_MS = 600
const LETTER_DELAY_MS = 80
const LETTERS_TOTAL_MS = LIKE_TO_USE.length * LETTER_DELAY_MS
const STRIKE_RETRACT_MS = 400
const LETTERS_FADE_MS = 300
const PAUSE_MS = 500
const HOLD_MS = 1800
const CYCLE_MS = STRIKE_DRAW_MS + LETTERS_TOTAL_MS + HOLD_MS + LETTERS_FADE_MS + STRIKE_RETRACT_MS + PAUSE_MS

function Hero() {
  // Avatar images array for looping
  const avatars = [avatar1, avatar2, avatar3]
  const [currentAvatarIndex, setCurrentAvatarIndex] = useState(0)
  const [strikeProgress, setStrikeProgress] = useState(0)
  const [visibleLetters, setVisibleLetters] = useState(0)

  // Loop through avatars every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAvatarIndex((prevIndex) => (prevIndex + 1) % avatars.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [avatars.length])

  // Strikethrough + letter-by-letter loop
  useEffect(() => {
    let startTime = null
    let frameId

    const tick = (timestamp) => {
      if (!startTime) startTime = timestamp
      const elapsed = (timestamp - startTime) % CYCLE_MS

      let t = elapsed
      if (t < STRIKE_DRAW_MS) {
        // Phase 1: draw strikethrough
        setStrikeProgress(t / STRIKE_DRAW_MS)
        setVisibleLetters(0)
      } else if ((t -= STRIKE_DRAW_MS) < LETTERS_TOTAL_MS) {
        // Phase 2: reveal letters one by one
        setStrikeProgress(1)
        setVisibleLetters(Math.floor(t / LETTER_DELAY_MS) + 1)
      } else if ((t -= LETTERS_TOTAL_MS) < HOLD_MS) {
        // Phase 3: hold
        setStrikeProgress(1)
        setVisibleLetters(LIKE_TO_USE.length)
      } else if ((t -= HOLD_MS) < LETTERS_FADE_MS) {
        // Phase 4: fade out letters
        setStrikeProgress(1)
        setVisibleLetters(t < LETTERS_FADE_MS / 2 ? LIKE_TO_USE.length : 0)
      } else if ((t -= LETTERS_FADE_MS) < STRIKE_RETRACT_MS) {
        // Phase 5: retract strikethrough
        setStrikeProgress(1 - t / STRIKE_RETRACT_MS)
        setVisibleLetters(0)
      } else {
        // Phase 6: pause before restart
        setStrikeProgress(0)
        setVisibleLetters(0)
      }

      frameId = requestAnimationFrame(tick)
    }

    frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [])

  // Map roles from JSON data, parsing HTML in body text
  const roles = rolesData.map(role => ({
    ...role,
    backgroundImage: backgroundImages[role.backgroundImagePath],
    body: role.body.map(text =>
      text.includes('<') ? <span dangerouslySetInnerHTML={{ __html: text }} /> : text
    )
  }))

  return (
    <section className="relative overflow-hidden">
      {/* Animated dot background — constrained above role cards */}
      <div className="absolute inset-0 bottom-auto overflow-hidden" style={{ height: '80%', pointerEvents: 'none' }}>
        <DotBackground />
      </div>

      {/* Red gradient overlay from top right */}
      <div 
        className="absolute top-0 right-0 w-full h-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse at top right, rgba(240, 83, 78, 0.4) 0%, rgba(240, 83, 78, 0.2) 30%, transparent 60%)'
        }}
        aria-hidden="true"
      />
      

      {/* Main Hero Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-8 sm:pb-12">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 max-w-7xl mx-auto">
          {/* Left Side - Text Content */}
          <div className="flex-1 lg:w-1/2 space-y-2 sm:space-y-3 text-left">
            <h1 className="font-ebrula text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#FC6B55] leading-tight">
              Hi, I'm Amanda
            </h1>
            
            <div className="font-square-peg text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
              <p>I turn complex systems into products people actually <span className="relative inline-block">understand<span className="absolute left-0 right-0 h-[2px] sm:h-[4px] bg-[#F0534E]" style={{ bottom: '0.5em', transformOrigin: 'left', transform: `scaleX(${strikeProgress})` }}></span></span> <span className="text-[#F0534E] inline-block rotate-[-5deg] ml-3 sm:ml-4">{LIKE_TO_USE.split('').map((char, i) => (
                <span key={i} style={{ opacity: i < visibleLetters ? 1 : 0, transition: 'opacity 0.15s ease' }}>{char}</span>
              ))}</span></p>
            </div>
          </div>

          {/* Right Side - Avatar Image */}
          <div className="flex-1 lg:w-1/2 flex justify-center items-center relative z-20">
            <div
              className="relative border-4 border-white/20 shadow-2xl w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden"
              style={{ borderRadius: '50%' }}
            >
              {avatars.map((avatar, index) => (
                <img
                  key={index}
                  src={avatar.src}
                  alt="Amanda"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                    index === currentAvatarIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Role Cards Section - wider than viewport so left/right card corners are clipped */}
      <div className="relative z-10 mt-0 lg:mt-0 pt-10 md:pt-16 lg:pt-20 2xl:pt-24 pb-8 md:pb-16 lg:pb-24 px-0 w-full overflow-hidden">
        <div className="relative md:translate-x-[-0.5%] w-full md:min-w-[106%]">
          <RoleDisplayRow roles={roles} />
        </div>
      </div>
    </section>
  )
}

export default Hero
