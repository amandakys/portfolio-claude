import { useEffect, useRef, useState } from 'react';

const milestones = [
  {
    title: 'BEng Computing',
    description: 'Imperial College London',
    side: 'right',
    annotation: "an intense degree, but I quickly realised software engineering might not be for me. I used side projects as a creative outlet, exploring product and graphic design"
  },
  {
    title: 'UX Engineer',
    description: 'Improbable Worlds Ltd',
    side: 'left',
    annotation: "my first job! I joined as a front-end developer, but gradually took on more design responsibilities. Here I confirmed my interest in product design."
  },
  {
    title: 'First Designer',
    description: 'Maven Securities Ltd',
    side: 'right',
    annotation: "my first design role! they liked my technical background and trusted me to design an internal trading platform from scratch."
  },
  {
    title: 'MSc Human Computer Interaction',
    description: 'UCL',
    side: 'left',
    annotation: "I went back to school to formalise my design knowledge and explore research. Obsessed with AR/VR, I wanted to explore its possibilities."
  },
  {
    title: 'Technical UX Designer',
    description: 'QuantumBlack, AI by McKinsey',
    side: 'right',
    annotation: "I joined enticed by the prospect of working with other designers, and applying design methods to software development. But, I learned that building and the visual aspect of design was really important to me."
  },
  {
    title: 'Researcher in AR/VR',
    description: 'Sorbonne Université',
    side: 'left',
    annotation: "a research stint exploring spatial interfaces with the HoloLens 2. I designed context-adaptive interfaces suitable for handsfree use. Observing surgeries to understand interaction constraints was a highlight."
  },
  {
    title: 'First Designer',
    description: 'QuantCo',
    side: 'right',
    annotation: "back to building design from the ground up, this time at an AI company. Excited to dive into product strategy for AI-integrated products!"
  }
];

