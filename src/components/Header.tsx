'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/20 backdrop-blur-xl border-b border-white/30 shadow-lg py-3"
    >
      <div className="max-w-full mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* ReachMD Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center"
          >
            <Image
              src="/rmd.svg"
              alt="ReachMD Logo"
              width={110}
              height={32}
              className="h-8 w-auto object-contain"
              priority
            />
          </motion.div>

          {/* GLC Logo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center"
          >
            <Image
              src="/glc.png"
              alt="GLC Logo"
              width={160}
              height={50}
              className="h-12 w-auto object-contain"
              priority
            />
          </motion.div>
        </div>
      </div>
    </motion.header>
  )
} 