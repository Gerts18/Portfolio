import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'

const Hero = () => {

  const handleDownload = (event) => {
    const pdfurl = getImageUrl('files/German-Torres-Resume.pdf');
    const element = event.target;
    element.href = pdfurl;
    element.download = 'German-Torres-Resume.pdf'
  }

  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm German</h1>
            <p className={styles.description}>
                I'm a Web Developer. 
                <br></br>
                Take a look of what I'm capable of.
            </p>
            <div className={styles.buttons}>
            <a className={styles.contactBtn} href="mailto:germants180@gmail.com">Contact Me</a>
            <a className={styles.contactBtn} onClick={handleDownload}>Download CV</a>
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
