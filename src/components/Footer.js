import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
  

<footer className="footer-container">
  <div className="footer-screen">
    <div className="footer-grid">
      <div>


        <p className="footer-saying">
        "Guiding individuals toward their divine destiny."
        </p>

        
      </div>



      <div className="footer-contact-container">
          <p className="footer-contact-p">Contact</p>

          <ul className="contact-list">
            <li>
              <a
                className="contact-list-item"
                href="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="contact-svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <span className="footer-email">pushforchristinternational@gmail.com</span>
              </a>
            </li>

            <li>
              <a
                className="contact-list-item"
                href="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="contact-svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <span className="footer-number">(380)710-3414</span>
              </a>
            </li>

          
          </ul>
        </div>
     


      

    <div className="bottom-footer">
      <div className="footer-text">
        

        <p className="footer-company">&copy; 2024 Push for Christ International</p>
      </div>
    </div>
  </div>

    </div>



      
    </footer>
  );
};

export default Footer;