import React from 'react'
import Card from './bottom components/Card'
import FirstCardImage from '../assets/images/image-retro-pcs.jpg'
import SecondCardImage from '../assets/images/image-top-laptops.jpg'
import ThirdCardImage from '../assets/images/image-gaming-growth.jpg'

export default function Bottom() {
  return (
    <div className='w-[100%] max-w-4xl flex flex-row items-between mb-10 gap-2 md:flex-col lg:px-4 md:gap-6'>
        <Card number="01" image={FirstCardImage} title="Reviving Retro PCs" text="What happens when old PC's are given modern upgrades?"/>
        <Card number="02" image={SecondCardImage} title="Top 10 Laptops of 2022" text="Our best picks for various needs and budgets"/>
        <Card number="03" image={ThirdCardImage} title="The Growth of Gaming" text="How the pandemic has sparked fresh opportunities"/>
    </div>
  )
}
