import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  const [photoError, setPhotoError] = useState(false)

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
                {!photoError ? (
                  <img
                    src="/profile.jpeg"
                    alt="Praveen Vajrapu"
                    className="profile-image"
                    onError={() => setPhotoError(true)}
                  />
                ) : (
                  <span>PV</span>
                )}
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
            <h3>Praveen Vajrapu - B.Tech Graduate (AI & Data Science)</h3>
            <p>
              I am a recent B.Tech graduate in AI and Data Science, with hands-on skills in full-stack development, machine learning, and cloud technologies. I enjoy building end-to-end applications that combine solid frontend and backend engineering with intelligent features.
            </p>
            <p>
              My stack includes React, JavaScript, Python, SQL, Django/Flask, and AWS services like Lambda, API Gateway, DynamoDB, and Amplify. I focus on writing clean, practical solutions and continuously improving through projects and learning.
            </p>
            <p>
              I am actively looking for entry-level opportunities where I can contribute as a software engineer in full-stack, ML, or cloud-focused roles.
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <h4>Fresher</h4>
                <p>Career Stage</p>
              </div>
              <div className="stat-item">
                <h4>3+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h4>3</h4>
                <p>Core Domains</p>
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
