import React from 'react'
import { motion } from 'framer-motion'

// animation of all  word
const quote={
  initial:{
    opacity:1
  },
  animate:{
    opacity:1,
    transition:{
      delay:0.5,
      staggerChildren:0.08  //to delay time in each word then no need to initialize 
    }
  }
}

// animation of 1 word
const singleWord={
  initial:{
    opacity:0,
    y:50
  },
  animate:{
    opacity:1,
    y:0,
    transition:{
      duration:1
    }
  }
}
const AnimatedText = ({text,className=' '}) => {
  return (
    <div className='overflow-hidden w-full mx-auto py-2 flex items-center justify-center 
            text-center sm:py-0' >
        <motion.h1 className={`inline-block w-full to-dark font-bold capitalize text-8xl ${className} dark:text-light`}
        variants={quote}
        initial="initial"
        animate='animate'
        >
            {
                text.split(" ").map((word,index)=>
                <motion.span key={word+'-'+index} className='inline-block'
                    variants={singleWord}
                >  {/*will generate key */}
                    {word}&nbsp;    {/*add  space after each word*/} 
                </motion.span>
                )
            }
        </motion.h1>
    </div>
  )
}

export default AnimatedText
