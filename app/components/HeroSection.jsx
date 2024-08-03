"use client";
import React from 'react';
import ReactDOM from 'react-dom';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
      <section className="lg:py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-12"
        >
          <div className="col-span-7 place-self-center text-center sm:text-left">
            <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-secondary-600 via-primary-400">
                Hello, I'm {""}
              </span>
              <br></br>

              {/* adding animation to the hero section  */}
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Shaurya Srivastava",
                  2000, // wait 1s before replacing "Mice" with "Hamsters"
                  "a Full Stack Web Developer",
                  2000,
                  "an aspiring Software Engineer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
              Crafting Innovative Solutions with Code and Creativity: Shaurya
              Srivastava, Aspiring SDE and Full Stack Developer{" "}
            </p>

            {/* buttons  */}
            <div>
              <a href="mailto: 30shaurya@gmail.com">
                <button className="px-6 py-3 w-full sm:w-fit bg-gradient-to-br from-red-500 to-secondary-600 via-primary-400 rounded-full mr-4 bg-white hover:bg-slate-200 ">
                  Hire Me
                </button>
              </a>

              <a href="https://drive.google.com/file/d/1uniKyseRm6eI4TnG3r_T0fnXQgQ8nsfl/view?usp=drive_link">
                <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-red-500 to-secondary-600 via-primary-400 hover:bg-slate-800 mt-3">
                  <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                    Download CV
                  </span>
                </button>
              </a>
            </div>
          </div>

          {/* image section  */}
          <div className="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
              <Image
                src="/images/heroimage.png"
                alt="hero image"
                width={300}
                height={300}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </section>
    );
}

export default HeroSection;
