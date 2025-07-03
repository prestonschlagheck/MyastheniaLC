'use client'

import { useState } from 'react'
import { Login } from './Login'
import { Hero } from './Hero'
import { VideoIntroduction } from './VideoIntroduction'
import { Statistics } from './Statistics'
import { EducationalPrograms } from './EducationalPrograms'
import { ResourceCenter } from './ResourceCenter'
import { Faculty } from './Faculty'
import { Footer } from './Footer'
import { Header } from './Header'

export function PasswordProtectedApp() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-16"> {/* Add top padding for fixed header */}
        <Hero />
        <VideoIntroduction />
        <Statistics />
        <EducationalPrograms />
        <ResourceCenter />
        <Faculty />
        <Footer />
      </div>
    </main>
  )
} 