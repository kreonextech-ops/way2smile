'use client'

import { useState, useEffect } from 'react'
import styles from './Testimonials.module.css'
import { motion, AnimatePresence } from 'framer-motion'

const TESTIMONIALS = [
  {
    name: 'Alok Khawas',
    role: 'Local Guide',
    content: 'Dr. Ashish Kumar is truly top-tier. His dedicated attention to detail during my crown procedure was incredible, resulting in a perfect, natural-looking fit. The clinic is spotless and modern, with a very warm, positive environment.',
    rating: 5
  },
  {
    name: 'Shakib Islam',
    role: 'Local Guide',
    content: "I visited during one of my most painful moments, and the care I received was exceptional. The dentist was both friendly and highly professional, handling my cavities and root canal treatment with great attention. It's been 7 days now, and I'm very happy with the results and overall experience.",
    rating: 5
  },
  {
    name: 'FalleN',
    role: 'Patient',
    content: 'Very professional and polite dentists have been there and now im pain free.',
    rating: 5
  },
  {
    name: 'Migma Yonzon',
    role: 'Patient',
    content: "He's the best, very friendly. I would like to recommend everyone of you to visit his chamber. 😊",
    rating: 5
  },
  {
    name: 'Verified Patient',
    role: 'Patient',
    content: "It was a good experience with Dr. Aashish, he was young and jolly person.",
    rating: 5
  }
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => {
        const max = isMobile ? TESTIMONIALS.length - 1 : TESTIMONIALS.length - 3
        return prev >= max ? 0 : prev + 1
      })
    }, 5000)
    return () => clearInterval(timer)
  }, [isMobile])

  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <span className={styles.subtitle}>Testimonials</span>
          <h2 className={styles.title}>What Our Patients Say</h2>
          <div className={styles.underline}></div>
        </motion.div>

        <div className={styles.sliderWrapper}>
          <motion.div 
            className={styles.sliderTrack}
            animate={{ x: `-${current * (isMobile ? 100 : 33.333)}%` }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {TESTIMONIALS.map((t, index) => (
              <div key={index} className={styles.slide}>
                <div className={styles.card}>
                  <div className={styles.quote}>"</div>
                  <p className={styles.content}>{t.content}</p>
                  <div className={styles.footer}>
                    <div className={styles.stars}>
                      {[...Array(t.rating)].map((_, i) => (
                        <span key={i} className={styles.star}>★</span>
                      ))}
                    </div>
                    <h4 className={styles.name}>{t.name}</h4>
                    <span className={styles.role}>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className={styles.dots}>
          {TESTIMONIALS.slice(0, isMobile ? TESTIMONIALS.length : TESTIMONIALS.length - 2).map((_, index) => (
            <button 
              key={index} 
              className={`${styles.dot} ${index === current ? styles.activeDot : ''}`}
              onClick={() => setCurrent(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
