import React from 'react'
import { CircularText } from './icons'
import Link from 'next/link'

const HireButton = () => {
  return (
    <div className='fixed flex items-center justify-center overflow-hidden left-4 bottom-4 md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute'>
      <div className='relative flex items-center justify-center w-48 h-auto md:w-20'>{/*for modifying size of web UI/UX */}
        <CircularText className={"fill-dark animate-spin-slow dark:fill-light"} /> {/* spin to rotate logo */}  
        <Link href="/" className='flex 
                    items-center justify-center absolute left-1/2 top-1/2 
                    -translate-x-1/2 -translate-y-1/2 bg-dark text-light
                    shadow-md border-2 border-solid border-dark w-20 h-20 
                    rounded-full font-semibold hover:bg-light hover:text-dark
                    dark:bg-light dark:text-dark 
                    hover:dark:text-light hover:dark:bg-dark hover:dark:border-light
                    md:w-9 md:h-9 md:text-[7px]'> {/*for modifying size of hire me */}
          Hire Me
        </Link>
      </div>

    </div>
  )
}

export default HireButton