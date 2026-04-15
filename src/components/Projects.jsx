import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
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
          Projects
        </motion.h2>
        <div className="projects-grid">
          <div className="project-card card">
            <h3>AI-Powered Serverless Diagramming Tool</h3>
            <p><b>Role:</b> AWS Cloud Management</p>
            <ul>
              <li>Built a serverless web app that generates ER, UML, and flowcharts from natural language prompts using DeepSeek LLM.</li>
              <li>Implemented backend using AWS Lambda, API Gateway, and DynamoDB with sub-2s response time.</li>
              <li>Deployed responsive React.js frontend using Tailwind CSS and AWS Amplify (CI/CD).</li>
            </ul>
            <span className="project-period">May 2024 – Jul 2024</span>
            <div className="project-links">
              <a
                href="https://github.com/praveenvajrapu/VizCraft"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View GitHub
              </a>
            </div>
          </div>
          <div className="project-card card">
            <h3>House Price Prediction (Machine Learning)</h3>
            <p><b>Role:</b> Data Scientist</p>
            <ul>
              <li>Built ML model to predict house prices using Linear Regression and Random Forest.</li>
              <li>Processed and cleaned housing datasets; performed feature engineering and visualization.</li>
              <li>Evaluated model accuracy using RMSE and R2 metrics.</li>
            </ul>
          </div>
          <div className="project-card card">
            <h3>Online Leave Management System using Python</h3>
            <p><b>Role:</b> Frontend Developer</p>
            <ul>
              <li>Designed responsive UI using HTML, CSS, Bootstrap, and Django templates.</li>
              <li>Created user-friendly dashboards and forms for employees and admins.</li>
            </ul>
            <div className="project-links">
              <a
                href="https://github.com/praveenvajrapu/Employee-Leave-Management-System"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
