/**
 * ExperienceCard - A reusable experience card component matching project card style
 *
 * @param {string} backgroundImage - URL or path to the background image
 * @param {string} logoImage - URL or path to the company logo image
 * @param {string} logoImageAlt - Alt text for the logo image (for accessibility)
 * @param {string} jobRole - Job role text
 * @param {string} companyName - Company name
 * @param {string} description - Brief description of the role
 * @param {string} alt - Alt text for the background image (for accessibility)
 * @param {string} className - Additional CSS classes
 * @param {string} href - Optional link URL (makes the card clickable)
 * @param {Array} tags - Optional array of skill/technology tags
 */
function ExperienceCard({
  backgroundImage,
  logoImage,
  logoImageAlt,
  jobRole,
  companyName = '',
  description = '',
  alt = '',
  className = '',
  href,
  tags = []
}) {
  const CardWrapper = href ? 'a' : 'div';
  const wrapperProps = href ? { href } : {};

  return (
    <CardWrapper
      {...wrapperProps}
      className={`group block bg-white/10 hover:bg-white/20 backdrop-blur-sm overflow-hidden transition-all duration-300 ${className}`}
    >
      {/* Image area with background + logo overlay */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={backgroundImage}
          alt={alt || `${companyName} background`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Dark overlay for better logo visibility */}
        <div
          className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"
          aria-hidden="true"
        />
        {/* Centered logo */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <img
            src={logoImage}
            alt={logoImageAlt}
            className="max-h-[50px] max-w-[70%] w-auto h-auto object-contain"
          />
        </div>
      </div>

      {/* Content section */}
      <div className="p-6">
        <h3 className="font-heading text-xl text-white mb-2 group-hover:text-[#FAE397] transition-colors">
          {jobRole}
        </h3>
        {description && (
          <p className="font-body text-white/70 text-sm line-clamp-2">
            {description}
          </p>
        )}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag, tagIndex) => (
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
    </CardWrapper>
  );
}

export default ExperienceCard;
