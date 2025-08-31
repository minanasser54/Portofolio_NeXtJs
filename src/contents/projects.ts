import { Project } from "@/types";


export const projects: Project[] = [
  {
    title: 'IBM Employee Attrition',
    description: 'Data analysis and ML modeling to predict employee attrition using IBM HR dataset.',
    technologies: ['Python', 'ML', 'Clustering', 'Preprocessing'],
    githubLink: 'https://github.com/minanasser54/IBM-Employee-Attrition',
    demoLink: null,
    image: '/projects/IBM-Employee-Attrition.png',
  },
  {
    title: 'Image Captioning',
    description: 'Generate captions for images using pretrained CNN and LSTM with attention.',
    technologies: ['Python', 'EfficientNet (CNN)', 'LSTM', 'Soft Attention'],
    githubLink: 'https://github.com/minanasser54/Image_Captioning',
    demoLink: null,
    image: '/projects/image-captioning.jpeg',
  },
  {
    title: 'Data PreProcessor',
    description: 'GUI tool for dataset preprocessing with scalers, pipelines, oversampling.',
    technologies: ['Python', 'scikit-learn', 'GUI'],
    githubLink: 'https://github.com/minanasser54/Data_PreProcessor',
    demoLink: null,
    image: '/projects/data-preprocessor.png',
  },
  {
    title: 'Heart Disease Predictor',
    description: 'Streamlit app using ML classification to predict probability of heart disease.',
    technologies: ['Python', 'Streamlit', 'Classification', 'K-Means'],
    githubLink: 'https://github.com/minanasser54/Heart_Disease_Project',
    demoLink: null,
    image: '/projects/heart-disease.png',
  },
  {
    title: 'FlipFlow',
    description: 'Distributed inventory management marketplace built with Django, REST API, threading.',
    technologies: ['Python', 'Django', 'REST API', 'JavaScript'],
    githubLink: 'https://github.com/minanasser54/FlipFlow',
    demoLink: null,
    image: '/projects/flipflow.png',
  },
  {
    title: 'XML Visualizer',
    description: 'CLI & GUI tool in C++ for editing, converting, and checking XML consistency.',
    technologies: ['C++', 'Data Structures', 'CLI', 'GUI'],
    githubLink: 'https://github.com/minanasser54/XMLVisualizer',
    demoLink: null,
    image: '/projects/xml-visualizer.png',
  },
  {
    title: 'EDUFLEXA',
    description: 'Java-based course management system using JavaFX and OOP principles.',
    technologies: ['Java', 'JavaFX', 'OOP', 'Exception Handling'],
    githubLink: 'https://github.com/minanasser54/EDUFLEXA_java_edu_system',
    demoLink: null,
    image: '/projects/eduflexa.png',
  },
  {
    title: 'ARM M4 + GPS',
    description: 'Embedded project interfacing ARM Cortex-M4 with GPS module to display distance.',
    technologies: ['C', 'Embedded Systems', 'ARM Cortex-M4'],
    githubLink: 'https://github.com/minanasser54/ARM_M4_GPS',
    demoLink: null,
    image: '/projects/arm-m4-gps.png',
  },
  // Add more repos similarly as needed...
];
