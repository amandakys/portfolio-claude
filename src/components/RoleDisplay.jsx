/**
 * RoleDisplay - A rotated card showing a role title and body text with optional background image
 *
 * @param {string} title - Main title (e.g. "Builder")
 * @param {string | string[] | React.ReactNode | React.ReactNode[]} body - Body text: single string (newlines preserved), array of lines, or JSX elements
 * @param {string} backgroundColor - Solid background colour (Tailwind class or arbitrary value, e.g. "bg-[#D4A574]")
 * @param {string} backgroundImage - Optional image URL/path for texture overlay
 * @param {number} backgroundImageOpacity - Opacity of background image (e.g. 0.2)
 * @param {string} backgroundImagePosition - CSS background-position (e.g. 'center', 'top right')
 * @param {'left'|'right'} backgroundImageEdge - Align background image layer to left-0 or right-0
 * @param {boolean} fullWidth - If true, card fills container (no max-width); use in rows to avoid gaps
 * @param {string} contentClassName - Optional extra classes on the content wrapper (e.g. extra left padding)
 * @param {string} className - Additional CSS classes on the outer rotated wrapper
 */
function RoleDisplay({
  title,
  body,
  backgroundColor = 'bg-[#D4A574]',
  backgroundImage,
  backgroundImageOpacity = 0.2,
  backgroundImagePosition = 'top center',
  backgroundImageEdge = 'left',
  fullWidth = false,
  contentClassName = '',
  className = ''
}) {
  // Handle body: can be string, array of strings, or React elements
  const bodyLines = Array.isArray(body)
    ? body
    : body != null
      ? (typeof body === 'string' ? body.split('\n').filter(Boolean) : [body])
      : [];

  return (
    <article
      className={`
        relative
        w-full
        ${fullWidth ? '' : 'max-w-2xl'}
        h-[400px]
        rotate-[10deg]
        origin-top
        overflow-hidden
        transition-transform duration-200 ease-out
        hover:translate-x-[2px]
        hover:-translate-y-3
        ${className}
      `}
      aria-label={title ? `Role: ${title}` : 'Role display'}
    >
      {/* Layer 1 – Solid background colour */}
      <div
        className={`absolute inset-0 ${backgroundColor}`}
        aria-hidden="true"
      />

      {/* Layer 2 – Optional background image; layer fills card so image scales with rectangle */}
      {backgroundImage && (
        <div
          className={`absolute inset-0 bg-no-repeat ${backgroundImageEdge === 'right' ? 'right-0' : 'left-0'}`}
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: backgroundImagePosition,
            opacity: backgroundImageOpacity,
            mixBlendMode: 'overlay'
          }}
          aria-hidden="true"
        />
      )}

      {/* Content – counter-rotated so text stays level */}
      <div className={`relative z-10 flex flex-col justify-center items-start text-left pt-6 pr-6 pb-6 pl-10 sm:pt-8 sm:pr-8 sm:pb-8 sm:pl-12 -rotate-[10deg] ${contentClassName}`}>
        {title && (
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 text-left">
            {title}
          </h2>
        )}
        {bodyLines.length > 0 && (
          <div className="text-base sm:text-lg text-white leading-relaxed space-y-1 text-left" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {bodyLines.map((line, index) => (
              <p key={index} className="block text-left">
                {typeof line === 'string' ? line : line}
              </p>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default RoleDisplay;
