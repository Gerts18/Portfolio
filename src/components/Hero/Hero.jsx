import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section>
        <div>
            <h1>Hi, I'm German</h1>
            <p>
                Im a student who loves programming, take a look of what I'm capable of.
            </p>
            <a href="mailto:germants100@gmail.com">Contact Me</a>
        </div>
        <img src={getImageUrl('hero/heroImage.png')} alt="Hero image of me" />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}

export default Hero
