/**
 * PortfolioCard - A reusable portfolio card component with responsive layout
 * 
 * @param {string} heading - Main heading text
 * @param {string} body - Body/description text
 * @param {Array<string>} tags - Array of tag labels
 * @param {ReactNode} imageContent - Image or visual content to display
 * @param {ReactNode} overlayLogo - Optional company logo to overlay on the image
 * @param {string} className - Additional CSS classes
 */
function PortfolioCard({ 
  heading, 
  body, 
  tags = [], 
  imageContent, 
  overlayLogo,
  className = '' 
}) {
  // Determine tag color: orange for "product", dark blue for others
  const getTagColor = (tag) => {
    return tag.toLowerCase() === 'product' 
      ? 'bg-[#FC6B55]' 
      : 'bg-[#19224D]'
  }

  return (
    <article 
      className={`bg-white/50 hover:bg-white/60 backdrop-blur-sm overflow-hidden rounded-lg transition-colors duration-300 ease-in-out ${className}`}
      aria-label={`Portfolio item: ${heading}`}
    >
      <div className="flex flex-col lg:flex-row">
        {/* Image/Visual Content Section */}
        <div className="relative w-full lg:w-1/4 flex-shrink-0 aspect-video lg:aspect-square">
          {imageContent}
          {overlayLogo && (
            <div 
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              aria-hidden="true"
            >
              <div className="w-1/2 lg:w-2/5 max-w-[200px] lg:max-w-[280px] opacity-90">
                {overlayLogo}
              </div>
            </div>
          )}
        </div>

        {/* Text Content Section */}
        <div className="w-full lg:w-3/4 p-6 lg:p-8 lg:pl-12 flex flex-col justify-center text-left">
          <h2 className="font-heading text-xl lg:text-[30px] text-[#19224D] mb-4 lg:mb-6 text-left">
            {heading}
          </h2>
          
          <p className="font-body text-base lg:text-[20px] text-gray-800 leading-relaxed mb-6 lg:mb-8 text-left">
            {body}
          </p>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2" role="list" aria-label="Project tags">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  role="listitem"
                  className={`font-body text-sm lg:text-base px-3 py-1.5 ${getTagColor(tag)} text-white rounded-md`}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

export default PortfolioCard
