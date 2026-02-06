import PortfolioCard from './PortfolioCard'

// Example usage of the PortfolioCard component
function PortfolioCardExample() {
  return (
    <div className="p-8 space-y-8">
      {/* Example 1: Kedro project with logo overlay */}
      <PortfolioCard
        heading="Redesigning the onboarding flow to drive adoption"
        body="As part of ongoing efforts to improve adoption numbers for the Kedro framework, I scoped and delivered designs for a staggered onboarding CLI flow that allowed users to customise their starting project to fit their needs and skill"
        tags={['design', 'UX']}
        overlayLogo={
          <img 
            src="/path-to-kedro-logo.png" 
            alt="Kedro logo" 
            className="w-full h-auto object-contain"
          />
        }
        imageContent={
          <img 
            src="/path-to-kedro-image.png" 
            alt="Kedro framework interface"
            className="w-full h-full object-cover"
          />
        }
      />

      {/* Example 2: Maven project with logo overlay */}
      <PortfolioCard
        heading="Redesigning the onboarding flow to drive adoption"
        body="Technical UX Designer | QuantumBlack, AI by McKinsey"
        tags={['design', 'UX']}
        overlayLogo={
          <img 
            src="/path-to-maven-logo.png" 
            alt="Maven logo" 
            className="w-full h-auto object-contain"
          />
        }
        imageContent={
          <img 
            src="/path-to-maven-image.png" 
            alt="Maven trading interface"
            className="w-full h-full object-cover"
          />
        }
      />
    </div>
  )
}

export default PortfolioCardExample
