'use client'

import Image from 'next/image'
import styles from './Footer.module.css'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={styles.container}
      >
        <div className={styles.brandSide}>
          <div className={styles.logoArea}>
            <Image
              src="/logo.png"
              alt="Way 2 Smile"
              width={40}
              height={40}
              style={{ objectFit: 'contain', borderRadius: 8 }}
            />
            <span className={styles.brandName}>
              Way <span className={styles.accent}>2</span> Smile
            </span>
          </div>
          <p className={styles.desc}>
            A premier multispeciality dental clinic dedicated to excellence in oral 
            healthcare. Providing modern treatments with compassion.
          </p>
        </div>

        <div>
          <h4 className={styles.colTitle}>Quick Links</h4>
          <ul className={styles.list}>
            <li><a href="#about" className={styles.link}>About Clinic</a></li>
            <li><a href="#services" className={styles.link}>Our Services</a></li>
            <li><a href="#doctor" className={styles.link}>Meet Doctor</a></li>
            <li><a href="#appointment" className={styles.link}>Book Visit</a></li>
            <li><a href="#faq" className={styles.link}>FAQs</a></li>
          </ul>
        </div>

        <div>
          <h4 className={styles.colTitle}>Contact Us</h4>
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--orange)">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              </svg>
              <span>Medical More, Siliguri</span>
            </div>
            <div className={styles.infoItem}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--orange)">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span>+91 8949805173</span>
            </div>
            <div className={styles.infoItem}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--orange)">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <span>support@way2smile.com</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className={styles.colTitle}>Clinic Hours</h4>
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <div>
                <strong>Mon – Sat</strong>
                <p>10AM–2PM & 4:30PM–8:30PM</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div>
                <strong>Sunday</strong>
                <p>10AM–1PM</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Way 2 Smile Dental Clinic. All Rights Reserved.</p>
        <p>
          Managed by <a href="#" className={styles.credit}>Kreonex Technology</a>
        </p>
      </div>
    </footer>
  )
}
