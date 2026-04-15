import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaAward } from 'react-icons/fa'
import './Education.css'

const Education = () => {
  const education = [
    {
      degree: 'Master of Science in Artificial Intelligence',
      school: 'Stanford University',
      period: '2019 - 2021',
      description: 'Specialized in Machine Learning and Deep Learning with focus on Natural Language Processing and Computer Vision.',
      achievements: [
        'GPA: 3.9/4.0',
        'Research Assistant in AI Lab',
        'Published 3 research papers'
      ]
    },
    {
      degree: 'Bachelor of Technology in Computer Science',
      school: 'MIT',
      period: '2015 - 2019',
      description: 'Core focus on algorithms, data structures, and foundations of artificial intelligence and machine learning.',
      achievements: [
        'First Class with Distinction',
        'President of AI & ML Club',
        'Winner of National Hackathon 2018'
      ]
    }
  ]

  const certifications = [
    'Deep Learning Specialization - Coursera',
    'AWS Certified Machine Learning - Specialty',
    'TensorFlow Developer Certificate',
    'Advanced Machine Learning - Coursera',
    'MLOps: Machine Learning Operations',
    'Natural Language Processing Specialization'
  ]

  return (
    <section id="education" className="education">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>

        <div className="education-content">
          <div className="education-list">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="education-item card"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="education-icon">
                  <FaGraduationCap />
                </div>
                <div className="education-details">
                  <h3>{edu.degree}</h3>
                  <h4>{edu.school}</h4>
                  <span className="period">{edu.period}</span>
                  <p>{edu.description}</p>
                  <ul className="achievements">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="certifications card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="cert-header">
              <FaAward className="cert-icon" />
              <h3>Certifications</h3>
            </div>
            <ul className="cert-list">
              {certifications.map((cert, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {cert}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education
