import { useState } from 'react'
import Icon from './Icon'

const ORG_SIZES = [
  'Just getting started (under $250K)',
  'Growing ($250K–$1M)',
  'Established ($1M–$5M)',
  'Large / multi-program ($5M+)',
]

const ROLES = [
  'Executive Director / President',
  'Development / Fundraising',
  'Finance / Treasurer',
  'Operations',
  'Board member',
  'Other',
]

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const INITIAL = { fullName: '', email: '', orgName: '', orgSize: '', role: '', message: '', consent: false }

// Helpful, non-blaming validation copy (PRD voice guard).
function validateField(name, value) {
  switch (name) {
    case 'fullName':
      return value.trim() ? '' : 'Your name helps us say hello properly.'
    case 'email':
      if (!value.trim()) return 'We’ll send your walkthrough details here.'
      return EMAIL_RE.test(value.trim()) ? '' : 'That email looks a little off — mind a quick check?'
    case 'orgName':
      return value.trim() ? '' : 'What’s your organization called?'
    case 'orgSize':
      return value ? '' : 'Pick the range that fits best.'
    case 'role':
      return value ? '' : 'Your role helps us tailor the walkthrough.'
    case 'consent':
      return value ? '' : 'We’ll just need your okay to reach out.'
    default:
      return ''
  }
}

const REQUIRED = ['fullName', 'email', 'orgName', 'orgSize', 'role', 'consent']

