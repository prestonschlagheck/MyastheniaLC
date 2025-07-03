'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FileText, ExternalLink, Calendar, Users, ChevronDown, ChevronUp } from 'lucide-react'

interface ResourceCardProps {
  title: string
  authors: string
  publication: string
  date: string
  link: string
  index: number
}

function ResourceCard({ title, authors, publication, date, link, index }: ResourceCardProps) {
  const handleClick = () => {
    window.open(link, '_blank')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group cursor-pointer"
      onClick={handleClick}
    >
      <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-200 transition-all duration-300 h-full flex flex-col group-hover:scale-[1.01]">
        {/* Header */}
        <div className="flex items-start gap-3 mb-4">
          <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
            <FileText className="w-5 h-5 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">
              {title}
            </h3>
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-100 rounded">
            <ExternalLink className="w-4 h-4 text-gray-500" />
          </div>
        </div>

        {/* Authors */}
        <p className="text-sm text-gray-600 mb-3 overflow-hidden">
          {authors}
        </p>

        {/* Meta */}
        <div className="flex flex-wrap gap-4 mb-4 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            <span>{publication}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-4 border-t border-gray-100 mt-auto">
          <button className="flex-1 bg-blue-50 hover:bg-blue-100 text-blue-600 px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-1">
            <ExternalLink className="w-4 h-4" />
            Read More
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export function ResourceCenter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [isExpanded, setIsExpanded] = useState(false)

  const resources = [
    {
      title: "Introduction and methodology: Standards of Care in Overweight and Obesity-2025",
      authors: "Bannuru RR; ADA Professional Practice Committee (PPC).",
      publication: "BMJ Open Diabetes Res Care",
      date: "2025 May 16",
      link: "https://pubmed.ncbi.nlm.nih.gov/40379435/",
      index: 0
    },
    {
      title: "Once-Monthly Maridebart Cafraglutide for the Treatment of Obesity - A Phase 2 Trial",
      authors: "Jastreboff AM, Ryan DH, Bays HE, Ebeling PR, Mackowski MG, Philipose N, Ross L, Liu Y, Burns CE, Abbasi SA, Pannacciulli N; MariTide Phase 2 Obesity Trial Investigators.",
      publication: "N Engl J Med",
      date: "2025 Jun 23",
      link: "https://pubmed.ncbi.nlm.nih.gov/40549887/",
      index: 1
    },
    {
      title: "Effects of Semaglutide on Chronic Kidney Disease in Patients with Type 2 Diabetes",
      authors: "Perkovic V, Tuttle KR, Rossing P, Mahaffey KW, Mann JFE, Bakris G, Baeres FMM, Idorn T, Bosch-Traberg H, Lausvig NL, Pratley R; FLOW Trial Committees and Investigators.",
      publication: "N Engl J Med",
      date: "2024 Jul 11",
      link: "https://pubmed.ncbi.nlm.nih.gov/38785209/",
      index: 2
    },
    {
      title: "Tirzepatide for Obesity Treatment and Diabetes Prevention",
      authors: "Jastreboff AM, le Roux CW, Stefanski A, Aronne LJ, Halpern B, Wharton S, Wilding JPH, Perreault L, Zhang S, Battula R, Bunck MC, Ahmad NN, Jouravskaya I; SURMOUNT-1 Investigators.",
      publication: "N Engl J Med",
      date: "2025 Mar 6",
      link: "https://pubmed.ncbi.nlm.nih.gov/39536238/",
      index: 3
    },
    {
      title: "Tirzepatide for the Treatment of Obstructive Sleep Apnea and Obesity",
      authors: "Malhotra A, Grunstein RR, Fietze I, Weaver TE, Redline S, Azarbarzin A, Sands SA, Schwab RJ, Dunn JP, Chakladar S, Bunck MC, Bednarik J; SURMOUNT-OSA Investigators.",
      publication: "N Engl J Med",
      date: "2024 Oct 3",
      link: "https://pubmed.ncbi.nlm.nih.gov/38912654/",
      index: 4
    },
    {
      title: "Long-term weight loss effects of semaglutide in obesity without diabetes in the SELECT trial",
      authors: "Ryan DH, Lingvay I, Deanfield J, Kahn SE, Barros E, Burguera B, Colhoun HM, Cercato C, Dicker D, Horn DB, Hovingh GK, Jeppesen OK, Kokkinos A, Lincoff AM, Meyhöfer SM, Oral TK, Plutzky J, van Beek AP, Wilding JPH, Kushner RF.",
      publication: "Nat Med",
      date: "2024 Jul",
      link: "https://pubmed.ncbi.nlm.nih.gov/38740993/",
      index: 5
    }
  ]

  return (
    <section ref={ref} className="py-8 lg:py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Resource Center
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Discover a curated collection of foundational, practical, and real-world educational resources at your fingertips. Click on a link to get started.
          </p>

          {/* Toggle Button */}
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 mx-auto"
          >
            {isExpanded ? 'Hide Resources' : 'Click to View Resources'}
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </motion.button>
        </motion.div>

        {/* Resources Grid - Collapsible */}
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {resources.map((resource, index) => (
              <ResourceCard key={index} {...resource} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
} 