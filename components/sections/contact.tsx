import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Card } from "../ui/card";
import ContactForm from "../../Contact-form";
import Image from "next/image";
const Contact = () => {
  return (
    <section id="contacts" className="container mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6">
            Let&apos;s <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
          <div className="flex gap-4 mb-8">
            <Button variant={"outline"} size={"icon"} asChild 
            className="hover:scale-110 transition-transform duration-200 active:scale-95">
              <a href="https://github.com/PIYUSH321123" target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-5 h-5" />
              </a>
            </Button>
            <Button variant={"outline"} size={"icon"} asChild 
            className="hover:scale-110 transition-transform duration-200 active:scale-95">
              <a href="https://www.linkedin.com/in/piyush-neware-3907872aa/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={18} />
              </a>
            </Button>
            <Button variant={"outline"} size={"icon"} asChild 
            className="hover:scale-110 transition-transform duration-200 active:scale-95">
              <a href="mailto:piyushneware74@gmail.com" target="_blank" rel="noopener noreferrer">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>
          <Card className="px-6 py-6">
            <ContactForm />
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center mt-20"
        >
          <Image
            src={"/contact.svg"}
            alt="Contact Illustrations"
            width={600}
            height={600}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;