import { useState, useEffect } from 'react'
import RoleDisplayRow from './RoleDisplayRow'
import designerBackground from '../assets/backgrounds/designer-background.png'
import builderBackground from '../assets/backgrounds/builder-background.png'
import researcherBackground from '../assets/backgrounds/researcher-background.png'
import avatar1 from '../assets/avatars/avatar1.png'
import avatar2 from '../assets/avatars/avatar2.png'
import avatar3 from '../assets/avatars/avatar3.png'

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

  // Role configurations matching the design
  const roles = [
    {
      title: 'Designer',
      body: [
        <>6 years experience as a product designer across <strong>trading, defence, consulting</strong> and <strong>AI/ML</strong>.</>,
        <>Scaling products from 0 to <strong>Launch</strong>.</>
      ],
      backgroundColor: 'bg-[#803748]',
      backgroundImage: designerBackground,
      backgroundImageOpacity: 0.2,
      backgroundImageEdge: 'right'
    },
    {
      title: 'Builder',
      body: [
        'BEng Computing - Imperial College.',
        '2 years as UX Engineer at Improbable.',
        'Nowadays, I ship code when needed, and build stuff for fun.'
      ],
      backgroundColor: 'bg-[#A69A7D]',
      backgroundImage: builderBackground,
      backgroundImageOpacity: 0.2,
      backgroundImageEdge: 'left'
    },
    {
      title: 'Researcher',
      body: [
        'MSc Human Computer Interaction',
        '3 research projects in AR/VR.',
        '1 published paper.'
      ],
      backgroundColor: 'bg-[#303f83]',
      backgroundImage: researcherBackground,
      backgroundImageOpacity: 0.2,
      backgroundImageEdge: 'left'
    }
  ]

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
      
      {/* Navigation Bar */}
      <nav className="absolute top-0 right-0 z-50 p-6 sm:p-8">
        <ul className="flex gap-6 sm:gap-8">
          <li>
            <a 
              href="#about" 
              className="font-job-role text-white uppercase tracking-wide text-sm sm:text-base hover:opacity-80 transition-opacity"
            >
              ABOUT
            </a>
          </li>
          <li>
            <a 
              href="#work" 
              className="font-job-role text-white uppercase tracking-wide text-sm sm:text-base hover:opacity-80 transition-opacity"
            >
              WORK
            </a>
          </li>
          <li>
            <a 
              href="#blog" 
              className="font-job-role text-white uppercase tracking-wide text-sm sm:text-base hover:opacity-80 transition-opacity"
            >
              BLOG
            </a>
          </li>
        </ul>
      </nav>

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
          <div className="flex-1 lg:w-1/2 flex justify-center relative z-20">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Avatar image - looping through 3 images with smooth crossfade */}
              <div className="w-full h-full rounded-full object-cover overflow-hidden border-4 border-white/20 shadow-2xl bg-gradient-to-br from-purple-400/30 to-blue-500/30 relative">
                {avatars.map((avatar, index) => (
                  <img 
                    key={index}
                    src={avatar} 
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
