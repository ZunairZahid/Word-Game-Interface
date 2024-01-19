import AccordionDemo from '@/components/ui/Accordion'
import Faq from '@/components/ui/Faq'
import Footer from '@/components/ui/Footer'
import HowToPlay from '@/components/ui/HowToPlay'
import LeaderBoard from '@/components/ui/LeaderBoard'
import Wordie from '@/components/ui/Wordie'
import Keyboard from '@/components/ui/keyboard'
import NavBar from '@/components/ui/navBar'
import ScoreCard from '@/components/ui/scoreCard'
import Theme from '@/components/ui/theme'
import { Accordion } from '@radix-ui/react-accordion'
import { User } from 'lucide-react'
import React from 'react'

export default function page() {
  return (
    <div> <Theme/>
      <div>
        <div className=' gap-y-28 bg-transparent'>
        <Keyboard />
        <ScoreCard />
        <LeaderBoard />
        <Wordie />
        <HowToPlay />
        <Faq />
      <Footer />
        
                </div>
       
      </div>
      
      
    </div>
  )
}
