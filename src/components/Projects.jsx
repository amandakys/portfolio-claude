import PortfolioCard from './PortfolioCard'
import kedroBackground from '../assets/backgrounds/kedro-background.png'
import mavenBackground from '../assets/backgrounds/maven-background.png'
import kedroLogo from '../assets/logos/kedro-logo.png'
import mavenLogo from '../assets/logos/maven-logo.png'

/**
 * Projects - The projects section of the portfolio
 * 
 * Features:
 * - Large "Projects" title
 * - Three project cards displayed vertically
 * - "MORE PROJECTS" button
 * - Dark background with purple/blue angled shapes
 */
function Projects() {
  const projects = [
    {
      heading: "Redesigning the onboarding flow to drive adoption",
      body: "As part of ongoing efforts to improve adoption numbers for the Kedro framework, I scoped and delivered designs for a staggered onboarding CLI flow that allowed users to customise their starting project to fit their needs and skill",
      tags: ['design', 'UX'],
      image: kedroBackground,
      logo: kedroLogo,
      logoAlt: "Kedro logo"
    },
    {
      heading: "Designing Augmented Reality Interfaces for Surgeons",
      body: "As part of ongoing efforts to improve adoption numbers for the Kedro framework, I scoped and delivered designs for a staggered onboarding CLI flow that allowed users to customise their starting project to fit their needs and skill",
      tags: ['research', 'UX'],
      image: kedroBackground, // Placeholder - replace with actual AR project image
      logo: null,
      logoAlt: null
    },
    {
      heading: "Designing an internal trading platform",
      body: "As part of ongoing efforts to improve adoption numbers for the Kedro framework, I scoped and delivered designs for a staggered onboarding CLI flow that allowed users to customise their starting project to fit their needs and skill",
      tags: ['design', 'UX', 'product'],
      image: mavenBackground,
      logo: mavenLogo,
      logoAlt: "Maven logo"
    }
  ]

  return (
    <section id="projects" className="relative min-h-screen py-12 sm:py-16 lg:py-20 2xl:py-12 z-0">
      {/* Rotated linear gradient background matching Figma specification */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'linear-gradient(180deg, rgba(25, 34, 77, 0.3) 0%, rgba(240, 83, 78, 0.3) 30%, rgba(240, 83, 78, 0.3) 70%, rgba(25, 34, 77, 0.3) 100%)',
          transform: 'rotate(-10deg)',
          width: '130%',
          height: '110%',
          left: '-10%',
          top: '-10%'
        }}
        aria-hidden="true"
      />

      {/* Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Projects Title */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 2xl:mb-12">
          <h2 className="font-ebrula text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-[#FC6B55] leading-tight">
            Projects
          </h2>
        </div>

        {/* Project Cards */}
        <div className="space-y-6 sm:space-y-8 mb-12 sm:mb-16">
          {projects.map((project, index) => (
            <PortfolioCard
              key={index}
              heading={project.heading}
              body={project.body}
              tags={project.tags}
              imageContent={
                <img 
                  src={project.image}
                  alt={project.heading}
                  className="w-full h-full object-cover"
                />
              }
              overlayLogo={project.logo ? (
                <img 
                  src={project.logo}
                  alt={project.logoAlt}
                  className="w-full h-auto object-contain"
                />
              ) : null}
            />
          ))}
        </div>

        {/* MORE PROJECTS Button */}
        <div className="text-center">
          <button 
            className="font-job-role text-white uppercase tracking-wide text-sm sm:text-base px-8 sm:px-12 py-3 sm:py-4 bg-[#FC6B55] rounded-md hover:opacity-90 transition-opacity"
            aria-label="View more projects"
          >
            MORE PROJECTS
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects
