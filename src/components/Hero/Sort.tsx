import { ChevronRight } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

const Sort = () => {
  return (
    <div>
        <div className="sort container mb-8">
            <hr />
            <div className=" flex justify-between mb-4">
            <div className="flex  mt-2 ">
            <div className='flex flex-row gap-2  '>
            <div className='flex items-center border '>
            <Input className=' py-3 px-2  border-none focus:border-none  active:border-none outline-none  focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0' placeholder='Filter By' />
             <ChevronRight />
             </div>
             <div className=' flex items-center border'>
            <Input className=' py-3 px-2  border-none focus:border-none active:border-none outline-none  focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0' placeholder='Sort By' />
             <ChevronRight />
             </div>
        </div>
        </div>
        <div className='flex gap-10'>
            <div><p className='text-[#70707082] text-sm'>1-20 of 900 product</p></div>
            <div className='flex gap-2 text-[#70707082]' ><p>1</p>
            <p>2</p>
            <p>3</p>
            <ChevronRight />
            </div>
        </div>
        </div>
        <hr className='' />
    </div>
    <div className='mt-6 space-x-2'>
    <Button className="bg-[#C4D7ED] rounded-2xl">Color</Button>
    <Button className="bg-[#C4D7ED] rounded-2xl">Material</Button>
    <Button className="bg-[#C4D7ED] rounded-2xl">Type</Button>
    <Button className="bg-[#C4D7ED] rounded-2xl">Brand</Button>
    <Button className="bg-[#C4D7ED] rounded-2xl">Style</Button>
    </div>
   </div>
  )
}

export default Sort