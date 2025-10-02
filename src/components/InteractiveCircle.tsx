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
      { label: 'Obicetrapib (CETP Inhibitor) – Novel Pathway', shortLabel: 'Obicetrapib', mechanism: 'Novel Pathway', color: 'blue' },
      { label: 'Statins (HMG-CoA Reductase Inhibitors) – LDL-C Lowering', shortLabel: 'Statins', mechanism: 'LDL-C Lowering', color: 'orange' },
      { label: 'Ezetimibe (NPC1L1 Inhibitor) – LDL-C Lowering', shortLabel: 'Ezetimibe', mechanism: 'LDL-C Lowering', color: 'purple' },
      { label: 'PCSK9 Monoclonal Antibodies – LDL-C Lowering', shortLabel: 'PCSK9 mAb', mechanism: 'LDL-C Lowering', color: 'green' },
      { label: 'Inclisiran (PCSK9 siRNA) – LDL-C Lowering', shortLabel: 'Inclisiran', mechanism: 'LDL-C Lowering', color: 'blue' },
      { label: 'Enlicitide (Oral PCSK9 inhibitor) – LDL-C Lowering', shortLabel: 'Enlicidite', mechanism: 'LDL-C Lowering', color: 'orange' },
      { label: 'In vivo Gene Editing (PCSK9 Targeting) – LDL-C Lowering', shortLabel: 'Gene Editing', mechanism: 'LDL-C Lowering', color: 'purple' },
      { label: 'Pelacarsen (Apo(a) Antisense Oligonucleotide) – Lp(a) Lowering', shortLabel: 'Pelacarsen', mechanism: 'Lp(a) Lowering', color: 'green' },
      { label: 'Olpasiran (Apo(a) siRNA) – Lp(a) Lowering', shortLabel: 'Olpasiran', mechanism: 'Lp(a) Lowering', color: 'blue' },
      { label: 'Lepodisiran (Apo(a) siRNA) – Lp(a) Lowering', shortLabel: 'Lepodisiran', mechanism: 'Lp(a) Lowering', color: 'orange' },
      { label: 'Muvalaplin (Oral Small Molecule Lp(a) Inhibitor) – Lp(a) Lowering', shortLabel: 'Muvalaplin', mechanism: 'Lp(a) Lowering', color: 'purple' },
      { label: 'Fibrates (PPARα Agonists) – Triglyceride/Remnant Lowering', shortLabel: 'Fibrates', mechanism: 'Triglyceride/Remnant Lowering', color: 'green' },
      { label: 'Omega-3 Fatty Acids – Triglyceride/Remnant Lowering', shortLabel: 'Omega-3', mechanism: 'Triglyceride/Remnant Lowering', color: 'purple' },
      { label: 'Olezarsen (APOC3 Antisense Oligonucleotide) – Triglyceride/Remnant Lowering', shortLabel: 'Olezarsen', mechanism: 'Triglyceride/Remnant Lowering', color: 'green' },
      { label: 'Plozasiran (APOC3 siRNA) – Triglyceride/Remnant Lowering', shortLabel: 'Plozasiran', mechanism: 'Triglyceride/Remnant Lowering', color: 'blue' },
      { label: 'Volanesorsen (APOC3 Antisense Oligonucleotide) – Triglyceride/Remnant Lowering', shortLabel: 'Volanesorsen', mechanism: 'Triglyceride/Remnant Lowering', color: 'orange' },
      { label: 'Evinacumab (ANGPTL3 Monoclonal Antibody) – Novel Pathways', shortLabel: 'Evinacumab', mechanism: 'Novel Pathways', color: 'purple' },
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
    const summaryMap: Record<string, string> = {
      'Obicetrapib': 'An investigational, highly selective cholesteryl ester transfer protein (CETP) inhibitor being studied for the treatment of elevated levels of low-density lipoprotein cholesterol (LDL-C).',
      'Statins': 'Used adjunctively to diet and exercise to treat hypercholesterolemia by lowering total cholesterol (TC), LDL-C, and triglycerides (TG) concentrations while increasing high-density lipoprotein cholesterol (HDL-C) concentrations, generally indicated for the treatment and/or prevention of primary and secondary prevention clinical atherosclerotic cardiovascular disease (ASCVD).',
      'Ezetimibe': 'Selective cholesterol-absorption inhibitor used in the management and treatment of hypercholesterolemia. It is indicated to reduce total cholesterol, low-density lipoprotein (LDL), apolipoprotein B (apo B), and non-high-density lipoprotein (HDL) in patients with primary hyperlipidemia, mixed hyperlipidemia, familial hypercholesterolemia (HoFH), and homozygous sitosterolemia (phytosterolemia).',
      'PCSK9 mAb': 'Injectable medications that treat high cholesterol by inhibiting the PCSK9 protein, which normally breaks down LDL receptors. By blocking PCSK9, these antibodies allow more LDL receptors to remain on liver cells, leading to increased clearance of LDL cholesterol (LDL-C) from the blood. They are used for patients with familial hypercholesterolemia (FH) or established cardiovascular disease who may not achieve their LDL-C goals with other treatments.',
      'Inclisiran': 'Small interfering RNA therapy that inhibits the production of the PCSK9 protein. Currently approved as an adjunct to statin therapy in patients with clinical ASCVD or heterozygous FH who require additional LDL-lowering.',
      'Enlicidite': 'Investigational, oral PCSK9 inhibitor designed to lower LDL-C via the same biological mechanism as currently approved monoclonal antibody injectable PCSK9 inhibitors but in a daily pill form, which is an oral macrocyclic peptide that binds to PCSK9 and inhibits the interaction of PCSK9 with LDL receptors.',
      'Gene Editing': 'Targets the PCSK9 gene and disrupts PCSK9 protein production, which may lead to durable reductions in low-density lipoprotein cholesterol (LDL-C).',
      'Pelacarsen': 'Experimental antisense oligonucleotide drug designed to lower lipoprotein(a) (Lp(a)) levels in patients with cardiovascular disease, targeting the LPA gene that encodes apolipoprotein(a).',
      'Olpasiran': 'Experimental siRNA therapy designed to lower the level of lipoprotein(a), which is believed to be a causal factor in the development of cardiovascular disease.',
      'Lepodisiran': 'Small interfering RNA that was developed to reduce lipoprotein(a) in people at risk of cardiovascular disease.',
      'Muvalaplin': 'Small molecule inhibitor that prevents the bonding of the two protein components that combine to make Lp(a).',
      'Fibrates': 'Type of amphipathic carboxylic acids belonging to the class of drugs used to lower serum cholesterol levels. They help to reduce serum LDL, total cholesterol, triglycerides, apolipoprotein B (Apo-B) and increase high-density lipoprotein cholesterol (HDL), along with as an adjunct to dietary modifications in adults with severe hypertriglyceridemia.',
      'Omega-3': 'Polyunsaturated fatty acids characterized by the presence of a double bond three atoms away from the terminal methyl group in their chemical structure. They are widely distributed in nature, are important constituents of animal lipid metabolism, and play an important role in the human diet and in human physiology.',
      'Olezarsen': 'Used in the treatment of familial chylomicronemia syndrome, administered subcutaneously. It inhibits the formation of apolipoprotein C3, which regulates both triglyceride metabolism and liver clearance of chylomicrons and other triglyceride-rich lipoproteins, which is indicated as an adjunct to diet to reduce triglycerides in adults with familial chylomicronemia syndrome.',
      'Plozasiran': 'Investigational RNA interference (RNAi) therapeutic drug designed to treat conditions characterized by dangerously high levels of triglycerides in the blood, such as familial chylomicronemia syndrome (FCS) and severe hypertriglyceridemia (SHTG). It targets and reduces the production of APOC3; by silencing the gene that produces APOC3, plozasiran allows the body to more effectively clear TRLs from the bloodstream, leading to a significant reduction in triglyceride levels.',
      'Volanesorsen': 'Is a second-generation antisense oligonucleotide that selectively binds to apoC-III messenger RNA, inhibiting its translation and leading to decreased plasma apoC-III and triglyceride levels.',
      'Evinacumab': 'Monoclonal antibody approved for adjunctive therapy for patients aged 5 years and older with homozygous familial hypercholesterolemia whose LDL cholesterol remains elevated despite traditional interventions. It is an angiopoietin-like protein 3 (ANGPTL3) inhibitor administered via intravenous infusion.',
      'ANGPTL4': 'Potential therapeutic approach designed to block the activity of Angiopoietin-like 4 (ANGPTL4), a protein that normally raises triglyceride levels by inhibiting lipoprotein lipase. By inhibiting ANGPTL4, these drugs aim to improve lipid profiles by promoting triglyceride clearance and reducing high levels of triglycerides and other lipids associated with cardiovascular disease.'
    }
    
    const m: Record<string, string> = {}
    segments.forEach((s) => {
      m[s.key] = summaryMap[s.shortLabel] || 'Mechanism-based intervention within the lipid therapeutic landscape.'
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
    
    // Calculate which segment should be active based on rotation
    // We want the segment that's currently at the top-right (45 degrees)
    const targetAngle = 45
    
    // Normalize the rotation angle and calculate which segment index should be active
    const normalizedRotation = ((rotationAngle % 360) + 360) % 360
    
    // Calculate which segment index should be at the target position
    // Since we rotate clockwise, we need to find which original segment is now at 45°
    const segmentAtTarget = Math.floor(((targetAngle - normalizedRotation + 360) % 360) / sliceAngle)
    
    // Ensure the index is within bounds
    const activeIndex = segmentAtTarget % segments.length
    
    return segments[activeIndex] || segments[0]
  }, [hovered, segments, rotationAngle, sliceAngle])

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
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
          {/* Top Section - Hover Content */}
          <div className={`p-6 flex flex-col justify-start rounded-xl ${
            hovered || (isRotating && getActiveSegment()) 
              ? colorMap[segments.find(s => s.key === (hovered || getActiveSegment()?.key))?.color || 'blue'].bgClass
              : 'bg-slate-50'
          }`}>
            {hovered || (isRotating && getActiveSegment()) ? (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-900 leading-tight">
                  {(() => {
                    const label = hovered ? segments.find(s => s.key === hovered)?.label : getActiveSegment()?.label
                    if (label && label.includes(' – ')) {
                      const [firstPart] = label.split(' – ')
                      return firstPart
                    }
                    return label
                  })()}
                </h3>
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/80 text-slate-700 border border-white/50">
                  {hovered ? segments.find(s => s.key === hovered)?.mechanism : getActiveSegment()?.mechanism}
                </div>
                <p className="text-base text-slate-700 leading-relaxed">
                  {hovered ? summaries[hovered] : summaries[getActiveSegment()?.key || '']}
                </p>
              </div>
            ) : (
              <div className="text-center text-slate-500">
                <div className="text-4xl mb-3">💊</div>
                <p className="text-base">Hover over a segment to learn more about each therapeutic approach</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}


