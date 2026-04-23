import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const PHOTOS = Array.from({ length: 17 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0')
  return {
    src: `/images/photos/photo-${n}.jpg`,
    alt: `Custom concrete curbing project photo ${i + 1}`,
  }
})

const Gallery = () => {
  return (
    <>
      <div className="gallery-page">
        <Head>
          <title>Gallery — Custom Concrete Curbing, Arizona</title>
          <meta
            name="description"
            content="Project gallery of custom concrete curbing work across Arizona — driveway borders, flower bed edging, tree rings, and more."
          />
          <meta
            property="og:title"
            content="Gallery — Custom Concrete Curbing, Arizona"
          />
          <meta
            property="og:description"
            content="Project gallery of custom concrete curbing work across Arizona — driveway borders, flower bed edging, tree rings, and more."
          />
        </Head>
        <Navigation />
        <section className="gallery-hero">
          <div className="gallery-hero-inner">
            <h1 className="gallery-title">Project Gallery</h1>
            <p className="gallery-subtitle">
              A closer look at custom concrete curbing shaped on site for
              Arizona homes — clean borders, curved beds, driveway edges, and
              more.
            </p>
            <div className="gallery-back">
              <Link href="/">
                <a className="gallery-back-link">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m15 18l-6-6l6-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Back to Home</span>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section className="gallery-grid-section">
          <div className="gallery-grid">
            {PHOTOS.map((photo, i) => (
              <figure className="gallery-grid-card" key={photo.src}>
                <div className="gallery-grid-media">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading={i < 4 ? 'eager' : 'lazy'}
                    className="gallery-grid-img"
                  />
                </div>
              </figure>
            ))}
          </div>
        </section>
        <section className="gallery-cta">
          <div className="gallery-cta-inner">
            <h2 className="gallery-cta-title">Like What You See?</h2>
            <p className="gallery-cta-text">
              Reach out for a free, no-obligation quote on your residential
              curbing project.
            </p>
            <Link href="/#contact">
              <a>
                <div className="btn-xl btn-accent btn">
                  <span>Get a Free Quote</span>
                </div>
              </a>
            </Link>
          </div>
        </section>
        <Footer />
      </div>
      <style jsx>
        {`
          .gallery-page {
            width: 100%;
            min-height: 100vh;
          }
        `}
      </style>
    </>
  )
}

export default Gallery
