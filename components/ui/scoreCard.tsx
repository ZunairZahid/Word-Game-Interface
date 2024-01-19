"use client"
  import React from 'react'
  
  export default function ScoreCard() {
    return (  
 


      <div className='flex justify-center items-center relative mt-20'>
      <div className='bg-white rounded-2xl border-t-4 border-blue-500 w-full max-w-[2160px] absolute ' >
        <div className=' flex items-center bg-transparent justify-center mb-12'>
          <div className=' text-white  bg-blue-500 rounded-3xl text-3xl font-bold font-poppins absolute text-center p-1.5'>
            Your Score
          </div>
        </div>
        <div className=' grid grid-cols-3 divide-x items-center mb-4' >
            <div className=' font-poppins font-bold justify-center text-center text-2xl'>Username</div>
            <div className=' font-poppins font-bold justify-center text-center text-2xl '>Game ID</div>
            <div className=' font-poppins font-bold justify-center text-center text-2xl'>Player ID</div>
            
             </div>
             <div className=' grid grid-cols-3 divide-x items-center mb-4 ' >
            <div className=' font-poppins justify-center text-center text-2xl'>User not logged in</div>
            <div className=' font-poppins justify-center text-center text-2xl '>6576faaa7aceda167d40fd66</div>
            <div className=' font-poppins justify-center text-center text-2xl'>6576faa9e36902e5ec90852d</div>            
             </div>

             <div className=' grid grid-cols-2 divide-x items-center mb-4' >
            <div className=' font-poppins font-bold justify-center text-center text-2xl'>Guesses</div>
            <div className=' font-poppins font-bold justify-center text-center text-2xl '>Timer</div>
            
            
             </div>
             <div className=' grid grid-cols-2 divide-x items-center mb-4 ' >
            <div className=' font-poppins justify-center text-center text-2xl'>-</div>
            <div className=' font-poppins justify-center text-center text-2xl '>00:27:06:152</div>
                      
             </div>
             
      </div>
    </div>

    )
  }
  


    
      

