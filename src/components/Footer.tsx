'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <footer ref={ref} className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* ReachMD Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center"
          >
            <Image
              src="/reach.png"
              alt="ReachMD Logo"
              width={160}
              height={50}
              className="h-16 w-auto object-cover object-center"
              style={{ 
                clipPath: 'inset(30% 0 30% 0)',
                transform: 'scale(1.8)',
                marginTop: '-8px',
                marginBottom: '-8px'
              }}
            />
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-8"
          >
            <a
              href="#"
              className="text-gray-300 hover:text-cyan-300 transition-colors font-medium"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-cyan-300 transition-colors font-medium"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-cyan-300 transition-colors font-medium"
            >
              About
            </a>
          </motion.div>

          {/* Contact Us Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button className="bg-cyan-500 hover:bg-cyan-400 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg">
              Contact Us
            </button>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-400 text-sm">
            © 2025 ReachMD. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
} 