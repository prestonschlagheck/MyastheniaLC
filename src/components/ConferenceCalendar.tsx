'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

interface Conference {
  name: string
  date: string
  location: string
  type: 'US' | 'International'
  href: string
}

export function ConferenceCalendar() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const conferences: Conference[] = [
    {
      name: 'Conference Name [PLACEHOLDER]',
      date: 'XX/XX/XXXX',
      location: 'City, State/Country [PLACEHOLDER]',
      type: 'US',
      href: '#'
    },
    {
      name: 'Conference Name [PLACEHOLDER]',
      date: 'XX/XX/XXXX',
      location: 'City, Country [PLACEHOLDER]',
      type: 'International',
      href: '#'
    },
    {
      name: 'Conference Name [PLACEHOLDER]',
      date: 'XX/XX/XXXX',
      location: 'City, State [PLACEHOLDER]',
      type: 'US',
      href: '#'
    },
    {
      name: 'Conference Name [PLACEHOLDER]',
      date: 'XX/XX/XXXX',
      location: 'City, Country [PLACEHOLDER]',
      type: 'International',
      href: '#'
    },
    {
      name: 'Conference Name [PLACEHOLDER]',
      date: 'XX/XX/XXXX',
      location: 'City, State [PLACEHOLDER]',
      type: 'US',
      href: '#'
    },
    {
      name: 'Conference Name [PLACEHOLDER]',
      date: 'XX/XX/XXXX',
      location: 'City, Country [PLACEHOLDER]',
      type: 'International',
      href: '#'
    }
  ]

  return (
    <section ref={ref} id="conferences" className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-font text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Global Conference{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Calendar
            </span>
          </h2>
          <p className="text-base lg:text-lg text-slate-700 max-w-5xl mx-auto leading-relaxed">
            Stay informed about upcoming conferences and congresses focused on Myasthenia&nbsp;Gravis research and clinical&nbsp;practice.
          </p>
        </motion.div>

        {/* Conference Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-600 to-teal-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Conference Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Location</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Type</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Link</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {conferences.map((conference, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="hover:bg-slate-50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">
                      {conference.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} className="text-slate-400" />
                        <span>{conference.date}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} className="text-slate-400" />
                        <span>{conference.location}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          conference.type === 'US'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-purple-100 text-purple-700'
                        }`}
                      >
                        {conference.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <a
                        href={conference.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

