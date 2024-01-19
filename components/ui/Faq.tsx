"use client"
import React from 'react';
import Accordion from './Accordion';

export default function Faq() {

  return (
    <div className=' bg-neutral-200 shadow-inner mt-20'>
      <div className='flex jus flex-col items-center mt-10 border-4 w-[1620px] mx-auto'>
        <div className='text-4xl text-grey-800 font-poppins font-bold mt-20 leading-10 text-center'>FAQs</div>
        <div className='mt-10'></div>
        <div className='text-3xl text-gray-800 font-bold font-poppins place-self-start'>
            <ul>How to play this game?
                </ul>
                <p className=' text-2xl text-gray-600 font-poppins font-normal mt-10'>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive.</p>
                <Accordion />
        </div>
        
      </div>
    </div>
  );
}
