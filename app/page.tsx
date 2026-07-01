import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import WhatIsKambo from '@/components/WhatIsKambo'
import Effects from '@/components/Effects'
import Process from '@/components/Process'
import Guide from '@/components/Guide'
import Safety from '@/components/Safety'
import SocialProof from '@/components/SocialProof'
import Booking from '@/components/Booking'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhatIsKambo />
        <Effects />
        <Process />
        <Guide />
        <Safety />
        <SocialProof />
        <Booking />
      </main>
      <Footer />
    </>
  )
}
