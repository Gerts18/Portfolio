import React from 'react'

import skills from '../../data/skills.json'
import history from '../../data/history.json'
import { getImageUrl } from '../../utils'

const Experience = () => {
  return (
    <section id='experience'>
        <h2>Experience</h2>
        <div>
            <div>
                {
                    skills.map((skill, id) => { 
                         return (
                            <div key={id}>{/* When you iterate trought an array in React, for create elements, you need to give a key for each one of them */}
                            <div><img src={getImageUrl(skill.imageSrc)} alt={skill.title} /></div>
                            <p>{skill.title} </p>
                            </div>
                         )
                     })
                }
            </div>
            <div>
                <ul>
                  {
                    history.map((experience, id) => {
                      return (
                        <li key={id} >
                          <img src={getImageUrl(experience.imageSrc)} alt= {`${experience.organization} logo`} />
                          <div>
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
