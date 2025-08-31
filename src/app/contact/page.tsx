'use client'

import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeInUp, fadeIn, slideInLeft, slideInRight } from '@/utils/animations'

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInUp}
      >
        Get in Touch
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
          <motion.div {...fadeInUp}>
            <p className="text-secondary text-center">
              I&apos;m always open to meaningful discussions and collaborations on innovative projects, groundbreaking research, or transformative products. As a Computer Engineer and Software Developer with a strong focus on Artificial Intelligence, I specialize in leveraging modern technologies such as Retrieval-Augmented Generation (RAG), intelligent agents, Large Language Models (LLMs), Natural Language Processing (NLP), Computer Vision, and Machine Learning to design and implement smart, efficient, and scalable solutions. I&apos;m passionate about exploring the intersection of cutting-edge AI and practical software systems to solve complex challenges, build next-generation applications, and contribute to impactful digital transformations. Whether it&apos;s creating robust backend systems, experimenting with novel AI architectures, or developing intelligent user-centric applications, I&apos;m eager to collaborate with visionary teams and bring ambitious ideas to life
            </p>
          </motion.div>
          
          <motion.div 
            className="space-y-4"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <motion.div 
              className="flex items-center gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaEnvelope className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <a href="mailto:your.email@example.com" className="text-secondary hover:text-primary">
                  mina.nasser54@gmail.com
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaPhone className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <a href="tel:+1234567890" className="text-secondary hover:text-primary">
                  +201282814092
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaMapMarkerAlt className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-secondary">Cairo, Egypt</p>
              </div>
            </motion.div>
          </motion.div>
      </div>
    </div>
  )
} 