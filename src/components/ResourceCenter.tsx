'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FileText, ExternalLink, Award, Beaker, Database, Download } from 'lucide-react'

interface ResourceLink { title: string; href: string }
interface ResourceGroup { title: string; icon: React.ReactNode; items: ResourceLink[] }

export function ResourceCenter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const resources: ResourceGroup[] = [
    {
      title: 'Guidelines & Consensus',
      icon: <Award size={18} className="text-blue-700" />,
      items: [
        { title: 'AACE 2025 Clinical Practice Guideline for Dyslipidemia', href: 'https://pro.aace.com/clinical-guidance/2025-clinical-practice-guideline-pharmacologic-management-adults-dyslipidemia' },
        { title: 'NLA: Managing Hypercholesterolemia in Adults >75 without ASCVD', href: 'https://www.lipid.org/nla/managing-hypercholesterolemia-adults-older-75-years-without-history-atherosclerotic' },
      ]
    },
    {
      title: 'Lp(a) & Risk',
      icon: <Beaker size={18} className="text-teal-700" />,
      items: [
        { title: 'EHJ: Lp(a) as causal ASCVD risk factor', href: 'https://academic.oup.com/eurheartj/advance-article/doi/10.1093/eurheartj/ehaf190/8234482' },
        { title: 'NEJM: Trials and updates', href: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2415820' },
      ]
    },
    {
      title: 'Hypercholesterolemia & Population Data',
      icon: <Database size={18} className="text-indigo-700" />,
      items: [
        { title: 'Lancet: Global hypercholesterolemia prevalence', href: 'https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(25)00721-4/abstract' },
        { title: 'Eur J Prev Cardiol: Dyslipidemia updates', href: 'https://academic.oup.com/eurjpc/advance-article/doi/10.1093/eurjpc/zwaf313/8152583' },
      ]
    },
    {
      title: 'Trials & Reviews',
      icon: <FileText size={18} className="text-slate-700" />,
      items: [
        { title: 'NEJM: Cardiovascular outcomes updates', href: 'https://www.nejm.org/doi/10.1056/NEJMoa2409368' },
        { title: 'J Clin Lipidol: 2025 featured articles', href: 'https://www.lipidjournal.com/article/S1933-2874(25)00317-4/fulltext' },
        { title: 'PMC: Review articles', href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12186734/' },
      ]
    },
  ]

  return (
    <section ref={ref} id="resource-center" className="pt-16 pb-16 bg-gradient-to-br from-white via-slate-50/30 to-blue-50/20 relative overflow-hidden">
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
          className="text-center mb-10"
        >
          <h2 className="heading-font text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Resource <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Center</span>
          </h2>
          <p className="text-base lg:text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed">
            Curated links to guidelines, population data, Lp(a) insights, and trial updates. Links open in a new tab.
          </p>
        </motion.div>

        {/* Grouped Resources */}
        <div className="grid md:grid-cols-2 gap-6">
          {resources.map((group, gi) => (
            <motion.div
              key={gi}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: gi * 0.05 }}
              className="bg-white rounded-2xl border border-slate-200 p-5"
            >
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">{group.icon}</div>
                <div className="text-slate-900 font-semibold">{group.title}</div>
              </div>
              <ul className="space-y-2">
                {group.items.map((item, ii) => (
                  <li key={ii} className="flex items-center justify-between">
                    <span className="text-slate-800 text-sm leading-snug pr-3">{item.title}</span>
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 inline-flex items-center text-xs">Open <ExternalLink size={14} className="ml-1" /></a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}