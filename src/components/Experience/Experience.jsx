import React from 'react'

import skills from '../../data/skills.json'
import history from '../../data/history.json'
import { getImageUrl } from '../../utils'
import style from './Experience.module.css'

const Experience = () => {
  return (
    <section className={style.container} id='experience'>
        <h2 className={style.title}>Experience</h2>
        <div className={style.content}>
            <div className={style.skillsContainer}>
                {
                    skills.map((skill, id) => { 
                         return (
                            <div className={style.skill} key={id}>{/* When you iterate trought an array in React, for create elements, you need to give a key for each one of them */}
                            <div className={style.skillImageContaniner}><img src={getImageUrl(skill.imageSrc)} alt={skill.title} /></div>
                            <p>{skill.title} </p>
                            </div>
                         )
                     })
                }
            </div>
            <div>
                <ul className={style.experiencesContaniner}>
                  {
                    history.map((experience, id) => {
                      return (
                        <li className={style.historyItem} key={id} >
                          <img src={getImageUrl(experience.imageSrc)} alt= {`${experience.organization} logo`} />
                          <div className={style.historyItemDetails}>
                            <h3>{`${experience.role}, ${experience.organization}`} </h3>
                            <p>
                            {`${experience.startDate}-${experience.endDate}`}
                            </p>
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
