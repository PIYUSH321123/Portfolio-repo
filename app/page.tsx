"use client";
import Hero from "@/components/sections/hero";
import Skills from "@/components/sections/skills";
import Project from "@/components/sections/Projects";
import GithubStats from "@/components/github-stats";

import {motion} from "framer-motion";
import Contact from "@/components/sections/contact";

export default function page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/95 pt-24">
      <Hero />
      <Skills />
      <Project />
      {/*Github stats section*/}
      
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl md:text-5x1 font-bold mb-16 text-center">
          Github
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">{" "}Activity</span>
        </h2>
        <motion.div
        initial={{opacity:0 , y:20}}
        animate={{opacity:1 , y:0}}
        transition={{duration:0.5}}
        >
          <GithubStats username="PIYUSH321123" />
        </motion.div>

      </section>
      <Contact/>
    </main>
  );
}