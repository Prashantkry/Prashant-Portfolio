import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { GithubIcon } from "@/components/icons";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../images/prashant.jpg";
import classy from "../images/classy-curve.png";
import BookSto from "../images/booksto.png";
import Youtube from "../images/youtube.png";
import Job from "../images/job.png";
import compiler from "../images/compiler.png";
import Cal from "../images/cal.png";
import Dictionary from "../images/Dictionary.png";
import Portfolio from "../images/portf.png";
import todo from "../images/todo.png";
import CodeSnippet from "../images/codeSnippet.png";
import ParticlesBackground from "@/components/ParticlesBackground";
import vrika from "../images/vrika.png";
import fashion from "../images/fashion.png";
import dashboard from "../images/dashboard.png";
import dice from "../images/dice.png";
import task from "../images/task.png";

// Feature Components configuration
const FeatureProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="relative flex items-center justify-between w-full p-12 border border-solid shadow-2xl rounded-3xl border-dark bg-light rounded-br-2xl dark:bg-dark dark:border-light dark:text-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      {/* below div is for creating 3-D effect on image border */}
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] 
                rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light
                xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
      />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 overflow-hidden rounded-lg cursor-pointer lg:w-full"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto "
          priority
          sizes="(max-width: 768px) 100vw,
                            (max-width:1200px) 50vw,33vw"
        />
      </Link>

      <div className="flex flex-col items-start justify-between w-1/2 pl-6 lg:w-full lg:pl-0 lg:pt-6 ">
        <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="w-full my-2 text-4xl font-bold text-left sm:text-sm ">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm whitespace-pre-line">
          {summary}
        </p>

        <div className="flex items-center mt-2"> 
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="p-2 px-6 ml-4 text-lg font-semibold rounded-lg bg-dark text-light dark:bg-light dark:text-dark sm:px-4 sm:text-base "
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

