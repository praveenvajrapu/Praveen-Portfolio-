import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered Chatbot',
      description: 'Developed an intelligent conversational AI using transformer models and NLP techniques. Achieved 94% accuracy in intent classification with support for multi-turn conversations.',
      tech: ['Python', 'TensorFlow', 'BERT', 'FastAPI', 'React'],
      github: 'https://github.com',
      live: 'https://demo.com',
      category: 'NLP'
    },
    {
      title: 'Computer Vision System',
      description: 'Built a real-time object detection and tracking system using YOLO and deep learning. Deployed on edge devices for industrial quality control applications.',
      tech: ['PyTorch', 'OpenCV', 'YOLO', 'Docker', 'AWS'],
      github: 'https://github.com',
      live: 'https://demo.com',
      category: 'Computer Vision'
    },
    {
      title: 'Sentiment Analysis Platform',
      description: 'Created a comprehensive sentiment analysis tool for social media monitoring. Processes 10K+ tweets per minute with real-time sentiment visualization dashboards.',
      tech: ['Python', 'scikit-learn', 'MongoDB', 'React', 'D3.js'],
      github: 'https://github.com',
      live: 'https://demo.com',
      category: 'NLP'
    },
    {
      title: 'Recommendation Engine',
      description: 'Designed and implemented a collaborative filtering recommendation system using matrix factorization and deep learning. Improved user engagement by 45%.',
      tech: ['Python', 'TensorFlow', 'Redis', 'PostgreSQL', 'Flask'],
      github: 'https://github.com',
      live: 'https://demo.com',
      category: 'ML'
    },
    {
      title: 'Fraud Detection System',
      description: 'Developed an anomaly detection system using ensemble learning and neural networks. Achieved 98% accuracy in detecting fraudulent transactions in real-time.',
      tech: ['Python', 'XGBoost', 'Keras', 'Apache Kafka', 'Docker'],
      github: 'https://github.com',
      live: 'https://demo.com',
      category: 'ML'
    },
    {
      title: 'Image Generation AI',
      description: 'Built a generative AI model for creating high-quality images from text descriptions using GANs and diffusion models. Generated 50K+ unique images.',
      tech: ['PyTorch', 'Stable Diffusion', 'CUDA', 'FastAPI', 'Vue.js'],
      github: 'https://github.com',
      live: 'https://demo.com',
      category: 'Generative AI'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="project-category">{project.category}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaGithub /> Code
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
