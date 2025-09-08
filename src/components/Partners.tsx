'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Handshake, Building, Globe, Heart } from 'lucide-react'

export function Partners() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} id="partners" className="py-16 bg-gradient-to-br from-blue-50 via-slate-50 to-teal-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse animation-delay-3s"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse animation-delay-6s"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2 text-blue-700 text-sm font-medium mb-6">
            <Handshake size={16} />
            <span>Collaboration Network</span>
          </div>
          
          <h2 className="heading-font text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Partners
            </span>
          </h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed mb-12">
            Building collaborative relationships with leading organizations in T1D research, care, and advocacy to drive meaningful change in patient outcomes.
          </p>

          {/* Coming Soon Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/70 backdrop-blur-sm rounded-3xl p-12 border border-blue-200/50 shadow-lg"
          >
            <div className="flex flex-col items-center space-y-6">
              {/* Icons */}
              <div className="flex items-center space-x-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center"
                >
                  <Building size={32} className="text-blue-600" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center"
                >
                  <Globe size={32} className="text-teal-600" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center"
                >
                  <Heart size={32} className="text-purple-600" />
                </motion.div>
              </div>

              {/* Main Message */}
              <div className="text-center space-y-4">
                <h3 className="text-3xl font-bold text-slate-900">
                  Partnerships Coming Soon
                </h3>
                <p className="text-lg text-slate-700 max-w-2xl">
                  We are actively building strategic partnerships with leading T1D organizations, research institutions, and healthcare providers to create a collaborative ecosystem that accelerates innovation and improves patient care.
                </p>
              </div>

              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-3 rounded-full font-semibold text-lg"
              >
                TBA - To Be Announced
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
