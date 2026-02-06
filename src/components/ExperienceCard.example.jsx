import ExperienceCard from './ExperienceCard'
import kedroLogo from '../assets/logos/kedro-logo.png'
import mavenLogo from '../assets/logos/maven-logo.png'
import improbableLogo from '../assets/logos/improbable-logo.png'
import kedroBackground from '../assets/backgrounds/kedro-background.png'
import mavenBackground from '../assets/backgrounds/maven-background.png'
import improbableBackground from '../assets/backgrounds/improbable-background.png'

// Example usage of the ExperienceCard component
function ExperienceCardExample() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Grid layout for responsive display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {/* Kedro */}
        <ExperienceCard
          backgroundImage={kedroBackground}
          logoImage={kedroLogo}
          logoImageAlt="Kedro"
          jobRole="Technical UX Designer"
          companyName="Kedro"
          alt="Kedro framework interface background"
        />

        {/* Maven */}
        <ExperienceCard
          backgroundImage={mavenBackground}
          logoImage={mavenLogo}
          logoImageAlt="Maven"
          jobRole="Lead Designer"
          companyName="Maven"
          alt="Maven trading interface background"
        />

        {/* Improbable */}
        <ExperienceCard
          backgroundImage={improbableBackground}
          logoImage={improbableLogo}
          logoImageAlt="Improbable"
          jobRole="UX Engineer"
          companyName="Improbable"
          alt="Improbable abstract geometric background"
        />
      </div>
    </div>
  )
}

export default ExperienceCardExample