export default function WalkthroughForm({ onDone }) {
  const [values, setValues] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const setField = (name, value) => {
    setValues((v) => ({ ...v, [name]: value }))
    if (touched[name]) setErrors((e) => ({ ...e, [name]: validateField(name, value) }))
  }

  const handleBlur = (name) => {
    setTouched((t) => ({ ...t, [name]: true }))
    setErrors((e) => ({ ...e, [name]: validateField(name, values[name]) }))
  }

  const validateAll = () => {
    const next = {}
    REQUIRED.forEach((f) => {
      const msg = validateField(f, values[f])
      if (msg) next[f] = msg
    })
    setErrors(next)
    setTouched(Object.fromEntries(REQUIRED.map((f) => [f, true])))
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateAll()) {
      const firstInvalid = REQUIRED.find((f) => validateField(f, values[f]))
      if (firstInvalid) document.getElementById(`wt-${firstInvalid}`)?.focus()
      return
    }
    setStatus('submitting')
    try {
      // CRM integration point: POST `values` to HubSpot/Salesforce here.
      console.log('[Civora] Walkthrough request:', values)
      await new Promise((r) => setTimeout(r, 1100))
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    const firstName = values.fullName.trim().split(/\s+/)[0] || 'there'
    return (
      <div className="wt-success">
        <span className="wt-success__icon"><Icon name="check" size={32} stroke="#fff" /></span>
        <h2 id="wt-title" className="wt-title">You’re all set, {firstName}.</h2>
        <p className="wt-sub">
          Thanks for reaching out. A real person from Civora will email <strong>{values.email}</strong> within
          one business day to set up your walkthrough — on your schedule, no script.
        </p>
        <button type="button" className="btn btn-primary" onClick={onDone}>Done</button>
      </div>
    )
  }

  return (
    <form className="wt-form" onSubmit={handleSubmit} noValidate>
      <span className="eyebrow">A real walkthrough, on your schedule</span>
      <h2 id="wt-title" className="wt-title">Request a Walkthrough</h2>
      <p className="wt-sub">
        Tell us a little about your nonprofit and we’ll tailor the tour to how you actually work.
        Free, no credit card.
      </p>

      <div className="wt-field">
        <label htmlFor="wt-fullName">Full name</label>
        <input
          id="wt-fullName" type="text" autoComplete="name"
          className={errors.fullName ? 'invalid' : ''}
          value={values.fullName}
          onChange={(e) => setField('fullName', e.target.value)}
          onBlur={() => handleBlur('fullName')}
          aria-invalid={!!errors.fullName}
          aria-describedby={errors.fullName ? 'wt-fullName-err' : undefined}
        />
        {errors.fullName && <span id="wt-fullName-err" className="wt-error">{errors.fullName}</span>}
      </div>

      <div className="wt-field">
        <label htmlFor="wt-email">Work email</label>
        <input
          id="wt-email" type="email" autoComplete="email"
          className={errors.email ? 'invalid' : ''}
          value={values.email}
          onChange={(e) => setField('email', e.target.value)}
          onBlur={() => handleBlur('email')}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'wt-email-err' : undefined}
        />
        {errors.email && <span id="wt-email-err" className="wt-error">{errors.email}</span>}
      </div>

      <div className="wt-field">
        <label htmlFor="wt-orgName">Organization name</label>
        <input
          id="wt-orgName" type="text" autoComplete="organization"
          className={errors.orgName ? 'invalid' : ''}
          value={values.orgName}
          onChange={(e) => setField('orgName', e.target.value)}
          onBlur={() => handleBlur('orgName')}
          aria-invalid={!!errors.orgName}
          aria-describedby={errors.orgName ? 'wt-orgName-err' : undefined}
        />
        {errors.orgName && <span id="wt-orgName-err" className="wt-error">{errors.orgName}</span>}
      </div>

      <div className="wt-row">
        <div className="wt-field">
          <label htmlFor="wt-orgSize">Organization size</label>
          <select
            id="wt-orgSize"
            className={errors.orgSize ? 'invalid' : ''}
            value={values.orgSize}
            onChange={(e) => setField('orgSize', e.target.value)}
            onBlur={() => handleBlur('orgSize')}
            aria-invalid={!!errors.orgSize}
            aria-describedby={errors.orgSize ? 'wt-orgSize-err' : undefined}
          >
            <option value="" disabled>Select a range…</option>
            {ORG_SIZES.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
          {errors.orgSize && <span id="wt-orgSize-err" className="wt-error">{errors.orgSize}</span>}
        </div>

        <div className="wt-field">
          <label htmlFor="wt-role">Your role</label>
          <select
            id="wt-role"
            className={errors.role ? 'invalid' : ''}
            value={values.role}
            onChange={(e) => setField('role', e.target.value)}
            onBlur={() => handleBlur('role')}
            aria-invalid={!!errors.role}
            aria-describedby={errors.role ? 'wt-role-err' : undefined}
          >
            <option value="" disabled>Select your role…</option>
            {ROLES.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
          {errors.role && <span id="wt-role-err" className="wt-error">{errors.role}</span>}
        </div>
      </div>

      <div className="wt-field">
        <label htmlFor="wt-message">Anything you’d like us to focus on? <span className="wt-optional">(optional)</span></label>
        <textarea
          id="wt-message" rows="3"
          value={values.message}
          onChange={(e) => setField('message', e.target.value)}
          placeholder="e.g. We juggle grants, a resale shop, and volunteers — show us how it connects."
        />
      </div>

      <label className={`wt-consent ${errors.consent ? 'invalid' : ''}`}>
        <input
          id="wt-consent" type="checkbox"
          checked={values.consent}
          onChange={(e) => setField('consent', e.target.checked)}
          onBlur={() => handleBlur('consent')}
          aria-invalid={!!errors.consent}
        />
        <span>It’s okay to email me about my walkthrough and Civora updates. I can opt out anytime.</span>
      </label>
      {errors.consent && <span className="wt-error wt-error--consent">{errors.consent}</span>}

      {status === 'error' && (
        <p className="wt-error wt-error--banner">Something hiccupped on our end — mind trying again?</p>
      )}

      <button type="submit" className="btn btn-primary btn-block wt-submit" disabled={status === 'submitting'}>
        {status === 'submitting'
          ? (<><span className="wt-spinner" aria-hidden="true" /> Sending…</>)
          : 'Request my walkthrough'}
      </button>

      <p className="wt-privacy">
        We’ll only use this to contact you about Civora — never sold, never spammed.{' '}
        <a href="#top">Privacy Policy</a>.
      </p>
    </form>
  )
}
