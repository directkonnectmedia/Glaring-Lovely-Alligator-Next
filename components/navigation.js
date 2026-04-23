import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Navigation = (props) => {
  return (
    <>
      <div className="navigation-container1">
        <nav id="mainNav" className="navigation-wrapper">
          <div className="navigation-container">
            <Link href="/">
              <a>
                <div className="navigation-logo">
                  <img
                    src="/logo.png"
                    alt="Custom Concrete Curbing Logo"
                    style={{ height: '80px', width: 'auto', display: 'block' }}
                  />
                </div>
              </a>
            </Link>
            <div className="navigation-desktop-menu">
              <Link href="/">
                <a>
                  <div className="navigation-link">
                    <span>Home</span>
                  </div>
                </a>
              </Link>
              <a href="#about">
                <div className="navigation-link">
                  <span>About Us</span>
                </div>
              </a>
              <div className="navigation-dropdown">
                <button
                  aria-expanded="false"
                  aria-haspopup="true"
                  className="navigation-dropdown-trigger"
                >
                  <span>
                    {' '}
                    Menu
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="m6 9l6 6l6-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
                <div className="navigation-dropdown-content">
                  <a href="#work">
                    <div className="navigation-dropdown-link">
                      <span>Our Work</span>
                    </div>
                  </a>
                  <Link href="/gallery">
                    <a>
                      <div className="navigation-dropdown-link">
                        <span>Gallery</span>
                      </div>
                    </a>
                  </Link>
                  <a href="#services">
                    <div className="navigation-dropdown-link">
                      <span>Services</span>
                    </div>
                  </a>
                </div>
              </div>
              <a href="#contact">
                <div className="navigation-link">
                  <span>Contact Us</span>
                </div>
              </a>
            </div>
            <div className="navigation-actions">
              <a href="tel:6026959923">
                <div className="navigation-phone">
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
                  <span className="navigation-phone-text">(602) 695-9923</span>
                </div>
              </a>
              <a href="#quote">
                <div className="navigation-cta btn-accent btn-md btn">
                  <span>Get a Quote</span>
                </div>
              </a>
              <button
                id="mobileMenuOpen"
                aria-label="Open Menu"
                className="navigation-mobile-toggle"
              >
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M4 5h16M4 12h16M4 19h16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>
        <div id="mobileOverlay" className="navigation-mobile-overlay">
          <div className="navigation-mobile-header">
            <Link href="/">
              <a>
                <div className="navigation-logo">
                  <img
                    src="/logo.png"
                    alt="Custom Concrete Curbing Logo"
                    style={{ height: '80px', width: 'auto', display: 'block' }}
                  />
                </div>
              </a>
            </Link>
            <button
              id="mobileMenuClose"
              aria-label="Close Menu"
              className="navigation-mobile-close"
            >
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zm-5.5-3.5l-5 5m0-5l5 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <div className="navigation-mobile-content">
            <div className="navigation-mobile-links">
              <Link href="/">
                <a>
                  <div className="navigation-mobile-link">
                    <span>Home</span>
                  </div>
                </a>
              </Link>
              <a href="#about">
                <div className="navigation-mobile-link">
                  <span>About Us</span>
                </div>
              </a>
              <a href="#work">
                <div className="navigation-mobile-link">
                  <span>Our Work</span>
                </div>
              </a>
              <Link href="/gallery">
                <a>
                  <div className="navigation-mobile-link">
                    <span>Gallery</span>
                  </div>
                </a>
              </Link>
              <a href="#contact">
                <div className="navigation-mobile-link">
                  <span>Contact Us</span>
                </div>
              </a>
            </div>
            <div className="navigation-mobile-footer">
              <a href="tel:6026959923">
                <div className="navigation-mobile-phone">
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
                  <span>
                    {' '}
                    (602) 695-9923
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </a>
              <a href="#quote">
                <div className="btn-xl btn-accent navigation-mobile-cta btn">
                  <span>Get a Free Quote</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="navigation-container2">
          <div className="navigation-container3">
            <Script
              html={`<script defer data-name="navigation-logic">
(function(){
  const nav = document.getElementById("mainNav")
  const mobileOverlay = document.getElementById("mobileOverlay")
  const openBtn = document.getElementById("mobileMenuOpen")
  const closeBtn = document.getElementById("mobileMenuClose")
  const mobileLinks = document.querySelectorAll(".navigation-mobile-link")

  // Scroll transparency effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled")
    } else {
      nav.classList.remove("scrolled")
    }
  })

  // Mobile Menu Toggles
  openBtn.addEventListener("click", () => {
    mobileOverlay.classList.add("active")
    document.body.style.overflow = "hidden"
  })

  const closeMenu = () => {
    mobileOverlay.classList.remove("active")
    document.body.style.overflow = ""
  }

  closeBtn.addEventListener("click", closeMenu)

  // Close menu on link click
  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu)
  })

  // Accessibility: Dropdown keyboard support
  const dropdownTrigger = document.querySelector(".navigation-dropdown-trigger")
  if (dropdownTrigger) {
    dropdownTrigger.addEventListener("click", (e) => {
      const isExpanded = dropdownTrigger.getAttribute("aria-expanded") === "true"
      dropdownTrigger.setAttribute("aria-expanded", !isExpanded)
    })
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .navigation-container1 {
            display: contents;
          }
          .navigation-thq-navigation-logo-icon-elm1 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
          }
          .navigation-thq-navigation-logo-icon-elm2 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
          }
          .navigation-container2 {
            display: none;
          }
          .navigation-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Navigation
