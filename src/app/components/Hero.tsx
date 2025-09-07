'use client'

import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaGoogle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn, scaleIn ,fadeInDown} from '@/utils/animations';

export default function Hero() {
  return (
    <section  id="about" className="py-28">
  <div className="container max-w-7xl mx-auto px-4">
    {/* Flex container for image + text */}
    <motion.div 
      className="flex flex-col md:flex-row items-center md:items-start gap-12"
      {...fadeInUp}
    >
      {/* Image Section */}
      <motion.div 
        className="flex-shrink-0"
        {...scaleIn}
        transition={{ delay: 0.2 }}
      >
        <Image 
          src="/profile.png" 
          alt="Profile" 
          width={300} 
          height={300} 
          className="w-64 h-64 object-cover ring-2 ring-primary rounded-xl"
        />
      </motion.div>

      {/* Text Section */}
      <div className="flex-1 text-center md:text-left">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6"
          {...fadeInUp}
          transition={{ delay: 0.3 }}
        >
          Hi, I&apos;m <motion.span 
            className="text-primary"
            {...fadeIn}
            transition={{ delay: 0.8 }}
          >
            Mina Nasser
          </motion.span>
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6"
          {...fadeInUp}
          transition={{ delay: 0.4 }}
        >
          Computer And Systems Engineer | AI Developer
        </motion.p>

        <motion.p 
          className="text-lg text-secondary mb-8"
          {...fadeInUp}
          transition={{ delay: 0.5 }}
        >
          I’m a Computer and Systems Engineer passionate about building intelligent solutions with AI and modern software technologies. 
          My expertise spans Machine Learning, NLP, Computer Vision, RAG systems, and multi-agent architectures, alongside strong software development skills. 
          I enjoy turning complex problems into impactful, practical solutions.
        </motion.p>

        {/* Social Links */}
        <motion.div 
          className="flex justify-center md:justify-start space-x-4 mb-8"
          {...fadeInUp}
          transition={{ delay: 0.6 }}
        >
          <motion.a
            href="https://github.com/minanasser54"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/mina-nasser-shehata"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="mailto:mina.nasser54@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGoogle />
          </motion.a>
        </motion.div>

        {/* Buttons */}
        <motion.div 
          className="flex flex-col md:flex-row justify-start gap-4"
          {...fadeInUp}
          transition={{ delay: 0.7 }}
        >
          <Link
            href="#projects"
            className="bg-primary inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="#contact"
            className="inline-block w-full md:w-auto bg-gray-500 text-gray-800 dark:text-white px-8 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
    </motion.div>
  </div>
</section>

  );
} 