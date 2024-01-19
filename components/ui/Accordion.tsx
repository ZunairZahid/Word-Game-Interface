"use client"
import React from 'react'
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';



export default function AccordionDemo() {
    const data = [{ title: 'How to play this game?', content: 'Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive.' },
    { title: 'How to make this game?', content: 'loremipsum' }, { title: ' how to design this complext user interface', content: 'Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive.' }]
    return (
        <div className=' flex justify-between rounded-md focus-within:ring-neutral-900 mt-10'>
            <Accordion.Root type="single" collapsible className=' w-full'>
                {data.map((item: any, index) => (



                    <Accordion.Item key={index} value={index.toString()}>

                        <Accordion.Header>
                            <Accordion.Trigger className='flex justify-between w-full h-28 items-center text-neutral-600 text-3xl font-semibold  border-dotted border-t border-b border-neutral-600 font-poppins group data-[state=open]:border-b-2'>
                                <span>{item.title}</span>
                                <ChevronDownIcon className=' group-data-[state=open]:rotate-180 transition-all duration-300 ease-in-out h-8 w-8' />
                            </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content className=' data-[state=open]: bg-neutral-100 rounded-md px-2'>
                            <span className=' text-2xl font-normal text-neutral-600  font-poppins'>{item.content}</span>
                        </Accordion.Content>
                    </Accordion.Item>))}
            </Accordion.Root>
        </div>
    )
}
