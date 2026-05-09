'use client'

import styles from './Contact.module.css'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.wrapper}>

        {/* LEFT COLUMN */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className={styles.left}
        >
          <span className={styles.locateTag}>Locate Us</span>
          <h2 className={styles.clinicName}>Way 2 Smile Dental Clinic</h2>

          <div className={styles.findUsRow}>
            <span className={styles.findUsPill}>Find Us</span>
          </div>

          <h3 className={styles.subHeading}>Contact &amp; Locate Us</h3>
          <p className={styles.desc}>
            We are conveniently located at Medical More, Siliguri. Visit us for
            expert dental care in a modern, comfortable environment.
          </p>

          {/* Info Cards */}
          <div className={styles.infoCards}>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={styles.infoCard}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.19 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
              </svg>
              <div>
                <p className={styles.cardLabel}>Call Us</p>
                <a href="tel:8949805173" className={styles.cardVal}>+91 89498 05173</a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className={styles.infoCard}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <div>
                <p className={styles.cardLabel}>Address</p>
                <p className={styles.cardVal}>Medical More, Siliguri, WB</p>
              </div>
            </motion.div>
          </div>

          {/* Hours */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className={styles.hoursCard}
          >
            <div className={styles.hoursHeader}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              <span>Clinic Hours</span>
            </div>
            <div className={styles.hoursList}>
              <div className={styles.hoursRow}>
                <span>Mon – Sat</span>
                <span>10:00 AM – 2:00 PM &amp; 4:30 PM – 8:30 PM</span>
              </div>
              <div className={styles.hoursRow}>
                <span>Sunday</span>
                <span>10:00 AM – 1:00 PM</span>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <div className={styles.actions}>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:8949805173" 
              className={styles.callBtn}
            >
              Call Now
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/917679779255"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.waBtn}
            >
              WhatsApp
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://share.google/TWYErIPe1DL8yUgpq"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.gBtn}
            >
              Google Reviews
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT COLUMN — Map */}
        <motion.div 
          initial={{ opacity: 0, x: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, type: 'spring', bounce: 0.3 }}
          className={styles.right}
        >
          <div className={styles.mapBento}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.608475134997!2d88.3716097!3d26.6930016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4433520b2dff1%3A0xf6568e7c91d20020!2sWay2smile!5e0!3m2!1sen!2sin!4v1777994856191!5m2!1sen!2sin"
              className={styles.mapFrame}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Way2smile Dental Clinic Location"
            />
            <motion.a
              whileHover={{ y: -2 }}
              href="https://share.google/sqyW0hx7y4gtNmU7f"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.openMapBtn}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              Open in Google Maps
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
