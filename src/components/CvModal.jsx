import { useEffect, useCallback, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

const TABS = {
  cv: {
    label: 'CV',
    path: '/cv/CV-AmandaKOH.pdf',
    downloadLabel: 'Download CV',
  },
  portfolio: {
    label: 'Portfolio',
    path: '/cv/Portfolio-AmandaKOH.pdf',
    downloadLabel: 'Download Portfolio',
  },
}

const embedParams = '#pagemode=none&navpanes=0&view=FitH'

function CvModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('cv')

  // Close on escape
  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  // Lock body scroll when open — position:fixed prevents scroll chaining from iframe
  const scrollYRef = useRef(0)

  useEffect(() => {
    if (isOpen) {
      scrollYRef.current = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollYRef.current}px`
      document.body.style.left = '0'
      document.body.style.right = '0'
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.left = ''
        document.body.style.right = ''
        document.body.style.overflow = ''
        window.scrollTo(0, scrollYRef.current)
      }
    }
  }, [isOpen])

  const handleClose = useCallback(() => {
    onClose()
  }, [onClose])

  if (!isOpen || typeof document === 'undefined') return null

  const current = TABS[activeTab]

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
      onClick={handleClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative z-10 w-[90vw] h-[85vh] max-w-5xl bg-[#19224D] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with tabs, download and close */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-white/10 shrink-0 gap-4">
          <div role="tablist" className="flex items-center gap-1">
            {Object.entries(TABS).map(([key, tab]) => {
              const isActive = activeTab === key
              return (
                <button
                  key={key}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(key)}
                  className={`px-4 py-2 font-job-role tracking-wide text-sm transition-colors ${
                    isActive
                      ? 'bg-white/10 text-white'
                      : 'text-white/50 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>
          <div className="flex items-center gap-3">
            <a
              href={current.path}
              download
              className="flex items-center gap-2 px-4 py-2 bg-[#FC6B55] text-white font-job-role tracking-wide text-sm hover:bg-[#e55a45] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {current.downloadLabel}
            </a>
            <button
              onClick={handleClose}
              className="text-white/60 hover:text-white transition-colors"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* PDF viewer */}
        <div className="flex-1 min-h-0">
          <iframe
            key={activeTab}
            src={current.path + embedParams}
            className="w-full h-full border-0"
            title={`Amanda Koh ${current.label}`}
          />
        </div>
      </div>
    </div>,
    document.body
  )
}

export default CvModal
