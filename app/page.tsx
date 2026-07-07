import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import ForWhom from '@/components/ForWhom'
import WhatIsKambo from '@/components/WhatIsKambo'
import Effects from '@/components/Effects'
import Process from '@/components/Process'
import Safety from '@/components/Safety'
import Guide from '@/components/Guide'
import SocialProof from '@/components/SocialProof'
import Booking from '@/components/Booking'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ForWhom />
        <WhatIsKambo />
        <Effects />
        <Process />
        <Safety />
        <Guide />
        <SocialProof />
        <Booking />
      </main>
      <Footer />
    </>
  )
}
