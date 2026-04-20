import { useState, useCallback } from 'react'
import CvModal from './CvModal'

function CvButton({ variant = 'nav', className = '' }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = useCallback((e) => {
    e.preventDefault()
    setIsOpen(true)
  }, [])

  const handleClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  if (variant === 'deck-prompt') {
    return (
      <>
        <button
          type="button"
          onClick={handleOpen}
          className={`font-square-peg text-[#FC6B55] text-[22px] sm:text-[28px] hover:opacity-80 transition-opacity cursor-pointer underline decoration-[#FC6B55]/40 underline-offset-4 ${className}`}
        >
          Prefer a deck? I've got you covered.
        </button>
        <CvModal isOpen={isOpen} onClose={handleClose} />
      </>
    )
  }

  return (
    <>
      <a
        role="button"
        onClick={handleOpen}
        className="nav-circle-link font-job-role tracking-wide text-sm sm:text-base transition-opacity relative inline-block text-white hover:opacity-100 cursor-pointer"
      >
        CV
        <svg className="nav-circle-svg" viewBox="0 0 120 50" preserveAspectRatio="none" aria-hidden="true">
          <ellipse cx="60" cy="25" rx="55" ry="20" className="nav-circle-path" />
        </svg>
      </a>
      <CvModal isOpen={isOpen} onClose={handleClose} />
    </>
  )
}

export default CvButton
