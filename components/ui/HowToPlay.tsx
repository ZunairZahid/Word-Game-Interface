import React from 'react'

export default function HowToPlay() {
    return (
        <div className=' grid place-items-center gap-5'>
            <div className='flex flex-col justify-center items-center gap-5'>
                <div className='  text-center text-red-500 text-5xl font-bold font-poppins'>How to play</div>
                <div className=' text-6xl font-bold font-poppins text-slate-600'> How to play the Wordle Game?
                </div>
                <div className='text-center text-neutral-600 text-2xl font-poppins max-w-[1000px] leading-loose'>Start with Any Five-Letter Word: Kick off your Wordle adventure by typing in any five-letter word. This is your first step towards unraveling the word puzzle.  </div>

            </div>
            <div className=' w-[1920px] flex-col inline-flex justify-center top-0 right-0  bg-[#FAF7F4] border-4 rounded-3xl border-b-4 border-orange-200 shadow gap-5'>
                <div className=' text-center text-5xl font-bold text-orange-400 font-poppins mt-5'>Uncover Letter Clues </div>
                <div className="text-center">
                    <span className="text-neutral-600 text-2xl font-poppins] leading-loose">After entering your word, pay attention to the color-coded hints. <br />Letters highlighted in </span><span className="text-neutral-600 text-2xl font-bold font-poppins leading-loose">yellow</span><span className="text-neutral-600 text-2xl font-poppins leading-loose"> indicate they are part of the hidden word but are placed in a different spot. <br />If a letter turns </span><span className="text-neutral-600 text-2xl font-bold font-poppins leading-loose">green</span><span className="text-neutral-600 text-2xl font-normal font-['Poppins'] leading-loose">, you've got both the letter and its position correct. A </span><span className="text-neutral-600 text-2xl font-bold font-poppins leading-loose">gray</span><span className="text-neutral-600 text-2xl font-normal font-['Poppins'] leading-loose"> letter means its not in the target word at all.</span></div>

            </div>
            <div className=' grid place-items-center gap-5 bg-[#FAF7F4] border-4 rounded-3xl border-orange-200 w-[1920px] mt-10'>
                <div className='text-5xl font-bold text-orange-400 font-poppins mt-10'>Strategize Your Next Move</div>
                <div className=' text-2xl text-center text-neutral-600 font-poppins'>
                    <span>With each guess, you'll gather more information. Use the</span>
                    <span className=' font-bold'> green</span>
                    <span> and</span>
                    <span className=' font-bold'> yellow</span>
                    <span> hints to refine your next word choice. The goal is to use these </span>
                    <br />
                    <span>insights to correctly guess the Wordle games hidden word within your remaining attempts.</span>

                </div>
                <div className=' flex justify-center items-center gap-x-6 mt-10'>
                    <div className=' flex h-24 w-24 bg-white rounded-3xl shadow justify-center items-center text-center border-1 border-black'>
                        <div className=' text-center text-black text-4xl font-bold font-poppins'>C                            </div></div>
                        <div className=' flex h-24 w-24 bg-white rounded-3xl shadow justify-center items-center text-center border-1 border-black'>
                        <div className=' text-center text-black text-4xl font-semibold font-poppins'>H                           </div></div>
                        <div className=' flex h-24 w-24 bg-[#50C878] rounded-3xl shadow justify-center items-center text-center border-1 border-black'>
                        <div className=' text-center text-white text-4xl font-semibold font-poppins'>A                          </div></div> 
                        <div className=' flex h-24 w-24 bg-white rounded-3xl shadow justify-center items-center text-center border-1 border-black'>
                        <div className=' text-center text-black text-4xl font-semibold font-poppins'>I                           </div></div>
                        <div className=' flex h-24 w-24 bg-white rounded-3xl shadow justify-center items-center text-center border-1 border-black'>
                        <div className=' text-center text-black text-4xl font-semibold font-poppins'>N                           </div></div>    
                        
                        
                        </div>
                        <div className=' flex justify-center items-center gap-x-6'>
                    <div className=' flex h-24 w-24 bg-white rounded-3xl shadow justify-center items-center text-center border-1 border-black'>
                        <div className=' text-center text-black text-4xl font-semibold font-poppins'>B                            </div></div>
                        <div className=' flex h-24 w-24 bg-[#FFD700] rounded-3xl shadow justify-center items-center text-center border-1 border-black'>
                        <div className=' text-center text-white text-4xl font-semibold font-poppins'>R                        </div></div>
                        <div className=' flex h-24 w-24 bg-white rounded-3xl shadow justify-center items-center text-center border-1 border-black'>
                        <div className=' text-center text-black text-4xl font-semibold font-poppins'>E                         </div></div> 
                        <div className=' flex h-24 w-24 bg-white rounded-3xl shadow justify-center items-center text-center border-1 border-black'>
                        <div className=' text-center text-black text-4xl font-semibold font-poppins'>A                          </div></div>
                        <div className=' flex h-24 w-24 bg-white rounded-3xl shadow justify-center items-center text-center border-1 border-black'>
                        <div className=' text-center text-black text-4xl font-semibold font-poppins '>K                          </div></div>    
                        
                        
                        </div>
                        <div className=' flex justify-center items-center gap-x-6 mb-10'>
                    <div className=' flex h-24 w-24 bg-white rounded-3xl shadow justify-center items-center text-center border-1 border-black'>
                        <div className=' text-center text-black text-4xl font-bold font-poppins'>D                            </div></div>
                        <div className=' flex h-24 w-24 bg-white rounded-3xl shadow justify-center items-center text-center border-1 border-black'>
                        <div className=' text-center text-black text-4xl font-semibold font-poppins'>A                           </div></div>
                        <div className=' flex h-24 w-24 bg-white rounded-3xl shadow justify-center items-center text-center border-1 border-black'>
                        <div className=' text-center text-black text-4xl font-semibold font-poppins'>I                          </div></div> 
                        <div className=' flex h-24 w-24 bg-stone-300 rounded-3xl shadow justify-center items-center text-center border-1 border-black'>
                        <div className=' text-center text-white text-4xl font-semibold font-poppins'>L                           </div></div>
                        <div className=' flex h-24 w-24 bg-white rounded-3xl shadow justify-center items-center text-center border-1 border-black'>
                        <div className=' text-center text-black text-4xl font-semibold font-poppins'>Y                           </div></div>    
                        
                        
                        </div>
                        
            </div>
            <div className=' flex  flex-col justify-center  items-center bg-[#FAF7F4] border-4 rounded-3xl border-orange-200 shadow mt-10 w-[1920px]'> 
            <div className= ' text-5xl font-semibold text-orange-400 font-poppins mt-5'>Solve the Mystery Word</div>
            <div className=' text-2xl font-poppins text-neutral-600 mt-5 text-center           '><span>Combine your knowledge of the correct letters</span>
            <span className=' font-bold'> (green) </span>
            <span> and the correct but misplaced ones</span>
            <span className='font-bold'> (yellow) </span>
            <span>to deduce the secret word. Achieve </span>
            <br />
            <span>this within six tries, and you've conquered the Wordle challenge!</span>
             </div>
            </div>
        </div>
    )
}
