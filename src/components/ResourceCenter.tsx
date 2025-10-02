'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FileText, ExternalLink, Award, Beaker, Database, Download, ChevronDown, ChevronUp } from 'lucide-react'

interface ResourceLink { 
  title: string; 
  href: string; 
  category: string;
  author?: string;
  date?: string;
  organization?: string;
}

interface ResourceGroup { 
  title: string; 
  icon: React.ReactNode; 
  items: ResourceLink[] 
}

export function ResourceCenter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [showResources, setShowResources] = useState(false)

  const resources: ResourceLink[] = [
    {
      title: 'AACE 2025 Clinical Practice Guideline for Dyslipidemia',
      href: 'https://pro.aace.com/clinical-guidance/2025-clinical-practice-guideline-pharmacologic-management-adults-dyslipidemia',
      category: 'Guidelines & Consensus',
      author: 'AACE Guidelines Committee',
      date: '2025 Jan',
      organization: 'American Association of Clinical Endocrinology'
    },
    {
      title: 'NLA: Managing Hypercholesterolemia in Adults >75 without ASCVD',
      href: 'https://www.lipid.org/nla/managing-hypercholesterolemia-adults-older-75-years-without-history-atherosclerotic',
      category: 'Guidelines & Consensus',
      author: 'NLA Expert Panel',
      date: '2025 Jan',
      organization: 'National Lipid Association'
    },
    {
      title: 'EHJ: Lp(a) as causal ASCVD risk factor',
      href: 'https://academic.oup.com/eurheartj/advance-article/doi/10.1093/eurheartj/ehaf190/8234482',
      category: 'Lp(a) & Risk Assessment',
      author: 'European Heart Journal',
      date: '2025 Jan',
      organization: 'European Society of Cardiology'
    },
    {
      title: 'NEJM: Trials and updates',
      href: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2415820',
      category: 'Lp(a) & Risk Assessment',
      author: 'NEJM Editorial Board',
      date: '2025 Jan',
      organization: 'New England Journal of Medicine'
    },
    {
      title: 'Lancet: Global hypercholesterolemia prevalence',
      href: 'https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(25)00721-4/abstract',
      category: 'Population Data & Epidemiology',
      author: 'Global Health Research',
      date: '2025 Jan',
      organization: 'The Lancet'
    },
    {
      title: 'Eur J Prev Cardiol: Dyslipidemia updates',
      href: 'https://academic.oup.com/eurjpc/advance-article/doi/10.1093/eurjpc/zwaf313/8152583',
      category: 'Population Data & Epidemiology',
      author: 'European Research Team',
      date: '2025 Jan',
      organization: 'European Journal of Preventive Cardiology'
    },
    {
      title: 'NEJM: Cardiovascular outcomes updates',
      href: 'https://www.nejm.org/doi/10.1056/NEJMoa2409368',
      category: 'Clinical Trials & Reviews',
      author: 'Cardiovascular Research Group',
      date: '2025 Jan',
      organization: 'New England Journal of Medicine'
    },
    {
      title: 'J Clin Lipidol: 2025 featured articles',
      href: 'https://www.lipidjournal.com/article/S1933-2874(25)00317-4/fulltext',
      category: 'Clinical Trials & Reviews',
      author: 'Journal Editorial Board',
      date: '2025 Jan',
      organization: 'Journal of Clinical Lipidology'
    },
    {
      title: 'PMC: Review articles',
      href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12186734/',
      category: 'Clinical Trials & Reviews',
      author: 'Research Consortium',
      date: '2025 Jan',
      organization: 'PubMed Central'
    }
  ]

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Guidelines & Consensus':
        return <Award size={18} className="text-blue-600" />
      case 'Lp(a) & Risk Assessment':
        return <Beaker size={18} className="text-teal-600" />
      case 'Population Data & Epidemiology':
        return <Database size={18} className="text-indigo-600" />
      case 'Clinical Trials & Reviews':
        return <FileText size={18} className="text-slate-600" />
      default:
        return <FileText size={18} className="text-slate-600" />
    }
  }

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

        {/* Toggle Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-8"
        >
          <button
            onClick={() => setShowResources(!showResources)}
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            {showResources ? 'Hide Resources' : 'View Resources'}
            {showResources ? (
              <ChevronUp size={20} className="ml-2" />
            ) : (
              <ChevronDown size={20} className="ml-2" />
            )}
          </button>
        </motion.div>

        {/* Resources Grid */}
        {showResources && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-[240px]"
              >
                {/* Icon and Title */}
                <div className="flex items-start space-x-3 mb-3">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    {getCategoryIcon(resource.category)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-slate-900 text-sm leading-tight mb-1 mt-1">
                      {resource.title}
                    </h3>
                    <p className="text-xs text-slate-600 mb-2">
                      {resource.category}
                    </p>
                  </div>
                </div>

                {/* Metadata - Fixed height for consistent positioning */}
                <div className="h-[60px] space-y-1">
                  <p className="text-xs text-slate-500">{resource.author}</p>
                  <p className="text-xs text-slate-500">{resource.date}</p>
                  <p className="text-xs text-slate-500">{resource.organization}</p>
                </div>

                {/* Bottom Section - Fixed position */}
                <div className="mt-auto">
                  {/* Divider Line */}
                  <div className="border-t border-gray-200 mb-4"></div>
                  
                  {/* Read More Link - Centered */}
                  <div className="text-center">
                    <a
                      href={resource.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 text-xs font-medium"
                    >
                      Read more
                      <ExternalLink size={12} className="ml-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}