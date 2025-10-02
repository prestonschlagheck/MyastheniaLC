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
    <section className="relative min-h-[calc(100vh-4rem)] lg:h-[75vh] overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
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
      <div className="relative z-10 flex items-center h-full px-6 lg:px-12 py-8 lg:py-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
          
          {/* Text Content */}
          <div className="text-left space-y-8 lg:space-y-8 flex flex-col justify-start lg:justify-center pt-8 lg:pt-0">


            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="heading-font text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight text-shadow-md">
                Lipid 360° Learning Center:
                <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-blue-300 to-teal-300 bg-clip-text text-transparent">
                  {' '}Advancing Evidence-Based Care in Lipid Management
                </span>
              </h1>
            </motion.div>

            {/* Mobile Image - Only visible on mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:hidden flex justify-center items-center"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl border-2 border-white/20 backdrop-blur-sm w-full max-w-sm mx-auto h-[200px]">
                <Image
                  src="/lipidmainimage.jpg"
                  alt="Lipid Management Visualization"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 384px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.15 }}
              className="text-sm sm:text-base lg:text-lg text-blue-100 leading-relaxed max-w-4xl font-sans"
            >
              Through expert interviews, interactive case discussions, multidisciplinary panels, and patient perspectives, leading global experts in cardiovascular medicine, lipidology, and endocrinology share the latest evidence alongside real-world clinical insights. Empower clinicians with practical strategies for optimizing lipid management across the spectrum of dyslipidemias from elevated LDL-C and lipoprotein(a) to severe hypertriglyceridemia and rare genetic disorders such as familial chylomicronemia syndrome (FCS).
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

          {/* Image Content */}
          <div className="hidden lg:flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative w-full flex justify-center"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white/20 backdrop-blur-sm w-full max-w-lg h-[400px]">
                <Image
                  src="/lipidmainimage.jpg"
                  alt="Lipid Management Visualization"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 512px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>


    </section>
  )
} 