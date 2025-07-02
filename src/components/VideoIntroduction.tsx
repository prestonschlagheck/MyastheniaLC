'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Play } from 'lucide-react'

export function VideoIntroduction() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} id="video-introduction" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Section - Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-video bg-gray-900 rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-indigo-900/90"></div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-8 hover:bg-white/30 transition-all"
              >
                <Play className="w-16 h-16 text-white fill-white" />
              </motion.button>
              <div className="absolute bottom-4 left-4 text-white/80 text-sm">
                Video Placeholder - Introduction Content
              </div>
            </div>
          </motion.div>

          {/* Text Content - Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Header */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight text-center">
              Your Comprehensive Hub for Excellence in Obesity Education
            </h2>

            {/* Subtext */}
            <p className="text-lg text-gray-700 leading-relaxed">
              Through expert interviews, case discussions, expert panels, and patient perspectives, leading
              global experts deliver the latest evidence-based guidance and real-world experiences for
              practicing clinicians. Join our growing community of endocrinologists, cardiologists,
              nephrologists and primary care providers by engaging with the educational content in this
              learning center and sharing it with your healthcare team.
            </p>

            {/* Call to Action - Made to Stand Out */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-6 shadow-xl">
              <p className="text-xl font-bold text-white text-center">
                Together, we can advance the standard of obesity care worldwide!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 