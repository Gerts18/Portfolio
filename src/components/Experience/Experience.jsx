import React from 'react'

import skills from '../../data/skills.json'
import history from '../../data/history.json'
import educations from '../../data/education.json'
import { getImageUrl } from '../../utils'
import style from './Experience.module.css'

const Experience = () => {
  return (
    <section className={style.container} id='experience'>
        <div className={style.content}>
            <div>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skillsContainer}>
                    {
                        skills.map((skill, id) => {
                            return (
                                <div className={style.skill} id={id}>
                                    <div className={style.skillImageContainer}>
                                        <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                                    </div>
                                    <p>
                                        {skill.title}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div>
                <h2 className={style.title}>Experience</h2>
                <ul className={style.experiencesContainer}>
                    {
                        history.map((experience, id) => {
                            return(
                                <li className={style.item}>
                                    <img src={getImageUrl(experience.imageSrc)} 
                                    alt={`${experience.organization} logo`} />
                                    <div className={style.itemDetails}>
                                        <h3>{`${experience.role}, ${experience.organization}`}</h3>
                                        <p>{`${experience.startDate}-${experience.endDate}`}</p>
                                        <ul>
                                            {experience.experiences.map((exp, id) => {
                                                return (
                                                <li key={id}>
                                                    {exp}
                                                </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div>
                <h2 className={style.title}>Education</h2>
                <ul className={style.experiencesContainer}>
                    {
                        educations.map((experience, id) => {
                            return(
                                <li className={style.item}>
                                    <img src={getImageUrl(experience.imageSrc)} 
                                    alt={`${experience.organization} logo`} />
                                    <div className={style.itemDetails}>
                                        <h3>{`${experience.role}, ${experience.organization}`}</h3>
                                        <p>{`${experience.startDate}-${experience.endDate}`}</p>
                                        <ul>
                                            {experience.experiences.map((exp, id) => {
                                                return (
                                                <li key={id}>
                                                    {exp}
                                                </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Experience
