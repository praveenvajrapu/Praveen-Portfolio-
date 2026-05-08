
import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h2>
        <div className="contact-content">
          <div className="contact-info">
            <ul className="contact-list">
              <li><FaMapMarkerAlt /> Rachagumadam, Vizianagaram, Andhra Pradesh — 532127</li>
              <li><FaEnvelope /> <a href="mailto:Praveenvajrapu02@gmail.com">Praveenvajrapu02@gmail.com</a></li>
              <li><FaLinkedin /> <a href="https://www.linkedin.com/in/praveen-vajrapu-5533a8284/" target="_blank" rel="noopener noreferrer">linkedin.com/in/praveen-vajrapu-5533a8284</a></li>
              <li><FaGithub /> <a href="https://github.com/praveenvajrapu" target="_blank" rel="noopener noreferrer">github.com/praveenvajrapu</a></li>
              <li><FaPhone /> +91 9030353878</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
