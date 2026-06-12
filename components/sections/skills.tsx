"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { technologies } from "@/constants";

const Skills = () =>{
    return (
        <section id="skills" className="container mx-auto px-4 py-20">
            <h2 className="text-3xl font-bold text-center mb-12">
                My <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Skills</span></h2>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8'
            >
                {technologies.map((tech, index) => (
                    <Card 
                    key={index} 
                    className="py-0 h-26 flex flex-col items-center justify-center group transition-all duration-300 border hover:border-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500"
                    >
                        <Image
                            src={tech.logo}
                            alt={tech.name}
                            height={48}
                            width={48}
                            className='mb-2 transition-transform duration-300 group-hover:scale-110'
                        />
                        <span 
                        className="text-sm font-medium transition-colors duration-300 group-hover:text-white">
                            {tech.name}
                            </span>
                    </Card>
                ))}
            </motion.div>
        </section>
    );
}
export default Skills