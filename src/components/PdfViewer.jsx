import { useState, useEffect } from 'react'

const PDF_PASSWORD = 'Pl3aseL3tMe1n'
const PDF_UNLOCK_KEY = 'pdf-unlocked'

const TABS = {
  cv: {
    label: 'CV',
    path: '/cv/CV-AmandaKOH-8f3c2e.pdf',
    downloadLabel: 'Download CV',
    protected: true,
  },
  portfolio: {
    label: 'Portfolio',
    path: '/cv/Portfolio-AmandaKOH.pdf',
    downloadLabel: 'Download Portfolio',
    protected: true,
  },
}

const embedParams = '#pagemode=none&navpanes=0&view=FitH'

function PdfViewer({ initialTab = 'cv' }) {
  const [activeTab, setActiveTab] = useState(initialTab)
  const [unlocked, setUnlocked] = useState(false)
  const [passwordInput, setPasswordInput] = useState('')
  const [error, setError] = useState(false)
  const [isIOS, setIsIOS] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem(PDF_UNLOCK_KEY) === '1') {
      setUnlocked(true)
    }
    if (typeof navigator !== 'undefined') {
      const ua = navigator.userAgent
      const iOSDevice = /iPad|iPhone|iPod/.test(ua) ||
        (ua.includes('Mac') && navigator.maxTouchPoints > 1)
      setIsIOS(iOSDevice)
    }
  }, [])

  const handleUnlock = (e) => {
    e.preventDefault()
    if (passwordInput === PDF_PASSWORD) {
      setUnlocked(true)
      setError(false)
      sessionStorage.setItem(PDF_UNLOCK_KEY, '1')
    } else {
      setError(true)
    }
  }

  const current = TABS[activeTab]
  const isLocked = current.protected && !unlocked

  return (
    <div
      onMouseEnter={() => window.dispatchEvent(new CustomEvent('dotbg:suppress'))}
      onMouseLeave={() => window.dispatchEvent(new CustomEvent('dotbg:release'))}
      className="w-full h-[calc(100vh-6rem)] sm:h-[calc(100vh-7rem)] max-w-6xl mx-auto bg-[#19224D] flex flex-col overflow-hidden border border-white/10">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-white/10 shrink-0 gap-4">
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
        {!isLocked && (
          <a
            href={current.path}
            download
            className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#FC6B55] text-white font-job-role tracking-wide text-xs sm:text-sm hover:bg-[#e55a45] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="hidden sm:inline">{current.downloadLabel}</span>
            <span className="sm:hidden">Download</span>
          </a>
        )}
      </div>

      <div className="flex-1 min-h-0 bg-white">
        {isLocked ? (
          <div className="relative w-full h-full flex items-center justify-center bg-[#19224D] overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              {[
                { top: '5%', rotate: 15, duration: 60, reverse: false },
                { top: '25%', rotate: -12, duration: 55, reverse: true },
                { top: '32%', rotate: 25, duration: 65, reverse: false },
                { top: '65%', rotate: 18, duration: 50, reverse: true },
                { top: '78%', rotate: -22, duration: 58, reverse: false },
              ].map((tape, i) => (
                <div
                  key={i}
                  className="pdf-tape"
                  style={{ top: tape.top, transform: `rotate(${tape.rotate}deg)` }}
                >
                  <div
                    className="pdf-tape-text"
                    style={{
                      animationDuration: `${tape.duration}s`,
                      animationDirection: tape.reverse ? 'reverse' : 'normal',
                    }}
                  >
                    {[0, 1].map((g) => (
                      <div key={g} className="pdf-tape-group">
                        {Array.from({ length: 20 }).map((_, j) => (
                          <span key={j}>PASSWORD PROTECTED</span>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="relative z-10 w-full max-w-md mx-4 px-6 sm:px-8 py-8 sm:py-10 bg-[#19224D]/40 backdrop-blur-sm rounded-lg">
              <div className="text-center mb-6">
                <h2 className="font-ebrula text-3xl sm:text-4xl text-[#FC6B55] mb-3">
                  Protected Content
                </h2>
                <p className="font-body text-white/70 text-sm sm:text-base">
                  This content is password protected. Please enter the password to view.
                </p>
              </div>

              <form onSubmit={handleUnlock} className="space-y-3">
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => {
                    setPasswordInput(e.target.value)
                    setError(false)
                  }}
                  autoFocus
                  placeholder="Enter password"
                  autoComplete="current-password"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 font-body focus:outline-none focus:border-[#FC6B55] focus:ring-1 focus:ring-[#FC6B55]"
                />
                {error && (
                  <p className="text-[#FC6B55] text-sm font-body">
                    Incorrect password. Please try again.
                  </p>
                )}
                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-[#FC6B55] text-white font-job-role tracking-wide rounded-lg hover:bg-[#e55a45] transition-colors"
                >
                  Unlock
                </button>
              </form>
            </div>

            <style>{`
              .pdf-tape {
                position: absolute;
                left: -20%;
                width: 140%;
                height: 28px;
                background-color: #FAE397;
                overflow: hidden;
                opacity: 0.9;
              }
              .pdf-tape-text {
                display: flex;
                white-space: nowrap;
                width: max-content;
                animation: pdf-scroll-tape linear infinite;
              }
              .pdf-tape-group {
                display: flex;
                flex-shrink: 0;
              }
              .pdf-tape-text span {
                font-family: 'Staatliches', sans-serif;
                font-size: 12px;
                letter-spacing: 0.15em;
                color: #19224D;
                padding: 6px 20px;
                text-transform: uppercase;
                flex-shrink: 0;
              }
              @keyframes pdf-scroll-tape {
                from { transform: translateX(0); }
                to { transform: translateX(-50%); }
              }
            `}</style>
          </div>
        ) : isIOS ? (
          <div className="w-full h-full flex items-center justify-center bg-[#19224D] px-6 text-center">
            <div className="flex flex-col items-center gap-4 max-w-sm">
              <svg className="w-12 h-12 text-[#FC6B55]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="font-body text-white/80 text-sm sm:text-base">
                PDFs render best in the native viewer on iOS.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <a
                  href={current.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-5 py-3 bg-[#FC6B55] text-white font-job-role tracking-wide text-sm hover:bg-[#e55a45] transition-colors"
                >
                  Open {current.label}
                </a>
                <a
                  href={current.path}
                  download
                  className="flex-1 px-5 py-3 bg-white/10 border border-white/20 text-white font-job-role tracking-wide text-sm hover:bg-white/20 transition-colors"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        ) : (
          <iframe
            key={activeTab}
            src={current.path + embedParams}
            className="w-full h-full border-0"
            title={`Amanda Koh ${current.label}`}
          />
        )}
      </div>
    </div>
  )
}

export default PdfViewer
