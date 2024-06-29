import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm German</h1>
            <p className={styles.description}>
                I'm a Front-End Developer. 
                <br />
                Take a look of what I'm capable of.
            </p>
            <div className={styles.buttons}>
            <a className={styles.contactBtn} href="mailto:germants180@gmail.com">Contact Me</a>
            <a className={styles.contactBtn} href="">Download CV</a>
            </div>
        </div>
        <img className={styles.heroImg} 
        src={getImageUrl('hero/YO(2).png')} alt="Hero image of me" />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}

export default Hero
