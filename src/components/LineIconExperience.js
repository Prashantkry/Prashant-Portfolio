import React from 'react'
import { motion, useScroll } from 'framer-motion'

const LineIconExperience = ({reference}) => {

    const { scrollYProgress } = useScroll({
        target: reference,
        offset: ["center end", "center center"]
    })
    return (
        // creating 🔴 circle in line 
        <figure className='absolute left-0 stroke-dark dark:stroke-light'>
            <svg width='75' height='75' viewBox='0 0 100 100' 
                className='-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]'>
                <circle cx="75" cy="50" r="20" className='stroke-primary dark:stroke-primaryDark stroke-1 fill-none' /> {/*cx and cy are co-ordinate of circle at x & y axis */}
                <motion.circle cx="75" cy="50" r="20" className='stroke-[5px] fill-light dark:fill-dark' 
                    style={{
                        pathLength:scrollYProgress
                    }}
                />
                <circle cx="75" cy="50" r="10" className='stroke-1 fill-primary animate-pulse dark:fill-primaryDark'/> {/*animate-pulse is used to rotate 3rd circle*/}
            </svg>
        </figure>
    )
}

export default LineIconExperience
// exported to experience