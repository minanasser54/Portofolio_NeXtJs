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
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
      >
        About Me
      </motion.h1>
      
      {/* Bio Section */}
      <motion.section 
        className="mb-16"
        {...fadeInUp}
      >
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          I’m a Computer and Systems Engineer passionate about building intelligent solutions with AI and modern software technologies. My expertise spans Machine Learning, NLP, Computer Vision, RAG systems, and multi-agent architectures, alongside strong software development skills. I enjoy turning complex problems into impactful, practical solutions.
        </p>
      </motion.section>

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
      {...cardHover}
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
      {...cardHover}
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
      {...cardHover}
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
      {...cardHover}
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
      {...cardHover}
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


{/* Experience / Trainings Section */}
<motion.section 
  className="mb-16"
  {...fadeIn}
  transition={{ delay: 0.4 }}
>
  <motion.h2 
    className="section-title"
    {...fadeInUp}
  >
    Training & Certifications
  </motion.h2>
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
      {...cardHoverSmall}
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
      {...cardHoverSmall}
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
      {...cardHoverSmall}
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
      {...cardHoverSmall}
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
      {...cardHoverSmall}
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
  )
} 