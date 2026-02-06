import Hero from '../components/Hero'
import Work from '../components/Work'
import Projects from '../components/Projects'
import About from '../components/About'

/**
 * Home - The main landing page of the portfolio
 */
function Home() {
  return (
    <div className="min-h-screen bg-[#19224D]">
      <Hero />
      <Work />
      <Projects />
      <About />
      {/* Add more sections here as needed */}
    </div>
  )
}

export default Home
