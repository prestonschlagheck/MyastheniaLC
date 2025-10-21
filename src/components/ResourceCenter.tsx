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
      title: 'International Consensus Guidance for Management of Myasthenia Gravis (2020 Update)',
      href: 'https://www.neurology.org/doi/10.1212/wnl.0000000000011124',
      category: 'Core Clinical Guidance',
      author: 'International MG/COVID-19 Working Group',
      date: '2020',
      organization: 'Neurology'
    },
    {
      title: 'Cautionary Drugs in Myasthenia Gravis',
      href: 'https://myasthenia.org/wp-content/uploads/Portals/0/Cautionary%20Drugs.pdf',
      category: 'Core Clinical Guidance',
      author: 'Myasthenia Gravis Foundation of America',
      date: 'Updated Regularly',
      organization: 'MGFA'
    },
    {
      title: 'Practice Advisory: Thymectomy for Myasthenia Gravis (Practice Parameter Update) [PLACEHOLDER]',
      href: '#',
      category: 'Core Clinical Guidance',
      author: 'American Academy of Neurology',
      date: '2020',
      organization: 'AAN'
    },
    {
      title: 'Practice Parameter for Repetitive Nerve Stimulation and Single Fiber EMG Evaluation for MG',
      href: 'https://www.aanem.org/docs/default-source/documents/aanem/practice/guidelines/myastheniagravis_reaffirmed.pdf?sfvrsn=178424ec_3',
      category: 'Diagnostic Standards',
      author: 'American Association of Neuromuscular & Electrodiagnostic Medicine',
      date: 'Reaffirmed 2020',
      organization: 'AANEM'
    },
    {
      title: 'Clinical Guidance for Managing Meningococcal Disease Risk in Patients Receiving Complement Inhibitor Therapy',
      href: 'https://www.cdc.gov/meningococcal/hcp/clinical-guidance/complement-inhibitor.html',
      category: 'Safety & Monitoring',
      author: 'Centers for Disease Control and Prevention',
      date: '2024',
      organization: 'CDC'
    }
  ]

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Core Clinical Guidance':
        return <Award size={18} className="text-blue-600" />
      case 'Diagnostic Standards':
        return <Beaker size={18} className="text-teal-600" />
      case 'Safety & Monitoring':
        return <Database size={18} className="text-orange-600" />
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
          <p className="text-base lg:text-lg text-slate-700 max-w-6xl mx-auto leading-relaxed">
            Core clinical guidance, international consensus guidelines, diagnostic standards, and safety monitoring resources for gMG&nbsp;management.
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
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            {showResources ? 'Hide Resources' : 'View Resources'}
            {showResources ? (
              <ChevronUp size={20} className="ml-2" />
            ) : (
              <ChevronDown size={20} className="ml-2" />
            )}
          </button>
        </motion.div>

        {/* Resources Table */}
        {showResources && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-teal-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold w-2/5">Resource Title</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold w-1/6">Category</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold w-1/6">Organization</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold w-1/12">Date</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold w-1/12">Link</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {resources.map((resource, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="hover:bg-slate-50 transition-colors duration-200"
                    >
                      <td className="px-6 py-5 text-sm">
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            {getCategoryIcon(resource.category)}
                          </div>
                          <div>
                            <h3 className="font-semibold text-slate-900 leading-tight">
                              {resource.title}
                            </h3>
                            {resource.author && (
                              <p className="text-xs text-slate-500 mt-1">{resource.author}</p>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-sm text-slate-600">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                          {resource.category}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-sm text-slate-600">
                        {resource.organization}
                      </td>
                      <td className="px-6 py-5 text-sm text-slate-600">
                        {resource.date}
                      </td>
                      <td className="px-6 py-5 text-center">
                        <a
                          href={resource.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          <ExternalLink size={16} />
                        </a>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}