
import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
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
            <div className="education-item card">
              <div className="education-details">
                <h3>B.Tech in AI and Data Science</h3>
                <h4>Koneru Lakshmaiah Educational Foundation, Vijayawada, Andhra Pradesh</h4>
                <span className="period">Expected: May 2026</span>
                <ul className="achievements">
                  <li>CGPA: 8.68</li>
                </ul>
              </div>
            </div>
            <div className="education-item card">
              <div className="education-details">
                <h3>Intermediate (MPC)</h3>
                <h4>Sri Viswa Junior College, Visakhapatnam</h4>
                <span className="period">March 2022</span>
                <ul className="achievements">
                  <li>GPA: 7.3/10</li>
                </ul>
              </div>
            </div>
            <div className="education-item card">
              <div className="education-details">
                <h3>Secondary School (SSC)</h3>
                <h4>Sri Chaitanya School, Rajam</h4>
                <ul className="achievements">
                  <li>GPA: 9.8/10</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="certifications">
            <div className="cert-header">
              <h3>Certifications</h3>
              <p>Validated skills and platform credentials</p>
            </div>
            <div className="cert-grid">
              <div className="cert-card">
                <span className="cert-badge">IBM</span>
                <h4>IBM Python Certification</h4>
                <p>Python fundamentals, OOP, and practical application development.</p>
              </div>
              <div className="cert-card">
                <span className="cert-badge">GCP</span>
                <h4>Google Cloud Practitioner</h4>
                <p>Cloud concepts, deployment basics, and secure infrastructure principles.</p>
              </div>
              <div className="cert-card">
                <span className="cert-badge">TF</span>
                <h4>TensorFlow Developer Certificate</h4>
                <p>Model building, training workflows, and deep learning implementation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
