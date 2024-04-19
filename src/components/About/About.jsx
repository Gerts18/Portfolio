import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css'
import Information from '../Information/Information'

const About = () => {
  return (
    <section className={styles.container}>
        <div className={styles.items}>
            <h1>About me</h1>
            <img src={getImageUrl('about/aboutImage.png')} alt="" />
            <div className={styles.informationBlock}>
                <Information title={'What i Like'}/>
                <Information title={'My passions'}/>
            </div>
        </div>
    </section>
  )
}

export default About
