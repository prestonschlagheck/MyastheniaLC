'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { User, Users } from 'lucide-react'

interface FacultyPlaceholderProps {
  index: number
}

function FacultyPlaceholder({ index }: FacultyPlaceholderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, delay: index * 0.05 }}
    >
      <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200 p-4 h-32">
        {/* Profile Photo */}
        <div className="flex flex-col items-center text-center h-full justify-center">
          <div className="relative w-16 h-16 mb-2">
            <div className="w-full h-full bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center overflow-hidden border-3 border-white shadow-md">
              <User className="w-8 h-8 text-slate-400" />
            </div>
          </div>
          
          {/* Placeholder Text */}
          <div className="text-center">
            <h3 className="heading-font font-semibold text-slate-400 text-sm leading-tight mb-1">
              Expert Placeholder
            </h3>
            <div className="text-xs font-medium text-slate-300">
              To Be Added
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Faculty() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  // Create 12 placeholder slots
  const placeholderSlots = Array.from({ length: 12 }, (_, index) => index)

  return (
    <section ref={ref} id="faculty" className="pt-16 pb-4 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          
          <h2 className="heading-font text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">
            Leading Global{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Experts
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl text-slate-700 leading-relaxed">
              Our distinguished multidisciplinary faculty represents the pinnacle of expertise in Type 1 Diabetes, bringing together renowned clinicians, researchers, and thought leaders from the world&apos;s most prestigious medical institutions.
            </p>
            
            {/* Coming Soon Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200"
            >
              <p className="text-lg text-slate-700 leading-relaxed">
                Our expert faculty profiles will be announced soon. We are assembling a world-class team of T1D specialists committed to advancing education and improving patient outcomes.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Faculty Placeholder Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {placeholderSlots.map((index) => (
            <FacultyPlaceholder key={index} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}