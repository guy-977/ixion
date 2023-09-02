"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Card from "./components/card";
import Foot from "./components/foot";

export default function Home() {
  return (
    <main className="flex flex-col min-w-full min-h-screen items-center">
      <div className="min-w-full h-24 shadow-[#008522] shadow-xl px-40 justify-between flex flex-row items-center">
      <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link href='/'>
            <Image
              src='/logo-bg.png'
              width={90}
              height={90}
              alt='logo'
            /></Link>
          </motion.div>
        <div className="flex flex-row justify-between space-x-5 text-lg">
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            href="#about"
            className="from-[#33cc33] to-[#145214] bg-gradient-to-r bg-clip-text text-transparent"
          >
            About
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            href="#download"
            className="from-[#33cc33] to-[#145214] bg-gradient-to-r bg-clip-text text-transparent"
          >
            Download
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            href="https://lablab.me/event/gaia-hackathon-act-2/refine-ai"
            target="_blank"
            className="from-[#33cc33] to-[#145214] bg-gradient-to-r bg-clip-text text-transparent"
          >
            The team
          </motion.a>
        </div>
      </div>
      <motion.div 
      className="justify-between space-y-16 py-20 text-center"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}>
        <div className="glitch layers text-5xl font-bold from-[#33cc33] to-[#145214] bg-gradient-to-r bg-clip-text text-transparent glitch-text" data-text="Ixion"><span>Ixion</span></div>
        <p className="text-2xl">Ixion is an AI tool to help you be professional in hacking</p>
      </motion.div>
      <motion.div 
      id="about" 
      className="text-center space-y-16 py-20 max-w-3xl"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}>
        <h2 className="from-[#33cc33] to-[#145214] bg-gradient-to-r bg-clip-text text-transparent text-5xl font-bold">About us</h2>
        <p className="text-2xl">
          We are an innovative team that specializes in creating cutting-edge artificial intelligence solutions.
        </p>
      </motion.div>
      <motion.div 
      className="text-center space-y-16 py-20 max-w-3xl"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}>
        <h2 className="from-[#33cc33] to-[#145214] bg-gradient-to-r bg-clip-text text-transparent text-5xl font-bold">Our vison</h2>
        <p className="text-2xl">
          Our vision is to help cybersecurity professionals to focus on their core tasks by automating the boring parts of their work with Ixion. We want to provide a platform that helps security professionals to discover, exploit, and eliminate vulnerabilities in the systems they manage more efficiently and accurately.
        </p>
      </motion.div>
      <motion.div 
      className="justify-between space-y-16 py-20 text-center" 
      id="download"
      initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}>
        <div 
        className="from-[#33cc33] to-[#145214] bg-gradient-to-r bg-clip-text text-transparent text-5xl font-bold">
        Try it</div>
        <div className="flex flex-row space-x-20">
          <Card text="Clone it from github" url="https://github.com/guy-977/ixion-cli"/>
          <Card text="Use it in colab" url="https://colab.research.google.com/drive/17wn6VCh2-qTeZG0WC28FOpV7hWk6qygv?usp=sharing"/>
        </div>
      </motion.div>
      <Foot/>
    </main>
  );
}
