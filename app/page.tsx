import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import AboutClinic from '@/components/AboutClinic'
import TimingBanner from '@/components/TimingBanner'
import Services from '@/components/Services'
import DoctorProfile from '@/components/DoctorProfile'
import BookAppointment from '@/components/BookAppointment'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TimingBanner />
      <AboutClinic />
      <Services />
      <DoctorProfile />
      <BookAppointment />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
