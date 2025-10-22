'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function Hero() {
  const scrollToWithOffset = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const headerHeight = 88 // fixed header (~h-20 plus extra spacing)
    const y = el.getBoundingClientRect().top + window.pageYOffset - headerHeight
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
  return (
    <section id="hero" className="relative min-h-[calc(100vh-4rem)] lg:h-[75vh] overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Sophisticated Background Patterns */}
      <div className="absolute inset-0">
        {/* Medical Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-r border-blue-300/20 h-full" />
            ))}
          </div>
          <div className="absolute inset-0 grid grid-rows-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="border-b border-blue-300/20 w-full" />
            ))}
          </div>
        </div>


        {/* Dynamic Gradient Overlays */}
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, rgba(0, 102, 204, 0.3) 0%, transparent 60%)",
              "radial-gradient(circle at 80% 20%, rgba(0, 166, 184, 0.3) 0%, transparent 60%)",
              "radial-gradient(circle at 40% 70%, rgba(0, 212, 229, 0.3) 0%, transparent 60%)",
              "radial-gradient(circle at 20% 30%, rgba(0, 102, 204, 0.3) 0%, transparent 60%)"
            ]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0"
        />
      </div>



      {/* Main Content */}
      <div className="relative z-10 flex items-center h-full px-6 lg:px-12 py-16 lg:py-0">
        <div className="max-w-7xl mx-auto w-full">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              
              {/* Main Title */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <h1 className="heading-font text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight text-shadow-md">
                  Myasthenia Matters:
                  <br />
                  <span className="bg-gradient-to-r from-blue-300 to-teal-300 bg-clip-text text-transparent">
                    Navigating a New Era of Treatment
                  </span>
                </h1>
              </motion.div>

              {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="text-base lg:text-lg text-blue-100 leading-relaxed font-sans"
        >
          Generalized Myasthenia Gravis (gMG) is a chronic autoimmune neuromuscular disorder characterized by fluctuating muscle weakness and fatigue. Early recognition and prompt treatment are critical to improving patient outcomes and quality of life. This comprehensive learning center provides clinicians with evidence-based education spanning the full spectrum of gMG care—from foundational pathophysiology and diagnostic strategies to emerging therapeutic options and practical management approaches for optimizing long-term patient care.
        </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4"
              >
                <button 
                  onClick={() => scrollToWithOffset('activities')}
                  className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                >
                  Explore Activities
                </button>
                <button 
                  onClick={() => scrollToWithOffset('resource-center')}
                  className="px-8 py-4 rounded-xl font-semibold transition-all duration-300 border-2 border-white/60 text-white/90 hover:bg-white/10 hover:border-white hover:shadow-xl"
                >
                  Explore Resources
                </button>
              </motion.div>
            </div>

            {/* Right Column - Image Content */}
            <div className="flex justify-center items-stretch h-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative w-full h-full"
              >
                <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white/20 backdrop-blur-sm w-full h-full bg-gradient-to-br from-blue-900/50 to-slate-800/50 flex items-center justify-center">
                  <div className="text-white/60 text-center p-8">
                    <p className="text-lg font-medium mb-2">Image Placeholder</p>
                    <p className="text-sm">gMG Educational Visual</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
        </div>
      </div>


    </section>
  )
} 