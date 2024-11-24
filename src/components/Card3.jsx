import React from 'react'

function Card3({ imgURL, text1, text2, text3 }) {
    return (
        <div className='flex flex-col space-y-4 col-span-1 p-4'>
            <img src={imgURL} className='w-full' alt="" />
            <p className='text-2xl'>{text1}</p>
            <p className='text-zinc-700'>{text2}</p>
            <p className='pr-2 border-b border-black w-fit'>{text3}</p>
        </div>
    )
}

export default Card3