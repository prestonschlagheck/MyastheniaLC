'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { BookOpen, ExternalLink, Heart, Beaker } from 'lucide-react'
import Image from 'next/image'

interface Activity { 
  title: string; 
  icon: React.ReactNode; 
  href: string;
  category: string;
  imageUrl?: string;
}

function ActivityCard({ activity, index }: { activity: Activity; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <a 
        href={activity.href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200 bg-white h-full overflow-hidden group-hover:scale-105"
      >
        {/* Image Section */}
        <div className="relative h-44 overflow-hidden rounded-t-3xl bg-gradient-to-br from-blue-100 to-slate-100">
          {activity.imageUrl ? (
            <Image
              src={activity.imageUrl}
              alt={activity.title}
              fill
              className="object-cover"
              quality={100}
              priority={index < 4}
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center text-slate-500 p-6">
                <div className="text-4xl mb-2">📋</div>
                <p className="text-xs font-medium">Image Placeholder</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Gradient Divider Line */}
        <div className="h-1 bg-gradient-to-r from-blue-600 to-teal-600"></div>
        
        {/* Content Section */}
        <div className="p-5">
          {/* Category */}
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center">
              {activity.icon}
            </div>
            <span className="text-slate-500 text-xs font-medium uppercase tracking-wide">
              {activity.category}
            </span>
          </div>
          
          {/* Title */}
          <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
            {activity.title}
          </h3>
          
        </div>
      </a>
    </motion.div>
  )
}

export function EducationalPrograms() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const activities: Activity[] = [
    {
      title: 'Treatment Advances in Generalized Myasthenia Gravis: Addressing the Nuances of Its Underlying Immunopathology',
      icon: <BookOpen size={16} className="text-blue-700" />,
      href: 'https://reachmd.com/programs/cme/treatment-advances-in-generalized-myasthenia-gravis-addressing-the-nuances-of-its-underlying-immunopathology/29263/',
      category: 'SF#17823 | CME Program',
      imageUrl: '/activity-thumbnail-1.png'
    },
    {
      title: 'Treatment Advances in Generalized Myasthenia Gravis: A Pathophysiology-Driven Framework Leveraging FcRn Therapeutics',
      icon: <BookOpen size={16} className="text-blue-700" />,
      href: 'https://reachmd.com/programs/cme/treatment-advances-in-generalized-myasthenia-gravis-a-pathophysiology-driven-framework-leveraging-fcrn-therapeutics/29537/',
      category: 'SF#17930 | CME Program',
      imageUrl: '/9757b843673d44aad2245d9a7f986e17.png'
    },
    {
      title: 'Treatment Advances in Generalized Myasthenia Gravis: Clinical and Laboratory Criteria for Diagnosis and Optimal Treatment Selection',
      icon: <BookOpen size={16} className="text-blue-700" />,
      href: 'https://reachmd.com/programs/cme/treatment-advances-in-generalized-myasthenia-gravis-clinical-and-laboratory-criteria-for-diagnosis-and-optimal-treatment-selection/29533/',
      category: 'SF#17931 | CME Program',
      imageUrl: '/1236d4c8afe6f55769bc49a12c6b411c.png'
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
            Educational{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Programs</span>
          </h2>
          <p className="text-base lg:text-lg text-slate-700 max-w-6xl mx-auto leading-relaxed text-center">
            Explore curated gMG-focused educational activities featuring expert faculty, clinical insights, and practical care strategies.
          </p>
        </motion.div>

        {/* Activities Grid - 2 columns, wider boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <ActivityCard key={index} activity={activity} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}