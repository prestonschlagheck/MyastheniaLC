'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FileText, ExternalLink, Calendar, TrendingUp, Award, Beaker, Database, ArrowRight, ChevronRight, Download } from 'lucide-react'

interface ResearchPaperProps {
  year: string
  authors: string
  journal: string
  title: string
  summary: string
  link: string
  index: number
  isHighlight?: boolean
}

function ResearchPaper({ year, authors, journal, title, summary, link, index, isHighlight = false }: ResearchPaperProps) {
  const handleClick = () => {
    window.open(link, '_blank')
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer"
      onClick={handleClick}
    >
      <div className={`relative p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl h-[400px] flex flex-col ${
        isHighlight 
          ? 'bg-gradient-to-br from-blue-50 to-teal-50 border-blue-200 hover:border-blue-300' 
          : 'bg-white border-slate-200 hover:border-blue-300'
      }`}>
        {/* Highlight Badge */}
        {isHighlight && (
          <div className="absolute -top-3 left-6">
            <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
              Featured Study
            </div>
          </div>
        )}

        {/* Header Row */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
              <FileText size={20} className="text-blue-600" />
            </div>
            <div>
              <div className="text-sm font-bold text-blue-600">{year}</div>
              <div className="text-xs text-slate-500">{authors.split(',')[0] + ' et al.'}</div>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-xs text-slate-400">
            <Database size={14} />
            <span className="uppercase tracking-wide font-medium">{journal}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-bold text-slate-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors text-lg">
          {title}
        </h3>

        {/* Summary/Key Finding */}
        <div className="bg-slate-50 rounded-xl p-4 mb-4 border border-slate-100 flex-1">
          <div className="flex items-start space-x-2">
            <TrendingUp size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-slate-700 leading-relaxed">
              {summary}
            </p>
          </div>
        </div>

        {/* Action Row */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
          <div className="text-xs text-slate-500">
            {authors.length > 50 ? authors.substring(0, 50) + '...' : authors}
          </div>
          <div className="flex items-center space-x-1 text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            <span>Read Study</span>
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

  const researchPapers = [
    {
      year: "2025",
      authors: "Humbert M, McLaughlin VV, Badesch DB, et al.; ZENITH Trial Investigators",
      journal: "N Engl J Med",
      title: "Sotatercept in patients with pulmonary arterial hypertension at high risk for death",
      summary: "ZENITH high-risk cohort: +46 m in 6-min walk and 84% reduction in clinical-worsening vs placebo at 24 wk.",
      link: "https://pubmed.ncbi.nlm.nih.gov",
      isHighlight: true
    },
    {
      year: "2025",
      authors: "Humbert M, McLaughlin VV, Badesch DB, et al.",
      journal: "N Engl J Med",
      title: "Sotatercept in High-Risk PAH Patients - Full Citation",
      summary: "N Engl J Med. 2025;392(20):1987-2000. doi:10.1056/NEJMoa2415160. PMID 40167274.",
      link: "https://pubmed.ncbi.nlm.nih.gov",
    },
    {
      year: "2025",
      authors: "Zhou H, et al.",
      journal: "Pulm Pharmacol Ther",
      title: "Pooled Analysis of Sotatercept Efficacy Across Functional Classes",
      summary: "Pooled analysis affirms consistent efficacy & safety across functional classes II–III; most common AEs were telangiectasia and headache.",
      link: "https://pubmed.ncbi.nlm.nih.gov",
    },
    {
      year: "2023",
      authors: "Chin K, et al.",
      journal: "J Am Coll Cardiol",
      title: "Fixed-Dose Combination Therapy in PAH (A-DUE RCT)",
      summary: "FDC cut pulmonary vascular resistance (PVR) by 45% vs 24–28% with monotherapy after 16 wk.",
      link: "https://pubmed.ncbi.nlm.nih.gov",
      isHighlight: true
    },
    {
      year: "2024",
      authors: "Grünig E, Jansa P, Fan F, et al.",
      journal: "J Am Coll Cardiol",
      title: "Randomized trial of macitentan/tadalafil single-tablet combination therapy for pulmonary arterial hypertension",
      summary: "J Am Coll Cardiol. 2024;83(4):473-484. doi:10.1016/j.jacc.2023.10.045. PMID 38267108.",
      link: "https://pubmed.ncbi.nlm.nih.gov",
    },
    {
      year: "2025",
      authors: "Dejesus J, et al.",
      journal: "Pulm Circ",
      title: "3-Month Open-Label Extension Study of Novel PAH Therapy",
      summary: "3-month open-label extension shows sustained PVR reduction and no new safety signals; supports long-term daily use.",
      link: "https://pmc.ncbi.nlm.nih.gov",
    },
    {
      year: "2024",
      authors: "Simonneau G, et al.",
      journal: "Lancet Resp Med",
      title: "Inhaled Seralutinib in Adults with PAH (TORREY Phase 2)",
      summary: "Inhaled seralutinib ↓PVR by 14% on top of background triple therapy and trended to improved 6MWD; generally well tolerated.",
      link: "https://pubmed.ncbi.nlm.nih.gov",
      isHighlight: true
    },
    {
      year: "2024",
      authors: "Frantz RP, McLaughlin VV, Sahay S, et al.",
      journal: "Lancet Respir Med",
      title: "Seralutinib in adults with pulmonary arterial hypertension (TORREY): a randomized, double-blind, placebo-controlled phase 2 trial",
      summary: "Lancet Respir Med. 2024;12(7):523-534. doi:10.1016/S2213-2600(24)00072-9. PMID 38705167.",
      link: "https://pubmed.ncbi.nlm.nih.gov",
    },
    {
      year: "2024",
      authors: "Kobayashi K, et al.",
      journal: "Clin Pharmacol Drug Dev",
      title: "Drug-Drug Interaction Studies in PAH Therapy",
      summary: "Two Phase 1 DDI studies show low systemic exposure and no clinically meaningful CYP interactions—important for multi-drug PAH regimens.",
      link: "https://pubmed.ncbi.nlm.nih.gov",
    },
    {
      year: "2023",
      authors: "Gauani H, Baker T, Li Z, et al.",
      journal: "Pharmaceutics",
      title: "Effect of inhalation profile on delivery of treprostinil palmitil inhalation powder",
      summary: "Pharmaceutics. 2023;15(3):934. doi:10.3390/pharmaceutics15030934. PMID 36986795.",
      link: "https://pubmed.ncbi.nlm.nih.gov",
    },
    {
      year: "2023",
      authors: "Durant T, et al.",
      journal: "Pharmaceutics",
      title: "Aerosol Performance Study of Treprostinil Palmitil",
      summary: "Aerosol-performance study demonstrates stable emitted dose across realistic inhalation profiles, supporting once-daily dosing now in Phase 2b.",
      link: "https://pubmed.ncbi.nlm.nih.gov",
    },
    {
      year: "2024",
      authors: "INSPIRE Study Group",
      journal: "Multiple Centers",
      title: "INSPIRE Safety Extension Study",
      summary: "12-month INSPIRE safety extension confirms durable tolerability and clinical stability on DPI treprostinil.",
      link: "https://pubmed.ncbi.nlm.nih.gov",
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

          <h2 className="heading-font text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Resource{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Center
            </span>
          </h2>
          <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed mb-8">
            Stay at the forefront of PAH research with our curated collection of landmark studies, breakthrough therapies, and clinical trial results that are shaping the future of patient care.
          </p>
          

          {/* View Resources Button */}
          <motion.button
            onClick={() => setShowResources(!showResources)}
            className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            {showResources ? 'Hide Resources' : 'View Resources'}
          </motion.button>
        </motion.div>



        {/* Research Papers - Collapsible Grid */}
        {showResources && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          >
            {researchPapers.map((paper, index) => (
              <ResearchPaper key={index} {...paper} index={index} />
            ))}
          </motion.div>
        )}


      </div>
    </section>
  )
} 