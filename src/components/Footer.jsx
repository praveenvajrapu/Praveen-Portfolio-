import React from 'react'
import { FaHeart } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <h3 className="footer-logo">Praveen<span>.</span></h3>
            <p>AI Engineer | Machine Learning Specialist</p>
          </div>

          <div className="footer-center">
            <p className="footer-quote">
              "Building intelligent systems that transform tomorrow"
            </p>
          </div>

          <div className="footer-right">
            <p>Available for freelance opportunities</p>
            <a href="mailto:praveen@example.com" className="footer-email">
              praveen@example.com
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Praveen Kumar. Designed & Built with <FaHeart className="heart" /> using React & Vite
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
