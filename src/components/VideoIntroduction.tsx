'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { BookOpen, Users, Globe, Award, Heart, Wind, Shield, Zap, Dna, Stethoscope, Activity, AlertCircle } from 'lucide-react'
import Image from 'next/image'

function OrbitAnimation({ diseases, isInView }: { diseases: any[], isInView: boolean }) {
  const orbitRef = useRef<HTMLDivElement>(null)
  const elementsRef = useRef<{ el: HTMLDivElement, baseAngle: number }[]>([])

  useEffect(() => {
    if (!isInView || !orbitRef.current) return

    const orbit = orbitRef.current
    const radius = 160  // Smaller radius for compact layout
    const angleStep = (2 * Math.PI) / diseases.length
    const elements: { el: HTMLDivElement, baseAngle: number }[] = []

    // Clear any existing elements
    orbit.innerHTML = ''
    elementsRef.current = []

    diseases.forEach((disease, i) => {
      const angle = i * angleStep
      const x = radius * Math.cos(angle) + 250 - 50  // Adjusted for 500px container
      const y = radius * Math.sin(angle) + 250 - 50

      const el = document.createElement('div')
      el.className = `absolute w-24 h-24 ${disease.color} rounded-lg flex items-center justify-center shadow-md text-center p-2 text-xs font-medium leading-tight`
      el.innerHTML = `
        <div class="flex flex-col items-center justify-center h-full">
          <div class="text-center leading-tight">${disease.title}</div>
        </div>
      `
      el.style.left = `${x}px`
      el.style.top = `${y}px`

      orbit.appendChild(el)
      elements.push({ el, baseAngle: angle })
    })

    elementsRef.current = elements

    let rotation = 0
    function animate() {
      rotation += 0.15 // orbit speed
      orbit.style.transform = `rotate(${rotation}deg)`

      // Counter-rotate each item so it's upright
      elements.forEach(({ el }) => {
        el.style.transform = `rotate(${-rotation}deg)`
      })

      requestAnimationFrame(animate)
    }
    animate()

    return () => {
      // Cleanup
      orbit.innerHTML = ''
    }
  }, [isInView, diseases])

  return (
    <motion.div
      ref={orbitRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.3, delay: 0.4 }}
      className="absolute w-[500px] h-[500px]"
    />
  )
}

export function VideoIntroduction() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const diseases = [
    { title: "Lung Diseases", icon: <Wind size={14} />, color: 'bg-red-100 text-red-800', delay: 0.1 },
    { title: "Heart Failure", icon: <Heart size={14} />, color: 'bg-blue-200 text-blue-800', delay: 0.2 },
    { title: "Congenital Heart Disease", icon: <Heart size={14} />, color: 'bg-red-200 text-red-800', delay: 0.3 },
    { title: "Autoimmune & PH", icon: <Shield size={14} />, color: 'bg-blue-100 text-blue-800', delay: 0.4 },
    { title: "Connective Tissue", icon: <Zap size={14} />, color: 'bg-red-300 text-red-900', delay: 0.5 },
    { title: "HIV Infection", icon: <AlertCircle size={14} />, color: 'bg-blue-300 text-blue-900', delay: 0.6 },
    { title: "Portal Hypertension", icon: <Activity size={14} />, color: 'bg-red-100 text-red-800', delay: 0.7 },
    { title: "Drug & Toxin Induced", icon: <Stethoscope size={14} />, color: 'bg-blue-200 text-blue-800', delay: 0.8 },
    { title: "Eisenmenger Syndrome", icon: <Heart size={14} />, color: 'bg-red-200 text-red-800', delay: 0.9 },
    { title: "Genetic Mutations", icon: <Dna size={14} />, color: 'bg-blue-100 text-blue-800', delay: 1.0 }
  ]

  return (
    <section ref={ref} id="comprehensive-hub" className="py-4 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2s"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4s"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="space-y-4">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Rotating Animation Section - Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3 }}
            className="relative h-[500px] flex items-center justify-center overflow-visible"
          >
            {/* Center PAH Node */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="absolute w-32 h-32 flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-lg text-white font-bold z-10"
            >
              <div className="text-center">
                <Heart size={20} className="mx-auto mb-1" />
                <div className="text-xs leading-tight">Pulmonary<br />Arterial<br />Hypertension</div>
              </div>
            </motion.div>

            {/* Orbit Container */}
            <OrbitAnimation diseases={diseases} isInView={isInView} />
          </motion.div>

          {/* Text Content - Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="flex flex-col justify-center h-[500px] space-y-4"
          >
            {/* Header */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.2, delay: 0.15 }}
              className="heading-font text-3xl lg:text-4xl font-bold text-slate-900 leading-tight"
            >
              Your Comprehensive Hub for Excellence in{' '}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                PAH Education
              </span>
            </motion.h2>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.2, delay: 0.2 }}
            >
              <p className="text-base text-slate-700 leading-relaxed">
                Recognized as the world&apos;s largest educational initiative of its kind, our program now extends well beyond pulmonary arterial hypertension (PAH) to encompass associated cardiovascular, pulmonary, connective-tissue, and rheumatic diseases. We continually innovate to meet the diverse needs of PH specialists through local in-person meetings, national conferences, immersive Masterclasses, and Minute CE®—the first ACCME-compliant micro-learning platform for point-of-care education. Building on this legacy, our new Learning Center once again elevates the standard, delivering adaptive resources, evidence-based tools, and cutting-edge strategies that empower healthcare professionals to improve patient lives.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Feature Grid - Moved to Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-0"
        >
          <div className="flex items-center space-x-3 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-blue-100">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <BookOpen size={20} className="text-blue-600" />
            </div>
            <div>
              <div className="font-semibold text-slate-900">Masterclasses</div>
              <div className="text-sm text-slate-600">Immersive Learning</div>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-teal-100">
            <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
              <Users size={20} className="text-teal-600" />
            </div>
            <div>
              <div className="font-semibold text-slate-900">Minute CE®</div>
              <div className="text-sm text-slate-600">Micro-learning</div>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-green-100">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Globe size={20} className="text-green-600" />
            </div>
            <div>
              <div className="font-semibold text-slate-900">Global Reach</div>
              <div className="text-sm text-slate-600">Worldwide Impact</div>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-yellow-100">
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Award size={20} className="text-yellow-600" />
            </div>
            <div>
              <div className="font-semibold text-slate-900">ACCME Compliant</div>
              <div className="text-sm text-slate-600">Certified Education</div>
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  )
} 