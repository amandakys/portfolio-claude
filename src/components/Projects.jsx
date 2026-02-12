/**
 * Projects - The projects section of the portfolio
 *
 * @param {Array} projects - Array of project objects with title, description, tags, thumbnail, slug, href
 */
function Projects({ projects = [] }) {
  return (
    <section id="projects" className="relative py-12 sm:py-16 lg:py-20 2xl:py-12 z-0">
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

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.href || `/projects/${project.slug}`}
              className="group block bg-white/10 hover:bg-white/20 backdrop-blur-sm overflow-hidden transition-all duration-300"
            >
              {project.thumbnail && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="font-heading text-xl text-white mb-2 group-hover:text-[#FAE397] transition-colors">
                  {project.title}
                </h3>
                <p className="font-body text-white/70 text-sm line-clamp-2">
                  {project.description}
                </p>
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="font-body text-xs px-2 py-1 bg-white/10 text-white/60 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>

        {/* MORE PROJECTS Button */}
        <div className="text-center">
          <a
            href="/projects"
            className="inline-block font-job-role text-white tracking-wide text-sm sm:text-base px-8 sm:px-12 py-3 sm:py-4 bg-[#FC6B55] rounded-md hover:opacity-90 transition-opacity"
            aria-label="View more projects"
          >
            More Projects
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
