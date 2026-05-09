'use client'

import { useState } from 'react'
import styles from './BookAppointment.module.css'
import { motion, AnimatePresence } from 'framer-motion'

export default function BookAppointment() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', phone: '', service: '', date: '', time: '' })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        alert('Failed to send request. Please try again.')
      }
    } catch (error) {
      console.error(error)
      alert('An error occurred. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
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
                <span className={styles.infoValue}>way2smiledentalclinic07@gmail.com</span>
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
                      <input 
                        type="text" 
                        name="name"
                        placeholder="John Doe" 
                        className={styles.input} 
                        value={formData.name}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <label className={styles.label}>Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        placeholder="+91 00000 00000" 
                        className={styles.input} 
                        value={formData.phone}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                    <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                      <label className={styles.label}>Select Service</label>
                      <select 
                        name="service"
                        className={styles.select} 
                        value={formData.service}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Choose a service...</option>
                        <option value="Routine Checkup">Routine Checkup</option>
                        <option value="Dental Cleaning">Dental Cleaning</option>
                        <option value="Teeth Whitening">Teeth Whitening</option>
                        <option value="Root Canal Treatment">Root Canal Treatment</option>
                        <option value="Tooth Extraction">Tooth Extraction</option>
                        <option value="Other Consultation">Other Consultation</option>
                      </select>
                    </div>
                    <div className={styles.inputGroup}>
                      <label className={styles.label}>Preferred Date</label>
                      <input 
                        type="date" 
                        name="date"
                        className={styles.input} 
                        value={formData.date}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <label className={styles.label}>Preferred Time</label>
                      <select 
                        name="time"
                        className={styles.select} 
                        value={formData.time}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Time Slot</option>
                        <option value="Morning (10AM - 2PM)">Morning (10AM - 2PM)</option>
                        <option value="Evening (4:30PM - 8:30PM)">Evening (4:30PM - 8:30PM)</option>
                      </select>
                    </div>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit" 
                    className={styles.submitBtn}
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Request Appointment'}
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
