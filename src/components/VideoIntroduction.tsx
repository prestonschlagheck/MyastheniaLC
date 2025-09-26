'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { BookOpen, Users, Globe, Award } from 'lucide-react'
import { InteractiveCircle } from './InteractiveCircle'
import Image from 'next/image'

export function VideoIntroduction() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [hoverInfo, setHoverInfo] = useState<{ label: string; mechanism: string; summary: string } | null>(null)

  return (
    <section ref={ref} id="comprehensive-hub" className="py-12 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2s"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4s"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="heading-font text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Your Comprehensive Hub for Advancing{' '}
            <br className="hidden sm:block" />
            Evidence-Based Care in{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Lipid Management
            </span>
          </h2>
          <p className="text-base lg:text-lg text-slate-700 max-w-6xl mx-auto leading-relaxed text-center">
            Through expert interviews, interactive case discussions, multidisciplinary panels, and patient perspectives, leading global experts share the latest evidence alongside real-world clinical insights.
          </p>
        </motion.div>

        {/* Interactive Circle Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <InteractiveCircle onHoverChange={setHoverInfo} />
        </motion.div>


      </div>
    </section>
  )
} 