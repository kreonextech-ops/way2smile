'use client'

import { useState } from 'react'
import styles from './BookAppointment.module.css'
import { motion, AnimatePresence } from 'framer-motion'

export default function BookAppointment() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    // Here you would typically send the data to a server
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section className={styles.section} id="appointment">
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={styles.infoSide}
        >
          <span className={styles.tag}>Book Your Visit</span>
          <h2 className={styles.heading}>
            Schedule an <span className={styles.accent}>Appointment</span> Today
          </h2>
          <p className={styles.description}>
            Fill out the form to request a dental consultation. Our team will 
            contact you shortly to confirm your preferred time and date.
          </p>

          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>
              <div>
                <span className={styles.infoLabel}>Quick Call</span>
                <span className={styles.infoValue}>+91 8949805173</span>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <div>
                <span className={styles.infoLabel}>Email Us</span>
                <span className={styles.infoValue}>support@way2smile.com</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={styles.formSide}
        >
          <div className={styles.formCard}>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  style={{ textAlign: 'center', padding: '40px 0' }}
                >
                  <div style={{ fontSize: '50px', marginBottom: '20px' }}>✅</div>
                  <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>Request Received!</h3>
                  <p style={{ color: 'var(--muted)' }}>We will contact you shortly to confirm your appointment.</p>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                >
                  <div className={styles.formGrid}>
                    <div className={styles.inputGroup}>
                      <label className={styles.label}>Full Name</label>
                      <input type="text" placeholder="John Doe" className={styles.input} required />
                    </div>
                    <div className={styles.inputGroup}>
                      <label className={styles.label}>Phone Number</label>
                      <input type="tel" placeholder="+91 00000 00000" className={styles.input} required />
                    </div>
                    <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                      <label className={styles.label}>Select Service</label>
                      <select className={styles.select} required>
                        <option value="">Choose a service...</option>
                        <option value="checkup">Routine Checkup</option>
                        <option value="cleaning">Dental Cleaning</option>
                        <option value="whitening">Teeth Whitening</option>
                        <option value="rootcanal">Root Canal Treatment</option>
                        <option value="extraction">Tooth Extraction</option>
                        <option value="other">Other Consultation</option>
                      </select>
                    </div>
                    <div className={styles.inputGroup}>
                      <label className={styles.label}>Preferred Date</label>
                      <input type="date" className={styles.input} required />
                    </div>
                    <div className={styles.inputGroup}>
                      <label className={styles.label}>Preferred Time</label>
                      <select className={styles.select} required>
                        <option value="">Select Time Slot</option>
                        <option value="morning">Morning (10AM - 2PM)</option>
                        <option value="evening">Evening (4:30PM - 8:30PM)</option>
                      </select>
                    </div>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit" 
                    className={styles.submitBtn}
                  >
                    Request Appointment
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
