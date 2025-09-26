'use client'

import { motion } from 'framer-motion'
import { useMemo, useState, useEffect, useRef, useCallback } from 'react'

interface SegmentDef {
  key: string
  label: string
  shortLabel: string
  mechanism: string
  color: 'blue' | 'green' | 'orange' | 'purple'
  startAngle: number
  endAngle: number
}

const colorMap: Record<string, { from: string; to: string; bg: string; bgClass: string }> = {
  blue:   { from: '#DBEAFE', to: '#BFDBFE', bg: '#EBF8FF', bgClass: 'bg-gradient-to-br from-blue-50 to-blue-100' },
  green:  { from: '#DCFCE7', to: '#BBF7D0', bg: '#F0FDF4', bgClass: 'bg-gradient-to-br from-green-50 to-green-100' },
  orange: { from: '#FED7AA', to: '#FDBA74', bg: '#FFF7ED', bgClass: 'bg-gradient-to-br from-orange-50 to-orange-100' },
  purple: { from: '#E9D5FF', to: '#DDD6FE', bg: '#FAF5FF', bgClass: 'bg-gradient-to-br from-purple-50 to-purple-100' },
}

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const angleRad = ((angleDeg - 90) * Math.PI) / 180
  return {
    x: cx + r * Math.cos(angleRad),
    y: cy + r * Math.sin(angleRad)
  }
}

function arcPath(cx: number, cy: number, rInner: number, rOuter: number, start: number, end: number) {
  const largeArc = end - start <= 180 ? 0 : 1
  const p1 = polarToCartesian(cx, cy, rOuter, start)
  const p2 = polarToCartesian(cx, cy, rOuter, end)
  const p3 = polarToCartesian(cx, cy, rInner, end)
  const p4 = polarToCartesian(cx, cy, rInner, start)
  return `M ${p1.x} ${p1.y}
          A ${rOuter} ${rOuter} 0 ${largeArc} 1 ${p2.x} ${p2.y}
          L ${p3.x} ${p3.y}
          A ${rInner} ${rInner} 0 ${largeArc} 0 ${p4.x} ${p4.y}
          Z`
}

function outerArcPath(cx: number, cy: number, r: number, start: number, end: number) {
  const largeArc = end - start <= 180 ? 0 : 1
  const p1 = polarToCartesian(cx, cy, r, start)
  const p2 = polarToCartesian(cx, cy, r, end)
  return `M ${p1.x} ${p1.y} A ${r} ${r} 0 ${largeArc} 1 ${p2.x} ${p2.y}`
}

