/**
 * ExperienceCard - A reusable experience card component with background image, overlay, and centered content
 *
 * @param {string} backgroundImage - URL or path to the background image
 * @param {string} logoImage - URL or path to the company logo image
 * @param {string} logoImageAlt - Alt text for the logo image (for accessibility)
 * @param {string} jobRole - Job role text (will be displayed in uppercase)
 * @param {string} companyName - Company name (used for aria-label only, e.g. "Kedro")
 * @param {string} alt - Alt text for the background image (for accessibility)
 * @param {string} className - Additional CSS classes
 * @param {string} href - Optional link URL (makes the card clickable)
 */
function ExperienceCard({
  backgroundImage,
  logoImage,
  logoImageAlt,
  jobRole,
  companyName = '',
  alt = '',
  className = '',
  href
}) {
  const cardContent = (
    <div 
      className={`
        relative 
        w-full 
        aspect-square 
        overflow-hidden 
        group
        ${className}
      `}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        <img 
          src={backgroundImage}
          alt={alt || `${logoImageAlt} - ${jobRole}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay - darkens on hover */}
      <div 
        className="
          absolute 
          inset-0 
          bg-black/50 
          group-hover:bg-black/70 
          transition-colors 
          duration-300 
          ease-in-out
        "
        aria-hidden="true"
      />

      {/* Content - Company Logo and Job Role */}
      <div
        className="
          absolute
          inset-0
          flex
          flex-col
          items-center
          justify-center
          text-white
          z-10
          px-4
        "
      >
        {/* Company Logo Image */}
        <div className="flex items-center justify-center mb-3 sm:mb-4 w-full max-w-[300px] h-[60px]">
          <img
            src={logoImage}
            alt={logoImageAlt}
            className="block max-h-[60px] max-w-full w-auto h-auto object-contain object-center"
          />
        </div>

        {/* Job Role */}
        <p className="font-job-role text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-wide text-center">
          {jobRole}
        </p>
      </div>
    </div>
  );

  // If href is provided, wrap in a link
  if (href) {
    return (
      <a 
        href={href}
        className="block focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
        aria-label={companyName ? `${companyName} - ${jobRole}` : `${logoImageAlt} - ${jobRole}`}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <article 
      className="block focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg"
      aria-label={companyName ? `${companyName} - ${jobRole}` : `${logoImageAlt} - ${jobRole}`}
    >
      {cardContent}
    </article>
  );
}

export default ExperienceCard;
