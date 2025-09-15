import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'
import resumePDF from '../../../assets/files/German-Torres-Resume.pdf'

const Hero = () => {

  const handleDownload = () => {
    try {
      const link = document.createElement('a');
      link.href = resumePDF; 
      link.download = 'German-Torres-Resume.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading CV:', error);
      window.open(resumePDF, '_blank');
    }
  }

  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm German</h1>
            <p className={styles.description}>
                I am a Web Developer. 
                <br></br>
                Take a look of what I am capable of.
            </p>
            <div className={styles.buttons}>
            <a className={styles.contactBtn} href="mailto:germants180@gmail.com">Contact Me</a>
            <button 
              className={styles.contactBtn} 
              onClick={handleDownload}
            >
              Download CV
            </button>
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