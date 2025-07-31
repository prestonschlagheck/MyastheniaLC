'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Users, Activity } from 'lucide-react'
import Image from 'next/image'



export function Statistics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })



  return (
    <section ref={ref} id="associated-diseases" className="py-8 bg-gradient-to-br from-white via-blue-50/30 to-slate-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-40"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-40"></div>
        <div className="absolute bottom-20 left-1/3 w-32 h-32 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
          {/* Header and Text - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2 text-blue-700 text-sm font-medium">
              <Heart size={16} />
              <span>Understanding Disease Complexity</span>
            </div>
            <h2 className="heading-font text-3xl lg:text-4xl font-bold text-slate-900">
              Associated Diseases and{' '}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Conditions of PH
              </span>
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Pulmonary Arterial Hypertension (PAH) is a progressive and potentially fatal condition that can be associated with various underlying conditions.
            </p>
          </motion.div>

          {/* Masterclass Image - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[500px] flex items-center justify-center overflow-hidden"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Central Masterclass Image */}
              <div className="relative bg-white/90 backdrop-blur-sm border border-white/30 rounded-3xl p-6 shadow-2xl">
                <div className="relative w-full h-64">
                  <Image
                    src="/masterclass.png"
                    alt="PAH Masterclass"
                    fill
                    className="object-contain rounded-2xl"
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4"
              >
                <Users className="text-blue-300" size={24} />
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0], rotate: [0, -3, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4"
              >
                <Activity className="text-teal-300" size={24} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 