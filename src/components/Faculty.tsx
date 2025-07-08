'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { User } from 'lucide-react'
import Image from 'next/image'

interface FacultyCardProps {
  name: string
  image?: string
  index: number
}

function FacultyCard({ name, image, index }: FacultyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="h-full"
    >
      <div className="bg-white border border-gray-200 rounded-xl p-4 transition-all duration-300 text-center h-full flex flex-col justify-between min-h-[160px]">
        {/* Profile Photo */}
        <div className="w-20 h-20 mx-auto mb-3 bg-gray-100 rounded-full flex items-center justify-center transition-colors overflow-hidden flex-shrink-0">
          {image ? (
            <Image
              src={image}
              alt={name}
              width={80}
              height={80}
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <User className="w-8 h-8 text-gray-400" />
          )}
        </div>
        
        {/* Text Content */}
        <div className="flex-1 flex flex-col justify-center">
          {/* Name */}
          <h3 className="font-semibold text-gray-900 text-sm leading-tight line-clamp-2">
            {name}
          </h3>
        </div>
      </div>
    </motion.div>
  )
}

export function Faculty() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const facultyMembers = [
    { name: "Michael Crotty, MB, BCh, BAO", image: "/mike.png" },
    { name: "Sarah Le Brocq", image: "/sarah.png" },
    { name: "Ana Maria Cebrián Cuenca, MD, PhD", image: "/ana.png" },
    { name: "Barbara McGowan, PhD, MBBS", image: "/barb.png" },
    { name: "Donna H. Ryan, MD", image: "/donna.jpeg" },
    { name: "Nasreen Alfaris, MD, MPH", image: "/nas.png" },
    { name: "Andreea Ciudin, MD, PhD", image: "/andreea.jpg" },
    { name: "Ricardo Cohen, MD, PhD", image: "/ric.png" },
    { name: "Marta Comas Martinez", image: "/marta.png" },
    { name: "Walmir Coutinho, MD", image: "/wal.png" },
    { name: "Linong Ji, MD", image: "/lin.png" },
    { name: "Rita Nawar, MD", image: "/rita.png" },
    { name: "Charles P. Vega, MD", image: "/char.png" }
  ]

  return (
    <section ref={ref} className="py-8 lg:py-12 bg-gradient-to-b from-gray-100 to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Faculty
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet our distinguished team of experts dedicated to advancing obesity care and education worldwide.
          </p>
        </motion.div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {facultyMembers.map((faculty, index) => (
            <div 
              key={index}
              className={index === 10 ? 'xl:col-start-2' : ''}
            >
              <FacultyCard 
                name={faculty.name}
                image={faculty.image}
                index={index} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 