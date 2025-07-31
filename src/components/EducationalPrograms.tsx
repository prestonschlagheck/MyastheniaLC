'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, ExternalLink, Calendar, Clock, Users, Stethoscope, Play, BookOpen, AlertTriangle, FileText } from 'lucide-react'
import Image from 'next/image'

interface ActivityCardProps {
  title: string
  credits: string
  segmentId: string
  link: string
  thumbnail: string
  expirationDate?: string
  index: number
}

function ActivityCard({ title, credits, segmentId, link, thumbnail, expirationDate, index }: ActivityCardProps) {
  // Check if expiring soon (within 3 months)
  const isExpiringSoon = () => {
    if (!expirationDate) return false
    const expDate = new Date(expirationDate)
    const threeMonthsFromNow = new Date()
    threeMonthsFromNow.setMonth(threeMonthsFromNow.getMonth() + 3)
    return expDate <= threeMonthsFromNow
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group cursor-pointer"
    >
      <div 
        onClick={() => window.open(link, '_blank')}
        className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-blue-300 group-hover:scale-[1.02] h-full flex flex-col relative"
      >
        {/* Expiring Soon Tag */}
        {expirationDate && isExpiringSoon() && (
          <div className="absolute top-3 right-3 z-20">
            <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg flex items-center space-x-1">
              <AlertTriangle size={12} />
              <span>Expiring Soon</span>
            </div>
          </div>
        )}

        {/* Thumbnail */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={`/${thumbnail}`}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-xl">
              <Play size={16} fill="currentColor" />
              <span>Start Learning</span>
              <ExternalLink size={14} />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Header Info */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2 text-blue-600">
              <div className="p-1.5 bg-blue-100 rounded-lg">
                <Stethoscope size={14} />
              </div>
              <span className="text-xs font-medium">CME Activity</span>
            </div>
            <div className="text-xs text-slate-500 font-mono">#{segmentId}</div>
          </div>

          {/* Title */}
          <h3 className="font-bold text-slate-900 text-lg leading-tight mb-4 group-hover:text-blue-600 transition-colors line-clamp-3">
            {title}
          </h3>

          {/* Credits and Expiration */}
          <div className="flex items-center justify-between text-sm mt-auto">
            <div className="flex items-center space-x-1 text-amber-600">
              <Award size={16} />
              <span className="font-semibold">{credits} Credit{credits !== '1.00' ? 's' : ''}</span>
            </div>
            {expirationDate && (
              <div className="flex items-center space-x-1 text-slate-500">
                <Calendar size={14} />
                <span className="text-xs">Expires {expirationDate}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function EducationalPrograms() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const activities = [
    {
      title: "Advancing Patient-Centered Care in PAH",
      credits: "1.00",
      segmentId: "32720",
      thumbnail: "act1.png",
      link: "https://reachmd.com/programs/cme/advancing-patient-centered-care-in-pah/32720/"
    },
    {
      title: "PH Management in Unique Patients and Conditions",
      credits: "1.00",
      segmentId: "36096",
      thumbnail: "act2.png",
      link: "https://reachmd.com/programs/cme/ph-management-in-unique-patients-and-conditions/36096/"
    },
    {
      title: "New and Emerging PAH Therapies and Approaches: A Mixture of Hope and Complexity",
      credits: "1.00",
      segmentId: "36095",
      thumbnail: "act3.png",
      link: "https://reachmd.com/programs/cme/new-and-emerging-pah-therapies-and-approaches-a-mixture-of-hope-and-complexity/36095/"
    },
    {
      title: "Pulmonary Hypertension: Getting the Right Diagnosis and Knowing When to Refer",
      credits: "1.00",
      segmentId: "36094",
      thumbnail: "act4.png",
      link: "https://reachmd.com/programs/cme/pulmonary-hypertension-getting-the-right-diagnosis-and-knowing-when-to-refer/36094/"
    },
    {
      title: "Right Heart Catheterization: Mastery of Precision Techniques",
      credits: "1.00",
      segmentId: "30017",
      thumbnail: "act5.png",
      expirationDate: "01/21/2026",
      link: "https://reachmd.com/programs/cme/right-heart-catheterization-mastery-of-precision-techniques/30017/"
    },
    {
      title: "Pulmonary Hypertension: Comorbidities With PAH and Group 2 PH",
      credits: "1.00",
      segmentId: "28869",
      thumbnail: "act6.png",
      expirationDate: "12/25/2025",
      link: "https://reachmd.com/programs/cme/pulmonary-hypertension-comorbidities-with-pah-and-group-2-ph/28869/"
    },
    {
      title: "Pulmonary Hypertension Management: Practice Trends and Updates",
      credits: "1.00",
      segmentId: "28868",
      thumbnail: "act7.png",
      expirationDate: "12/31/2025",
      link: "https://reachmd.com/programs/cme/pulmonary-hypertension-management-practice-trends-and-updates/28868/"
    },
    {
      title: "Pulmonary Hypertension: Diagnosis, Management, and Updates – Chairperson's Perspective",
      credits: "0.25",
      segmentId: "26626",
      thumbnail: "act8.png",
      expirationDate: "12/31/2025",
      link: "https://reachmd.com/programs/cme/pulmonary-hypertension-diagnosis-management-and-updates-chairpersons-perspective/26626/"
    },
    {
      title: "Risk Stratification Refinements with Inclusion of Hemodynamic Variables at Follow-up in Patients with Pulmonary Arterial Hypertension",
      credits: "1.50",
      segmentId: "26513",
      thumbnail: "act9.png",
      expirationDate: "09/26/2025",
      link: "https://reachmd.com/programs/cme/risk-stratification-refinements-with-inclusion-of-hemodynamic-variables-at-follow-up-in-patients-with-pulmonary-arterial-hypertension/26513/"
    },
    {
      title: "Integrating Evidence for Improved Outcomes in PH",
      credits: "1.50",
      segmentId: "24598",
      thumbnail: "act10.png",
      expirationDate: "09/26/2025",
      link: "https://reachmd.com/programs/cme/integrating-evidence-for-improved-outcomes-in-ph/24598/"
    },
    {
      title: "Update in Pediatric Pulmonary Hypertension",
      credits: "1.50",
      segmentId: "26982",
      thumbnail: "act11.png",
      expirationDate: "09/26/2025",
      link: "https://reachmd.com/programs/cme/update-in-pediatric-pulmonary-hypertension/26982/"
    },
    {
      title: "The Promise of Sotatercept in PAH",
      credits: "1.50",
      segmentId: "26514",
      thumbnail: "act12.png",
      expirationDate: "09/26/2025",
      link: "https://reachmd.com/programs/cme/the-promise-of-sotatercept-in-pah/26514/"
    },
    {
      title: "Pulmonary Hypertension for Advanced Practice Providers: Risk Stratification and Diagnosis to Enhance Quality of Care and Outcomes",
      credits: "1.00",
      segmentId: "27146",
      thumbnail: "act13.png",
      expirationDate: "10/31/2025",
      link: "https://reachmd.com/programs/cme/pulmonary-hypertension-for-advanced-practice-providers-risk-stratification-and-diagnosis-to-enhance-quality-of-care-and-outcomes/27146/"
    },
    {
      title: "Updates From the 7th World Symposium Task Force",
      credits: "1.00",
      segmentId: "24597",
      thumbnail: "act14.png",
      expirationDate: "10/11/2025",
      link: "https://reachmd.com/programs/cme/updates-from-the-7th-world-symposium-task-force/24597/"
    }
  ]

  return (
    <section ref={ref} id="educational-activities" className="py-4 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse animation-delay-3s"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Featured Toolkit Download */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 border-2 border-blue-200 rounded-2xl p-6 max-w-2xl mx-auto text-center">
              <h3 className="font-bold text-slate-900 mb-1">The Fundamentals of Pulmonary Hypertension</h3>
              <p className="text-sm text-slate-600 mb-3">Essential Toolkit - Comprehensive educational slides and references</p>
              <button 
                onClick={() => window.open('/MMC_Toolkit_Flashcards_10-3 1.pdf', '_blank')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300 flex items-center justify-center space-x-2 mx-auto"
              >
                <FileText size={16} />
                <span>Download PDF Toolkit</span>
              </button>
            </div>
          </motion.div>
          
          <h2 className="heading-font text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Educational{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Activities
            </span>
          </h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Advance your expertise with our comprehensive collection of ACCME-accredited CME activities, featuring the latest research, expert insights, and evidence-based approaches in PAH care.
          </p>
        </motion.div>



        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <ActivityCard key={index} {...activity} index={index} />
          ))}
        </div>





      </div>
    </section>
  )
} 