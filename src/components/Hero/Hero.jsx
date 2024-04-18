import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm German</h1>
            <p className={styles.description}>
                Im a student who loves programming, take a look of what I'm capable of.
            </p>
            <a className={styles.contactBtn} href="mailto:germants100@gmail.com">Contact Me</a>
        </div>
        <img className={styles.heroImg} 
        src={getImageUrl('hero/heroImage.png')} alt="Hero image of me" />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}

export default Hero