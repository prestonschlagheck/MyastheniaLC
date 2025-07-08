'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, ExternalLink } from 'lucide-react'
import Image from 'next/image'

interface ActivityCardProps {
  title: string
  category: string
  credits: string
  image: string
  link: string
  index: number
}

function ActivityCard({ title, category, credits, image, link, index }: ActivityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      <div 
        onClick={() => window.open(link, '_blank')}
        className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 group-hover:scale-[1.02] h-full flex flex-col"
      >
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {category}
            </span>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-blue-600/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="text-white text-center transform scale-90 group-hover:scale-100 transition-transform duration-300">
              <div className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 mx-auto">
                View Activity <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 flex-1 flex flex-col">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
            {title}
          </h3>

          {/* Meta Information */}
          <div className="flex items-center justify-between text-sm text-gray-600 mt-auto">
            <div className="flex items-center gap-1">
              <Award className="w-4 h-4" />
              <span>{credits} Credits</span>
            </div>
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
      title: "Transforming Global Obesity Care: Empowering Clinicians With Comprehensive Strategies From Early Diagnosis to Patient-Centered Treatments",
      category: "CME/CE",
      credits: "1.50",
      image: "/tab1.png",
      link: "https://reachmd.com/programs/cme/transforming-global-obesity-care-empowering-clinicians-with-comprehensive-strategies-from-early-diagnosis-to-patient-centered-treatments/29163/"
    },
    {
      title: "The Health Gains of Weight Loss: GLP-1 Receptor Agonists for Comprehensive, Long-Term Management of Obesity and Its Comorbidities",
      category: "CME/CE",
      credits: "0.50",
      image: "/tab2.png",
      link: "https://reachmd.com/programs/cme/the-health-gains-of-weight-loss-glp-1-receptor-agonists-for-comprehensive-long-term-management-of-obesity-and-its-comorbidities/29756/"
    },
    {
      title: "Revolutionizing Care for Patients With T2D and Obesity: From Pathophysiology to Personalized Treatments",
      category: "CME/CE",
      credits: "0.5",
      image: "/act3.png",
      link: "https://reachmd.com/programs/cme/revolutionizing-care-for-patients-with-t2d-and-obesity-from-pathophysiology-to-personalized-treatments/16467/"
    },
    {
      title: "Patient-Centered Communications and Shared Decision-Making in the Management of Obesity",
      category: "CME/CE",
      credits: "0.25",
      image: "/act4.png",
      link: "https://reachmd.com/programs/cme/patient-centered-communications-and-shared-decision-making-in-the-management-of-obesity/15361/"
    },
    {
      title: "Case Challenge in Obesity Medical Management",
      category: "CME/CE",
      credits: "0.25",
      image: "/act5.png",
      link: "https://reachmd.com/programs/cme/case-challenge-in-obesity-medical-management/15359/"
    },
    {
      title: "What You Need to Know About Weight-Loss Medications",
      category: "CME/CE",
      credits: "0.25",
      image: "/act6.png",
      link: "https://reachmd.com/programs/cme/what-you-need-to-know-about-weight-loss-medications/15360/"
    }
  ]

  return (
    <section ref={ref} id="educational-activities" className="py-8 lg:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Educational Activities
          </h2>
        </motion.div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {activities.map((activity, index) => (
            <ActivityCard key={index} {...activity} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
} 