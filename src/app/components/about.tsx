'use client'

import { FaCode, FaLaptopCode, FaGraduationCap , FaLanguage ,FaUsers} from 'react-icons/fa'
import { motion } from 'framer-motion'
import { 
  fadeInUp, 
  fadeInDown, 
  fadeIn, 
  staggerContainer, 
  cardHover, 
  cardHoverSmall 
} from '@/utils/animations'

export default function About() {
  return (
<div  id="skills" className="container max-w-7xl mx-auto py-12">


      {/* Skills Section */}
      {/* Skills Section */}
<motion.section 
  className="mb-16"
  {...fadeIn}
  transition={{ delay: 0.2 }}
>
  <motion.h2 
    className="section-title"
    {...fadeInUp}
  >
    Skills
  </motion.h2>
  <motion.div 
    className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    variants={staggerContainer}
    initial="initial"
    animate="animate"
  >
    {/* AI & Machine Learning */}
    <motion.div 
      className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
      variants={fadeInUp}
    >
      <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
      <h3 className="text-xl font-semibold mb-2">AI & Machine Learning</h3>
      <ul className="text-secondary space-y-2">
        <li>ML · DL · CNN · NLP · LLMs</li>
        <li>RAG · Generative AI · Computer Vision</li>
        <li>PyTorch · TensorFlow · Scikit-learn</li>
        <li>Model Deployment (Streamlit · Flask · FastAPI)</li>
      </ul>
    </motion.div>

    {/* Programming & Frameworks */}
    <motion.div 
      className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
      variants={fadeInUp}
    >
      <FaCode className="h-8 w-8 text-primary mb-4" />
      <h3 className="text-xl font-semibold mb-2">Programming</h3>
      <ul className="text-secondary space-y-2">
        <li>Python · C/C++ · Java · Bash</li>
        <li>SQL · MongoDB</li>
        <li>Django · Flask · FastAPI · Streamlit</li>
        <li>Verilog · Embedded C · Dart/Flutter (familiar)</li>
      </ul>
    </motion.div>

    {/* Tools & Other */}
    <motion.div 
      className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
      variants={fadeInUp}
    >
      <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
      <h3 className="text-xl font-semibold mb-2">Tools & Other</h3>
      <ul className="text-secondary space-y-2">
        <li>Git/GitHub · Docker · Virtualization</li>
        <li>Hadoop FS · Spark</li>
        <li>Linux (good) · Tkinter/Qt (familiar)</li>
        <li>CI/CD · Cloud (AWS)</li>
      </ul>
    </motion.div>

    {/* Languages */}
    <motion.div 
      className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
      variants={fadeInUp}
    >
      <FaLanguage className="h-8 w-8 text-primary mb-4" />
      <h3 className="text-xl font-semibold mb-2">Languages</h3>
      <ul className="text-secondary space-y-2">
        <li>Arabic: Native</li>
        <li>English: Fluent</li>
        <li>German: Beginner</li>
      </ul>
    </motion.div>

    {/* Soft Skills */}
    <motion.div 
      className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
      variants={fadeInUp}
    >
      <FaUsers className="h-8 w-8 text-primary mb-4" />
      <h3 className="text-xl font-semibold mb-2">Soft Skills</h3>
      <ul className="text-secondary space-y-2">
        <li>Time Management · Leadership</li>
        <li>Problem-Solving · Adaptability</li>
        <li>Cooperation · Communication</li>
      </ul>
    </motion.div>
  </motion.div>
</motion.section>



    </div>
  )
} 