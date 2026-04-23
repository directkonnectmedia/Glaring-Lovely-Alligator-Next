import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Custom Concrete Curbing — Residential, Arizona</title>
          <meta
            name="description"
            content="Owner-operated custom concrete curbing for Arizona homes. Flower bed borders, driveway edges, walkway curbing, and more — poured on site."
          />
          <meta
            property="og:title"
            content="Custom Concrete Curbing — Residential, Arizona"
          />
          <meta
            property="og:description"
            content="Owner-operated custom concrete curbing for Arizona homes. Flower bed borders, driveway edges, walkway curbing, and more — poured on site."
          />
        </Head>
        <Navigation></Navigation>
        <section id="home" className="hero-cinematic">
          <div className="hero-video-wrapper">
            <video
              src="https://videos.pexels.com/video-files/34289834/14526889_640_360_25fps.mp4"
              loop="true"
              muted="true"
              poster="https://images.pexels.com/videos/34289834/pictures/preview-0.jpg"
              autoPlay="true"
              playsInline="true"
              className="hero-video"
            ></video>
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content">
            <h1 className="home-hero-title hero-title">
              <span>
                {' '}
                Built to Last.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                {' '}
                Poured with Precision.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </h1>
            <p className="home-hero-subtitle hero-subtitle">
              Custom Concrete Curbing for Arizona Homes — Owner Operated.
            </p>
            <div className="hero-actions">
              <a href="#contact">
                <div className="btn-xl btn-accent btn">
                  <span>Get a Free Quote</span>
                </div>
              </a>
              <a href="#work">
                <div className="btn-outline btn-xl btn hero-btn-outline">
                  <span>View Our Work</span>
                </div>
              </a>
            </div>
          </div>
          <div className="hero-scroll-indicator">
            <div className="scroll-mouse">
              <div className="scroll-wheel"></div>
            </div>
          </div>
        </section>
        <section id="about" className="about-snapshot">
          <div className="about-container">
            <div className="about-grid">
              <div className="about-text-col">
                <h2 className="section-title">About Us</h2>
                <p className="about-intro section-content">
                  Hi, I&apos;m the owner — and I pour every job myself. I
                  specialize in one thing: custom concrete curbing for
                  Arizona homes. Clean borders around flower beds, trees,
                  walkways, and driveways, shaped on site to fit your yard.
                  No subcontractors, no commercial crews — just careful,
                  hands-on work from someone who takes pride in the edges
                  around your home.
                </p>
                <div className="about-badges">
                  <div className="badge-item">
                    <div className="badge-icon-box">
                      <svg
                        fill="none"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                      </svg>
                    </div>
                    <span className="badge-label">10+ Years Experience</span>
                  </div>
                  <div className="badge-item">
                    <div className="badge-icon-box">
                      <svg
                        fill="none"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                      </svg>
                    </div>
                    <span className="badge-label">Licensed &amp; Insured</span>
                  </div>
                  <div className="badge-item">
                    <div className="badge-icon-box">
                      <svg
                        fill="none"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                        <circle r="3" cx="12" cy="10"></circle>
                      </svg>
                    </div>
                    <span className="badge-label">Local &amp; Trusted</span>
                  </div>
                  <div className="badge-item">
                    <div className="badge-icon-box">
                      <svg
                        fill="none"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                    </div>
                    <span className="badge-label">
                      Residential Only
                    </span>
                  </div>
                </div>
              </div>
              <div className="about-image-col">
                <div className="about-image-wrapper">
                  <img
                    alt="Owner pouring custom concrete curbing on site"
                    src="https://images.pexels.com/photos/37121407/pexels-photo-37121407.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="about-img"
                  />
                  <div className="about-image-accent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="work" className="projects-gallery">
          <div className="gallery-header">
            <h2 className="section-title">Our Work</h2>
            <p className="section-subtitle">
              Custom concrete curbing, shaped on site for Arizona yards.
            </p>
          </div>
          <div className="gallery-carousel">
            <button
              id="galleryPrev"
              aria-label="Previous photo"
              className="gallery-nav gallery-nav-prev"
              type="button"
            >
              <svg
                width="28"
                xmlns="http://www.w3.org/2000/svg"
                height="28"
                viewBox="0 0 24 24"
              >
                <path
                  d="m15 18l-6-6l6-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <button
              id="galleryNext"
              aria-label="Next photo"
              className="gallery-nav gallery-nav-next"
              type="button"
            >
              <svg
                width="28"
                xmlns="http://www.w3.org/2000/svg"
                height="28"
                viewBox="0 0 24 24"
              >
                <path
                  d="m9 6l6 6l-6 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <div id="galleryTrack" className="gallery-track">
            <div className="gallery-card">
              <div className="gallery-item">
                <img
                  alt="Backyard perimeter curbing defining a patio yard"
                  src="/images/gallery/gallery-1.jpg"
                  className="gallery-img"
                />
                <div className="gallery-overlay">
                  <span className="gallery-caption">
                    Backyard Perimeter Curbing
                  </span>
                </div>
              </div>
              <p className="gallery-description">
                Clean, straight-line curbing framing a backyard patio.
              </p>
            </div>
            <div className="gallery-card">
              <div className="gallery-item">
                <img
                  alt="Curved planter bed curbing along a block wall"
                  src="/images/gallery/gallery-2.jpg"
                  className="gallery-img"
                />
                <div className="gallery-overlay">
                  <span className="gallery-caption">
                    Planter Bed Curbing
                  </span>
                </div>
              </div>
              <p className="gallery-description">
                Curved planter cutouts running along a block wall.
              </p>
            </div>
            <div className="gallery-card">
              <div className="gallery-item">
                <img
                  alt="Driveway border curbing with desert plants"
                  src="/images/gallery/gallery-3.jpg"
                  className="gallery-img"
                />
                <div className="gallery-overlay">
                  <span className="gallery-caption">
                    Driveway Border Curbing
                  </span>
                </div>
              </div>
              <p className="gallery-description">
                Sharp driveway border with desert plant accents.
              </p>
            </div>
            <div className="gallery-card">
              <div className="gallery-item">
                <img
                  alt="Curved flower bed curbing between grass and landscape"
                  src="/images/gallery/gallery-4.jpg"
                  className="gallery-img"
                />
                <div className="gallery-overlay">
                  <span className="gallery-caption">
                    Curved Flower Bed Edging
                  </span>
                </div>
              </div>
              <p className="gallery-description">
                Flowing curve dividing lawn from landscape bed.
              </p>
            </div>
            <div className="gallery-card">
              <div className="gallery-item">
                <img
                  alt="Long property border curbing along desert yard"
                  src="/images/gallery/gallery-5.jpg"
                  className="gallery-img"
                />
                <div className="gallery-overlay">
                  <span className="gallery-caption">
                    Desert Yard Curbing
                  </span>
                </div>
              </div>
              <p className="gallery-description">
                Long, continuous edge along a desert-landscaped yard.
              </p>
            </div>
            </div>
            <Script
              html={`<script defer data-name="gallery-carousel">
(function(){
  const track = document.getElementById("galleryTrack");
  const prev = document.getElementById("galleryPrev");
  const next = document.getElementById("galleryNext");
  if (!track || !prev || !next) return;
  function step(){
    const card = track.querySelector(".gallery-card");
    if (!card) return 300;
    const styles = getComputedStyle(track);
    const gap = parseFloat(styles.columnGap || styles.gap || "0") || 0;
    return card.offsetWidth + gap;
  }
  prev.addEventListener("click", () => track.scrollBy({ left: -step(), behavior: "smooth" }));
  next.addEventListener("click", () => track.scrollBy({ left: step(), behavior: "smooth" }));
})();
</script>`}
            ></Script>
          </div>
          <div className="gallery-footer">
            <a href="#contact">
              <div className="btn-accent btn btn-lg">
                <span>View More Projects</span>
              </div>
            </a>
          </div>
        </section>
        <section className="process-section">
          <div className="process-container">
            <div className="process-header">
              <h2 className="section-title">Poured with Precision</h2>
              <p className="section-subtitle">
                A simple, hands-on process — from your driveway to the final cure.
              </p>
            </div>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-icon-wrapper">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                    <rect x="8" y="2" rx="1" ry="1" width="8" height="4"></rect>
                    <path d="M9 14l2 2 4-4"></path>
                  </svg>
                  <div className="step-number">
                    <span>01</span>
                  </div>
                </div>
                <h3 className="step-title">Expert Estimate</h3>
                <p className="section-content">
                  On-site evaluation and transparent pricing tailored to your
                  specific project needs.
                </p>
              </div>
              <div className="process-step">
                <div className="step-icon-wrapper">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                  </svg>
                  <div className="step-number">
                    <span>02</span>
                  </div>
                </div>
                <h3 className="step-title">Site Preparation</h3>
                <p className="section-content">
                  Ground leveling, sub-base compaction, and reinforcement
                  placement for maximum longevity.
                </p>
              </div>
              <div className="process-step">
                <div className="step-icon-wrapper">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 10c.9 0 1.5.8 1.3 1.7l-.7 4.3c-.2 1.2-1.2 2-2.4 2H7c-1.2 0-2.2-.8-2.4-2l-.7-4.3C3.7 10.8 4.3 10 5.2 10H19Z"></path>
                    <path d="M7 10V7a5 5 0 0 1 10 0v3"></path>
                  </svg>
                  <div className="step-number">
                    <span>03</span>
                  </div>
                </div>
                <h3 className="step-title">The Pour</h3>
                <p className="section-content">
                  Precision mix delivery and expertly managed pouring to avoid
                  air pockets and ensure density.
                </p>
              </div>
              <div className="process-step">
                <div className="step-icon-wrapper">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path>
                    <path d="M21 3v5h-5"></path>
                    <path d="M12 7v5l4 2"></path>
                  </svg>
                  <div className="step-number">
                    <span>04</span>
                  </div>
                </div>
                <h3 className="step-title">Master Finish</h3>
                <p className="section-content">
                  Hand-troweled or mechanical finishing followed by proper
                  curing for a rock-solid surface.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="trust-stats">
          <div className="stats-container">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-value">
                  <span>AZ #349281</span>
                </div>
                <div className="stat-label">
                  <span>Licensed Contractor</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-value">
                  <span>10+</span>
                </div>
                <div className="stat-label">
                  <span>Years in Business</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-value">
                  <span>1,200+</span>
                </div>
                <div className="stat-label">
                  <span>Projects Completed</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-value">
                  <span>100%</span>
                </div>
                <div className="stat-label">
                  <span>Fully Insured</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-value">
                  <span>A+</span>
                </div>
                <div className="stat-label">
                  <span>Local Reputation</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-value">
                  <span>5yr</span>
                </div>
                <div className="stat-label">
                  <span>Workmanship Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="contact-section">
          <div className="contact-grid">
            <div className="contact-info-col">
              <div className="info-content">
                <h2 className="section-title">Get a Quote</h2>
                <p className="section-content info-desc">
                  Ready to frame your yard with clean, lasting curbing? Reach
                  out for a free, no-obligation quote on your residential
                  project.
                </p>
                <div className="contact-methods">
                  <a href="tel:6025550199">
                    <div className="contact-link">
                      <div className="contact-icon-box">
                        <svg
                          fill="none"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                      </div>
                      <span>(602) 555-0199</span>
                    </div>
                  </a>
                  <a href="mailto:quotes@forgepour.com?subject=">
                    <div className="contact-link">
                      <div className="contact-icon-box">
                        <svg
                          fill="none"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect
                            x="2"
                            y="4"
                            rx="2"
                            width="20"
                            height="16"
                          ></rect>
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </svg>
                      </div>
                      <span>quotes@forgepour.com</span>
                    </div>
                  </a>
                  <div className="contact-link">
                    <div className="contact-icon-box">
                      <svg
                        fill="none"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                        <circle r="3" cx="12" cy="10"></circle>
                      </svg>
                    </div>
                    <span>Greater Phoenix Area, AZ</span>
                  </div>
                  <div className="contact-link">
                    <div className="contact-icon-box">
                      <svg
                        fill="none"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle r="10" cx="12" cy="12"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    </div>
                    <span>Mon - Sat: 7:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
            <div id="quote" className="contact-form-col">
              <form
                action="/submit"
                method="POST"
                data-form-id="9d7fe820-6b93-4320-bfa1-ac865d7a21dd"
                className="quote-form"
              >
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      id="thq_textinput_R6-7"
                      name="textinput"
                      required="true"
                      placeholder="John Doe"
                      data-form-field-id="thq_textinput_R6-7"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      id="thq_textinput_8pk1"
                      name="textinput"
                      required="true"
                      placeholder="john@example.com"
                      data-form-field-id="thq_textinput_8pk1"
                      className="form-input"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      id="thq_textinput_Wgd5"
                      name="textinput"
                      required="true"
                      placeholder="(602) 000-0000"
                      data-form-field-id="thq_textinput_Wgd5"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Project Type</label>
                    <select
                      id="thq_select_U3Ht"
                      name="select"
                      required="true"
                      data-form-field-id="thq_select_U3Ht"
                      className="form-input"
                    >
                      <option value="true" disabled="true" selected="true">
                        Select an option
                      </option>
                      <option value="flower-bed">Flower Bed Curbing</option>
                      <option value="driveway-border">Driveway Border Curbing</option>
                      <option value="walkway">Walkway Edging</option>
                      <option value="tree-ring">Tree Ring Curbing</option>
                      <option value="mow-strip">Mow Strip Curbing</option>
                      <option value="stamped">Stamped / Decorative Curbing</option>
                      <option value="other">Other Custom Curbing</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Project Details</label>
                  <textarea
                    id="thq_textarea_eBhe"
                    name="textarea"
                    required="true"
                    minlength="10"
                    placeholder="Approximate linear feet, curbing style, and any details about your yard..."
                    data-form-field-id="thq_textarea_eBhe"
                    className="form-input form-textarea"
                  ></textarea>
                </div>
                <button
                  id="thq_button_emcj"
                  name="button"
                  type="submit"
                  data-form-field-id="thq_button_emcj"
                  className="btn-accent btn-block btn btn-lg"
                >
                  Get My Free Quote
                </button>
              </form>
            </div>
          </div>
        </section>
        <section className="final-cta">
          <div className="cta-banner">
            <h2 className="cta-title">Ready for a Rock-Solid Foundation?</h2>
            <a href="#contact">
              <div className="btn-xl btn-accent btn">
                <span>Get a Quote Today</span>
              </div>
            </a>
          </div>
        </section>
        <div className="home-container2">
          <div className="home-container3">
            <Script
              html={`<style>
        @keyframes scrollWheel {0% {transform: translateY(0);
opacity: 1;}
100% {transform: translateY(12px);
opacity: 0;}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="home-container4">
          <div className="home-container5">
            <Script
              html={`<script defer data-name="forgepour-interactions">
(function(){
  // Simple scroll animation for reveal effects
  const observerOptions = {
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Target sections for fade-in effect
  const revealElements = document.querySelectorAll(".about-snapshot, .projects-gallery, .process-section, .trust-stats, .contact-section")

  revealElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out"
    observer.observe(el)
  })

  // Handle form submission UX
  const quoteForm = document.querySelector(".quote-form")
  if (quoteForm) {
    quoteForm.addEventListener("submit", (e) => {
      // Native validation will run first
      // This is for visual feedback only
      const submitBtn = quoteForm.querySelector('button[type="submit"]')
      const originalText = submitBtn.textContent

      submitBtn.textContent = "Sending..."
      submitBtn.disabled = true

      // The form will still submit natively to /submit as specified in HTML
    })
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        })
      }
    })
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .home-container2 {
            display: none;
          }
          .home-container3 {
            display: contents;
          }
          .home-container4 {
            display: none;
          }
          .home-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Home
