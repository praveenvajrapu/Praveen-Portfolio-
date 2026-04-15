
import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
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
          Technical & Soft Skills
        </motion.h2>
        <div className="skills-list">
          <div className="skill-category card">
            <h3>Programming</h3>
            <ul>
              <li>Python</li>
              <li>C</li>
              <li>SQL</li>
            </ul>
          </div>
          <div className="skill-category card">
            <h3>Frameworks</h3>
            <ul>
              <li>Django</li>
              <li>Flask</li>
              <li>Scikit-learn</li>
            </ul>
          </div>
          <div className="skill-category card">
            <h3>AI/ML</h3>
            <ul>
              <li>TensorFlow</li>
              <li>NLP</li>
              <li>Prompt Engineering</li>
              <li>Generative AI</li>
            </ul>
          </div>
          <div className="skill-category card">
            <h3>Cloud</h3>
            <ul>
              <li>AWS (Lambda, API Gateway, DynamoDB, Amplify)</li>
            </ul>
          </div>
          <div className="skill-category card">
            <h3>Soft Skills</h3>
            <ul>
              <li>Teamwork</li>
              <li>Leadership</li>
              <li>Collaboration</li>
              <li>Communication</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
