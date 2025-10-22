'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { Globe2, Activity, AlertCircle, TrendingUp, Users, Calendar } from 'lucide-react'

interface StatItem {
  metric: string
  value: string
  notes?: string
}

interface StatCategory {
  id: string
  title: string
  icon: React.ReactNode
  color: string
  stats: StatItem[]
}

export function Statistics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [activeCategory, setActiveCategory] = useState('epidemiology')

  const categories: StatCategory[] = [
    {
      id: 'epidemiology',
      title: 'Epidemiology & Disease Burden',
      icon: <Globe2 size={20} />,
      color: 'from-blue-100 to-teal-100',
      stats: [
        { metric: 'Global Prevalence', value: '15–329 per million', notes: 'Varies widely by country/methodology' },
        { metric: 'Global Incidence', value: '1.7–28 per million/year', notes: 'Depends on age, antibody status' },
        { metric: 'U.S. Prevalence', value: '35.7 per 100,000', notes: 'Claims-based; may undercount' },
        { metric: 'U.S. Incidence', value: '4.3 per 100,000 annually', notes: 'Based on insurance claims' },
        { metric: 'Trend Over Time', value: 'Doubled since 1950s', notes: 'Better diagnosis, aging population' }
      ]
    },
    {
      id: 'subtypes',
      title: 'Subtypes & Distribution',
      icon: <Activity size={20} />,
      color: 'from-purple-100 to-pink-100',
      stats: [
        { metric: 'Generalized MG (gMG)', value: '~80% convert to gMG', notes: 'Most common form' },
        { metric: 'Ocular-only MG', value: '~50% present with ocular symptoms initially', notes: 'May progress to gMG' },
        { metric: 'AChR+ Antibody', value: '80–85%', notes: 'Most common antibody subtype' },
        { metric: 'MuSK Antibody', value: '5–10%', notes: 'Second most common subtype' }
      ]
    },
    {
      id: 'clinical',
      title: 'Clinical Course & Burden',
      icon: <AlertCircle size={20} />,
      color: 'from-orange-100 to-red-100',
      stats: [
        { metric: 'Fluctuating Muscle Weakness', value: '~90% of patients', notes: 'Signature disease trait' },
        { metric: 'Exacerbations/Relapses', value: '>30% within 1 year', notes: 'Definition varies by study' },
        { metric: 'Myasthenic Crisis', value: '15–20% historically', notes: 'Improved today with therapy' }
      ]
    },
    {
      id: 'outcomes',
      title: 'Outcomes & Mortality',
      icon: <TrendingUp size={20} />,
      color: 'from-teal-100 to-green-100',
      stats: [
        { metric: 'Historical Mortality Rate', value: '3–9%', notes: 'Lower today with modern treatment' },
        { metric: 'U.S. Mortality Trend (Men)', value: '+66% (1999–2022)', notes: 'Rising concern' },
        { metric: 'U.S. Mortality Trend (Women)', value: '+30% (1999–2022)', notes: 'Also increasing' },
        { metric: 'Life Expectancy', value: 'Near-normal with treatment', notes: 'With proper management' }
      ]
    },
    {
      id: 'gaps',
      title: 'Care Gaps',
      icon: <AlertCircle size={20} />,
      color: 'from-red-100 to-pink-100',
      stats: [
        { metric: 'Diagnostic Delay', value: 'Months to years', notes: 'Recognition issues' },
        { metric: 'Mis/Underdiagnosis', value: 'Qualitatively reported', notes: 'Hidden burden' },
        { metric: 'Treatment Utilization', value: 'Steroids, AChE inhibitors widely used', notes: 'Real-world practice patterns' }
      ]
    },
    {
      id: 'demographics',
      title: 'Demographics & Forecasts',
      icon: <Users size={20} />,
      color: 'from-indigo-100 to-purple-100',
      stats: [
        { metric: 'Future Prevalence', value: 'May double in coming decades', notes: 'Projected burden forecast' },
        { metric: 'Mean Age at Diagnosis', value: '67–68 years', notes: 'Peak age burden' },
        { metric: 'Sex Distribution (Young Onset)', value: 'More women', notes: 'Gender profile varies by age' },
        { metric: 'Sex Distribution (Late Onset)', value: 'More men', notes: 'Different pattern in older patients' }
      ]
    }
  ]

  const activeData = categories.find(cat => cat.id === activeCategory) || categories[0]

  return (
    <section ref={ref} id="disease-statistics" className="py-16 bg-gradient-to-br from-white via-slate-50/30 to-blue-50/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-font text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            gMG Disease <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Statistics</span>
          </h2>
          <p className="text-base lg:text-lg text-slate-700 max-w-5xl mx-auto leading-relaxed">
            Comprehensive data on prevalence, disease burden, clinical course, and care gaps in generalized Myasthenia&nbsp;Gravis.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 ease-in-out ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-slate-700 shadow-lg scale-105 border border-slate-200`
                    : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                {category.icon}
                <span className="text-sm text-center">{category.title}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Stats Display - Fixed Height Container */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 relative overflow-hidden" style={{ minHeight: '400px', paddingTop: '32px', paddingBottom: '32px', paddingLeft: '32px', paddingRight: '32px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeData.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.25, 
                      delay: index * 0.04,
                      ease: "easeOut"
                    }}
                    className={`bg-gradient-to-br ${activeData.color} rounded-xl p-6 border border-slate-200`}
                  >
                    <h3 className="text-sm font-semibold text-slate-600 mb-2 uppercase tracking-wide">
                      {stat.metric}
                    </h3>
                    <p className="text-2xl font-bold text-slate-900 mb-2">
                      {stat.value}
                    </p>
                    {stat.notes && (
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {stat.notes}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Legend/Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8 text-sm text-slate-500"
        >
          <p>Data compiled from multiple sources including epidemiological studies, clinical trials, and registry data.</p>
        </motion.div>
      </div>
    </section>
  )
}