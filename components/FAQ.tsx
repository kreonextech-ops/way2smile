'use client'

import { useState } from 'react'
import styles from './FAQ.module.css'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: "What are your clinic timings?",
    a: "We are open Monday to Saturday from 10:00 AM – 2:00 PM & 4:30 PM – 8:30 PM. On Sundays, we are available from 10:00 AM – 1:00 PM."
  },
  {
    q: "Do you provide emergency dental services?",
    a: "Yes, we handle dental emergencies. Please call us directly at 8949805173 for immediate assistance in case of severe pain or accidents."
  },
  {
    q: "How often should I visit the dentist for a checkup?",
    a: "We generally recommend a routine dental checkup every 6 months to maintain optimal oral health and detect any potential issues early."
  },
  {
    q: "Is dental whitening safe for my teeth?",
    a: "Absolutely. When performed by a professional, teeth whitening is a safe and effective way to brighten your smile without damaging your enamel."
  },
  {
    q: "What should I do in case of a sudden toothache?",
    a: "Rinse your mouth with warm water and use dental floss to remove any trapped food. Avoid placing aspirin directly on the gum. Contact us immediately for a diagnosis."
  }
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <span className={styles.tag}>Common Questions</span>
          <h2 className={styles.heading}>Frequently Asked Questions</h2>
          <p className={styles.sub}>Find answers to common queries about our dental services and clinic.</p>
        </motion.div>

        <div className={styles.faqGrid}>
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
            >
              <button 
                className={styles.question}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className={styles.qText}>{faq.q}</span>
                <div className={styles.icon}>
                  <motion.svg 
                    animate={{ rotate: activeIndex === index ? 135 : 0 }}
                    width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </motion.svg>
                </div>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className={styles.answer}
                  >
                    <div className={styles.aText}>{faq.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
