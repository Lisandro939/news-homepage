'use client'

import React, {useState} from 'react'
import Image from 'next/image'
import Icon from '../assets/images/logo.svg'
import IconMenu from '../assets/images/icon-menu.svg'
import IconCloseMenu from '../assets/images/icon-menu-close.svg'

export default function Header() {

  const aStyle = "cursor-pointer hover:text-red-400"
  const aStyleSidebar = " text-xl font-semibold cursor-pointer hover:text-red-400"
  const [buttonStyle, setButtonStyle] = useState('hidden')

  return (
    <div className='flex flex-row justify-between items-center w-screen max-w-4xl h-[50px] lg:px-4'>
        <Image src={Icon} alt='' width={50} height={25}/>
        <Image 
        src={IconMenu} 
        alt='' 
        width={50} 
        height={25} 
        className='hidden lg:inline-block cursor-pointer'
        onClick={() => setButtonStyle('inline-block')}
        />
        <div className='flex flex-row gap-4 lg:hidden'>
            <a className={aStyle}>Home</a>
            <a className={aStyle}>New</a>
            <a className={aStyle}>Popular</a>
            <a className={aStyle}>Trending</a>
            <a className={aStyle}>Categories</a>
        </div>
        <div className={'absolute flex justify-end w-screen h-screen bg-[rgb(0,0,26)] top-0 right-0 bg-opacity-50 ' + buttonStyle}>
            <div className='flex flex-col gap-12 w-[70%] h-full bg-white'>
                <div className='flex justify-end py-6 px-4'>
                    <Image 
                    src={IconCloseMenu} 
                    alt='' 
                    width={40} 
                    height={40}
                    onClick={() => setButtonStyle('hidden')}
                    />
                </div>
                <div className='flex flex-col gap-4 px-4'>
                  <a className={aStyleSidebar}>Home</a>
                  <a className={aStyleSidebar}>New</a>
                  <a className={aStyleSidebar}>Popular</a>
                  <a className={aStyleSidebar}>Trending</a>
                  <a className={aStyleSidebar}>Categories</a>
                </div>
            </div>
        </div>
        
    </div>
  )
}
