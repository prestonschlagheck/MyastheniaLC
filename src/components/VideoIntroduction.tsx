'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { BookOpen, Users, Globe, Award } from 'lucide-react'
import Image from 'next/image'

export function VideoIntroduction() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} id="comprehensive-hub" className="py-2 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2s"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4s"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="space-y-0">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          
          {/* T1D Graphic Section - Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3 }}
            className="relative h-[500px] flex items-center justify-center"
          >
            <div className="relative w-full max-w-2xl mx-auto">
              <div className="relative w-full h-[600px]">
                <Image
                  src="/graphic.png"
                  alt="T1D Impact Graphic"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
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
                T1D education
              </span>
            </motion.h2>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.2, delay: 0.2 }}
            >
              <div className="space-y-4">
                <p className="text-base text-slate-700 leading-relaxed">
                  Through integration of evidence-based therapies, cutting-edge technologies, and the authentic patient voice, IMPACT equips clinicians to deliver care that is both scientifically rigorous and deeply personalized.
                </p>
                <p className="text-base text-slate-700 leading-relaxed">
                  By aligning treatment strategies with guideline-directed goals and patient priorities, and by embedding real-world data and quality improvement principles, the IMPACT T1D fosters sustainable improvements in glycemic control, quality of life, and complication prevention.
                </p>
                <p className="text-base text-slate-700 leading-relaxed">
                  Together, IMPACT T1D offers a unique opportunity to drive meaningful change in the management, acceleration in the potential adoption of innovative therapies, and ultimately elevate standards of care on a global scale.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Feature Grid - Moved to Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 -mt-24"
        >
          <div className="flex items-center space-x-3 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-blue-100">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <BookOpen size={20} className="text-blue-600" />
            </div>
            <div>
              <div className="font-semibold text-slate-900">T1D Education</div>
              <div className="text-sm text-slate-600">Comprehensive Learning</div>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-teal-100">
            <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
              <Users size={20} className="text-teal-600" />
            </div>
            <div>
              <div className="font-semibold text-slate-900">Patient Journey</div>
              <div className="text-sm text-slate-600">Care Optimization</div>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-green-100">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Globe size={20} className="text-green-600" />
            </div>
            <div>
              <div className="font-semibold text-slate-900">Global Impact</div>
              <div className="text-sm text-slate-600">Worldwide Change</div>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-yellow-100">
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Award size={20} className="text-yellow-600" />
            </div>
            <div>
              <div className="font-semibold text-slate-900">Evidence-Based</div>
              <div className="text-sm text-slate-600">Quality Care</div>
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  )
} 