// Single Project Components configuration
const SingleProject = ({ title, type, img, link, github, summary }) => {
  return (
    <article className="relative flex flex-col items-center justify-center w-full p-6 border border-solid shadow-2xl rounded-2xl border-dark bg-light dark:bg-dark dark:border-light dark:text-light xs:p-4">
      <Link
        href={link}
        target="_blank"
        className="w-full overflow-hidden rounded-lg cursor-pointer"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw,
                            (max-width:1200px) 50vw,33vw"
        />
      </Link>

      <div className="flex flex-col items-start justify-between w-full mt-4">
        <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="w-full my-2 text-3xl font-bold text-left lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className="flex items-center justify-between w-full mt-2">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline underline-offset-2 md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
        <div className="flex items-center justify-between w-full mt-2">
          <p className="my-2 font-medium text-dark dark:text-light sm:text-sm whitespace-pre-line text-xs">
            {summary}
          </p>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Prashant | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full mb-16 ">
        <Layout className="pt-16">
          <ParticlesBackground />
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          {/* projects contents  */}
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            {/* row 1 */}
            <div className="col-span-12 text-xs">
              <FeatureProject
                title="Vrika AI"
                img={vrika}
                summary={`
                        • Technology Used: React Js | Node Js | Mongo Db | Javascript | Typescript | CSS | HTML | Tailwind CSS | Python
                        • Integrated advanced AI technologies, like StableDiffusionPipeline and AutoPipelineForImage2Image, revolutionizing image generation from text, 
                        • Executed sophisticated optimization techniques - DPMSolverMultistepScheduler and StableDiffusionImg2ImgPipeline to ensure exceptional outcomes.
                        • MERN website featuring CRUD operations, MVC architecture, JWT token-based authentication, utilizing cookies for session management, hashing passwords, email system, stripe payment gateway integrated based on credits-based usage, stripe Webhook, and Google login authentication.
                        • Image generation dashboard includes functions such as importing or choosing images, downloading,replicating, showing information of generated images and its tools, and displaying the tokens left for generations and generated image in viewport and User Dashboard for management of details, payment methods, and projects.
                `}
                link="https://vrikaai.netlify.app/"
                github="https://github.com/Prashantkry/Vrika-AI"
                type="Feature Project"
              />
            </div>

            {/*   
            // <div className="col-span-6 sm:col-span-12">
            //   <SingleProject
            //     title="Youtube Clone"
            //     img={Youtube}
            //     link="https://earnest-gingersnap-22bb82.netlify.app/"
            //     github="https://github.com/Prashantkry/youtube"
            //     type="Feature Project"
            //   />
            // </div>
            */}

            {/* <div className="col-span-6 sm:col-span-12">
              <SingleProject
                title="Co-Job Compiler"
                img={compiler}
                link="https://whimsical-shortbread-959bb4.netlify.app/"
                github="https://github.com/Prashantkry/Co-Job-Compiler"
                type="Feature Project"
              />
            </div> */}

            {/* Ludo */}
            <div className="col-span-6 sm:col-span-12">
              <SingleProject
                title="Dice Game"
                img={dice}
                link="https://dice-game-alpha-virid.vercel.app/"
                github="https://github.com/Prashantkry/dice-game"
                type="Feature Project"
                summary={`• Technology Used: MERN, Typescript, Javascript, Tailwind CSS, MUI, HTML/CSS.
                          • UI is created in React MUI and tools used like react router, redux, axios, cookies
                          • Backend in Node, Mongo Db, Express, Typescript REST API, MVC, JWT token, Cookie, winston, password hashing and login authentication implemented.
                `}
              />
            </div>

            {/* portfolio */}
            <div className="col-span-6 sm:col-span-12">
              <SingleProject
                title="Prashant Portfolio"
                img={Portfolio}
                link="https://github.com/Prashantkry/Prashant-Portfolio"
                github="https://github.com/Prashantkry/Prashant-Portfolio"
                type="Feature Project"
                summary={`• Technology Used: Next Js | MongoDb | Node | Javascript | Tailwind CSS | HTML
                          • UI is written in Next Js, Tailwind CSS, Framer Motion and JavaScript
                          • Backend is implemented for Contact page for sending message through email using  Node-Mailer and saving data in mongo db.
                `}
              />
            </div>

            {/* <div className="col-span-6 sm:col-span-12">
              <SingleProject
                title="CodeSnippet"
                img={CodeSnippet}
                link="https://moonlit-gumdrop-8d8e4c.netlify.app/"
                github="https://github.com/Prashantkry/Code-Snippet-Creator"
                type="Feature Project"
              />
            </div> */}

            {/* row 2 */}
            <div className="col-span-12 text-sm">
              <FeatureProject
                title="Task Manager"
                img={task}
                summary={`
                        • Technology Used: MERN, Typescript, JavaScript, HTML, CSS, Tailwind
                        • Frontend concept like state management using redux and react hook.
                        • React Router for navigation b/w tabs and responsive across all device
                        • Backend includes CRUD operations, Typescript REST API, MVC architecture, JWT authentication, middleware integration.
                        • User can create update and delete task. Login auth is implemented.
                `}
                link="https://pedalstart-assignment.netlify.app/"
                github="https://github.com/Prashantkry/pedalstart"
                type="Feature Project"
              />
            </div>

            {/* 
            <div className="col-span-6 sm:col-span-12">
              <SingleProject
                title="Todo"
                img={todo}
                link="https://fabulous-pony-dcd3d5.netlify.app/"
                github="https://github.com/Prashantkry/Todo"
                type="Feature Project"
              />
            </div> */}


            {/* dashboard */}
            <div className="col-span-6 sm:col-span-12">
              <SingleProject
                title="Dashboard"
                img={dashboard}
                link="https://dashboard-prashantkry.netlify.app/"
                github="https://github.com/Prashantkry/dashboard"
                type="Feature Project"
                summary={`• Technology Used: Next Js | Typescript | Javascript | CSS | HTML | Tailwind CSS
                          • Dashboard made tracking of all shipments and their details and upcoming events used here react Pie chart and animations 
                          • React Router for navigation and React-Typescript used for components.
                `}
              />
            </div>

            {/* Dictionary */}
            <div className="col-span-6 sm:col-span-12">
              <SingleProject
                title="Dictionary"
                img={Dictionary}
                link="https://darling-profiterole-d4a387.netlify.app/"
                github="https://github.com/Prashantkry/Dictionary"
                type="Feature Project"
                summary={`• Technology Used: React Js | Javascript | CSS | HTML
                          • Dictionary app that can be used to search meanings of words.
                          • Voice integrations is there and used to hear what is meaning of words.
                          • Voice can be played if multiple language like hindi francais e.t.c.
                `}
              />
            </div>



            {/* Portfolio */}            {/* row 2 */}
            {/* <div className="col-span-12 text-sm">
              <FeatureProject
                title="Prashant Portfolio"
                img={Portfolio}
                summary={`
                        • Technology Used: Next Js | Mongo Db | Node Js | Git | Node-Mailer | Framer Motion | Javascript | Tailwind CSS | HTML 
                        • It have option like Home Page About Page Project and Contact
                        • Backend is also implemented for Contact page for sending message through email and saving data in mongo db 
                        • Code is written in Next Js & Functioning are made using JavaScript
                        • Designing is done with Tailwind CSS
                        • Contains All details of Prashant Kumar and All projects 
                `}
                link="https://github.com/Prashantkry/Prashant-Portfolio"
                github="https://github.com/Prashantkry/Prashant-Portfolio"
                type="Feature Project"
              />
            </div> */}


            {/* row 3 */}
            <div className="col-span-12 text-sm">
              <FeatureProject
                title="Fashion Frenzy"
                img={fashion}
                summary={`
                        • Technology Used: Node, Mongo, Express, React, JavaScript, HTML, CSS, Tailwind
                        • Developed a MERN website showcasing comprehensive functionality including CRUD operations, MVC architecture, JWT authentication, middleware integration, and password hashing
                        • Created dual authentication for admins and users, granting admins exclusive management privileges.
                        • Integrated advanced functionalities like a payment gateway, cart system, Admin Dashboard, and responsive design while prioritizing secure user authentication and data protection through robust password hashing techniques to safeguard sensitive information and enhance overall platform security.
                `}
                link="https://glittery-shortbread-a8b75e.netlify.app/"
                github="https://github.com/Prashantkry/fashion-frenzy"
                type="Feature Project"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <SingleProject
                title="Classy Curve"
                img={classy}
                link="https://prashantkry.github.io/Classy-Curve/"
                github="https://github.com/Prashantkry/Classy-Curve"
                type="Feature Project"
                summary={`• Technology Used: Javascript | CSS | HTML
                          • E-Commerce web app UI made in html and css and functionality in Js
                          • View 1 item, seamless navigation between tabs, Carts system and pagination.
                          • Gallery system for view of product.
                `}
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <SingleProject
                title="Calculator"
                img={Cal}
                link="https://prashantkry.github.io/Calculator-app/"
                github="https://github.com/Prashantkry/Calculator-app"
                type="Feature Project"
                summary={`• Technology Used: Javascript | CSS | HTML
                          • Calculator web app UI made in html and css and functionality in Js
                          • User can do here all math calculation like sum subtraction product division .
                          • Isomorphic UI is made here which really gives it a unique look.
                `}
              />
            </div>

            {/* row 4 */}
            {/* <div className="col-span-12 text-sm">
              <FeatureProject
                title="BookSto"
                img={BookSto}
                summary={`
                        • Technology Used: React Js | Node Js | Mongo Db | Javascript | CSS | HTML 
                        • People can buy book by searching directly or by browsing by category
                        • Two ways of sign in 1 by admin and other by user by crating account
                        • Admin will have rights to add product, category user also remove it
                        • Book can be added in cart make payment We can see similar Books details
                `}
                link="https://drab-lime-quail-robe.cyclic.app/"
                github="https://github.com/Prashantkry/BookSto"
                type="Feature Project"
              />
            </div> */}

            {/*
            // <div className="col-span-6 sm:col-span-12">
            //   <SingleProject
            //     title="Job Finder"
            //     img={Job}
            //     link="https://github.com/Prashantkry/Job-Finder"
            //     github="https://github.com/Prashantkry/Job-Finder"
            //     type="Feature Project"
            //   />
            // </div>
*/}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
