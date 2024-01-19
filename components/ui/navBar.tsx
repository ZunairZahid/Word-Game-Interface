import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function NavBar() {
    return (
        <div className=' justify-center bg-white'>
            
            <div className="flex items-center bg-white p-2 object-right-top relative">
                <Image src={'/donut1.jpg'} alt='author picture' width={42} height={42} className=' object-right-top' />
                <div className="flex items-center ml-96 absolute right-9 justify-evenly space-x-4 bg-gradient-to-l hover:bg-gradient-to-r ">

                    <Image src={'/setting-2.jpg'} alt=' author setting' width={36} height={36} className=' hover:bg-green-300' />
                    <Image src={'/chart.jpg'} alt=' author setting' width={36} height={36} />

                    <div className=' bg-green-500 text-white font-bold rounded-full p-2 hover:bg-sky-700 font-poppins '> New Game</div>
                    <div className=' bg-green-500 text-white font-bold rounded-full p-2  hover:bg-sky-700 font-poppins'> Login </div>
                </div>
            </div>
        </div>










    );
}
