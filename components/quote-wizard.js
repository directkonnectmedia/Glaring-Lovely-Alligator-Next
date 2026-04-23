import React, { useState, useMemo, useCallback } from 'react'

const SERVICES = [
  { id: 'flower-bed', label: 'Flower Bed Curbing', icon: '🌸' },
  { id: 'driveway-border', label: 'Driveway Border', icon: '🚗' },
  { id: 'walkway', label: 'Walkway Edging', icon: '🚶' },
  { id: 'tree-ring', label: 'Tree Ring Curbing', icon: '🌳' },
  { id: 'mow-strip', label: 'Mow Strip', icon: '🌱' },
  { id: 'stamped', label: 'Stamped / Decorative', icon: '🎨' },
]

const SIZE_OPTIONS = [
  'Under 50 linear ft',
  '50 – 150 linear ft',
  '150 – 300 linear ft',
  '300+ linear ft',
]

const STYLE_OPTIONS = [
  'Smooth / Rounded',
  'Mower-Friendly Slant',
  'Stamped Pattern',
  'Colored / Stained',
  'Not sure yet',
]

const TIMELINE_OPTIONS = [
  'ASAP (this week)',
  'Within 2–4 weeks',
  '1–2 months',
  'Just exploring',
]

const STEP_LABELS = ['Service', 'Details', 'Timeline', 'Contact', 'Done']

