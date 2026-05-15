import Nav from '../components/layout/Nav/Nav'
import Footer from '../components/layout/Footer/Footer'
import Hero from '../components/sections/Hero/Hero'
import Services from '../components/sections/Services/Services'
import About from '../components/sections/About/About'
import MICE from '../components/sections/MICE/MICE'
import Testimonial from '../components/sections/Testimonial/Testimonial'
import CTA from '../components/sections/CTA/CTA'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <About />
      <MICE />
      <Testimonial />
      <CTA />
      <Footer />
    </>
  )
}
