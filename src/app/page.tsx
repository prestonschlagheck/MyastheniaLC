import { Hero } from '../components/Hero'
import { VideoIntroduction } from '../components/VideoIntroduction'
import { Statistics } from '../components/Statistics'
import { EducationalPrograms } from '../components/EducationalPrograms'
import { Faculty } from '../components/Faculty'
import { ResourceCenter } from '../components/ResourceCenter'
import { ConferenceCalendar } from '../components/ConferenceCalendar'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-16 lg:pt-20"> {/* Adjusted mobile padding to prevent header overlap */}
        <Hero />
        <Statistics />
        <EducationalPrograms />
        <Faculty />
        <ResourceCenter />
        <ConferenceCalendar />
        <Footer />
      </div>
    </main>
  )
}