function Timeline() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeMilestone, setActiveMilestone] = useState(-1);
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 0 });
  const containerRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;

      // Calculate how much of the element has been scrolled through
      const scrolled = windowHeight - rect.top;
      const totalScrollable = windowHeight + elementHeight;
      const progress = Math.min(Math.max(scrolled / totalScrollable, 0), 1);

      setScrollProgress(progress);

      // Find which milestone is closest to the center of the viewport
      const viewportCenter = windowHeight / 2;
      let closestIndex = -1;
      let closestDistance = Infinity;

      milestones.forEach((_, index) => {
        const milestonePercent = 5 + (index / (milestones.length - 1)) * 80;
        const milestoneY = rect.top + (milestonePercent / 100) * elementHeight;
        const distance = Math.abs(milestoneY - viewportCenter);

        if (distance < closestDistance && distance < windowHeight * 0.3) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveMilestone(closestIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update glow position along the path
  useEffect(() => {
    if (pathRef.current && scrollProgress > 0) {
      const pathLength = pathRef.current.getTotalLength();
      const point = pathRef.current.getPointAtLength(pathLength * scrollProgress);
      setGlowPosition({ x: point.x, y: point.y });
    }
  }, [scrollProgress]);


  // Generate a smooth curly hand-drawn path
  const generateCurlyPath = () => {
    const points = [];
    const segments = 40; // More segments for smoother curve
    const height = 110;
    const amplitude = 12;

    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const y = t * height;
      // Smoother sine wave with lower frequency
      const wobble = Math.sin(t * Math.PI * 3) * amplitude;
      const x = 50 + wobble;
      points.push({ x, y });
    }

    // Use Catmull-Rom to Bezier conversion for smoother curves
    let path = `M ${points[0].x} ${points[0].y}`;

    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[Math.max(0, i - 1)];
      const p1 = points[i];
      const p2 = points[Math.min(points.length - 1, i + 1)];
      const p3 = points[Math.min(points.length - 1, i + 2)];

      // Catmull-Rom to Bezier control points
      const cp1x = p1.x + (p2.x - p0.x) / 6;
      const cp1y = p1.y + (p2.y - p0.y) / 6;
      const cp2x = p2.x - (p3.x - p1.x) / 6;
      const cp2y = p2.y - (p3.y - p1.y) / 6;

      path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
    }

    return path;
  };

  const getMilestonePosition = (index) => {
    const totalMilestones = milestones.length;
    const startPercent = 5;
    const endPercent = 85;
    const range = endPercent - startPercent;
    return startPercent + (index / (totalMilestones - 1)) * range;
  };

  const getXPositionAtPercent = (percent) => {
    const normalizedPercent = percent / 100;
    const segments = 14;
    const amplitude = 15;
    const i = normalizedPercent * segments;
    const wobble = Math.sin(i * 1.2) * amplitude + Math.sin(i * 0.5) * (amplitude * 0.5);
    return 50 + wobble;
  };

  return (
    <div ref={containerRef} className="relative pt-8 md:pt-20 pb-20 md:pb-40 md:min-h-[200vh] overflow-visible">
      {/* SVG Timeline - left on mobile, center on desktop */}
      <svg
        className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-8 md:w-40"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ height: '110%', top: '0', overflow: 'visible' }}
      >
        {/* Gradient definitions */}
        <defs>
          {/* Base faded line gradient */}
          <linearGradient id="lineGradientBase" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FC6B55" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FC6B55" stopOpacity="0.4" />
          </linearGradient>

          {/* Bright wider section gradient - only visible at scroll position */}
          <linearGradient id="lineGradientBright" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FC6B55" stopOpacity="0" />
            <stop offset={`${Math.max(0, scrollProgress * 100 - 8)}%`} stopColor="#FC6B55" stopOpacity="0" />
            <stop offset={`${Math.max(0, scrollProgress * 100 - 2)}%`} stopColor="#FC6B55" stopOpacity="1" />
            <stop offset={`${scrollProgress * 100}%`} stopColor="#FC6B55" stopOpacity="1" />
            <stop offset={`${Math.min(100, scrollProgress * 100 + 2)}%`} stopColor="#FC6B55" stopOpacity="1" />
            <stop offset={`${Math.min(100, scrollProgress * 100 + 8)}%`} stopColor="#FC6B55" stopOpacity="0" />
            <stop offset="100%" stopColor="#FC6B55" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Base faded line */}
        <path
          d={generateCurlyPath()}
          fill="none"
          stroke="url(#lineGradientBase)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />

        {/* Wider bright section that appears at scroll position */}
        <path
          ref={pathRef}
          d={generateCurlyPath()}
          fill="none"
          stroke="url(#lineGradientBright)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Milestones - Mobile: to the right of line, Desktop: alternating */}
      <div className="md:hidden flex flex-col gap-8 pl-12 pr-4">
        {milestones.map((milestone, index) => {
          return (
            <div
              key={index}
              className="transition-all duration-700 opacity-100"
            >
              <div className="group/tag relative">
                <div className="bg-white/10 backdrop-blur-sm px-5 py-3 cursor-pointer transition-all duration-300 group-hover/tag:bg-white/20 relative z-10">
                  <h3 className="font-heading text-white text-base leading-tight">
                    {milestone.title}
                  </h3>
                  <p className="font-body text-[#FAE397] text-sm mt-1">
                    {milestone.description}
                  </p>
                </div>

                {milestone.annotation && (
                  <div className="mt-2 transition-opacity duration-500 opacity-100">
                    <p className="font-square-peg text-[#FAE397] text-2xl leading-snug">
                      {milestone.annotation}
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Desktop Milestones */}
      {milestones.map((milestone, index) => {
        const topPercent = getMilestonePosition(index);
        const isVisible = scrollProgress > (topPercent / 100) * 0.8;
        // Alternate rotation for pinned effect
        const rotation = milestone.side === 'left' ? 2 - (index % 3) : -2 + (index % 3);

        return (
          <div
            key={index}
            className={`absolute transition-all duration-700 hidden md:block ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{
              top: `${topPercent}%`,
              left: milestone.side === 'left' ? '10%' : 'auto',
              right: milestone.side === 'right' ? '10%' : 'auto',
              transform: `rotate(${rotation}deg)`,
            }}
          >
            {/* Tag shape using clip-path for perfect alignment */}
            <div className="group/tag relative">
              <div
                className="bg-white/10 backdrop-blur-sm px-8 py-4 min-w-[240px] cursor-pointer transition-all duration-300 group-hover/tag:bg-white/20 relative z-10"
                style={{
                  clipPath: milestone.side === 'left'
                    ? 'polygon(0 0, calc(100% - 24px) 0, 100% 50%, calc(100% - 24px) 100%, 0 100%)'
                    : 'polygon(24px 0, 100% 0, 100% 100%, 24px 100%, 0 50%)',
                  paddingLeft: milestone.side === 'left' ? '1.75rem' : '2.5rem',
                  paddingRight: milestone.side === 'left' ? '2.5rem' : '1.75rem',
                }}
              >
                <h3 className="font-heading text-white text-xl leading-tight">
                  {milestone.title}
                </h3>
                <p className="font-body text-[#FAE397] text-base mt-1">
                  {milestone.description}
                </p>
              </div>

              {/* Annotation - shows when this milestone is active or on hover */}
              {milestone.annotation && (
                <div
                  className={`absolute top-full mt-3 w-[500px] transition-opacity duration-500 ${
                    milestone.side === 'left' ? 'right-0 text-right' : 'left-0 text-left'
                  } ${activeMilestone === index ? 'opacity-100' : 'opacity-0 group-hover/tag:opacity-100'}`}
                >
                  <p className="font-square-peg text-[#FAE397] text-4xl leading-snug">
                    {milestone.annotation}
                  </p>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Timeline;