export function InteractiveCircle({ onHoverChange }: { onHoverChange?: (info: { label: string; mechanism: string; summary: string } | null) => void }) {
  const [hovered, setHovered] = useState<string | null>(null)
  const [rotationAngle, setRotationAngle] = useState(45) // Start at 45 degrees (top-right)
  const [isRotating, setIsRotating] = useState(true)
  const rotationRef = useRef<NodeJS.Timeout | null>(null)

  const sliceAngle = 360 / 18
  
  const segments: SegmentDef[] = useMemo(() => {
    const defs: { label: string; shortLabel: string; mechanism: string; color: SegmentDef['color'] }[] = [
      { label: 'CETP Inhibitor (Obicetrapib) – Novel Pathways', shortLabel: 'Obicetrapib', mechanism: 'Novel Pathways', color: 'blue' },
      { label: 'HMG-CoA Reductase Inhibitors (Statins) – LDL-C Lowering', shortLabel: 'Statins', mechanism: 'LDL-C Lowering', color: 'orange' },
      { label: 'NPC1L1 Inhibitor (Ezetimibe) – LDL-C Lowering', shortLabel: 'Ezetimibe', mechanism: 'LDL-C Lowering', color: 'purple' },
      { label: 'PCSK9 Monoclonal Antibodies – LDL-C Lowering', shortLabel: 'PCSK9 mAb', mechanism: 'LDL-C Lowering', color: 'green' },
      { label: 'PCSK9 siRNA (Inclisiran) – LDL-C Lowering', shortLabel: 'Inclisiran', mechanism: 'LDL-C Lowering', color: 'blue' },
      { label: 'Oral PCSK9 Inhibitor (Enlicidite) – LDL-C Lowering', shortLabel: 'Enlicidite', mechanism: 'LDL-C Lowering', color: 'orange' },
      { label: 'In vivo Gene Editing (PCSK9 Targeting) – LDL-C Lowering', shortLabel: 'Gene Editing', mechanism: 'LDL-C Lowering', color: 'purple' },
      { label: 'Apo(a) Antisense Oligonucleotide (Pelacarsen) – Lp(a) Lowering', shortLabel: 'Pelacarsen', mechanism: 'Lp(a) Lowering', color: 'green' },
      { label: 'Apo(a) siRNA (Olpasiran) – Lp(a) Lowering', shortLabel: 'Olpasiran', mechanism: 'Lp(a) Lowering', color: 'blue' },
      { label: 'Apo(a) siRNA (Lepodisiran) – Lp(a) Lowering', shortLabel: 'Lepodisiran', mechanism: 'Lp(a) Lowering', color: 'orange' },
      { label: 'Oral Small Molecule Lp(a) Inhibitor (Muvalaplin) – Lp(a) Lowering', shortLabel: 'Muvalaplin', mechanism: 'Lp(a) Lowering', color: 'purple' },
      { label: 'PPARα Agonists (Fibrates) – Triglyceride/Remnant Lowering', shortLabel: 'Fibrates', mechanism: 'Triglyceride/Remnant Lowering', color: 'green' },
      { label: 'Omega-3 Fatty Acids – Triglyceride/Remnant Lowering', shortLabel: 'Omega-3', mechanism: 'Triglyceride/Remnant Lowering', color: 'purple' },
      { label: 'APOC3 Antisense Oligonucleotide (Olezarsen) – Triglyceride/Remnant Lowering', shortLabel: 'Olezarsen', mechanism: 'Triglyceride/Remnant Lowering', color: 'green' },
      { label: 'APOC3 siRNA (Plozasiran) – Triglyceride/Remnant Lowering', shortLabel: 'Plozasiran', mechanism: 'Triglyceride/Remnant Lowering', color: 'blue' },
      { label: 'APOC3 Antisense Oligonucleotide (Volanesorsen) – Triglyceride/Remnant Lowering', shortLabel: 'Volanesorsen', mechanism: 'Triglyceride/Remnant Lowering', color: 'orange' },
      { label: 'ANGPTL3 Monoclonal Antibody (Evinacumab) – Novel Pathways', shortLabel: 'Evinacumab', mechanism: 'Novel Pathways', color: 'purple' },
      { label: 'ANGPTL4 Inhibitors – Novel Pathways', shortLabel: 'ANGPTL4', mechanism: 'Novel Pathways', color: 'green' },
    ]
    
    return defs.map((d, i) => ({
      key: `seg-${i}`,
      label: d.label,
      shortLabel: d.shortLabel,
      mechanism: d.mechanism,
      color: d.color,
      startAngle: i * sliceAngle,
      endAngle: (i + 1) * sliceAngle,
    }))
  }, [sliceAngle])

  const summaries: Record<string, string> = useMemo(() => {
    const m: Record<string, string> = {}
    segments.forEach((s) => {
      if (s.mechanism.includes('LDL-C')) m[s.key] = 'Therapies targeting LDL-C reduction to achieve guideline-aligned goals.'
      else if (s.mechanism.includes('Lp(a)')) m[s.key] = 'Investigational and emerging options to reduce lipoprotein(a) levels.'
      else if (s.mechanism.includes('Triglyceride')) m[s.key] = 'Approaches to lower triglycerides and remnants to mitigate pancreatitis and ASCVD risk.'
      else if (s.mechanism.includes('Novel Pathways')) m[s.key] = 'Mechanism-based innovations exploring nontraditional lipid targets and pathways.'
      else m[s.key] = 'Mechanism-based intervention within the lipid therapeutic landscape.'
    })
    return m
  }, [segments])

  // Auto-rotation logic - continuous rotation
  useEffect(() => {
    if (isRotating && !hovered) {
      rotationRef.current = setInterval(() => {
        setRotationAngle((prev) => prev + sliceAngle) // Rotate by one slice angle each time
      }, 7000) // 7 seconds per segment
    } else {
      if (rotationRef.current) {
        clearInterval(rotationRef.current)
        rotationRef.current = null
      }
    }

    return () => {
      if (rotationRef.current) {
        clearInterval(rotationRef.current)
      }
    }
  }, [isRotating, hovered, sliceAngle])

  // Calculate which segment is currently at the top-right position
  const getActiveSegment = useCallback(() => {
    if (hovered) return segments.find(s => s.key === hovered)
    
    // Find which segment contains the top-right position (45 degrees) after rotation
    const targetAngle = 45 // Top-right position
    
    // Since the SVG rotates clockwise, we need to subtract the rotation angle
    // to find what was originally at the target position
    const originalAngle = (targetAngle - rotationAngle + 360) % 360
    
    // Find which segment contains this angle
    for (const segment of segments) {
      // Handle wraparound case where the segment spans across 0 degrees
      if (segment.startAngle > segment.endAngle) {
        // Segment wraps around (e.g., 350° to 10°)
        if (originalAngle >= segment.startAngle || originalAngle < segment.endAngle) {
          return segment
        }
      } else {
        // Normal segment (e.g., 10° to 30°)
        if (originalAngle >= segment.startAngle && originalAngle < segment.endAngle) {
          return segment
        }
      }
    }
    
    // Fallback to first segment if no match found
    return segments[0]
  }, [hovered, segments, rotationAngle])

  // Update info box when active segment changes
  useEffect(() => {
    const activeSegment = getActiveSegment()
    if (activeSegment) {
      onHoverChange?.({
        label: activeSegment.label,
        mechanism: activeSegment.mechanism,
        summary: summaries[activeSegment.key]
      })
    }
  }, [rotationAngle, isRotating, hovered, segments, summaries, onHoverChange, getActiveSegment])

  const size = 600 // Bigger overall circle
  const cx = size / 2
  const cy = size / 2
  const rOuterBase = 250 // Bigger outer radius
  const rInner = 120 // Bigger center hole
  const rLabel = (rOuterBase + rInner) / 2 // Position labels in the middle of the donut

  const handleMouseEnter = (segKey: string) => {
    setHovered(segKey)
    setIsRotating(false)
    const segment = segments.find(s => s.key === segKey)
    if (segment) {
      onHoverChange?.({
        label: segment.label,
        mechanism: segment.mechanism,
        summary: summaries[segKey]
      })
    }
  }

  const handleMouseLeave = () => {
    setHovered(null)
    setIsRotating(true)
    onHoverChange?.(null)
  }

  return (
    <div className="w-full flex flex-col lg:flex-row items-center gap-8">
      {/* Chart Container */}
      <div className="relative w-full max-w-lg mx-auto lg:mx-0" style={{ aspectRatio: '1 / 1' }}>
        <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full">
          {/* Background circle */}
          <circle cx={cx} cy={cy} r={(rOuterBase + rInner) / 2} fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth={rOuterBase - rInner} />
          
          <g 
            style={{ 
              transform: `rotate(${rotationAngle}deg)`,
              transformOrigin: `${cx}px ${cy}px`,
              transition: 'transform 1s ease-in-out'
            }}
          >

          <defs>
            {segments.map((seg) => {
              const { from, to } = colorMap[seg.color]
              return (
                <linearGradient id={`grad-${seg.key}`} key={`g-${seg.key}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor={from} stopOpacity={0.9} />
                  <stop offset="100%" stopColor={to} stopOpacity={0.9} />
                </linearGradient>
              )
            })}
          </defs>

          {segments.map((seg, idx) => {
            const isHovered = hovered === seg.key
            const activeSegment = getActiveSegment()
            const isActive = isRotating && !hovered && activeSegment?.key === seg.key
            const isHighlighted = isHovered || isActive
            const mid = (seg.startAngle + seg.endAngle) / 2
            
            // Calculate expansion offset
            const expansionOffset = isHighlighted ? 12 : 0
            const dx = expansionOffset * Math.cos(((mid - 90) * Math.PI) / 180)
            const dy = expansionOffset * Math.sin(((mid - 90) * Math.PI) / 180)
            const rOuter = rOuterBase + (isHighlighted ? 8 : 0)
            
            const d = arcPath(cx + dx, cy + dy, rInner, rOuter, seg.startAngle, seg.endAngle)
            
            // Calculate label position (inside the donut)
            const labelX = cx + rLabel * Math.cos(((mid - 90) * Math.PI) / 180)
            const labelY = cy + rLabel * Math.sin(((mid - 90) * Math.PI) / 180)
            
            return (
              <g key={seg.key} style={{ cursor: 'pointer' }}>
                <motion.path
                  d={d}
                  fill={`url(#grad-${seg.key})`}
                  initial={false}
                  animate={{ 
                    opacity: hovered && !isHovered ? 0.4 : 1,
                    scale: isHighlighted ? 1.05 : 1
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  onMouseEnter={() => handleMouseEnter(seg.key)}
                  onMouseLeave={handleMouseLeave}
                />
                
                {/* Segment label - Always level */}
                <text
                  x={labelX}
                  y={labelY}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize={isHighlighted ? "12" : "10"}
                  fontWeight={isHighlighted ? "700" : "600"}
                  fill={isHighlighted ? "rgba(0,0,0,0.9)" : "rgba(0,0,0,0.7)"}
                  className="pointer-events-none select-none"
                  style={{ 
                    transform: `rotate(${-rotationAngle}deg)`,
                    transformOrigin: `${labelX}px ${labelY}px`,
                    transition: 'transform 1s ease-in-out, font-size 0.3s ease-in-out, font-weight 0.3s ease-in-out, fill 0.3s ease-in-out'
                  }}
                >
                  {seg.shortLabel}
                </text>
              </g>
            )
          })}

          </g>
          
          {/* Center label - Fixed and not rotating */}
          <g>
            <circle cx={cx} cy={cy} r={rInner - 20} fill="rgba(0,0,0,0.15)" />
            <text x={cx} y={cy - 10} fill="white" fontSize={18} fontWeight={700} textAnchor="middle">Lipid 360°</text>
            <text x={cx} y={cy + 15} fill="white" fontSize={14} textAnchor="middle">Therapeutic Landscape</text>
          </g>
        </svg>
      </div>

      {/* Information Display Box - Fit to content */}
      <div className="w-full max-w-xl mx-auto lg:mx-0">
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col">
          {/* Top Section - Hover Content */}
          <div className={`p-6 flex flex-col justify-start rounded-t-xl ${
            hovered || (isRotating && getActiveSegment()) 
              ? colorMap[segments.find(s => s.key === (hovered || getActiveSegment()?.key))?.color || 'blue'].bgClass
              : 'bg-slate-50'
          }`}>
            {hovered || (isRotating && getActiveSegment()) ? (
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-slate-900 leading-tight">
                  {(() => {
                    const label = hovered ? segments.find(s => s.key === hovered)?.label : getActiveSegment()?.label
                    if (label && label.includes(' – ')) {
                      const [firstPart] = label.split(' – ')
                      return firstPart
                    }
                    return label
                  })()}
                </h3>
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/80 text-slate-700 border border-white/50">
                  {hovered ? segments.find(s => s.key === hovered)?.mechanism : getActiveSegment()?.mechanism}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {hovered ? summaries[hovered] : summaries[getActiveSegment()?.key || '']}
                </p>
              </div>
            ) : (
              <div className="text-center text-slate-500">
                <div className="text-4xl mb-3">💊</div>
                <p className="text-sm">Hover over a segment to learn more about each therapeutic approach</p>
              </div>
            )}
          </div>
          
          {/* Bottom Section - Body Paragraphs */}
          <div className="p-6 border-t border-slate-100">
            <div className="space-y-4">
              <p className="text-sm text-slate-700 leading-relaxed">
                This Learning Center empowers practicing clinicians with practical strategies for optimizing lipid management across dyslipidemias—from elevated LDL-C and lipoprotein(a) to severe hypertriglyceridemia and rare genetic disorders such as familial chylomicronemia syndrome (FCS).
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                Join our international community of cardiologists, lipidologists, primary care physicians, and endocrinologists by exploring curated educational resources and bringing this knowledge back to your teams to advance patient care and improve outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


