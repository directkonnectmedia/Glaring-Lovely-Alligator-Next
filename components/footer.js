import React from 'react'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Footer = (props) => {
  return (
    <>
      <div className="footer-container1">
        <footer className="footer-root">
          <div className="footer-container">
            <div className="footer-grid">
              <div className="footer-brand footer-column">
                <div className="footer-logo-wrapper">
                  <span className="footer-logo-text">ForgePour</span>
                </div>
                <p className="footer-description">
                  Arizona&apos;s premier choice for residential and commercial
                  concrete solutions. Built for durability, poured with
                  precision, and engineered to last a lifetime.
                </p>
                <div className="footer-socials">
                  <a href="#">
                    <div aria-label="Facebook" className="footer-social-link">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M7 10v4h3v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3V3h-3a5 5 0 0 0-5 5v2z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="Instagram" className="footer-social-link">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"></path>
                          <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0m7.5-4.5v.01"></path>
                        </g>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="LinkedIn" className="footer-social-link">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M8 11v5m0-8v.01M12 16v-5m4 5v-3a2 2 0 1 0-4 0"></path>
                          <path d="M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z"></path>
                        </g>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div className="footer-column">
                <h3 className="footer-heading">Navigation</h3>
                <nav className="footer-nav">
                  <ul className="footer-list">
                    <li className="footer-item">
                      <a href="#home">
                        <div className="footer-link">
                          <span>Home</span>
                        </div>
                      </a>
                    </li>
                    <li className="footer-item">
                      <a href="#about">
                        <div className="footer-link">
                          <span>About Us</span>
                        </div>
                      </a>
                    </li>
                    <li className="footer-item">
                      <a href="#work">
                        <div className="footer-link">
                          <span>Our Work</span>
                        </div>
                      </a>
                    </li>
                    <li className="footer-item">
                      <a href="#contact">
                        <div className="footer-link">
                          <span>Contact Us</span>
                        </div>
                      </a>
                    </li>
                    <li className="footer-item">
                      <a href="#quote">
                        <div className="footer-link">
                          <span>Get a Quote</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="footer-column">
                <h3 className="footer-heading">Contact Info</h3>
                <ul className="footer-list">
                  <li className="footer-contact-item footer-item">
                    <div className="footer-icon-box">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <a href="tel:6025550123">
                      <div className="footer-link">
                        <span>(602) 555-0123</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-contact-item footer-item">
                    <div className="footer-icon-box">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                          <rect
                            x="2"
                            y="4"
                            rx="2"
                            width="20"
                            height="16"
                          ></rect>
                        </g>
                      </svg>
                    </div>
                    <a href="mailto:info@forgepour.com?subject=">
                      <div className="footer-link">
                        <span>info@forgepour.com</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-contact-item footer-item">
                    <div className="footer-icon-box">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                          <circle r="3" cx="12" cy="10"></circle>
                        </g>
                      </svg>
                    </div>
                    <span className="footer-text">
                      Phoenix, AZ &amp; Surrounding Areas
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="footer-bottom-content">
                <p className="footer-legal">
                  <span>
                    {' '}
                    &amp;copy; 2024 ForgePour Concrete Contractors. All Rights
                    Reserved.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="footer-thq-footer-license-elm">
                    ROC #123456 | Licensed, Bonded &amp; Insured
                  </span>
                </p>
                <div className="footer-bottom-links">
                  <a href="#">
                    <div className="footer-sm footer-link">
                      <span>Privacy Policy</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="footer-sm footer-link">
                      <span>Terms of Service</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="footer-container2">
          <div className="footer-container3">
            <Script
              html={`<script defer data-name="footer-interactions">
(function(){
  const footerLinks = document.querySelectorAll(".footer-link")

  footerLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.transition = "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
    })
  })

  const footerSocials = document.querySelectorAll(".footer-social-link")
  footerSocials.forEach((social) => {
    social.addEventListener("click", (e) => {
      const ripple = document.createElement("span")
      ripple.style.position = "absolute"
      ripple.style.width = "100%"
      ripple.style.height = "100%"
      ripple.style.background = "rgba(255,255,255,0.2)"
      ripple.style.borderRadius = "inherit"
      ripple.style.pointerEvents = "none"
      social.appendChild(ripple)
      setTimeout(() => ripple.remove(), 600)
    })
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .footer-container1 {
            display: contents;
          }
          .footer-thq-footer-license-elm {
            color: color-mix(
              in oklab,
              var(--color-on-primary) 70%,
              transparent
            );
            display: block;
            margin-top: var(--spacing-xs);
            font-weight: var(--font-weight-medium);
          }
          .footer-container2 {
            display: none;
          }
          .footer-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Footer