const QuoteWizard = () => {
  const [step, setStep] = useState(1)
  const [selected, setSelected] = useState([]) // service ids
  const [details, setDetails] = useState({}) // { [id]: { size, style, notes } }
  const [timelines, setTimelines] = useState({}) // { [id]: timelineValue }
  const [contact, setContact] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
  })
  const [errors, setErrors] = useState({})
  const [shakeHeading, setShakeHeading] = useState(false)

  const selectedServices = useMemo(
    () => SERVICES.filter((s) => selected.includes(s.id)),
    [selected]
  )

  const toggleService = useCallback((id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
  }, [])

  const updateDetail = (id, field, value) => {
    setDetails((prev) => ({
      ...prev,
      [id]: { ...(prev[id] || {}), [field]: value },
    }))
  }

  const setTimeline = (id, value) => {
    setTimelines((prev) => ({ ...prev, [id]: value }))
  }

  const updateContact = (field, value) => {
    setContact((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[field]
        return next
      })
    }
  }

  const triggerShake = () => {
    setShakeHeading(true)
    setTimeout(() => setShakeHeading(false), 500)
  }

  const goNext = () => {
    if (step === 1) {
      if (selected.length === 0) {
        triggerShake()
        return
      }
      setStep(2)
      return
    }
    if (step === 2) {
      const missing = selectedServices.some(
        (s) => !details[s.id]?.size || !details[s.id]?.style
      )
      if (missing) {
        triggerShake()
        return
      }
      setStep(3)
      return
    }
    if (step === 3) {
      const missing = selectedServices.some((s) => !timelines[s.id])
      if (missing) {
        triggerShake()
        return
      }
      setStep(4)
      return
    }
    if (step === 4) {
      const newErrors = {}
      if (!contact.fullName.trim()) newErrors.fullName = true
      if (!contact.phone.trim()) newErrors.phone = true
      if (!contact.email.trim() || !contact.email.includes('@'))
        newErrors.email = true
      if (Object.keys(newErrors).length) {
        setErrors(newErrors)
        triggerShake()
        return
      }
      setStep(5)
    }
  }

  const goBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const progress = (
    <div className="quote-wizard__progress">
      {STEP_LABELS.map((label, i) => {
        const n = i + 1
        const isActive = step === n
        const isComplete = step > n
        const stateCls = isActive
          ? 'is-active'
          : isComplete
          ? 'is-complete'
          : ''
        return (
          <React.Fragment key={label}>
            <div className={`quote-wizard__step-indicator ${stateCls}`}>
              <div className="quote-wizard__step-circle">
                <span className="quote-wizard__step-number">{n}</span>
                <svg
                  className="quote-wizard__step-check"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span className="quote-wizard__step-label">{label}</span>
            </div>
            {i < STEP_LABELS.length - 1 && (
              <div
                className={`quote-wizard__connector ${
                  step > n ? 'is-complete' : ''
                }`}
              ></div>
            )}
          </React.Fragment>
        )
      })}
    </div>
  )

  return (
    <div className="quote-wizard" id="quote">
      {progress}
      <div className="quote-wizard__panels">
        {step === 1 && (
          <div className="quote-wizard__step is-active" data-panel="1">
            <h3
              className={`quote-wizard__heading ${
                shakeHeading ? 'is-shake' : ''
              }`}
            >
              Which services do you need?
            </h3>
            <p className="quote-wizard__hint">
              Pick one or more — we&apos;ll gather details for each.
            </p>
            <div className="quote-wizard__grid quote-wizard__grid--services">
              {SERVICES.map((svc) => {
                const isSel = selected.includes(svc.id)
                return (
                  <button
                    type="button"
                    key={svc.id}
                    onClick={() => toggleService(svc.id)}
                    className={`quote-wizard__choice ${
                      isSel ? 'is-selected' : ''
                    }`}
                  >
                    <span
                      className="quote-wizard__choice-icon"
                      aria-hidden="true"
                    >
                      {svc.icon}
                    </span>
                    <span className="quote-wizard__choice-label">
                      {svc.label}
                    </span>
                    <span
                      className="quote-wizard__choice-check"
                      aria-hidden="true"
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                  </button>
                )
              })}
            </div>
            <div className="quote-wizard__actions">
              <span className="quote-wizard__selection-count">
                {selected.length === 0
                  ? '0 selected'
                  : `${selected.length} selected`}
              </span>
              <button
                type="button"
                onClick={goNext}
                className="quote-wizard__btn quote-wizard__btn--primary"
                disabled={selected.length === 0}
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="quote-wizard__step is-active" data-panel="2">
            <h3
              className={`quote-wizard__heading ${
                shakeHeading ? 'is-shake' : ''
              }`}
            >
              Tell us about each project
            </h3>
            <p className="quote-wizard__hint">
              Size and style are required per service. Notes are optional.
            </p>
            <div className="quote-wizard__service-blocks">
              {selectedServices.map((svc, idx) => {
                const d = details[svc.id] || {}
                return (
                  <div key={svc.id} className="quote-wizard__service-block">
                    <div className="quote-wizard__service-block-header">
                      <span className="quote-wizard__service-block-badge">
                        {idx + 1}
                      </span>
                      <h4 className="quote-wizard__service-block-title">
                        {svc.icon} {svc.label}
                      </h4>
                    </div>
                    <div className="quote-wizard__field-group">
                      <label className="quote-wizard__label">
                        Approx. linear feet
                      </label>
                      <div className="quote-wizard__grid quote-wizard__grid--2">
                        {SIZE_OPTIONS.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => updateDetail(svc.id, 'size', opt)}
                            className={`quote-wizard__pill ${
                              d.size === opt ? 'is-selected' : ''
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="quote-wizard__field-group">
                      <label className="quote-wizard__label">
                        Curbing style
                      </label>
                      <div className="quote-wizard__grid quote-wizard__grid--2">
                        {STYLE_OPTIONS.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => updateDetail(svc.id, 'style', opt)}
                            className={`quote-wizard__pill ${
                              d.style === opt ? 'is-selected' : ''
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="quote-wizard__field-group">
                      <label className="quote-wizard__label">
                        Any details about your yard (optional)
                      </label>
                      <textarea
                        className="quote-wizard__textarea"
                        placeholder="Tight corners, slope, existing edging to remove, color preference…"
                        value={d.notes || ''}
                        onChange={(e) =>
                          updateDetail(svc.id, 'notes', e.target.value)
                        }
                      />
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="quote-wizard__actions">
              <button
                type="button"
                onClick={goBack}
                className="quote-wizard__btn quote-wizard__btn--back"
              >
                Back
              </button>
              <button
                type="button"
                onClick={goNext}
                className="quote-wizard__btn quote-wizard__btn--primary"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="quote-wizard__step is-active" data-panel="3">
            <h3
              className={`quote-wizard__heading ${
                shakeHeading ? 'is-shake' : ''
              }`}
            >
              When would you like it done?
            </h3>
            <p className="quote-wizard__hint">
              Pick a timeline for each service you selected.
            </p>
            <div className="quote-wizard__service-blocks">
              {selectedServices.map((svc, idx) => (
                <div
                  key={svc.id}
                  className="quote-wizard__service-block quote-wizard__service-block--timeline"
                >
                  <div className="quote-wizard__service-block-header">
                    <span className="quote-wizard__service-block-badge">
                      {idx + 1}
                    </span>
                    <h4 className="quote-wizard__service-block-title">
                      {svc.icon} {svc.label}
                    </h4>
                  </div>
                  <div className="quote-wizard__grid quote-wizard__grid--2">
                    {TIMELINE_OPTIONS.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setTimeline(svc.id, opt)}
                        className={`quote-wizard__pill ${
                          timelines[svc.id] === opt ? 'is-selected' : ''
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="quote-wizard__actions">
              <button
                type="button"
                onClick={goBack}
                className="quote-wizard__btn quote-wizard__btn--back"
              >
                Back
              </button>
              <button
                type="button"
                onClick={goNext}
                className="quote-wizard__btn quote-wizard__btn--primary"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="quote-wizard__step is-active" data-panel="4">
            <h3
              className={`quote-wizard__heading ${
                shakeHeading ? 'is-shake' : ''
              }`}
            >
              Your contact information
            </h3>
            <p className="quote-wizard__timeline-summary">
              <strong>{selectedServices.length}</strong>{' '}
              {selectedServices.length === 1 ? 'service' : 'services'} ready to
              quote.
            </p>
            <div className="quote-wizard__fields">
              <input
                type="text"
                className={`quote-wizard__input ${
                  errors.fullName ? 'has-error' : ''
                }`}
                placeholder="Full Name"
                value={contact.fullName}
                onChange={(e) => updateContact('fullName', e.target.value)}
              />
              <input
                type="tel"
                className={`quote-wizard__input ${
                  errors.phone ? 'has-error' : ''
                }`}
                placeholder="Phone Number"
                value={contact.phone}
                onChange={(e) => updateContact('phone', e.target.value)}
              />
              <input
                type="email"
                className={`quote-wizard__input ${
                  errors.email ? 'has-error' : ''
                }`}
                placeholder="Email Address"
                value={contact.email}
                onChange={(e) => updateContact('email', e.target.value)}
              />
              <input
                type="text"
                className="quote-wizard__input"
                placeholder="Project Address (optional)"
                value={contact.address}
                onChange={(e) => updateContact('address', e.target.value)}
              />
            </div>
            <div className="quote-wizard__actions">
              <button
                type="button"
                onClick={goBack}
                className="quote-wizard__btn quote-wizard__btn--back"
              >
                Back
              </button>
              <button
                type="button"
                onClick={goNext}
                className="quote-wizard__btn quote-wizard__btn--primary"
              >
                Submit Request
              </button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="quote-wizard__step is-active" data-panel="5">
            <div className="quote-wizard__success">
              <div className="quote-wizard__success-icon">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 className="quote-wizard__success-heading">Thank You!</h3>
              <p className="quote-wizard__success-body">
                We&apos;ve received your request. We&apos;ll review your project
                details and get back to you within 24 hours with a free
                estimate.
              </p>
              <a
                className="quote-wizard__success-cta"
                href="tel:6026959923"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>Or Call Now: (602) 695-9923</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default QuoteWizard
