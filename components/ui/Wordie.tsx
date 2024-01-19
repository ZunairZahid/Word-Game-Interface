import Image from 'next/image'
import React from 'react'

export default function Wordie() {
  return (
    <div>
    <div className="flex justify-between items-start">
    <div className="flex items-start">
      <Image src="/Rectangle 74.png" alt="Image 1" width={100} height={100} />
    </div>
    <div className=" flex justify-center w-40 h-12 px-3.5 py-2.5 bg-green-400 rounded-3xl border-b-2 border-green-700 ">
    <div className="     text-white text-base font-bold font-poppins">View More</div>
</div>
    <div className="flex items-start">
      <Image src="/Rectangle 75.png" alt="Image 2" width={100} height={100} />
    </div>
    
  </div>
  <div className=' flex flex-col bg-[#FFEEDE] justify-center items-center '>
    <div className=' mt-20  text-center text-red-500 text-5xl font-bold font-poppins leading-snug ' >Wordle Game</div>
    <div className=' mt-5 text-center text-slate-500 text-6xl font-bold font-poppins'>Guess the Hidden Word</div>
    <div className=' flex max-w-[1200px] mt-5 text-center text-neutral-600 text-2xl font-poppins leading-loose'>
        <p>The rules are very simple: You need to guess the hidden word (from 4 to 11 letters) in 6 tries. To get started, just type any word on the first line. If the letter is guessed correctly and is in the correct place, it will be highlighted in green, if the letter is in the word, but in the wrong place - in yellow, and if the letter is not in the word, it will remain gray. Can you guess the hidden word in 6 tries?</p>
    </div>
  </div>
  {/* inverted rectabgles */}
  <div className="flex justify-between items-start">
    <div className="flex items-start">
      <Image src="/Rectangle 76.png" alt="Image 1" width={100} height={100} />
    </div>
    
    <div className="flex items-start">
      <Image src="/Rectangle 77.png" alt="Image 2" width={100} height={100} />
    </div>
    
  </div>
  </div>
  
 

//     <div className=' relative bg-slate-600'>
//         <Image src={'/Rectangle 75.png'} alt='sakjdh' width={136} height={136} className=' flex  top-0 right-0' />
//          <Image src={'/Rectangle 74.png'} alt='sakjdh' width={136} height={136} />
         
//          <div className="  -bottom-[800px] w-40 h-12 px-3.5 py-2.5 bg-green-400 rounded-3xl border-b-2 border-green-700  flex justify-center items-center gap-2.5 absolute">
//     <div className="ViewMore text-white text-base font-bold font-['Poppins']">View More</div>
// </div>
//     <div className=" relative">
//     <div className=" left-0 top-[116px] absolute bg-orange-100" />
//     <div className="left-[245px] top-[199px] absolute flex-col justify-start items-start gap-6 inline-flex">
//         <div className=" flex-col justify-start items-center gap-3 flex">
//             <div className=" text-center text-red-500 text-2xl font-bold font-['Poppins'] leading-snug">Wordle Game</div>
//             <div className=" text-center text-slate-700 text-4xl font-bold font-['Poppins'] leading-10">Guess the Hidden Word</div>
//             <div className="TheRulesAreVerySimpleYouNeedToGuessTheHiddenWordFrom4To11LettersIn6TriesToGetStartedJustTypeAnyWordOnTheFirstLineIfTheLetterIsGuessedCorrectlyAndIsInTheCorrectPlaceItWillBeHighlightedInGreenIfTheLetterIsInTheWordButInTheWrongPlaceInYellowAndIfTheLetterIsNotInTheWordItWillRemainGrayCanYouGuessTheHiddenWordIn6Tries w-96 text-center text-neutral-600 text-base font-normal font-['Poppins'] leading-loose">The rules are very simple: You need to guess the hidden word (from 4 to 11 letters) in 6 tries. To get started, just type any word on the first line. If the letter is guessed correctly and is in the correct place, it will be highlighted in green, if the letter is in the word, but in the wrong place - in yellow, and if the letter is not in the word, it will remain gray. Can you guess the hidden word in 6 tries?</div>
//         </div>
//     </div>
// </div>
// </div>
  )
}
