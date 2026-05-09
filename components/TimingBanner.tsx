'use client'

import styles from './TimingBanner.module.css'
import { motion } from 'framer-motion'

export default function TimingBanner() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={styles.banner} 
      id="location"
    >
      <div className={styles.item}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--orange)">
          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
        </svg>
        <div>
          <strong>Mon – Sat</strong>
          <span>10:00 AM – 2:00 PM &amp; 4:30 PM – 8:30 PM</span>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.item}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--orange)">
          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
        </svg>
        <div>
          <strong>Sunday</strong>
          <span>10:00 AM – 1:00 PM</span>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.item}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--orange)">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
        <div>
          <strong>Location</strong>
          <span>Medical More, Siliguri</span>
        </div>
      </div>
    </motion.div>
  )
}
