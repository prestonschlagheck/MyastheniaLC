'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { BarChart3, Users, TrendingUp, Heart, Calendar, DollarSign, Activity, ChevronDown, ChevronUp } from 'lucide-react'

interface StatisticCardProps {
  icon: React.ReactNode
  value: string
  description: string
  index: number
  color: string
}

function StatisticCard({ icon, value, description, index, color }: StatisticCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className={`relative ${color} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 group-hover:scale-105`}>
        <div className="flex items-start space-x-4">
          <div className="p-3 bg-white/20 rounded-xl">
            {icon}
          </div>
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
              className="text-2xl lg:text-3xl font-bold text-white mb-2"
            >
              {value}
            </motion.div>
            <p className="text-white/90 text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Statistics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [showReferences, setShowReferences] = useState(false)

  const statistics = [
    {
      icon: <Users size={28} className="text-white" />,
      value: "9.5M",
      description: "people are living with T1D globally - 1.9M are under 20 years old; 7.6M adults",
      color: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      icon: <TrendingUp size={28} className="text-white" />,
      value: "14.7M",
      description: "projected T1D population for 2040",
      color: "bg-gradient-to-br from-blue-600 to-blue-700"
    },
    {
      icon: <DollarSign size={28} className="text-white" />,
      value: "$84.4B-$479B",
      description: "estimated global economic burden of T1D",
      color: "bg-gradient-to-br from-slate-500 to-slate-600"
    },
    {
      icon: <Calendar size={28} className="text-white" />,
      value: "32 years",
      description: "healthy years of life lost per person living with T1D when factoring in treatments and disease management",
      color: "bg-gradient-to-br from-slate-600 to-slate-700"
    },
    {
      icon: <Heart size={28} className="text-white" />,
      value: "1.98M",
      description: "more people could be alive in 2040 if everyone globally had access to insulin, test strips, and good self-management tools",
      color: "bg-gradient-to-br from-teal-500 to-teal-600"
    },
    {
      icon: <Activity size={28} className="text-white" />,
      value: "174,000",
      description: "deaths worldwide predicted to be attributable to T1D",
      color: "bg-gradient-to-br from-teal-600 to-teal-700"
    }
  ]

  const improvementStats = [
    {
      icon: <BarChart3 size={28} className="text-white" />,
      value: "1.3M → 3.6M",
      description: "people with T1D worldwide who lived to age 65+ (1990 vs 2019) - nearly tripled",
      color: "bg-gradient-to-br from-blue-400 to-blue-500"
    },
    {
      icon: <TrendingUp size={28} className="text-white" />,
      value: "25%",
      description: "reduction in death rates over the past decades",
      color: "bg-gradient-to-br from-teal-400 to-teal-500"
    }
  ]

  return (
    <section ref={ref} id="t1d-statistics" className="py-12 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl"
        />
        
        {/* Medical grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-r border-white/20 h-full" />
            ))}
          </div>
          <div className="absolute inset-0 grid grid-rows-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="border-b border-white/20 w-full" />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-sm rounded-full px-4 py-2 text-blue-200 text-sm font-medium mb-4">
            <BarChart3 size={16} />
            <span>Global Impact Data</span>
          </div>
          <h2 className="heading-font text-3xl lg:text-4xl font-bold text-white mb-4">
            Type 1 Diabetes{' '}
            <span className="bg-gradient-to-r from-blue-300 to-teal-300 bg-clip-text text-transparent">
              Global Statistics
            </span>
          </h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Understanding the global impact of Type 1 Diabetes and the critical need for improved care and access to treatment.
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {statistics.map((stat, index) => (
            <StatisticCard key={index} {...stat} index={index} />
          ))}
        </div>

        {/* Improvement Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mb-8"
        >
          <div className="text-center mb-6">
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">
              While things have improved, the ability to{' '}
              <span className="bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
                IMPACT change
              </span>
              {' '}is needed
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {improvementStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <div className={`relative ${stat.color} rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 group-hover:scale-105 h-36 flex flex-col justify-center`}>
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-white/20 rounded-lg">
                      {stat.icon}
                    </div>
                    <div className="flex-1">
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                        className="text-xl lg:text-2xl font-bold text-white mb-2"
                      >
                        {stat.value}
                      </motion.div>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* References Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-4"
        >
          <button
            onClick={() => setShowReferences(!showReferences)}
            className="flex items-center justify-between w-full text-left"
          >
            <h4 className="text-base font-semibold text-white">References</h4>
            {showReferences ? (
              <ChevronUp size={18} className="text-white" />
            ) : (
              <ChevronDown size={18} className="text-white" />
            )}
          </button>
          
          {showReferences && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-3 space-y-2 text-xs text-white/80"
            >
              <p>
                <span className="font-medium">1</span> Ogle GD, Wang F, Haynes A, et al. Global type 1 diabetes prevalence, incidence, and mortality estimates 2025: Results from the International diabetes Federation Atlas, 11th Edition, and the T1D Index Version 3.0. Diabetes Res Clin Pract. 2025 Jul;225:112277.
              </p>
              <p>
                <span className="font-medium">2</span> Ferranna, M., et al. (2025, May). The Global Economic Burden of Type 1 Diabetes: Current Estimates and Projections to 2040 [Poster presentation]. ISPOR 2025 Conference.
              </p>
              <p>
                <span className="font-medium">3</span> Yang K, Yang X, Jin C, et al. Global burden of type 1 diabetes in adults aged 65 years and older, 1990-2019: population based study. BMJ. 2024 Jun 12;385:e078432.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}