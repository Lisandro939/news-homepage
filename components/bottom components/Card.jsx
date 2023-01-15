import React from 'react'
import Image from 'next/image'

export default function Card({number, image, title, text}) {
  return (
    <div className='flex flex-row gap-2 h-[100px] w-[400px] sm:h-[120px] sm:w-[screen]'> 
        <Image src={image} alt="" width={100} height={100}/>
        <div className='flex flex-col justify-between h-full'>
            <h2 className='text-3xl text-gray-400 font-semibold'>{number}</h2>
            <h3 className='font-bold hover:text-red-400 cursor-pointer'>{title}</h3>
            <p className='text-sm text-gray-500'>{text}</p>
        </div>
    </div>
  )
}
