import React from 'react'
import { motion } from 'framer-motion'

// adding multiple skills
const MSkills=({name,x,y})=>{
    return (
        <> 
            <motion.div className='py-3 px-6 absolute cursor-pointer shadow-dark flex 
                items-center justify-center rounded-full font-semibold bg-dark 
                text-light dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm 
                md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark 
                xs:dark:text-light xs:font-bold '
                whileHover={{scale:1.05}}
                initial={{x:0,y:0}}
                whileInView={{x:x,y:y,transition:{duration:1.5}}}
                // viewport={{once:true}} //to view once only
            >
            {name}
            </motion.div>
        </>
    )
}

const skills = () => {
  return (
    <> 
        <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full 
                    bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
                    lg:bg-circularLightLg lg:dark:bg-circularDarkLg
                    md:bg-circularLightMd md:dark:bg-circularDarkMd
                    sm:bg-circularLightSm sm:dark:bg-circularDarkSm
                    ' >
            <motion.div className='px-5 py-3 cursor-pointer shadow-dark flex items-center 
                justify-center rounded-full font-semibold bg-dark text-light dark:text-dark
                dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2'
                whileHover={{scale:1.05}}
            >
            Web</motion.div>
            <MSkills name=' HTML' x='-20vw' y='2vw'/>
            <MSkills name='CSS' x='-5vw' y='-10vw'/>
            <MSkills name='JavaScript' x='23vw' y='6vw'/>
            <MSkills name='React Js' x='0vw' y='12vw'/>
            <MSkills name='Next Js' x='-30vw' y='-15vw'/>
            <MSkills name='Node Js' x='32vw' y='-5vw'/>
            <MSkills name='Mongo Db' x='0vw' y='-20vw'/>
            <MSkills name='Express' x='-25vw' y='18vw'/>
            <MSkills name='Tailwind CSS' x='15vw' y='20vw'/>
            <MSkills name='C++' x='27vw' y='-20vw'/>
            <MSkills name='DSA' x='17vw' y='-15vw'/>
        </div>
    </>
  )
}

export default skills   
// exported to about 
// made using repeating radial gradient in mozilla mdn documentation