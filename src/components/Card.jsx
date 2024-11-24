import React from 'react'

function Card({imgURL}) {
  return (
    <div className='flex flex-col space-y-4 col-span-1'>
        <img src={imgURL} className='w-full' alt="" />
        <span className='text-2xl'>Commercial</span>
        <span className='pr-4'>Designing innovative, functional commercial spaces that enhance business productivity and create memorable experiences.</span>
        <span className='border-b-2 border-black w-fit pr-2'>More Information</span>
    </div>
  )
}

export default Card