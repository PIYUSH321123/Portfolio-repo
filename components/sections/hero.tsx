"use client";

import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import NextLink from "next/link";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-20 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold ">
            Hi, <span className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>I&apos;m Piyush Neware</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Full Stack Developer, Building amazing web experiences with modern technologies
          </p>
          <div className="flex gap-4">
            <Button size="lg" variant="outline">
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </Button>
            <Button size="lg" variant="outline" asChild>
              <NextLink href="https://github.com/PIYUSH321123" target="_blank" rel="noopener noreferrer">
                <FaGithub size={18} />
                GitHub
              </NextLink>
            </Button>
          </div>
        </motion.div>

        {/* Right Column: Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <Image
            src="/hero.svg"
            alt="Developer Illustration"
            width={400}
            height={400}
            priority
            className="w-full max-w-[500px] h-auto"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;