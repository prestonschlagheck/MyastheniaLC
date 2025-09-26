'use client'

import { motion } from 'framer-motion'
import { Heart, Activity } from 'lucide-react'

export function Hero() {
  const scrollToWithOffset = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const headerHeight = 88 // fixed header (~h-20 plus extra spacing)
    const y = el.getBoundingClientRect().top + window.pageYOffset - headerHeight
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
  return (
    <section className="relative h-[75vh] overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
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

        {/* Animated Molecular Structures */}
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-20 opacity-20"
        >
          <div className="relative w-32 h-32">
            <div className="absolute top-0 left-1/2 w-3 h-3 bg-blue-400 rounded-full -translate-x-1/2" />
            <div className="absolute top-1/2 right-0 w-3 h-3 bg-teal-400 rounded-full -translate-y-1/2" />
            <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-cyan-400 rounded-full -translate-x-1/2" />
            <div className="absolute top-1/2 left-0 w-3 h-3 bg-blue-300 rounded-full -translate-y-1/2" />
            <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          </div>
        </motion.div>

        {/* Floating Medical Icons */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-32 left-20 opacity-30"
        >
          <Heart size={24} className="text-blue-700" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, -8, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-32 right-32 opacity-30"
        >
          <Activity size={28} className="text-teal-300" />
        </motion.div>

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
      <div className="relative z-10 flex items-center h-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-left space-y-8">


            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="heading-font text-4xl lg:text-5xl font-bold text-white leading-tight text-shadow-md">
                Lipid 360° Learning Center:
                <br />
                <span className="bg-gradient-to-r from-blue-300 to-teal-300 bg-clip-text text-transparent whitespace-nowrap">
                  Advancing Evidence-Based Care in Lipid Management
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.15 }}
              className="text-base lg:text-lg text-blue-100 leading-relaxed max-w-4xl font-sans"
            >
              Through expert interviews, interactive case discussions, multidisciplinary panels, and patient perspectives, leading global experts in cardiovascular medicine, lipidology, and endocrinology share the latest evidence alongside real-world clinical insights. Empower your team with practical strategies across LDL-C, lipoprotein(a), severe hypertriglyceridemia, and rare disorders like familial chylomicronemia syndrome.
            </motion.p>



            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="flex items-center gap-4 pt-4"
            >
              <button 
                onClick={() => scrollToWithOffset('activities')}
                className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Explore Activities
              </button>
              <button 
                onClick={() => scrollToWithOffset('resource-center')}
                className="px-8 py-4 rounded-xl font-semibold transition-all duration-300 border border-white/60 text-white/90 hover:bg-white/10 hover:shadow-xl"
              >
                Explore Resources
              </button>
            </motion.div>
          </div>
        </div>
      </div>


    </section>
  )
} 