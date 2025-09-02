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
                    description={'I discovered my passion for coding at university. Since then, I have continuously learned throughself-study. Currently I focus on frontend web development out of curiosity about web functions, and I practice backend development for dynamic data handling. I have experience in collaborative projects through university and personal activities.'}
                    path={'about/serverIcon.png'}
                />
                {/* <Information title={'Hobbies'}
                    description={'In my free time, I like playing video games, watching movies and series, exercising, and keeping up with the latest technological trends. I enjoy watching videos, reading articles, and, of course, programming, which is what I am most passionate about.'}
                    path={'about/gamepad2.png'}
                /> */}
            </div>
    </section>
  )
}

export default About
