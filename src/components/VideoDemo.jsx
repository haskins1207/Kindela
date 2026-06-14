import { useEffect, useRef, useState } from 'react'
import Icon from './Icon'
import Reveal from './Reveal'

const CHAPTERS = [
  { t: 'Donors', time: '0:00', line: 'Every gift — cash or in-kind — logged, acknowledged, and 990-ready.', scene: 'donors' },
  { t: 'Grants', time: '0:52', line: 'Inbound and outbound deadlines in one calm pipeline.', scene: 'grants' },
  { t: 'The Tracer', time: '1:40', line: 'Follow a single donation from the loading dock to a child.', scene: 'tracer' },
  { t: 'Public Trust', time: '2:45', line: 'A live report your donors and funders can verify themselves.', scene: 'transparency' },
]

const CHAPTER_MS = 4200

function Scene({ kind }) {
  if (kind === 'grants') {
    return (
      <div className="vd-scene vd-scene--list">
        {[["Children's Resilience Fund", 'Submitted', 'info'], ['State Youth Crisis Block', 'Draft · Jul 15', 'warn'], ['Partner: Haven House (out)', 'Disbursed', 'teal']].map(([n, s, c]) => (
          <div key={n} className="vd-row"><span>{n}</span><span className={`vd-pill vd-pill--${c}`}>{s}</span></div>
        ))}
      </div>
    )
  }
  if (kind === 'tracer') {
    return (
      <div className="vd-scene vd-scene--tracer">
        <span className="vd-node">Intake</span>
        <span className="vd-beam"><i /></span>
        <span className="vd-node vd-node--teal">Partner org</span>
        <span className="vd-beam vd-beam--green"><i /></span>
        <span className="vd-node vd-node--green">Delivered ✓</span>
      </div>
    )
  }
  if (kind === 'transparency') {
    return (
      <div className="vd-scene vd-scene--stats">
        <div className="vd-stat"><strong>$284,500</strong><span>Revenue raised</span></div>
        <div className="vd-stat"><strong>$27,500</strong><span>Granted to partners</span></div>
        <div className="vd-stat"><strong>504</strong><span>Goods to children</span></div>
      </div>
    )
  }
  return (
    <div className="vd-scene vd-scene--list">
      {[['Margaret Ellison', 'In-kind + cash', 'ok'], ['Treasure Coast Rotary', 'Grant', 'ok'], ['James & Co. Realty', 'Pending letter', 'warn']].map(([n, t, c]) => (
        <div key={n} className="vd-row"><span>{n}</span><span className={`vd-pill vd-pill--${c === 'ok' ? 'teal' : 'warn'}`}>{t}</span></div>
      ))}
    </div>
  )
}

export default function VideoDemo() {
  const [playing, setPlaying] = useState(false)
  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(0)
  const [ended, setEnded] = useState(false)
  const reduceRef = useRef(false)

  useEffect(() => {
    reduceRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  // Auto-advance the tour while playing (skipped under reduced motion).
  useEffect(() => {
    if (!playing || reduceRef.current) return
    const tick = 60
    const id = setInterval(() => {
      setProgress((p) => {
        const next = p + (tick / CHAPTER_MS) * 100
        if (next >= 100) {
          setActive((a) => {
            if (a >= CHAPTERS.length - 1) {
              setPlaying(false)
              setEnded(true)
              return a
            }
            return a + 1
          })
          return 0
        }
        return next
      })
    }, tick)
    return () => clearInterval(id)
  }, [playing])

  const startAt = (i) => {
    setActive(i)
    setProgress(0)
    setEnded(false)
    setPlaying(true)
  }

  const togglePlay = () => {
    if (ended) { startAt(0); return }
    setPlaying((p) => !p)
  }

  return (
    <section className="section videodemo" id="demo">
      <div className="container container-narrow">
        <Reveal className="section-head">
          <span className="eyebrow">Not ready to talk to a human yet?</span>
          <h2>See Kindela in action — in under four minutes.</h2>
          <p>A calm, self-serve tour of the three pains becoming three reliefs. No form, no sales call.</p>
        </Reveal>

        <Reveal className="vd-player">
          <div className={`vd-frame ${playing || ended ? 'is-playing' : ''}`}>
            {!playing && !ended ? (
              <button className="vd-facade" onClick={() => startAt(0)} aria-label="Play the Kindela product tour">
                <span className="vd-facade__bg" aria-hidden="true">
                  <span className="vd-facade__chrome"><i /><i /><i /><em>Kindela — product tour</em></span>
                  <span className="vd-facade__glow" />
                </span>
                <span className="vd-play">
                  <svg viewBox="0 0 24 24" width="34" height="34" aria-hidden="true"><path d="M8 5v14l11-7z" fill="currentColor" /></svg>
                </span>
                <span className="vd-duration">3:48</span>
                <span className="vd-facade__caption">Watch the 4-minute tour</span>
              </button>
            ) : (
              <div className="vd-screen">
                <div className="vd-screen__top">
                  <span className="vd-chapter-tag">{CHAPTERS[active].t}</span>
                  <span className="vd-timecode">{CHAPTERS[active].time}</span>
                </div>
                <div className="vd-screen__body">
                  <p className="vd-screen__line">{CHAPTERS[active].line}</p>
                  <Scene kind={CHAPTERS[active].scene} />
                </div>

                {ended && (
                  <div className="vd-endcard">
                    <p>That’s the tour. Ready to see it with your own data?</p>
                    <a className="btn btn-primary" href="#walkthrough">Request a Walkthrough</a>
                  </div>
                )}

                <div className="vd-controls">
                  <button className="vd-ctrl" onClick={togglePlay} aria-label={ended ? 'Replay' : playing ? 'Pause' : 'Play'}>
                    {ended ? <Icon name="replay" size={18} /> : playing ? <Icon name="pause" size={18} /> : (
                      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M8 5v14l11-7z" fill="currentColor" /></svg>
                    )}
                  </button>
                  <div className="vd-track" role="progressbar" aria-valuenow={active + 1} aria-valuemin={1} aria-valuemax={CHAPTERS.length} aria-label="Tour progress">
                    {CHAPTERS.map((c, i) => (
                      <span key={c.t} className={`vd-seg ${i < active ? 'is-done' : ''} ${i === active ? 'is-active' : ''}`}>
                        <span className="vd-seg__fill" style={{ width: i < active ? '100%' : i === active ? `${progress}%` : '0%' }} />
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Chapter list */}
          <ul className="vd-chapters">
            {CHAPTERS.map((c, i) => (
              <li key={c.t}>
                <button className={`vd-chapter ${i === active && (playing || ended) ? 'is-current' : ''}`} onClick={() => startAt(i)}>
                  <span className="vd-chapter__time">{c.time}</span>
                  <span className="vd-chapter__t">{c.t}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="vd-cta">
            <span>Ready to see it with your own data?</span>
            <a className="btn-ghost vd-cta__link" href="#walkthrough">
              Skip to a personalized walkthrough <Icon name="arrow" size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
