import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='flex justify-between items-center  text-black p-4 h-[10vh]'>
            <div>
                facebook
            </div>
            <div className='flex space-x-4 items-center'>
                <Link to="/">
                    <span className='text-xl font-medium  px-2 py-1'>
                        home
                    </span>
                </Link>
                <Link to="/">
                    <span className='text-3xl font-medium  px-2 py-1'>
                        AYANO
                    </span>
                </Link>

                <Link to="/else">
                    <span className='text-xl font-medium px-2 py-1'>
                        else
                    </span>
                </Link>
            </div>
            <div>
                dark mode
            </div>
        </div >
    )
}

export default Navbar