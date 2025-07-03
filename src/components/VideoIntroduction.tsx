'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Play } from 'lucide-react'

export function VideoIntroduction() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} id="video-introduction" className="py-8 lg:py-12 bg-white">
      <div className="max-w-full mx-auto px-4 lg:px-8">
        {/* Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Video Section - Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full h-[300px] lg:h-[350px] bg-gray-900 rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-indigo-900/90"></div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-6 hover:bg-white/30 transition-all"
              >
                <Play className="w-12 h-12 text-white fill-white" />
              </motion.button>
              <div className="absolute bottom-3 left-3 text-white/80 text-xs">
                Video Placeholder - Introduction Content
              </div>
            </div>
          </motion.div>

          {/* Text Content - Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[300px] lg:h-[350px] flex flex-col justify-between"
          >
            {/* Header - Aligned with top of video */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Your Comprehensive Hub for Excellence in Obesity Education
              </h2>
            </div>

            {/* Middle Content */}
            <div>
              <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                Through expert interviews, case discussions, expert panels, and patient perspectives, leading
                global experts deliver the latest evidence-based guidance and real-world experiences for
                practicing clinicians. Join our growing community of endocrinologists, cardiologists,
                nephrologists and primary care providers by engaging with the educational content in this
                learning center and sharing it with your healthcare team.
              </p>
            </div>

            {/* Call to Action - Aligned with bottom of video */}
            <div className="text-center">
              <p className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent leading-tight">
                Together, we advance obesity care worldwide!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 