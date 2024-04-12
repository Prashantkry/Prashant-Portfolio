import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import LeetCode, { LinkedInIcon, GithubIcon, SunIcon, MoonIcon } from "./icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

// creating custom link
const CustomLink = ({ href, title, className = "" }) => {
  // using router
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {/*group is used to make hover active or inactive in navbar by following span group */}
      {title}
      <span
        className={`h-[1px] inline-block absolute
                             left-0 -bottom-0.5 group-hover:w-full transition-[width] 
                             ease duration-300 bg-dark dark:bg-light 
                             ${router.asPath === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

// creating custom link  for small device
const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  // using router
  const router = useRouter();

  const HandleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    // designing for button for mobile
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={HandleClick}
    >
      {/*group is used to make hover active or inactive in navbar by following span group */}
      {title}
      <span
        className={`h-[1px] inline-block absolute
                             left-0 -bottom-0.5 group-hover:w-full transition-[width] 
                             ease duration-300 bg-light dark:bg-dark 
                             ${router.asPath === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  // dark mode light mode
  const [mode, setMode] = useThemeSwitcher();

  // for responsive nav bar menu
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="relative z-10 flex items-center justify-between w-full px-32 font-medium shadow py-7 lg:px-16 md:px-12 sm:px-8">
      {/* below nav is responsive for larger screen like laptop tv */}
      <div className="flex items-center justify-between w-full lg:hidden">
        {/* navigation link up */}
        <nav className="text-dark dark:text-light">
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/contact" title="Contact" className="mx-4" />
          {/* <CustomLink href="/contact" title="Contact" className='ml-4' /> */}
        </nav>

        {/* navigation link down */}
        <nav className="flex flex-wrap items-center justify-center ">
          <motion.a
            href="https://www.linkedin.com/in/prashantkumar89"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://github.com/Prashantkry"
            target="_blank"
            whileHover={{ y: -2 }}
            className="w-6 mx-3 dark:text-light"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://leetcode.com/Prashantkry89/"
            target="_blank"
            whileHover={{ y: -2 }}
            className="w-6 mx-3 dark:text-light"
          >
            <LeetCode />
          </motion.a>

          {/* 🍃 dark mode button */}
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1
                ${
                  mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
                }`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      {/* responsive menu bar small screen tablet phone */}
      <button
        className="flex-col items-center justify-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark transition-all duration-300 ease-out dark:bg-light block h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark transition-all duration-300 ease-out dark:bg-light block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark transition-all duration-300 ease-out dark:bg-light block h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      {/* below nav is responsive for smaller screen like phone tablet */}
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-center fixed top-1/2 
                        left-1/2 items-center -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 
                        rounded-lg backdrop-blur-md py-32 "
        >
          {/* navigation link up */}
          <nav className="flex flex-col items-center justify-center text-red-500">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/contact"
              title="Contact"
              className=""
              toggle={handleClick}
            />
            {/* <CustomMobileLink href="/contact" title="Contact" className='' toggle={handleClick} /> */}
          </nav>

          {/* navigation link down */}
          <nav className="flex flex-wrap items-center justify-center mt-2">
            <motion.a
              href="https://www.linkedin.com/in/prashantkumar89/"
              target="_blank"
              className="w-6 mx-3 rounded"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkedInIcon />
            </motion.a>

            <motion.a
              href="https://github.com/Prashantkry"
              target="_blank"
              className="w-6 mx-3 rounded dark:text-dark text-light"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://leetcode.com/Prashantkry89/"
              target="_blank"
              whileHover={{ y: -2 }}
              className="w-6 mx-3 dark:text-light"
            >
              <LeetCode />
            </motion.a>

            {/* 🍃 dark mode button */}
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-3 flex items-center justify-center rounded-full p-1
                                    ${
                                      mode === "light"
                                        ? "bg-dark text-light"
                                        : "bg-light text-dark"
                                    }`}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      {/* Logo Work */}
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
