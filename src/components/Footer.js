import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
  

<footer className="footer-container">
  <div className="footer-screen">
    <div className="footer-grid">
      <div>


        <p className="footer-saying">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa
          cum itaque neque.
        </p>

        <ul className="footer-col-2">
          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              className="footer-icon-container"
            >
              <span className="icon-name">Facebook</span>
              <svg className="footer-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                
              </svg>
            </a>
          </li>

          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              className="footer-icon-container"
            >
              <span className="icon-name">Instagram</span>
              <svg className="footer-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                
              </svg>
            </a>
          </li>

          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              className="footer-icon-container"
            >
              <span className="icon-name">Podcast</span>
              <svg className="footer-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                />
              </svg>
            </a>
          </li>

        </ul>
      </div>



      <div className="footer-contact-container">
          <p className="footer-contact-p">Contact Us</p>

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

                <span className="footer-number">0123456789</span>
              </a>
            </li>

            <li
              className="contact-list-item"
            >
             
              <address className="footer-address">
                213 Lane, London, United Kingdom
              </address>
            </li>
          </ul>
        </div>
     


      <div className="footer-col-3">
        <div className="footer-about-col">
          <p className="icon-p">About Us</p>

        
        <div className="footer-services-col">
          <p className="icon-p">Our Services</p>


        <div className="footer-links-col">
          <p className="icon-p">Helpful Links</p>

        </div>

        <div className="footer-contact-col">
          <p className="icon-p">Contact Us</p>

        </div>
      </div>
    </div>

    <div className="bottom-footer">
      <div className="footer-text">
        

        <p className="footer-company">&copy; 2024 Push for Christ International</p>
      </div>
    </div>
  </div>

    </div>

</div>

      
    </footer>
  );
};

export default Footer;