import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css'

const About = () => {
  return (
    <section className={styles.container}>
        <div className={styles.items}>
            <h1>About me</h1>
            <img src={getImageUrl('about/aboutImage.png')} alt="" />
            <div className={styles.informationBlock}>
                {/* Here the components of image */}
            </div>
        </div>
    </section>
  )
}

export default About
