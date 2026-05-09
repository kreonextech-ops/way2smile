'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './Gallery.module.css'
import { motion, AnimatePresence } from 'framer-motion'

const RAW_IMAGES = [
  '/gallery/20260429_150639.jpg.jpeg',
  '/gallery/IMG_20260429_145011.jpg.jpeg',
  '/gallery/correct_his_facce_posture_2K_202605052001.jpeg',
  '/gallery/enhance_this_image_for_website_202605041945 (1).jpeg',
  '/gallery/enhance_this_image_for_website_202605041945.jpeg',
  '/gallery/hero.jpeg',
  '/gallery/remove_the_upper_floor,_remove_202605051956.jpeg',
]

function shuffleArray(arr: string[]) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const SIZES = ['large', 'wide', 'wide', 'small', 'small', 'small', 'small']

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
} as const

export default function Gallery() {
  const [images, setImages] = useState(RAW_IMAGES)
  const [lightbox, setLightbox] = useState<string | null>(null)

  useEffect(() => {
    setImages(shuffleArray(RAW_IMAGES))
  }, [])

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.header}
          >
            <span className={styles.subtitle}>Our Clinic</span>
            <h2 className={styles.title}>Gallery</h2>
            <div className={styles.underline}></div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={styles.grid}
          >
            {images.map((src, index) => {
              const sizeClass = styles[SIZES[index]] ?? styles.small
              return (
                <motion.div
                  key={src}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  className={`${styles.item} ${sizeClass}`}
                  onClick={() => setLightbox(src)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setLightbox(src)}
                  aria-label={`View gallery image ${index + 1}`}
                >
                  <Image
                    src={src}
                    alt={`Gallery Image ${index + 1}`}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className={styles.overlay}>
                    <svg className={styles.zoomIcon} viewBox="0 0 24 24" fill="white" width="32" height="32">
                      <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm.5-7H9v2H7v1h2v2h1v-2h2V9h-2V7z"/>
                    </svg>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.lightboxBackdrop}
            onClick={() => setLightbox(null)}
          >
            <button
              className={styles.lightboxClose}
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              ✕
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={styles.lightboxContent}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox}
                alt="Gallery enlarged"
                fill
                className={styles.lightboxImage}
                sizes="100vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
