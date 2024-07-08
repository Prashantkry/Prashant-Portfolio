import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion"
import LineIconExperience from './LineIconExperience'

// details as props of experience 
const Details = ({ type, time, place, info}) => {
  const ref=useRef(null) //for alignment as reference element 
  return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col 
                  item-center justify-between md:w-[80%] '>
      <LineIconExperience reference={ref}/>
      <motion.div
        initial={{y:50}}  
        whileInView={{y:0}}
        transition={{duration:0.5,type:"spring"}}
      >  {/*to animate content from ⬇ to ⬆ while going ⬇ */}
        <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{type}
        </h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
          {time} | {place}
        </span>
        <p className='font-medium w-full md:text-sm'>
          {info}
        </p>
      </motion.div>
    </li>
  )
}
const Education = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  })
  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl 
          md:mb-16'>Education</h2>

      {/* main content of experience */}
      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

        {/* creating line of left side */}
        <motion.div style={{ scaleY: scrollYProgress }} 
          className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top 
            dark:bg-light md:w-[2px] md:left-[20px] xs:left-[20px]' />

        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
          <Details
            type='Bachelor of Computer Science'
            time='2020-Present' 
            place='Lovely Professional University'
            info="Courses I learnt are: Data Structures and Algorithm , Full Stack Web Development 
                  , Many programming language like C,C++ ... ,other courses like OS,Computer Network,English..."
          />
          <Details
            type='Intermediate'
            time='2020' 
            place='Shivam International School'
            info="Courses I learnt are: Math , Physics, Chemistry,English , Painting"
          />
          
        </ul>
      </div>
    </div>
  )
}

export default Education
// exported to about 
