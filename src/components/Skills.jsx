import React from 'react'
import { motion } from 'framer-motion'
import { FaPython, FaReact, FaDocker, FaGitAlt, FaAws } from 'react-icons/fa'
import { SiTensorflow, SiPytorch, SiScikitlearn, SiMongodb, SiPostgresql, SiKubernetes } from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      skills: [
        { name: 'TensorFlow', icon: <SiTensorflow />, level: 95 },
        { name: 'PyTorch', icon: <SiPytorch />, level: 90 },
        { name: 'Scikit-learn', icon: <SiScikitlearn />, level: 92 },
        { name: 'Python', icon: <FaPython />, level: 95 }
      ]
    },
    {
      title: 'Development & Tools',
      skills: [
        { name: 'React', icon: <FaReact />, level: 85 },
        { name: 'Docker', icon: <FaDocker />, level: 88 },
        { name: 'Git', icon: <FaGitAlt />, level: 90 },
        { name: 'Kubernetes', icon: <SiKubernetes />, level: 80 }
      ]
    },
    {
      title: 'Cloud & Databases',
      skills: [
        { name: 'AWS', icon: <FaAws />, level: 85 },
        { name: 'MongoDB', icon: <SiMongodb />, level: 88 },
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 87 }
      ]
    }
  ]

  const expertise = [
    'Machine Learning',
    'Deep Learning',
    'Natural Language Processing',
    'Computer Vision',
    'MLOps',
    'Data Science',
    'Neural Networks',
    'Model Optimization',
    'Big Data',
    'Cloud Computing'
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>

        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              className="skill-category card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="expertise-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Areas of Expertise</h3>
          <div className="expertise-tags">
            {expertise.map((item, index) => (
              <motion.span
                key={index}
                className="expertise-tag"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
