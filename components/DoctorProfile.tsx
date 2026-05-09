'use client'

import Image from 'next/image'
import styles from './DoctorProfile.module.css'
import { motion } from 'framer-motion'

export default function DoctorProfile() {
  return (
    <section className={styles.section} id="doctor">
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={styles.imageSide}
        >
          <div className={styles.imageWrapper}>
            <Image
              src="/doctor.jpeg"
              alt="Dr. Aashish Kumar Jha"
              width={500}
              height={600}
              style={{ objectFit: 'cover' }}
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={styles.infoSide}
        >
          <span className={styles.tag}>Meet Your Dentist</span>
          <h2 className={styles.name}>Dr. Aashish Kumar Jha</h2>
          <span className={styles.degree}>B.D.S. (WBUHS)</span>
          
          <p className={styles.bio}>
            Dr. Aashish Kumar Jha is a highly skilled and compassionate dental surgeon 
            committed to providing exceptional oral healthcare. With extensive 
            experience in multispeciality dental procedures, he focuses on 
            delivering painless treatments and sustainable dental solutions.
          </p>

          <div className={styles.grid}>
            {[
              { label: 'Experience', val: 'Ex-House Surgeon, Balurghat District Hospital' },
              { label: 'Specialization', val: 'Multispeciality Dental Surgery & Care' },
              { label: 'Commitment', val: 'Patient Satisfaction & Painless Dentistry' },
              { label: 'Registration', val: 'Reg. No. 9118-A' },
            ].map((item, i) => (
              <motion.div 
                key={item.label} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className={styles.item}
              >
                <span className={styles.itemLabel}>{item.label}</span>
                <span className={styles.itemValue}>{item.val}</span>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className={styles.regBadge}
          >
            Verified Practitioner · West Bengal Dental Council
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
