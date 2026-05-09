'use client'

import styles from './Testimonials.module.css'
import { motion } from 'framer-motion'

const TESTIMONIALS = [
  {
    name: 'Rahul Sharma',
    role: 'Patient',
    content: 'Dr. Aashish is extremely professional. The root canal treatment was completely painless. Highly recommend Way2Smile!',
    rating: 5
  },
  {
    name: 'Priya Das',
    role: 'Patient',
    content: 'Very clean clinic and friendly atmosphere. The smile designing procedure changed my confidence completely.',
    rating: 5
  },
  {
    name: 'Amit Gupta',
    role: 'Patient',
    content: 'Best dental clinic in Siliguri. Professional equipment and very thorough explanation of the treatment.',
    rating: 5
  }
]

export default function Testimonials() {
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

        <div className={styles.grid}>
          {TESTIMONIALS.map((t, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className={styles.card}
            >
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
