import React from 'react'
import Link from 'next/link'
import {motion} from "framer-motion"

const MotionLink=motion(Link)

const Logo = () => {
    return(
        <div className="flex item-centre justify-center mt-2">
            <MotionLink 
                href='/' 
                className='rounded-full flex item-centre justify-center
                            text-light p-2 font-bold  border-solid text-1xl bg-dark 
                            border-2 border-transparent dark:border-light'
                            whileHover={{
                    backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
                    transition:{duration:1 , repeat:Infinity}
                }}
                >PK  
            </MotionLink>
        </div>
    )
}
export default Logo 