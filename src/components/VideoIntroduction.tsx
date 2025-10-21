'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { BookOpen, Users, Microscope, Heart } from 'lucide-react'

export function VideoIntroduction() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const features = [
    {
      icon: <BookOpen size={32} className="text-blue-600" />,
      title: 'Long-term Learning Environment',
      description: 'Focused on improving diagnosis, treatment, and management of gMG with continuous education throughout the year.'
    },
    {
      icon: <Users size={32} className="text-teal-600" />,
      title: 'Community-Based Experience',
      description: 'Featuring faculty experts and peer-to-peer learning opportunities for collaborative knowledge sharing.'
    },
    {
      icon: <Microscope size={32} className="text-purple-600" />,
      title: 'Foundational Science',
      description: 'Access to foundational science, clinical guidance, and therapeutic advancements in gMG management.'
    },
    {
      icon: <Heart size={32} className="text-pink-600" />,
      title: 'Practical Care Strategies',
      description: 'Real-world practice tools and strategies for optimizing patient care and improving clinical outcomes.'
    }
  ]

  return (
    <section ref={ref} id="overview" className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
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
          className="text-center mb-12"
        >
          <h2 className="heading-font text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            What This Learning Center{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Offers
            </span>
          </h2>
          <p className="text-base lg:text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed">
            A 12-month thematic learning center designed for clinicians and care teams managing generalized Myasthenia Gravis (gMG).
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 