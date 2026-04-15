import React from 'react'
import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="image-frame">
              <div className="image-placeholder">
                <span>PK</span>
              </div>
              <div className="frame-decoration"></div>
            </div>
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>AI Engineer & Innovator</h3>
            <p>
              I am a passionate AI Engineer specializing in Machine Learning, Deep Learning, 
              and Natural Language Processing. With a strong foundation in computer science 
              and hands-on experience in building intelligent systems, I thrive on solving 
              complex problems through innovative AI solutions.
            </p>
            <p>
              My journey in artificial intelligence has been driven by curiosity and a 
              commitment to creating technology that makes a meaningful impact. I have 
              worked on diverse projects ranging from computer vision applications to 
              advanced NLP models, always pushing the boundaries of what's possible.
            </p>
            <p>
              Beyond coding, I am enthusiastic about staying at the forefront of AI research, 
              contributing to open-source projects, and sharing knowledge with the community. 
              I believe in the power of AI to transform industries and improve lives.
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <h4>3+</h4>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h4>15+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h4>10+</h4>
                <p>Technologies</p>
              </div>
            </div>

            <a href="#contact" className="btn btn-primary">Let's Connect</a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
