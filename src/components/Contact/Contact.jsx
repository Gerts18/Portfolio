import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Fell free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl('contact/emailIcon.png')} alt="Email icon" />
                <a href='mailto:germants180@gmail.com' target='_blank'>germants180@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/linkedinIcon.png')} alt="Linkedin icon" />
                <a href='https://www.linkedin.com/in/germants180/' target='_blank'>German Torres</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/githubIcon.png')} alt="Github icon" />
                <a href='https://github.com/Gerts18' target='_blank'>Gerts18</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact
