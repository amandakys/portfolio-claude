import { useState, useEffect } from 'react'
import RoleDisplayRow from './RoleDisplayRow'
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
function Hero() {
  // Avatar images array for looping
  const avatars = [avatar1, avatar2, avatar3]
  const [currentAvatarIndex, setCurrentAvatarIndex] = useState(0)

  // Loop through avatars every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAvatarIndex((prevIndex) => (prevIndex + 1) % avatars.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [avatars.length])

  // Map roles from JSON data, parsing HTML in body text
  const roles = rolesData.map(role => ({
    ...role,
    backgroundImage: backgroundImages[role.backgroundImagePath],
    body: role.body.map(text =>
      text.includes('<') ? <span dangerouslySetInnerHTML={{ __html: text }} /> : text
    )
  }))

  return (
    <section className="relative">
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
            <h1 className="font-ebrula text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#FC6B55] leading-tight">
              Hi, I'm Amanda
            </h1>
            
            <div className="font-square-peg text-white text-6xl leading-tight space-y-1">
              <p>and I have multiple personalities.</p>
              <p>some call it "interdisciplinary"</p>
              <p>
                I call it <span className="relative inline-block">Living in the Multiverse<span className="absolute left-0 right-0 border-b-4 border-[#F0534E]" style={{ bottom: '0.5em' }}></span></span>
              </p>
              <p className="text-[#F0534E] inline-block ml-20 pl-20 rotate-[-5deg]">Problem-solving</p>
            </div>
          </div>

          {/* Right Side - Avatar Image */}
          <div className="flex-1 lg:w-1/2 flex justify-center items-center relative z-20">
            <div
              className="relative border-4 border-white/20 shadow-2xl"
              style={{
                width: '24rem',
                height: '24rem',
                borderRadius: '50%',
                overflow: 'hidden'
              }}
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
      <div className="relative z-10 lg:mt-10 pb-8 sm:pb-12 px-0 w-full">
        <div className="relative translate-x-[-0.5%] w-[100%] min-w-[106%]">
          <RoleDisplayRow roles={roles} />
        </div>
      </div>
    </section>
  )
}

export default Hero
