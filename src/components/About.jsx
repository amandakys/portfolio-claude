import linkedinLogo from '../assets/linkedin-logo.png'

/**
 * About - The about section of the portfolio
 * 
 * Features:
 * - "About" section with dark blue background
 * - Two paragraphs of text with link to About page
 * - "Say hi." section with light yellow background
 * - LinkedIn icon link
 */
function About() {
  return (
    <>
      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20">
        {/* Container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex justify-end">
            {/* About Content - Right 60% */}
            <div className="w-full lg:w-[60%]">
              {/* About Title */}
              <div className="mb-8 sm:mb-12 text-center">
                <h2 className="font-ebrula text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-[#FC6B55] leading-tight">
                  About
                </h2>
              </div>

              {/* About Content */}
              <div className="space-y-6 sm:space-y-8">
                <p className="font-body text-white text-base sm:text-lg lg:text-xl leading-relaxed text-left">
                  By day, I solve design problems in technical domains. By night, I channel unused creative energy into weird art projects. And the drums. And pottery. And whatever the latest obsession is. I'm indecisive like that.
                </p>
                <p className="font-body text-white text-base sm:text-lg lg:text-xl leading-relaxed text-left">
                  For a professional bio, visit the <a href="#about" className="text-[#FC6B55] hover:opacity-80 transition-opacity underline">About</a> page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Say hi. Section */}
      <section className="relative bg-[#F0534E]/30  pt-0 pb-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 lg:gap-8">
            {/* Say hi. Title */}
            <div className="flex-shrink-0">
              <h2 className="font-ebrula text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-white leading-tight">
                Say hi.
              </h2>
            </div>

            {/* Text Content */}
            <div className="flex-1 flex flex-col sm:flex-row items-start sm:items-end gap-4 sm:gap-6 lg:gap-8 pb-4">
              <div className="flex-1 space-y-2">
                <p className="font-body text-white text-base sm:text-lg lg:text-xl leading-relaxed">
                  especially for AR/VR projects
                </p>
                <p className="font-body text-white text-base sm:text-lg lg:text-xl leading-relaxed">
                  but also, end-to-end design for technical products
                </p>
              </div>

              {/* LinkedIn Icon */}
              <div className="flex-shrink-0">
                <a 
                  href="https://www.linkedin.com/in/amanda-koh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-80 transition-opacity"
                  aria-label="Visit Amanda's LinkedIn profile"
                >
                  <img 
                    src={linkedinLogo} 
                    alt="LinkedIn" 
                    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
