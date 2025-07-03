'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { TrendingUp, Users, Globe } from 'lucide-react'

interface StatCardProps {
  icon: React.ReactNode
  statValue: string
  animatedNumber: number
  suffix: string
  description: string
  delay: number
}

function StatCard({ icon, statValue, animatedNumber, suffix, description, delay }: StatCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const duration = 2000
        const steps = 60
        const increment = animatedNumber / steps
        let current = 0
        
        const counter = setInterval(() => {
          current += increment
          if (current >= animatedNumber) {
            setCount(animatedNumber)
            clearInterval(counter)
          } else {
            setCount(Math.floor(current))
          }
        }, duration / steps)
        
        return () => clearInterval(counter)
      }, delay)
      
      return () => clearTimeout(timer)
    }
  }, [isInView, animatedNumber, delay])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      className="group h-full"
    >
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group-hover:scale-105 h-full flex flex-col">
        <div className="flex flex-col items-center text-center space-y-6 flex-1">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: (delay + 200) / 1000 }}
            className="p-4 rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-300"
          >
            {icon}
          </motion.div>
          
          <div className="space-y-3 flex-1 flex flex-col justify-center">
            <motion.div
              className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
            >
              {statValue.includes('in') ? (
                <>1 in {count}</>
              ) : statValue.includes('million') ? (
                <>{count} million</>
              ) : (
                <>{count}{suffix}</>
              )}
            </motion.div>
            
            <p className="text-gray-600 leading-relaxed max-w-xs">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Statistics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const stats = [
    {
      icon: <Globe className="w-8 h-8 text-red-500" />,
      statValue: "1 in 8",
      animatedNumber: 8,
      suffix: "",
      description: "people in the world are living with obesity",
      delay: 200
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
      statValue: "16%",
      animatedNumber: 16,
      suffix: "%",
      description: "of adults aged 18+ were living with obesity in 2022",
      delay: 400
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      statValue: "35 million",
      animatedNumber: 35,
      suffix: "",
      description: "children under the age of 5 were overweight in 2024",
      delay: 600
    }
  ]

  return (
    <section ref={ref} className="py-8 lg:py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
} 