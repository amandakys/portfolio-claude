import ExperienceCard from './ExperienceCard'
import kedroBackground from '../assets/backgrounds/kedro-background.png'
import mavenBackground from '../assets/backgrounds/maven-background.png'
import improbableBackground from '../assets/backgrounds/improbable-background.png'
import kedroLogo from '../assets/logos/kedro-logo.png'
import mavenLogo from '../assets/logos/maven-logo.png'
import improbableLogo from '../assets/logos/improbable-logo.png'
import quantumblackLogo from '../assets/logos/quantumblack-logo.png'
import quantcoLogo from '../assets/logos/quantco-logo.png'

/**
 * Work - The work section of the portfolio
 * 
 * Features:
 * - Middle section: Work title, company logos, and current work indicator
 * - Bottom section: Three work experience cards
 */
function Work() {
  return (
    <section id="work" className="relative overflow-hidden py-12 sm:py-16 lg:py-20 2xl:py-12 z-10">
      {/* Container */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Middle Section: Work Title, Company Logos, and Current Work Indicator */}
        <div className="mb-16 sm:mb-20 lg:mb-24 2xl:mb-16">
          {/* Work Title */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-ebrula text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-[#FC6B55] leading-tight">
              Work
            </h2>
          </div>

          {/* Company Logos with Current Work Indicator */}
          <div className="relative">
            {/* Company Logos */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-16">
              {/* IMPROBABLE Logo */}
              <div className="flex items-center justify-center">
                <img
                  src={improbableLogo.src}
                  alt="IMPROBABLE" 
                  className="h-12 sm:h-16 lg:h-20 w-auto object-contain"
                />
              </div>

              {/* Maven Logo */}
              <div className="flex items-center justify-center">
                <img
                  src={mavenLogo.src}
                  alt="Maven" 
                  className="h-12 sm:h-16 lg:h-20 w-auto object-contain"
                />
              </div>

              {/* QuantumBlack AI by McKinsey Logo */}
              <div className="flex items-center justify-center">
                <img
                  src={quantumblackLogo.src}
                  alt="QuantumBlack AI by McKinsey" 
                  className="h-12 sm:h-16 lg:h-20 w-auto object-contain"
                />
              </div>

              {/* quantco Logo - Current Work (arrow points here) */}
              <div className="flex items-center justify-center relative">
                {/* Current Work Indicator - absolutely positioned above quantco logo */}
                <div className="absolute -top-8 sm:-top-10 md:-top-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  <div className="inline-flex items-center">
                    <p className="font-square-peg text-[#FC6B55] text-[40px]">
                      i work here now
                    </p>
                    {/* Curved arrow pointing right then down */}
                    <svg 
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#FC6B55] ml-2" 
                      viewBox="0 0 40 40" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      {/* Curved path: starts going right, then curves down smoothly */}
                      <path d="M2 20 Q20 20 20 35" />
                      {/* Arrowhead pointing down */}
                      <path d="M18 33 L20 36 L22 33" />
                    </svg>
                  </div>
                </div>
                <img
                  src={quantcoLogo.src}
                  alt="quantco" 
                  className="h-12 sm:h-16 lg:h-20 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Work Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* QuantumBlack - Technical UX Designer */}
          <ExperienceCard
            backgroundImage={kedroBackground.src}
            logoImage={quantumblackLogo.src}
            logoImageAlt="QuantumBlack"
            jobRole="Technical UX Designer"
            companyName="QuantumBlack"
            description="Designing developer experience for Kedro, an open-source data pipeline framework"
            alt="Kedro framework interface background"
            href="/work/quantumblack"
          />

          {/* Maven - Lead Designer */}
          <ExperienceCard
            backgroundImage={mavenBackground.src}
            logoImage={mavenLogo.src}
            logoImageAlt="Maven"
            jobRole="Lead Designer"
            companyName="Maven"
            description="Designing an internal trading platform for a proprietary trading firm"
            alt="Maven trading interface background"
            href="/work/maven"
          />

          {/* Improbable - UX Engineer */}
          <ExperienceCard
            backgroundImage={improbableBackground.src}
            logoImage={improbableLogo.src}
            logoImageAlt="Improbable"
            jobRole="UX Engineer"
            companyName="Improbable"
            description="Building developer tools and SPAs for game development platform"
            alt="Improbable abstract geometric background"
            href="/work/improbable"
          />
        </div>
      </div>
    </section>
  )
}

export default Work
