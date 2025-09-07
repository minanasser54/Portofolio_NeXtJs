'use client'

import { projects } from '@/contents/projects'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import {fadeInUp, 
  fadeInDown, 
  fadeIn, 
  staggerContainer, 
  cardHover, 
  cardHoverSmall  } from '@/utils/animations'
import { FaCode, FaLaptopCode, FaGraduationCap , FaLanguage ,FaUsers} from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Experience() {
  return (
    <section id="Experience" className="py-20">
      <div className="container max-w-7xl mx-auto px-4">

        {/* Experience / Trainings Section */}
<motion.section 
  className="mb-16"
  {...fadeIn}
  transition={{ delay: 0.4 }}
>
  <motion.h3
    className="section-title"
    {...fadeInUp}
  >
    Training & Certifications
  </motion.h3>
  <motion.div 
    className="max-w-3xl mx-auto space-y-8"
    variants={staggerContainer}
    initial="initial"
    animate="animate"
  >
    {/* DEPI Generative AI */}
    <motion.div 
      className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
      variants={fadeInUp}
    >
      <h3 className="text-xl font-semibold mb-2">Digital Egypt Pioneers Initiative (DEPI) – Generative AI Track</h3>
      <p className="text-primary mb-2">June 2025 – December 2025</p>
      <ul className="text-secondary list-disc list-inside space-y-2">
        <li>Studied ML, DL, CNNs, NLP, LLMs, and Generative AI methods</li>
        <li>Hands-on projects covering preprocessing, model training, and deployment</li>
      </ul>
    </motion.div>

    {/* Sprints ML Training */}
    <motion.div 
      className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
      variants={fadeInUp}
    >
      <h3 className="text-xl font-semibold mb-2">Sprints – Machine Learning Training</h3>
      <p className="text-primary mb-2">July 2025</p>
      <ul className="text-secondary list-disc list-inside space-y-2">
        <li>Worked on Python for ML, data visualization, regression, classification</li>
        <li>Applied clustering and dimensionality reduction techniques</li>
      </ul>
    </motion.div>

    {/* Udemy ML Course */}
    <motion.div 
      className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
      variants={fadeInUp}
    >
      <h3 className="text-xl font-semibold mb-2">Udemy – Machine Learning Course</h3>
      <p className="text-primary mb-2">December 2024</p>
      <ul className="text-secondary list-disc list-inside space-y-2">
        <li>Covers supervised and unsupervised ML, reinforcement learning</li>
        <li>Worked with anomaly detection and neural networks</li>
      </ul>
    </motion.div>

    {/* Neurotech Platform */}
    <motion.div 
      className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
      variants={fadeInUp}
    >
      <h3 className="text-xl font-semibold mb-2">Neurotech Platform</h3>
      <p className="text-primary mb-2">2024 – 2025</p>
      <ul className="text-secondary list-disc list-inside space-y-2">
        <li>Worked on RAG, NLP, and Computer Vision applications</li>
        <li>Built small apps with Streamlit and Flask for deployment</li>
      </ul>
    </motion.div>
  </motion.div>
</motion.section>

{/* Education Section */}
<motion.section
  {...fadeIn}
  transition={{ delay: 0.6 }}
>
  <motion.h2 
    className="section-title"
    {...fadeInUp}
  >
    Education
  </motion.h2>
  <motion.div 
    className="max-w-3xl mx-auto"
    variants={staggerContainer}
    initial="initial"
    animate="animate"
  >
    <motion.div 
      className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
      variants={fadeInUp}
    >
      <h3 className="text-xl font-semibold mb-2">
        Faculty of Engineering – Ain Shams University, Cairo
      </h3>
      <p className="text-primary mb-2">
        B.Sc. in Computer and Systems Engineering
      </p>
      <p className="text-secondary">
        GPA: 3.24 <br />
        September 2021 – Expected June 2026
      </p>
    </motion.div>
  </motion.div>
</motion.section>

      </div>
    </section>
  )
} 