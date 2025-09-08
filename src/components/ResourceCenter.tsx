'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FileText, ExternalLink, Calendar, TrendingUp, Award, Beaker, Database, ArrowRight, ChevronRight, Download } from 'lucide-react'

interface ResourcePlaceholderProps {
  title: string
  description: string
  index: number
  icon: React.ReactNode
}

function ResourcePlaceholder({ title, description, index, icon }: ResourcePlaceholderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      <div className="relative p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl h-[320px] flex flex-col bg-white border-slate-200 hover:border-blue-300">
        
        {/* Header Row */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
              {icon}
            </div>
            <div>
              <div className="text-sm font-bold text-blue-600">Coming Soon</div>
              <div className="text-xs text-slate-500">T1D Resource</div>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-xs text-slate-400">
            <Database size={14} />
            <span className="uppercase tracking-wide font-medium">TBD</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-bold text-slate-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors text-lg">
          {title}
        </h3>

        {/* Description */}
        <div className="bg-slate-50 rounded-xl p-4 mb-4 border border-slate-100 flex-1">
          <div className="flex items-start space-x-2">
            <TrendingUp size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-slate-700 leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* Action Row */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
          <div className="text-xs text-slate-500">
            Resource will be available soon
          </div>
          <div className="flex items-center space-x-1 text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            <span>Coming Soon</span>
            <ChevronRight size={16} />
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-teal-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </motion.div>
  )
}

export function ResourceCenter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [showResources, setShowResources] = useState(false)

  const resourcePlaceholders = [
    {
      title: "T1D Research Database",
      description: "Comprehensive collection of latest research papers, clinical trials, and evidence-based studies in Type 1 Diabetes management and care.",
      icon: <FileText size={20} className="text-blue-600" />
    },
    {
      title: "Clinical Guidelines & Protocols",
      description: "Evidence-based clinical guidelines, treatment protocols, and best practice recommendations for T1D patient care and management.",
      icon: <Award size={20} className="text-blue-600" />
    },
    {
      title: "Patient Journey Tools",
      description: "Interactive tools and resources to support healthcare providers in optimizing patient care across the entire T1D journey.",
      icon: <Beaker size={20} className="text-blue-600" />
    },
    {
      title: "Educational Materials",
      description: "Downloadable educational content, infographics, and patient education materials for T1D care providers.",
      icon: <Download size={20} className="text-blue-600" />
    }
  ]

  return (
    <section ref={ref} id="resource-center" className="pt-16 pb-4 bg-gradient-to-br from-white via-slate-50/30 to-blue-50/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4s"></div>
        
        {/* Scientific Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #0066CC 2px, transparent 2px), radial-gradient(circle at 75% 75%, #00A6B8 2px, transparent 2px)`,
            backgroundSize: '50px 50px, 80px 80px'
          }} />
        </div>
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
            <Database size={16} />
            <span>Knowledge Repository</span>
          </div>

          <h2 className="heading-font text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Resource{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Center
            </span>
          </h2>
          <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed mb-8">
            Your comprehensive hub for T1D research, clinical guidelines, and educational resources to support evidence-based patient care.
          </p>
          
          {/* View Resources Button */}
          <motion.button
            onClick={() => setShowResources(!showResources)}
            className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            {showResources ? 'Hide Resources' : 'View Resources'}
          </motion.button>
        </motion.div>

        {/* Resource Placeholders - Collapsible Grid */}
        {showResources && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12"
          >
            {resourcePlaceholders.map((resource, index) => (
              <ResourcePlaceholder key={index} {...resource} index={index} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}