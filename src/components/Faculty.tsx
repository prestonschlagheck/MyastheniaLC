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
      <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200 p-4 h-32">
        {/* Profile Photo */}
        <div className="flex flex-col items-center text-center h-full justify-center">
          <div className="relative w-16 h-16 mb-2">
            <div className="w-full h-full bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center overflow-hidden border-2 border-slate-200 shadow-md">
              {faculty.imageUrl ? (
                <Image
                  src={faculty.imageUrl}
                  alt={faculty.name}
                  fill
                  className={`object-cover rounded-full ${
                    faculty.name === 'Pasquale Perrone-Filardi' 
                      ? 'scale-125 -translate-y-1 object-top' 
                      : faculty.name === 'Julia Brandts'
                      ? 'scale-[1.573] translate-y-3 object-top'
                      : faculty.name === 'Pam R. Taub'
                      ? 'scale-[1.375] object-center'
                      : faculty.name === 'Christie Ballantyne'
                      ? 'scale-[1.265] object-center'
                      : faculty.name === 'Ira J. Goldberg'
                      ? 'scale-[1.265] translate-y-2 object-top'
                      : faculty.name === 'Stephen Nicholls'
                      ? 'scale-[1.21] object-center'
                      : 'scale-110 object-center'
                  }`}
                  sizes="64px"
                />
              ) : (
                <User className="w-8 h-8 text-slate-400" />
              )}
            </div>
          </div>
          
          {/* Faculty Info */}
          <div className="text-center">
            <h3 className="heading-font font-semibold text-slate-900 text-sm leading-tight mb-1 whitespace-nowrap overflow-hidden text-ellipsis">
              {faculty.name}
            </h3>
            <div className="text-xs font-medium text-slate-600 whitespace-nowrap overflow-hidden text-ellipsis">
              {faculty.credentials}
            </div>
            {faculty.institution && (
              <div className="text-xs text-slate-500 mt-1 whitespace-nowrap overflow-hidden text-ellipsis">
                {faculty.institution}
              </div>
            )}
          </div>
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
      <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200 p-4 h-32">
        {/* Profile Photo */}
        <div className="flex flex-col items-center text-center h-full justify-center">
          <div className="relative w-16 h-16 mb-2">
            <div className="w-full h-full bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center overflow-hidden border-3 border-white shadow-md">
              <User className="w-8 h-8 text-slate-400" />
            </div>
          </div>
          
          {/* Placeholder Text */}
          <div className="text-center">
            <h3 className="heading-font font-semibold text-slate-400 text-sm leading-tight mb-1">
              Expert Placeholder
            </h3>
            <div className="text-xs font-medium text-slate-300">
              To Be Added
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Faculty() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  // Faculty data - Organized alphabetically by last name
  const facultyMembers: Faculty[] = [
    {
      name: 'Christie Ballantyne',
      title: 'Professor',
      credentials: 'MD',
      imageUrl: '/faculty/christieb.jpg'
    },
    {
      name: 'Julia Brandts',
      title: 'Professor',
      credentials: 'MD',
      imageUrl: '/faculty/juliab.jpg'
    },
    {
      name: 'Daniel Gaudet',
      title: 'Professor',
      credentials: 'MD, PhD',
      imageUrl: '/faculty/danielg.jpg'
    },
    {
      name: 'Ira J. Goldberg',
      title: 'Professor',
      credentials: 'MD',
      imageUrl: '/faculty/iraj.png'
    },
    {
      name: 'John Kastelein',
      title: 'Chief Scientific Officer',
      credentials: 'Prof.',
      imageUrl: '/faculty/johnk.jpg'
    },
    {
      name: 'Ulrich Laufs',
      title: 'Professor',
      credentials: 'MD, PhD',
      imageUrl: '/faculty/ulrichl.jpg'
    },
    {
      name: 'Erin Michos',
      title: 'Professor',
      credentials: 'MD',
      imageUrl: '/faculty/erinm.png'
    },
    {
      name: 'Stephen Nicholls',
      title: 'Professor',
      credentials: 'FRACP, FACC, FESC, FAHA',
      imageUrl: '/faculty/stephenn.jpg'
    },
    {
      name: 'Børge G. Nordestgaard',
      title: 'Professor',
      credentials: 'MD, DMSc',
      imageUrl: '/faculty/borgen.jpg'
    },
    {
      name: 'Pasquale Perrone-Filardi',
      title: 'Professor',
      credentials: 'MD, PhD',
      imageUrl: '/faculty/pasqualep.png'
    },
    {
      name: 'Kausik Ray',
      title: 'Professor',
      credentials: 'MBChB, MD, MPhil',
      imageUrl: '/faculty/kausikr.png'
    },
    {
      name: 'Pam R. Taub',
      title: 'Professor',
      credentials: 'MD, FACC, FASPC',
      imageUrl: '/faculty/pamt.jpg'
    }
  ]

  // Calculate remaining placeholder slots (total 12 - actual faculty, no extra slots needed)
  const totalSlots = 12
  const remainingSlots = Math.max(0, totalSlots - facultyMembers.length)
  const placeholderSlots = Array.from({ length: remainingSlots }, (_, index) => index)

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
            Leading <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Global Experts</span>
          </h2>
          <p className="text-slate-600 mt-4 max-w-4xl mx-auto">
            Our distinguished multidisciplinary faculty represents the pinnacle of expertise in lipid management, bringing together renowned clinicians, researchers, and thought leaders from the world&apos;s most prestigious medical institutions.
          </p>
        </motion.div>

        {/* Faculty Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 max-w-6xl">
            {/* Real Faculty Members */}
            {facultyMembers.map((faculty, index) => (
              <FacultyCard key={`faculty-${index}`} faculty={faculty} index={index} />
            ))}
            
            {/* Placeholder Slots */}
            {placeholderSlots.map((index) => (
              <FacultyPlaceholder key={`placeholder-${index}`} index={facultyMembers.length + index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
