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
                <Information title={'Introduction'}
                    description={'Hello! I am German Torres Sierra, I am 20 years old and currently live in the city of Morelia, in the beautiful country of Mexico, where I was born and raised.'}
                    path={'about/cursorIcon.png'}    
                />
                <Information title={'My path'}
                    description={'I started programming at university with a project to create a basic streaming app, which ignited my passion for coding. Since then, I have continuously learned through school resources and self-study. Currently, I focus on web development, particularly frontend, driven by my curiosity about web functions and animations. However, I also enjoy backend development for its data handling and dynamic aspects. I am very passionate when it comes to working and have experienced in carrying out projects in teams and based on specific requirements, skills I have developed thanks to university and various activities I have participated in.'}
                    path={'about/serverIcon.png'}
                />
                <Information title={'Hobbies'}
                    description={'In my free time, I like playing video games, watching movies and series, exercising, and keeping up with the latest technological trends. I enjoy watching videos, reading articles, and, of course, programming, which is what I am most passionate about.'}
                    path={'about/gamepad2.png'}
                />
            </div>
    </section>
  )
}

export default About
