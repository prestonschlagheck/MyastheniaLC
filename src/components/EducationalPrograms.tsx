'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { BookOpen, ExternalLink, Heart, Beaker } from 'lucide-react'

interface ActivityLink { title: string; href?: string; comingSoon?: boolean }
interface ActivityGroup { title: string; description: string; icon: React.ReactNode; items: ActivityLink[] }

function ActivityCard({ group, index }: { group: ActivityGroup; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200 bg-white h-full flex flex-col overflow-hidden">
        <div className="px-5 pt-4 pb-3 bg-gradient-to-r from-blue-50 to-teal-50 border-b border-slate-200 rounded-t-3xl">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
              {group.icon}
            </div>
            <h3 className="text-lg font-bold text-slate-900">{group.title}</h3>
          </div>
          <div className="text-slate-600 text-sm mt-1">{group.description}</div>
        </div>
        <ul className="space-y-2 mt-1 px-5 py-4">
          {group.items.map((item, i) => (
            <li key={i} className="flex items-start justify-between">
              <span className="text-slate-800 text-sm leading-snug pr-3">
                {item.title}
              </span>
              {item.comingSoon ? (
                <span className="text-xs text-slate-400">Coming soon</span>
              ) : (
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 inline-flex items-center text-xs">
                  Open <ExternalLink size={14} className="ml-1" />
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export function EducationalPrograms() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const groups: ActivityGroup[] = [
    {
      title: 'FCS & Severe Hypertriglyceridemia',
      description: 'Therapeutic advances and unmet needs in APOC3 inhibition and FCS/SHTG.',
      icon: <Beaker size={20} className="text-blue-700" />,
      items: [
        { title: 'Phase 3 study results of plozasiran in patients with FCS (Arrowhead)', comingSoon: true },
        { title: 'APOC3 inhibition: New frontiers in managing patients with FCS & SHTG (CME)', href: 'https://reachmd.com/programs/cme/apoc3-inhibition-new-frontiers-managing-patients-with-fcs-shtg/20307/' },
        { title: 'FCS & SHTG: Are we meeting the need? (CME)', href: 'https://reachmd.com/programs/cme/fcs-and-shtg-are-we-meeting-need/20306/' },
        { title: 'Transforming cardiovascular care', comingSoon: true },
      ]
    },
    {
      title: 'CETP Inhibition & Obicetrapib (ESC 2025)',
      description: 'Efficacy and implications of CETP inhibition across diverse backgrounds.',
      icon: <Heart size={20} className="text-blue-700" />,
      items: [
        { title: 'Efficacy of obicetrapib across diverse regimens (BROOKLYN/BROADWAY pooled)', href: 'https://reachmd.com/clinical-practice/cardiology/efficacy-of-obicetrapib-across-diverse-background-lipid-lowering-regimens-pooled-broadway-brooklyn-analyses/36582/' },
        { title: 'CETP inhibition & obicetrapib: A new era in lipid management', href: 'https://reachmd.com/clinical-practice/cardiology/cetp-inhibition-and-obicetrapib-a-new-era-in-lipid-management/37123/' },
        { title: 'CETP inhibition: Implications for cardiovascular event prevention', href: 'https://reachmd.com/clinical-practice/cardiology/cetp-inhibition-with-obicetrapib-implications-for-cardiovascular-event-prevention/37124/' },
      ]
    },
    {
      title: 'LDL-C: Novel Therapies & Clinical Choices',
      description: 'Placing novel agents in the LDL-C treatment landscape.',
      icon: <BookOpen size={20} className="text-blue-700" />,
      items: [
        { title: 'Clinical choices in managing LDL-C: Where do novel therapies fit in? (CME)', href: 'https://pace-cme.org/programs/cme/clinical-choices-in-managing-ldl-c-where-do-novel-therapies-fit-in/26362/' },
        { title: 'Exploring CETP as a therapeutic target (CME)', href: 'https://pace-cme.org/programs/cme/innovating-the-clinical-management-of-ldl-c-exploring-cetp-as-therapeutic-target/24557/' },
        { title: 'Transforming cardiovascular care', comingSoon: true },
      ]
    },
    {
      title: "Women's Heart Health",
      description: 'Focused lipid education for cardiovascular health in women.',
      icon: <Heart size={20} className="text-blue-700" />,
      items: [
        { title: 'LOVE STORY: Lipid Education for Women’s Heart Health (CME)', href: 'https://reachmd.com/programs/cme/love-story-lipid-education-for-womens-heart-health/26721/' },
      ]
    },
  ]

  return (
    <section ref={ref} id="activities" className="py-16 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
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
          <h2 className="heading-font text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Curated{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Activities</span>
          </h2>
          <p className="text-base lg:text-lg text-slate-700 max-w-6xl mx-auto leading-relaxed text-center">
            Explore CME and clinical practice programs across FCS/SHTG, CETP/obicetrapib, LDL-C therapies, and women’s heart health.
          </p>
        </motion.div>

        {/* Activity Groups */}
        <div className="grid md:grid-cols-2 gap-6">
          {groups.map((group, index) => (
            <ActivityCard key={index} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}