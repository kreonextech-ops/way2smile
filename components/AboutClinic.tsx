'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './AboutClinic.module.css'
import { motion, AnimatePresence } from 'framer-motion'

const CLINIC_IMAGES = [
  '/clinic/clinic-1.jpeg',
  '/clinic/put_mask_on_his_face_202605111804.jpeg',
  '/clinic/A new beginning ❤️❤️(JPG)_1.jpg.jpeg'
]

export default function AboutClinic() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % CLINIC_IMAGES.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className={styles.about} id="about">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={styles.imageSide}
      >
        <div className={styles.imageWrapper}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
              className={styles.imageInner}
            >
              <Image
                src={CLINIC_IMAGES[current]}
                alt="Way 2 Smile Dental Clinic"
                width={600}
                height={500}
                className={styles.clinicImg}
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <motion.div 
          initial={{ scale: 0, rotate: -20 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', delay: 0.5, bounce: 0.4 }}
          className={styles.experienceBadge}
        >
          <span className={styles.expNum}>4+</span>
          <span className={styles.expText}>Years of<br />Experience</span>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={styles.contentSide}
      >
        <span className={styles.tag}>About Our Clinic</span>
        <h2 className={styles.heading}>
          The <span className={styles.accent}>Best</span> Multispeciality Dental Clinic
        </h2>
        <p className={styles.description}>
          Way 2 Smile is a multispeciality dental clinic dedicated to providing 
          comprehensive and compassionate dental care. Led by Dr. Aashish Kumar Jha, 
          our clinic combines advanced technology with personalized treatment plans 
          to ensure every patient achieves their perfect smile.
        </p>

        <div className={styles.features}>
          {[
            { text: 'Modern Infrastructure', icon: 'M12 2L1 12h3v9h6v-6h4v6h6v-9h3L12 2z' },
            { text: 'Patient-Centric Care', icon: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' },
            { text: 'Certified Expert Care', icon: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z' },
            { text: 'Advanced Technology', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z' },
          ].map((feature, i) => (
            <motion.div 
              key={feature.text} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (i * 0.1) }}
              className={styles.feature}
            >
              <div className={styles.featureIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--orange)">
                  <path d={feature.icon} />
                </svg>
              </div>
              <span className={styles.featureText}>{feature.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
