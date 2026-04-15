import React from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase } from 'react-icons/fa'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      title: 'Senior AI Engineer',
      company: 'Tech Innovations Inc.',
      period: '2022 - Present',
      description: 'Leading AI initiatives and developing state-of-the-art machine learning models for production systems. Architecting scalable ML pipelines and mentoring junior engineers.',
      achievements: [
        'Improved model accuracy by 35% through advanced deep learning techniques',
        'Built and deployed 5+ ML models serving 1M+ users',
        'Led a team of 4 ML engineers on critical AI projects'
      ]
    },
    {
      title: 'Machine Learning Engineer',
      company: 'AI Solutions Ltd.',
      period: '2021 - 2022',
      description: 'Developed and optimized machine learning algorithms for computer vision and NLP applications. Collaborated with cross-functional teams to integrate AI solutions.',
      achievements: [
        'Implemented computer vision models achieving 92% accuracy',
        'Reduced model inference time by 40% through optimization',
        'Created automated ML pipelines using MLOps best practices'
      ]
    },
    {
      title: 'AI Research Intern',
      company: 'Research Lab University',
      period: '2020 - 2021',
      description: 'Conducted research on deep learning applications in natural language processing. Published research papers and presented findings at conferences.',
      achievements: [
        'Published 2 research papers in AI conferences',
        'Developed novel NLP models for sentiment analysis',
        'Collaborated with PhD researchers on cutting-edge AI projects'
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="timeline-icon">
                <FaBriefcase />
              </div>
              <div className="timeline-content card">
                <div className="timeline-header">
                  <h3>{exp.title}</h3>
                  <span className="company">{exp.company}</span>
                  <span className="period">{exp.period}</span>
                </div>
                <p className="description">{exp.description}</p>
                <ul className="achievements">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
