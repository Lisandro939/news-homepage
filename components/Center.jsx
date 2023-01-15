import Image from 'next/image'
import React from 'react'
import CenterImage from '../assets/images/image-web-3-desktop.jpg'

export default function Center() {

    const titleSectionStyle = "font-bold text-lg text-white hover:text-[rgb(232,174,84)] cursor-pointer"

  return (
    <div className='flex flex-row w-screen max-w-4xl gap-4 lg:flex-col lg:px-4'>
        <div className='flex flex-col gap-10'>
            <div>
                <Image src={CenterImage} alt='' width={1000} height={50}/>
            </div>
            <div className='flex flex-row gap-10 md:flex-col'>
                <h1 className='w-[70%] text-5xl font-black'>
                    The Bright Future of Web 3.0?
                </h1>
                <div className='flex flex-col w-[80%] items-start gap-6'>
                    <p className='text-gray-600'>
                        We dice into the next evolution of the web that claims to put the 
                        power of the platforms back into the hands of the people. 
                        But it is really fulfilling its promise?
                    </p>
                    <button className='bg-red-500 px-8 py-2 text-white font-semibold hover:bg-[rgb(0,0,26)]'>
                        READ MORE
                    </button>
                </div>
            </div>
        </div>
        <div className='flex flex-col bg-[rgb(0,0,26)] px-4 py-4 gap-8 w-full'>
            <h2 className='text-[rgb(232,174,84)] text-4xl font-semibold'>New</h2>
            <section className='flex flex-col gap-2'>
                <h3 className={titleSectionStyle}>Hydrogen VS Electric Cars</h3>
                <p className='text-gray-400 text-sm'>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </section>
            <section className='flex flex-col gap-2 border-t-2 border-gray-800 pt-4'>
                <h3 className={titleSectionStyle}>The Downsides of AI Artistry</h3>
                <p className='text-gray-400'>What are the possible adverse effects of on-demand AI image generator?</p>
            </section>
            <section className='flex flex-col gap-2 border-t-2 border-gray-800 pt-4'>
                <h3 className={titleSectionStyle}>Is VC Funding Drying UP?</h3>
                <p className='text-gray-400'>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </section>
        </div>
    </div>
  )
}
