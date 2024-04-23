import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css'
import Information from '../Information/Information'

const About = () => {
  return (
    <section className={styles.container} id='about'>
            <div className={styles.aboutItems}>
                <h1 className={styles.title}>About Me</h1>
                <img className={styles.image} src={getImageUrl('about/ORDENADOR.png')} alt="Imagen de Ordenador de FREEPIK" />
            </div>
            <div className={styles.informationItems}>
                <Information title={'Frontend Developer'}
                    description={'I create responsive Web Pages with good knowledge about design.'}
                    path={'about/cursorIcon.png'}    
                />
                <Information title={'Backend Developer'}
                    description={'I use the best practices to manage data.'}
                    path={'about/serverIcon.png'}
                />
                <Information title={'General Knowledge'}
                    description={'I love programming and learn about tech.'}
                    path={'about/uiIcon.png'}
                />
            </div>
    </section>
  )
}

export default About
