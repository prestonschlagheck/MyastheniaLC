'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { BookOpen, Users, Award } from 'lucide-react'

interface PlaceholderCardProps {
  title: string
  description: string
  index: number
  icon: React.ReactNode
  color: string
}

function PlaceholderCard({ title, description, index, icon, color }: PlaceholderCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group cursor-pointer"
    >
      <div className={`${color} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 group-hover:scale-[1.02] h-80 flex flex-col justify-center items-center text-center`}>
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
          className="mb-6"
        >
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
            {icon}
          </div>
        </motion.div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-2xl lg:text-3xl font-bold text-white">
            {title}
          </h3>
          <p className="text-white/90 text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* Coming Soon Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
          className="mt-6"
        >
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white/80 text-sm font-medium">
            Coming Soon
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export function EducationalPrograms() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const placeholders = [
    {
      title: "T1D Masterclass",
      description: "Comprehensive educational program covering the latest in T1D management and care strategies",
      icon: <BookOpen size={40} className="text-white" />,
      color: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      title: "Clinical Resources",
      description: "Evidence-based tools and resources for healthcare professionals managing T1D patients",
      icon: <Award size={40} className="text-white" />,
      color: "bg-gradient-to-br from-teal-500 to-teal-600"
    },
    {
      title: "Community Hub",
      description: "Interactive platform connecting T1D care providers for knowledge sharing and collaboration",
      icon: <Users size={40} className="text-white" />,
      color: "bg-gradient-to-br from-purple-500 to-purple-600"
    }
  ]

  return (
    <section ref={ref} id="educational-activities" className="py-16 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse animation-delay-3s"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse animation-delay-6s"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2 text-blue-700 text-sm font-medium mb-6">
            <BookOpen size={16} />
            <span>Educational Excellence</span>
          </div>
          
          <h2 className="heading-font text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Educational{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Programs
            </span>
          </h2>
          <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
            Comprehensive T1D education programs designed to advance healthcare professional knowledge and improve patient outcomes through evidence-based learning.
          </p>
        </motion.div>

        {/* Placeholders Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {placeholders.map((placeholder, index) => (
            <PlaceholderCard key={index} {...placeholder} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}