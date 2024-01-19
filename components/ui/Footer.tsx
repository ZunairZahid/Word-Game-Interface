import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className='  bg-red-500 w-full h-20 flex justify-around items-center text-white'> 
    <div>
        <div className=' font-poppins leading-10'>
        © 2023
        
       <Link href={'https://dev.d2p2mm3quesvi8.amplifyapp.com/#'}  className=' hover:underline ' > Guess The Word </Link>
         . All Rights Reserved</div></div>

    
    <div className="Frame20  items-center gap-4 flex">
        <div className=" text-white font-medium font-poppins">New Game</div>
        <div className=" w-1.5 h-1.5 bg-yellow-400 rounded-full" />
        <div className=" text-white font-medium font-poppins">Privacy Policy</div>
        <div className=" w-1.5 h-1.5 bg-yellow-400 rounded-full" />
        <div className=" text-white font-medium font-poppins">About</div>
        <div className=" w-1.5 h-1.5 bg-yellow-400 rounded-full" />
        <div className=" text-white font-medium font-poppins">Feedback</div>
    </div>


    
        
    </div>
    
   





)
}