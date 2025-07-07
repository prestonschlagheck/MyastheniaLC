'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, ArrowRight, ExternalLink, PlayCircle } from 'lucide-react'
import Image from 'next/image'

interface ActivityCardProps {
  title: string
  category: string
  credits: string
  image: string
  link: string
  index: number
}

interface SubActivityCardProps {
  title: string
  category: string
  credits: string
  image: string
  link: string
  index: number
}

function SubActivityCard({ title, category, credits, image, link, index }: SubActivityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      <div 
        onClick={() => window.open(link, '_blank')}
        className="bg-gray-50 hover:bg-white rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 overflow-hidden hover:shadow-md flex items-center p-4 space-x-4"
      >
        {/* Small Image */}
        <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
            {title}
          </h4>
          
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-3 text-xs text-gray-600">
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md font-medium">
                {category}
              </span>
            </div>
          </div>
        </div>

        {/* Arrow Icon */}
        <div className="flex-shrink-0">
          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
        </div>
      </div>
    </motion.div>
  )
}

function ActivityCard({ title, category, credits, image, link, index }: ActivityCardProps) {
  // Program episodes for each main activity
  const subActivities = index === 0 ? [
    {
      title: "A Global Health Crisis",
      category: "Episode",
      credits: "",
      image: "/img1.png",
      link: "https://reachmd.com/programs/cme/a-global-health-crisis/29928/"
    },
    {
      title: "Diagnosing Obesity: Beyond BMI",
      category: "Episode", 
      credits: "",
      image: "/img2.png",
      link: "https://reachmd.com/programs/cme/diagnosing-obesity-beyond-bmi/29930/"
    },
    {
      title: "Breaking the Bias: Addressing Stigma in Obesity Care",
      category: "Episode",
      credits: "",
      image: "/img3.png", 
      link: "https://reachmd.com/programs/cme/breaking-the-bias-addressing-stigma-in-obesity-care/29931/"
    },
    {
      title: "Pharmacotherapy in Obesity: Current and Emerging Options",
      category: "Episode",
      credits: "",
      image: "/img4.png",
      link: "https://reachmd.com/programs/cme/pharmacotherapy-in-obesity-current-and-emerging-options/29932/"
    },
    {
      title: "Personalized Obesity Management: A Comprehensive Approach",
      category: "Episode",
      credits: "",
      image: "/img5.png",
      link: "https://reachmd.com/programs/cme/personalized-obesity-management-a-comprehensive-approach/29933/"
    },
    {
      title: "The Power of Teamwork: Multidisciplinary Obesity Care",
      category: "Episode",
      credits: "",
      image: "/img6.png",
      link: "https://reachmd.com/programs/cme/the-power-of-teamwork-multidisciplinary-obesity-care/29934/"
    },
    {
      title: "The Power of Shared Decision-Making in Obesity Care",
      category: "Episode",
      credits: "",
      image: "/img7.png",
      link: "https://reachmd.com/programs/cme/the-power-of-shared-decision-making-in-obesity-care/29935/"
    },
    {
      title: "Regional Perspectives Deep Dive: Europe",
      category: "Episode",
      credits: "",
      image: "/img8.png",
      link: "https://reachmd.com/programs/cme/regional-perspectives-deep-dive-europe/29936/"
    },
    {
      title: "Regional Perspectives: China",
      category: "Episode",
      credits: "",
      image: "/img8.png",
      link: "https://reachmd.com/programs/cme/regional-perspectives-china/29937/"
    },
    {
      title: "Regional Perspectives: Japan",
      category: "Episode",
      credits: "",
      image: "/img8.png",
      link: "https://reachmd.com/programs/cme/regional-perspectives-japan/29938/"
    },
    {
      title: "Regional Perspectives: Brazil",
      category: "Episode",
      credits: "",
      image: "/img8.png",
      link: "https://reachmd.com/programs/cme/regional-perspectives-brazil/29939/"
    },
    {
      title: "Regional Perspectives: Saudi Arabia & UAE",
      category: "Episode",
      credits: "",
      image: "/img8.png",
      link: "https://reachmd.com/programs/cme/regional-perspectives-saudi-arabia-uae/29940/"
    },
    {
      title: "World Obesity Day: Call to Action",
      category: "Episode",
      credits: "",
      image: "/img9.png",
      link: "https://reachmd.com/programs/cme/world-obesity-day-call-to-action/32837/"
    }
  ] : [
    {
      title: "Introduction to GLP-1 Receptor Agonists",
      category: "Part 1",
      credits: "0.15",
      image: "/tab2.png",
      link: "https://example.com/part1"
    },
    {
      title: "Clinical Efficacy and Safety Profiles",
      category: "Part 2",
      credits: "0.20",
      image: "/tab2.png",
      link: "https://example.com/part2"
    },
    {
      title: "Managing Comorbidities with GLP-1 Therapy",
      category: "Part 3",
      credits: "0.15",
      image: "/tab2.png",
      link: "https://example.com/part3"
    }
  ];

  return (
    <div className="w-full">
      {/* Main Activity Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group cursor-pointer mb-8"
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

      {/* Sub-Activities */}
      <div className="w-full px-2">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-px bg-gray-300"></div>
          <span className="text-sm font-medium text-gray-600">Program Episodes</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>
        
        <div className="space-y-3">
          {subActivities.map((subActivity, subIndex) => (
            <SubActivityCard 
              key={subIndex} 
              {...subActivity} 
              index={subIndex} 
            />
          ))}
        </div>
      </div>
    </div>
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
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {activities.map((activity, index) => (
            <ActivityCard key={index} {...activity} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
} 