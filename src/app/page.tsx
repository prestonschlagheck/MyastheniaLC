import { Hero } from '../components/Hero'
import { VideoIntroduction } from '../components/VideoIntroduction'
import { Statistics } from '../components/Statistics'
import { EducationalPrograms } from '../components/EducationalPrograms'
import { ResourceCenter } from '../components/ResourceCenter'
import { Partners } from '../components/Partners'
import { Faculty } from '../components/Faculty'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-20"> {/* Add back padding for fixed header */}
        <Hero />
        <VideoIntroduction />
        <Statistics />
        <EducationalPrograms />
        <ResourceCenter />
        <Partners />
        <Faculty />
        <Footer />
      </div>
    </main>
  )
}