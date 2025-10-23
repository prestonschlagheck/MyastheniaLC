'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { User } from 'lucide-react'
import Image from 'next/image'

interface Faculty {
  name: string
  title: string
  credentials: string
  institution?: string
  imageUrl?: string
}

interface FacultyPlaceholderProps {
  index: number
}

interface FacultyCardProps {
  faculty: Faculty
  index: number
}

function FacultyCard({ faculty, index }: FacultyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, delay: index * 0.05 }}
    >
      <div className="relative bg-white rounded-2xl shadow-lg border border-slate-200 px-5 pt-5 pb-[15px] h-56 flex flex-col">
        {/* Credentials Badge - Top Right Corner */}
        <div className="absolute top-1 right-[7px]">
          <span className="inline-flex items-center px-2.5 py-1 rounded-xl text-[9px] font-semibold text-white bg-gradient-to-r from-blue-600 to-teal-600 shadow-md">
            {faculty.credentials}
          </span>
        </div>
        
        {/* Fixed Position Content */}
        <div className="flex flex-col items-center pt-3">
          {/* Profile Photo - Fixed Position */}
          <div className="relative w-20 h-20 mb-3 flex-shrink-0">
            {/* Gradient border wrapper */}
            <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-600 to-teal-600 p-[3px]">
              <div className="w-full h-full rounded-full overflow-hidden shadow-lg bg-white">
                {faculty.imageUrl ? (
                  <Image
                    src={faculty.imageUrl}
                    alt={faculty.name}
                    width={80}
                    height={80}
                    className="object-cover object-top w-full h-full"
                    quality={100}
                    priority={index < 6}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-slate-100">
                    <User className="w-9 h-9 text-slate-400" />
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Name - Fixed Position */}
          <h3 className="font-bold text-slate-900 text-sm leading-tight px-1 text-center mb-3">
            {faculty.name}
          </h3>
          
          {/* Institution - Variable Height */}
          {faculty.institution && (
            <p className="text-[11px] text-slate-600 leading-snug px-2 text-center">
              {faculty.institution}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  )
}

function FacultyPlaceholder({ index }: FacultyPlaceholderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, delay: index * 0.05 }}
    >
      <div className="relative bg-white rounded-2xl shadow-lg border border-slate-200 px-5 pt-5 pb-[15px] h-56 flex flex-col">
        {/* Credentials Badge - Top Right Corner */}
        <div className="absolute top-1 right-[7px]">
          <span className="inline-flex items-center px-2.5 py-1 rounded-xl text-[9px] font-semibold text-white bg-gradient-to-r from-slate-400 to-slate-500 shadow-md">
            MD
          </span>
        </div>
        
        {/* Fixed Position Content */}
        <div className="flex flex-col items-center pt-3">
          {/* Profile Photo - Fixed Position */}
          <div className="relative w-20 h-20 mb-3 flex-shrink-0">
            {/* Gradient border wrapper */}
            <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-600 to-teal-600 p-[3px]">
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center shadow-lg">
                <User className="w-9 h-9 text-slate-400" />
              </div>
            </div>
          </div>
          
          {/* Name - Fixed Position */}
          <h3 className="font-bold text-slate-400 text-sm leading-tight px-1 text-center mb-3">
            Expert Placeholder
          </h3>
          
          {/* Institution - Variable Height */}
          <p className="text-[11px] text-slate-300 leading-snug px-2 text-center">
            To Be Added
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export function Faculty() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  // Faculty data - gMG Steering Committee
  const facultyMembers: Faculty[] = [
    {
      name: 'Neelam Goyal',
      credentials: 'MD',
      title: 'Clinical Professor',
      institution: 'Stanford University, Palo Alto, CA',
      imageUrl: '/faculty/Goyal.jpg'
    },
    {
      name: 'Nicholas J. Silvestri',
      credentials: 'MD',
      title: 'Associate Professor of Neurology',
      institution: 'University at Buffalo, Buffalo, NY',
      imageUrl: '/faculty/silvestri.png'
    },
    {
      name: 'Hans Katzberg',
      credentials: 'MD',
      title: 'Professor of Neurology',
      institution: 'University of Toronto, Canada',
      imageUrl: '/faculty/Hans Katzberg, MD.jpeg'
    },
    {
      name: 'Jonathan Strober',
      credentials: 'MD',
      title: 'Professor, Neurology',
      institution: 'University of California, San Francisco',
      imageUrl: '/faculty/Jonathan Strober, MD.jpeg'
    },
    {
      name: 'Pushpa Narayanaswami',
      credentials: 'MD, FAAN',
      title: 'Professor of Clinical Neurology',
      institution: 'Beth Israel Deaconess Medical Center / Harvard',
      imageUrl: '/faculty/Pushpa Narayanaswami, MD, FAAN.jpeg'
    },
    {
      name: 'Gil I. Wolfe',
      credentials: 'MD, FAAN',
      title: 'SUNY Distinguished Professor',
      institution: 'University at Buffalo',
      imageUrl: '/faculty/Gil I. Wolfe MD, FAAN'
    },
    {
      name: 'Diana Castro',
      credentials: 'MD',
      title: 'Associate Professor',
      institution: 'UT Southwestern / Dallas Children&apos;s Health',
      imageUrl: '/faculty/The Best Neurologists in Texas _ US News.jpeg'
    },
    {
      name: 'Vera Bril',
      credentials: 'MD, FRCPC',
      title: 'Professor',
      institution: 'University of Toronto & UHN',
      imageUrl: '/faculty/bril.jpg'
    },
    {
      name: 'Richard J. Nowak',
      credentials: 'MD, MS',
      title: 'Professor',
      institution: 'Yale University',
      imageUrl: '/faculty/A person in a suit smiling AI-generated content may be incorrect.jpeg'
    }
  ]

  // No placeholders needed

  return (
    <section ref={ref} id="faculty" className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={isInView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.5 }} 
          className="text-center mb-8"
        >
          <h2 className="heading-font text-4xl lg:text-5xl font-bold text-slate-900">
            Expert Faculty & <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Steering Committee</span>
          </h2>
          <p className="text-slate-600 mt-4 max-w-4xl mx-auto">
            Our distinguished steering committee comprises leading experts in Myasthenia Gravis management, bringing together renowned clinicians, researchers, and thought leaders dedicated to advancing gMG care and education.
          </p>
        </motion.div>

        {/* Faculty Grid */}
        <div className="flex flex-wrap justify-center gap-5 max-w-7xl mx-auto">
          {/* Real Faculty Members */}
          {facultyMembers.map((faculty, index) => (
            <div key={`faculty-${index}`} className="w-[calc(50%-10px)] md:w-[calc(33.333%-14px)] lg:w-[calc(20%-16px)]">
              <FacultyCard faculty={faculty} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
