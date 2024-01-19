import { AlertTriangle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function LeaderBoard() {
    return (


        <div className=' rounded-3xl mt-44'>
            <div className="text-center text-red-500 text-3xl font-bold font-poppins leading-snug">Leaderboard</div>
            <div className=" text-center text-slate-700 text-4xl font-bold font-poppins leading-10">Our Top 10 winners</div>
            <div className=' flex grid-cols-2 justify-evenly '>
                {/* This is graph area */}
                <div className=' relative'>

                    <div className=' flex  absolute top-0 w-16 h-16 justify-center items-center bg-blue-400 rounded-full font-poppins font-bold border-4 border-white shadow'>
                        <div className=' text-gray-200 font-bold absolute text-center '>ZZ </div>
                    </div>
                    <div className=' flex absolute -top-1.5 left-5 justify-center w-6 h-6 bg-white rounded-full '>
                        <div className=' text-blue-400 text-center font-poppins'>1</div>
                        <div>


                        </div>
                        <div className=' w-64 absolute flex-col justify-start items-center gap-1 inline-flex  '>
                            <div className='  mt-20 text-center font-semibold font-poppins'> ZUNAIR ZAHID</div>
                            <div className=' flex justify-center'> <Image src={'/pak.png'} alt='asa' width={36} height={36} />
                                <div className=' justify-center font-semibold text-center'>950</div>
                            </div>

                            <div className="w-[122px]  h-[322px] gap-14 relative bg-slate-600 ">

                                <Image src={'/group1.jpg'} alt='asa' width={222} height={622} className=' w-[122px]  h-[322px]' />
                                <div className=' absolute top-[260px] left-16 bg-transparent'><Image src={'/grary.png'} alt='asa' width={100} height={100} className='bg-transparent' /></div>
                            </div>

                        </div>




                    </div>
                    {/* sceond bar */}
                    <div className=' flex absolute top-20 right-16 w-16 h-16 justify-center items-center bg-blue-400 rounded-full font-poppins font-bold border-4 border-white shadow'>
                        <div className=' text-gray-200 font-bold absolute text-center '>TZ </div>

                        <div className=' flex absolute -top-1.5 right-4  justify-center w-6 h-6 bg-white rounded-full '>
                            <div className=' text-blue-400 text-center font-poppins absolute '>2</div>
                            <div>


                            </div>
                            <div className=' w-64 absolute flex-col justify-start items-center gap-1 inline-flex  '>
                                <div className='  mt-20 text-center font-semibold font-poppins'> Talib Zeshan</div>
                                <div className=' flex justify-center'> <Image src={'/aus.png'} alt='asa' width={36} height={36} />
                                    <div className=' justify-center font-semibold text-center'>750</div>
                                </div>

                                <div className="w-[122px]  h-[322px] gap-14 absolute top-40 left-20  ">

                                    <Image src={'/group1.jpg'} alt='asa' width={122} height={622} className=' w-[122px]  h-[222px]' />

                                </div>

                            </div>




                        </div>
                    </div>

                    {/* 3rd bar                    */}
                    <div className=' flex absolute top-40 right-44 w-16 h-16 justify-center items-center bg-blue-400 rounded-full font-poppins font-bold border-4 border-white shadow'>
                        <div className=' text-gray-200 font-bold absolute text-center '>UB </div>

                        <div className=' flex absolute -top-1.5 right-4  justify-center w-6 h-6 bg-white rounded-full '>
                            <div className=' text-blue-400 text-center font-poppins absolute '>3</div>
                            <div>


                            </div>
                            <div className=' w-64 absolute flex-col justify-start items-center gap-1 inline-flex  '>
                                <div className='  mt-20 text-center font-semibold font-poppins'> UBaida</div>
                                <div className=' flex justify-center'> <Image src={'/pak.png'} alt='asa' width={36} height={36} />
                                    <div className=' justify-center font-semibold text-center'>500</div>
                                </div>

                                <div className="w-[122px] h-[151px] gap-14 absolute top-40 left-20  ">

                                    <Image src={'/Group.png'} alt='asa' width={122} height={151} className=' w-[122px]  h-[151px]' />

                                </div>

                            </div>




                        </div>
                    </div>


                </div>


                {/* this is listing  */}
                <div className=' flex-col items-start inline-flex justify-evenly '>
                    <div className=" p-2.5 border-b border-black border-opacity-10 justify-between items-center inline-flex">
                        <div className="Frame40 justify-start items-center gap-4 flex">
                            <div className="Group1686555255 w-16 h-14 relative">
                                <div className="Ellipse7 w-14 h-14 left-[12.26px] top-0 absolute bg-stone-300 rounded-full shadow  border-4 border-white" />
                                <div className="Th left-[27px] top-[14px] absolute text-center text-white text-opacity-50 text-xl font-bold font-poppins">ZZ</div>
                                <div className="Group1686555256 w-6 h-6 left-0 top-[16px] absolute">
                                    <div className="Ellipse8 w-6 h-6 left-0 top-0 absolute bg-white rounded-full" />
                                    <div className=" w-2 h-4 left-[7.17px] top-[3.19px] absolute text-center text-orange-400 text-xs font-bold font-poppins">1</div>
                                </div>
                            </div>
                            <div className=" text-neutral-600 text-lg font-semibold font-poppins">Zunair Zahid</div>
                        </div>
                        <div className="Frame33 justify-start items-center gap-1.5 flex ">
                            <div className=" w-14 h-14 absolute ml-80 mt-2 items-center justify-center ">
                                <Image src={'/pak.png'} alt='s' width={100} height={100} />
                                
                            </div>
                    <div className=" flex justify-center items-center text-neutral-500 font-bold font-poppins absolute ml-72 ">950</div>
                        </div>

                    </div>
                   
                    <div className=" p-2.5 border-b border-black border-opacity-10 justify-between items-center inline-flex">
                        <div className="Frame40 justify-start items-center gap-4 flex">
                            <div className="Group1686555255 w-16 h-14 relative">
                                <div className="Ellipse7 w-14 h-14 left-[12.26px] top-0 absolute bg-stone-300 rounded-full shadow  border-4 border-white" />
                                <div className="Th left-[27px] top-[14px] absolute text-center text-white text-opacity-50 text-xl font-bold font-poppins">TZ</div>
                                <div className="Group1686555256 w-6 h-6 left-0 top-[16px] absolute">
                                    <div className="Ellipse8 w-6 h-6 left-0 top-0 absolute bg-white rounded-full" />
                                    <div className=" w-2 h-4 left-[7.17px] top-[3.19px] absolute text-center text-orange-400 text-xs font-bold font-poppins">1</div>
                                </div>
                            </div>
                            <div className=" text-neutral-600 text-lg font-semibold font-poppins">Talib Zeshan</div>
                        </div>
                        <div className="Frame33 justify-start items-center gap-1.5 flex ">
                            <div className=" w-14 h-14 absolute ml-80 mt-2 items-center justify-center ">
                                <Image src={'/aus.png'} alt='s' width={100} height={100} />
                                
                            </div>
                    <div className=" flex justify-center items-center text-neutral-500 font-bold font-poppins absolute ml-72 ">750</div>
                        </div>

                    </div>
                    <div className=" p-2.5 border-b border-black border-opacity-10 justify-between items-center inline-flex">
                        <div className="Frame40 justify-start items-center gap-4 flex">
                            <div className="Group1686555255 w-16 h-14 relative">
                                <div className="Ellipse7 w-14 h-14 left-[12.26px] top-0 absolute bg-stone-300 rounded-full shadow  border-4 border-white" />
                                <div className="Th left-[27px] top-[14px] absolute text-center text-white text-opacity-50 text-xl font-bold font-poppins">ZZ</div>
                                <div className="Group1686555256 w-6 h-6 left-0 top-[16px] absolute">
                                    <div className="Ellipse8 w-6 h-6 left-0 top-0 absolute bg-white rounded-full" />
                                    <div className=" w-2 h-4 left-[7.17px] top-[3.19px] absolute text-center text-orange-400 text-xs font-bold font-poppins">1</div>
                                </div>
                            </div>
                            <div className=" text-neutral-600 text-lg font-semibold font-poppins">TharesaPara</div>
                        </div>
                        <div className="Frame33 justify-start items-center gap-1.5 flex ">
                            <div className=" w-14 h-14 absolute ml-80 mt-2 items-center justify-center ">
                                <Image src={'/pak.png'} alt='s' width={100} height={100} />
                                
                            </div>
                    <div className=" flex justify-center items-center text-neutral-500 font-bold font-poppins absolute ml-72 ">500</div>
                        </div>

                    </div>
                    <div className=" p-2.5 border-b border-black border-opacity-10 justify-between items-center inline-flex">
                        <div className="Frame40 justify-start items-center gap-4 flex">
                            <div className="Group1686555255 w-16 h-14 relative">
                                <div className="Ellipse7 w-14 h-14 left-[12.26px] top-0 absolute bg-stone-300 rounded-full shadow  border-4 border-white" />
                                <div className="Th left-[27px] top-[14px] absolute text-center text-white text-opacity-50 text-xl font-bold font-poppins">ZZ</div>
                                <div className="Group1686555256 w-6 h-6 left-0 top-[16px] absolute">
                                    <div className="Ellipse8 w-6 h-6 left-0 top-0 absolute bg-white rounded-full" />
                                    <div className=" w-2 h-4 left-[7.17px] top-[3.19px] absolute text-center text-orange-400 text-xs font-bold font-poppins">1</div>
                                </div>
                            </div>
                            <div className=" text-neutral-600 text-lg font-semibold font-poppins">Zunair Zahid</div>
                        </div>
                        <div className="Frame33 justify-start items-center gap-1.5 flex ">
                            <div className=" w-14 h-14 absolute ml-80 mt-2 items-center justify-center ">
                                <Image src={'/pak.png'} alt='s' width={100} height={100} />
                                
                            </div>
                    <div className=" flex justify-center items-center text-neutral-500 font-bold font-poppins absolute ml-72 ">950</div>
                        </div>

                    </div>
                    <div className=" p-2.5 border-b border-black border-opacity-10 justify-between items-center inline-flex">
                        <div className="Frame40 justify-start items-center gap-4 flex">
                            <div className="Group1686555255 w-16 h-14 relative">
                                <div className="Ellipse7 w-14 h-14 left-[12.26px] top-0 absolute bg-stone-300 rounded-full shadow  border-4 border-white" />
                                <div className="Th left-[27px] top-[14px] absolute text-center text-white text-opacity-50 text-xl font-bold font-poppins">ZZ</div>
                                <div className="Group1686555256 w-6 h-6 left-0 top-[16px] absolute">
                                    <div className="Ellipse8 w-6 h-6 left-0 top-0 absolute bg-white rounded-full" />
                                    <div className=" w-2 h-4 left-[7.17px] top-[3.19px] absolute text-center text-orange-400 text-xs font-bold font-poppins">1</div>
                                </div>
                            </div>
                            <div className=" text-neutral-600 text-lg font-semibold font-poppins">Zunair Zahid</div>
                        </div>
                        <div className="Frame33 justify-start items-center gap-1.5 flex ">
                            <div className=" w-14 h-14 absolute ml-80 mt-2 items-center justify-center ">
                                <Image src={'/pak.png'} alt='s' width={100} height={100} />
                                
                            </div>
                    <div className=" flex justify-center items-center text-neutral-500 font-bold font-poppins absolute ml-72 ">435</div>
                        </div>

                    </div>
                    <div className=" p-2.5 border-b border-black border-opacity-10 justify-between items-center inline-flex">
                        <div className="Frame40 justify-start items-center gap-4 flex">
                            <div className="Group1686555255 w-16 h-14 relative">
                                <div className="Ellipse7 w-14 h-14 left-[12.26px] top-0 absolute bg-stone-300 rounded-full shadow  border-4 border-white" />
                                <div className="Th left-[27px] top-[14px] absolute text-center text-white text-opacity-50 text-xl font-bold font-poppins">ZZ</div>
                                <div className="Group1686555256 w-6 h-6 left-0 top-[16px] absolute">
                                    <div className="Ellipse8 w-6 h-6 left-0 top-0 absolute bg-white rounded-full" />
                                    <div className=" w-2 h-4 left-[7.17px] top-[3.19px] absolute text-center text-orange-400 text-xs font-bold font-poppins">1</div>
                                </div>
                            </div>
                            <div className=" text-neutral-600 text-lg font-semibold font-poppins">Zunair Zahid</div>
                        </div>
                        <div className="Frame33 justify-start items-center gap-1.5 flex ">
                            <div className=" w-14 h-14 absolute ml-80 mt-2 items-center justify-center ">
                                <Image src={'/pak.png'} alt='s' width={100} height={100} />
                                
                            </div>
                    <div className=" flex justify-center items-center text-neutral-500 font-bold font-poppins absolute ml-72 ">430</div>
                        </div>

                    </div>
                    <div className=" p-2.5 border-b border-black border-opacity-10 justify-between items-center inline-flex">
                        <div className="Frame40 justify-start items-center gap-4 flex">
                            <div className="Group1686555255 w-16 h-14 relative">
                                <div className="Ellipse7 w-14 h-14 left-[12.26px] top-0 absolute bg-stone-300 rounded-full shadow  border-4 border-white" />
                                <div className="Th left-[27px] top-[14px] absolute text-center text-white text-opacity-50 text-xl font-bold font-poppins">ZZ</div>
                                <div className="Group1686555256 w-6 h-6 left-0 top-[16px] absolute">
                                    <div className="Ellipse8 w-6 h-6 left-0 top-0 absolute bg-white rounded-full" />
                                    <div className=" w-2 h-4 left-[7.17px] top-[3.19px] absolute text-center text-orange-400 text-xs font-bold font-poppins">1</div>
                                </div>
                            </div>
                            <div className=" text-neutral-600 text-lg font-semibold font-poppins">Zunair Zahid</div>
                        </div>
                        <div className="Frame33 justify-start items-center gap-1.5 flex ">
                            <div className=" w-14 h-14 absolute ml-80 mt-2 items-center justify-center ">
                                <Image src={'/pak.png'} alt='s' width={100} height={100} />
                                
                            </div>
                    <div className=" flex justify-center items-center text-neutral-500 font-bold font-poppins absolute ml-72 ">421</div>
                        </div>

                    </div>


                </div>
               

                


                

            </div>
         

        </div>




    )
}
