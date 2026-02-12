import PortfolioCard from './PortfolioCard'
import ExperienceCard from './ExperienceCard'
import RoleDisplay from './RoleDisplay'
import RoleDisplayRow from './RoleDisplayRow'
import kedroBackground from '../assets/backgrounds/kedro-background.png'
import mavenBackground from '../assets/backgrounds/maven-background.png'
import improbableBackground from '../assets/backgrounds/improbable-background.png'
import designerBackground from '../assets/backgrounds/designer-background.png'
import builderBackground from '../assets/backgrounds/builder-background.png'
import researcherBackground from '../assets/backgrounds/researcher-background.png'
import kedroLogo from '../assets/logos/kedro-logo.png'
import mavenLogo from '../assets/logos/maven-logo.png'
import improbableLogo from '../assets/logos/improbable-logo.png'

/**
 * Component Showcase Page
 *
 * This page displays all components in the project for visual testing.
 * To add a new component:
 * 1. Import it at the top
 * 2. Add it to the components array below
 * 3. Create example usage in the render function
 */

const placeholderImage = 'https://via.placeholder.com/800x600/1a1a2e/ffffff?text=Portfolio+Image'

function ComponentShowcase() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="font-heading text-5xl lg:text-6xl text-gray-900 mb-4">
            Component Showcase
          </h1>
          <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
            Visual testing ground for all portfolio components. Add new components to this page as they are created.
          </p>
        </header>

        {/* PortfolioCard Section */}
        <section className="mb-16" id="portfolio-card">
          <div className="mb-8">
            <h2 className="font-heading text-3xl lg:text-4xl text-gray-900 mb-2">
              PortfolioCard
            </h2>
            <p className="font-body text-gray-600">
              A reusable portfolio card component with responsive layout, image overlay support, and tags.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-body text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                Example 1: With Logo Overlay (Kedro)
              </h3>
              <PortfolioCard
                heading="Redesigning the onboarding flow to drive adoption"
                body="As part of ongoing efforts to improve adoption numbers for the Kedro framework, I scoped and delivered designs for a staggered onboarding CLI flow that allowed users to customise their starting project to fit their needs and skill"
                tags={['design', 'UX']}
                overlayLogo={
                  <img
                    src={kedroLogo.src}
                    alt="Kedro logo"
                    className="w-full h-auto object-contain"
                  />
                }
                imageContent={
                  <img
                    src={kedroBackground.src}
                    alt="Kedro framework interface"
                    className="w-full h-full object-cover"
                  />
                }
              />
            </div>

            <div>
              <h3 className="font-body text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                Example 2: With Logo Overlay (Maven)
              </h3>
              <PortfolioCard
                heading="Redesigning the onboarding flow to drive adoption"
                body="Technical UX Designer | QuantumBlack, AI by McKinsey"
                tags={['design', 'UX']}
                overlayLogo={
                  <img
                    src={mavenLogo.src}
                    alt="Maven logo"
                    className="w-full h-auto object-contain"
                  />
                }
                imageContent={
                  <img
                    src={mavenBackground.src}
                    alt="Maven trading interface"
                    className="w-full h-full object-cover"
                  />
                }
              />
            </div>

            <div>
              <h3 className="font-body text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                Example 3: Without Overlay
              </h3>
              <PortfolioCard
                heading="Example Portfolio Project"
                body="This is an example of the PortfolioCard component without an overlay. The component is fully responsive and adapts to different screen sizes."
                tags={['React', 'Tailwind', 'Design']}
                imageContent={
                  <img
                    src={placeholderImage}
                    alt="Portfolio project"
                    className="w-full h-full object-cover min-h-[300px]"
                  />
                }
              />
            </div>
          </div>
        </section>

        {/* ExperienceCard Section */}
        <section className="mb-16" id="experience-card">
          <div className="mb-8">
            <h2 className="font-heading text-3xl lg:text-4xl text-gray-900 mb-2">
              ExperienceCard
            </h2>
            <p className="font-body text-gray-600">
              A card component for displaying work experience with background image, overlay, and centered text.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="font-body text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                Example 1: Kedro
              </h3>
              <ExperienceCard
                backgroundImage={kedroBackground.src}
                logoImage={kedroLogo.src}
                logoImageAlt="Kedro"
                jobRole="Technical UX Designer"
                companyName="Kedro"
                alt="Kedro framework interface background"
              />
            </div>

            <div>
              <h3 className="font-body text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                Example 2: Maven
              </h3>
              <ExperienceCard
                backgroundImage={mavenBackground.src}
                logoImage={mavenLogo.src}
                logoImageAlt="Maven"
                jobRole="Lead Designer"
                companyName="Maven"
                alt="Maven trading interface background"
              />
            </div>

            <div>
              <h3 className="font-body text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                Example 3: Improbable
              </h3>
              <ExperienceCard
                backgroundImage={improbableBackground.src}
                logoImage={improbableLogo.src}
                logoImageAlt="Improbable"
                jobRole="UX Engineer"
                companyName="Improbable"
                alt="Improbable abstract geometric background"
                href="#experience-card"
              />
            </div>
          </div>
        </section>

        {/* RoleDisplay Section */}
        <section className="mb-16" id="roledisplay">
          <div className="mb-8">
            <h2 className="font-heading text-3xl lg:text-4xl text-gray-900 mb-2">
              RoleDisplay
            </h2>
            <p className="font-body text-gray-600">
              A rotated card showing a role title and body text, with solid background colour and optional semi-transparent background image. Text stays level while the card is rotated at -10°.
            </p>
          </div>

          <div className="flex flex-col items-center py-8">
            <h3 className="font-body text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4 self-start">
              Example: Builder (reference)
            </h3>
            <RoleDisplay
              title="Builder"
              body={[
                'BEng Computing - Imperial College.',
                '2 years as UX Engineer at Improbable.',
                'Nowadays, I ship code when needed, and build stuff for fun.'
              ]}
            />
          </div>

          <div className="flex flex-col items-center py-8">
            <h3 className="font-body text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4 self-start">
              Example: With background texture
            </h3>
            <RoleDisplay
              title="Builder"
              body={[
                'BEng Computing - Imperial College.',
                '2 years as UX Engineer at Improbable.',
                'Nowadays, I ship code when needed, and build stuff for fun.'
              ]}
              backgroundImage={kedroBackground.src}
              backgroundImageOpacity={0.15}
            />
          </div>

          <div className="py-8">
            <h3 className="font-body text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
              RoleDisplayRow: 3 in a row
            </h3>
            <RoleDisplayRow
              roles={[
                {
                  title: 'Designer',
                  body: ['Product and UX.', 'Design systems.', 'Prototypes and flows.'],
                  backgroundColor: 'bg-[#803748]',
                  backgroundImage: designerBackground.src,
                  backgroundImageOpacity: 0.15,
                  backgroundImageEdge: 'right'
                },
                {
                  title: 'Builder',
                  body: ['Ship code when needed.', 'Build stuff for fun.', 'Side projects and open source.'],
                  backgroundColor: 'bg-[#A69A7D]',
                  backgroundImage: builderBackground.src,
                  backgroundImageOpacity: 0.15,
                  backgroundImageEdge: 'left'
                },
                {
                  title: 'Researcher',
                  body: ['Insights and methods.', 'Physical tasks and AR.', 'Cross-domain systems.'],
                  backgroundColor: 'bg-[#303f83]',
                  backgroundImage: researcherBackground.src,
                  backgroundImageOpacity: 0.15,
                  backgroundImageEdge: 'left'
                }
              ]}
            />
          </div>
        </section>
      </div>
    </div>
  )
}

export default ComponentShowcase
