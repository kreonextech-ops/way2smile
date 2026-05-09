'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './Services.module.css'
import { motion, AnimatePresence } from 'framer-motion'

const CATEGORIES = [
  'Cosmetic & Aesthetic',
  'Surgical & Specialist',
  'General'
]

const SERVICES_DATA = {
  'Cosmetic & Aesthetic': [
    {
      id: 'c1',
      title: 'Smile Designing',
      desc: 'Artistic planning for a complete aesthetic transformation.',
      image: '/Categorized Treatments/smile desiging.png',
      size: 'large',
      icon: 'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z'
    },
    {
      id: 'c2',
      title: 'Orthodontic Treatment',
      desc: 'Braces and clear aligners for perfect tooth alignment.',
      image: '/Categorized Treatments/Orthodontic Treatment.png',
      size: 'small',
      icon: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4l5 2.18V11c0 3.5-2.33 6.79-5 7.93-2.67-1.14-5-4.43-5-7.93V7.18L12 5z'
    },
    {
      id: 'c3',
      title: 'Teeth Whitening',
      desc: 'Advanced clinical whitening for instant results.',
      image: '/Categorized Treatments/Teeth Whitening.png',
      size: 'small',
      icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z'
    },
    {
      id: 'c4',
      title: 'Veneers',
      desc: 'Thin shells to correct shape and color.',
      image: '/Categorized Treatments/Veneers.png',
      size: 'wide',
      icon: 'M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12z'
    }
  ],
  'Surgical & Specialist': [
    {
      id: 's1',
      title: 'Surgical Extractions',
      desc: 'Expert removal of impacted or complex problematic teeth.',
      image: '/Categorized Treatments/Surgical Extractions.png',
      size: 'large',
      icon: 'M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2zm1 14.5h-2v-2h2v2zm0-4h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z'
    },
    {
      id: 's2',
      title: 'Implants',
      desc: 'Permanent and natural-looking solutions for missing teeth.',
      image: '/Categorized Treatments/implants.png',
      size: 'small',
      icon: 'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z'
    },
    {
      id: 's3',
      title: 'Tooth Extractions',
      desc: 'Gentle removal of damaged or problematic teeth.',
      image: '/Categorized Treatments/tooth extractions.png',
      size: 'small',
      icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z'
    },
    {
      id: 's4',
      title: 'Minor Surgical Procedures',
      desc: 'Other expert care for various complex oral issues.',
      image: '/Categorized Treatments/Minor Surgical Procedures.png',
      size: 'wide',
      icon: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4l5 2.18V11c0 3.5-2.33 6.79-5 7.93-2.67-1.14-5-4.43-5-7.93V7.18L12 5z'
    }
  ],
  'General': [
    {
      id: 'r1',
      title: 'Root Canal Treatment',
      desc: 'Precision therapy to save your natural teeth with painless procedures.',
      image: '/Categorized Treatments/Root Canal Treatment.png',
      size: 'large',
      icon: 'M12 2C9.79 2 8 3.79 8 6s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-7 18v-1c0-3.31 2.69-6 6-6h2c3.31 0 6 2.69 6 6v1H5z'
    },
    {
      id: 'r2',
      title: 'Dentures (Fixed & Removable)',
      desc: 'Comfortable solutions including bridges and partial dentures.',
      image: '/Categorized Treatments/Dentures.png',
      size: 'small',
      icon: 'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z'
    },
    {
      id: 'r3',
      title: 'Scaling & Polishing',
      desc: 'Deep cleaning and professional stains removal.',
      image: '/Categorized Treatments/Scaling & Polishing.png',
      size: 'small',
      icon: 'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z'
    },
    {
      id: 'r4',
      title: 'Tooth Coloured Restorations',
      desc: 'Aesthetic fillings that match your natural teeth.',
      image: '/Categorized Treatments/Tooth Coloured Restorations.png',
      size: 'wide',
      icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z'
    }
  ]
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
} as const

export default function Services() {
  const [activeTab, setActiveTab] = useState(CATEGORIES[2]) // Default to General

  return (
    <section className={styles.section} id="services">
      <div className={styles.inner}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.title}>Categorized <span className={styles.accent}>Treatments</span></h2>
          <p className={styles.subtitle}>
            Expert care across cosmetic, surgical, and general dentistry.
          </p>
          
          <div className={styles.tabsContainer}>
            <div className={styles.tabs}>
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  className={`${styles.tab} ${activeTab === cat ? styles.activeTab : ''}`}
                  onClick={() => setActiveTab(cat)}
                >
                  {cat.toUpperCase()}
                  {activeTab === cat && (
                    <motion.div 
                      layoutId="activeTab"
                      className={styles.activeIndicator}
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={styles.bentoGrid}
          >
            {SERVICES_DATA[activeTab as keyof typeof SERVICES_DATA].map((service) => (
              <motion.div 
                key={service.id} 
                variants={cardVariants}
                className={`${styles.bentoCard} ${styles[service.size]}`}
              >
                {service.image && (
                  <div className={styles.cardImageWrapper}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      unoptimized={true}
                      className={styles.cardImage}
                    />
                    <div className={styles.overlay} />
                  </div>
                )}

                <div className={styles.cardContent}>
                  <span className={styles.tag}>{activeTab}</span>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDesc}>{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
