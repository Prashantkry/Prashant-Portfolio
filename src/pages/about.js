import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import self from '../../public/images/profile/developer-pic-4.jpg'
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/skills'
// import Experience from '@/components/Experience'
import Education from '@/components/Education'
import ParticlesBackground from '@/components/ParticlesBackground'
import Experience from '@/components/Experience'

// No animation of skills count 
const AnimatedNos = ({ value }) => {
    const ref = useRef(null)

    const motionValue = useMotionValue(0) //Creates a MotionValue to track the state and velocity of a value.
    const springValue = useSpring(motionValue, { duration: 3000 }) //to take initial value & configuration -> Creates a MotionValue that, when set, will use a spring animation to animate to its new state.
    const isInView = useInView(ref, { once: true })  //run animation & once is used to make animation 1 time only 

    useEffect(() => {
        if (isInView) {
            motionValue.set(value) //set value so that animation can be done from 0 to set value (final)
        }
    }, [isInView, value, motionValue]) //any change happen in these 3 will effect above code useEffect 

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [springValue, value])

    return <span ref={ref}></span> //to access element 
}

const About = () => {
    return (
        <div>
            <Head>
                <title>Prashant | About Page</title>
                <meta name='description' content='any description' />
            </Head>
            <main className='flex flex-col items-center justify-center w-full dark:text-light'>
                <Layout className='pt-16'>
        <ParticlesBackground/>

                    <AnimatedText text="Passion Fuels Purpose!" 
                        className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
                    {/* this complete page is of 12 column each in responsive case given 4col */}
                    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                        <div className='flex flex-col items-start justify-start col-span-3 xl:col-span-4 md:order-2 md:col-span-8'>
                            <h2 className='mb-4 text-lg font-bold uppercase to-dark/75'>Biography</h2>
                            <p className='font-medium'>
                                Hi, I'm Prashant, a web developer with a passion for creating beautiful, functional,
                                and user-centered digital experiences. With 2 years of experience in the field. I am always looking for
                                new and innovative ways to bring my client's visions to life.
                            </p>
                            <p className='my-4 font-medium'>
                                I believe that design is about more than just making things look pretty – it's about solving problems and
                                creating intuitive, enjoyable experiences for users.
                            </p>
                            <p className='font-medium'>
                                Whether I'm working on a website,  or
                                other digital product, I bring my commitment to design excellence and user-centered thinking to
                                every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
                            </p>
                        </div>
                        {/* below div is for image */}
                        <div className='relative col-span-3 p-8 border-2 border-solid bg-light h-max rounded-2xl border-dark dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
                            {/* below div is for creating 3-D effect on image border */}
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                            <Image src={self} alt="Prashant" className='w-full h-auto rounded-2xl'
                                priority
                                sizes='(max-width: 768px) 100vw,
                                       (max-width:1200px) 50vw,33vw'
                            />
                        </div>

                        {/* skills counts and nos */}
                        <div className='flex flex-col items-end justify-between col-span-2 xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl'><AnimatedNos value={2} />+</span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm'>Satisfied Clients</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl'><AnimatedNos value={10} />+</span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm'>Projects Completed</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl'><AnimatedNos value={2} />+</span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm'>Years of Experience</h2>
                            </div>
                        </div>
                    </div>

                    {/* skills section  */}
                    <Skills />
                    {/* Experience */}
                    <Experience/>
                    {/* <Experience/> */}
                    <Education />
                </Layout>
            </main>
        </div>
    )
}

export default About
