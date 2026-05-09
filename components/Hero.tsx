'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import styles from './Hero.module.css'
import { motion, AnimatePresence } from 'framer-motion'

const SLIDES = [
  {
    id: 1,
    image: '/hero/20260429_150639.jpg.jpeg',
    heading: 'The Perfect Way 2 Transform Your Smile.',
    sub: 'Experience comprehensive dental care where advanced technology meets a personalized touch.'
  },
  {
    id: 2,
    image: '/hero/enhance_this_image_for_website_202605041945.jpeg',
    heading: 'Advanced Modern Care, Beautiful Lasting Results.',
    sub: 'We use the latest technology to ensure your dental journey is comfortable and effective.'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
} as const

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
} as const

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) nextSlide()
    if (isRightSwipe) prevSlide()

    setTouchStart(null)
    setTouchEnd(null)
  }

  return (
    <section 
      className={styles.hero} 
      id="home"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className={styles.deco1} 
      />
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut', delay: 0.3 }}
        className={styles.deco2} 
      />

      {/* ── Left Content ── */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={styles.left}
      >
        <motion.div variants={itemVariants} className={styles.badge}>
          <span className={`${styles.badgeDot} blink-dot`} />
          Multispeciality Dental Clinic
        </motion.div>

        <div className={styles.sliderTextContent}>
          <AnimatePresence mode="wait">
            <motion.div 
              key={current}
              initial={{ opacity: 0, x: -20, filter: 'blur(8px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, x: 20, filter: 'blur(8px)' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className={styles.textSlideActive}
            >
              <h1 className={styles.heading}>
                {SLIDES[current].heading.split('Way 2').map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && <span className={styles.accent}>Way 2</span>}
                  </span>
                ))}
              </h1>
              <p className={styles.sub}>{SLIDES[current].sub}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div variants={itemVariants} className={styles.ctas}>
          <a href="https://wa.me/917679779255" target="_blank" rel="noopener noreferrer" className="btn-blue">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us
          </a>
          <a href="tel:8949805173" className="btn-orange">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Call Now
          </a>
          <a href="#services" className="btn-outline">Book Appointment</a>
        </motion.div>

        <div className={styles.stats}>
          {[
            { num: '4+', label: 'Specialties' },
            { num: 'Mon–Sun', label: 'Open All Week' },
            { num: 'BDS', label: 'Qualified Doctor' },
          ].map(({ num, label }) => (
            <motion.div 
              key={label} 
              variants={itemVariants}
              className={styles.stat}
            >
              <span className={styles.statNum}>{num}</span>
              <span className={styles.statLabel}>{label}</span>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className={styles.indicators}>
          {SLIDES.map((_, idx) => (
            <button 
              key={idx} 
              className={`${styles.dot} ${idx === current ? styles.activeDot : ''}`}
              onClick={() => setCurrent(idx)}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* ── Right: Image Slider ── */}
      <div className={styles.right}>
        <div className={styles.imageWrapper}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
              animate={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
              exit={{ opacity: 0, clipPath: 'inset(0 0 0 100%)' }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] as const }}
              className={styles.imageInner}
            >
              <Image
                src={SLIDES[current].image}
                alt={SLIDES[current].heading}
                width={800}
                height={600}
                className={styles.heroImg}
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
