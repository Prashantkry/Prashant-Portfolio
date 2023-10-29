import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LineIconExperience from "./LineIconExperience";

// details as props of experience
const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null); //for alignment as reference element
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col 
                  item-center justify-between md:w-[80%] "
    >
      <LineIconExperience reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        {" "}
        {/*to animate content from ⬇ to ⬆ while going ⬇ */}
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg ">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="font-bold text-primary dark:text-primaryDark text-2xl"
          >
            {company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};
const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2
        className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl 
          md:mb-16"
      >
        Experience
      </h2>

      {/* main content of experience */}
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        {/* creating line of left side */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 
            w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Full Stack Web Developer"
            company="@RenderPub"
            companyLink={"https://renderpub.com/"}
            time="October,2023 - Present"
            address="Bengaluru, Karnataka 560098"
            //             work={`• Amplified technical expertise in MERN, Svelte, Electron, Three Js, Graph QL through
            // immersive hands-on experience.\n
            // • As a full stack web developer maintained and structured website and 3d graphics
            // functionalities.
            // • Worked on AutoCAD (computer-aided design) for architectural maintenance.`}
            work={
              <div>
                • Amplified technical expertise in MERN, Svelte, Electron, Three
                Js, Graph QL through immersive hands-on experience.
                <br />
                • As a full stack web developer, maintained and structured
                website and 3D graphics functionalities.
                <br />• Worked on AutoCAD (computer-aided design) for
                architectural maintenance.
              </div>
            }
          />
          {/* <Details
            position='Software Engineer' company='@Google'
            companyLink={'www.google.com'}
            time='2022-Present' address='Mountain View, CA'
            work="Worked on a team responsible for developing new features for Google's 
                  search engine, including improving the accuracy and relevance of search results and 
                  developing new tools for data analysis and visualization."
          /> */}
          {/* <Details
            position='Software Engineer' company='@Google'
            companyLink={'www.google.com'}
            time='2022-Present' address='Mountain View, CA'
            work="Worked on a team responsible for developing new features for Google's 
                  search engine, including improving the accuracy and relevance of search results and 
                  developing new tools for data analysis and visualization."
          /> */}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
// exported to about
