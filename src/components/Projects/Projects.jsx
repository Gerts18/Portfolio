import React from 'react'
import projects from '../../data/projects.json' 
import { getImageUrl } from '../../utils'

const Projects = () => {
  return (
    <div>
      <section>
        <h2>Projects</h2>
        <div>
            {
                projects.map((project, id) => {
                    return(
                        <div key={id}>
                            <img src={getImageUrl(project.imageSrc)} alt={`image of ${project.title}`} />
                            <h3>{project.title} </h3>
                            <p>{project.description}</p>
                            <ul>
                                {
                                    project.skills.map((skill,id) => {
                                        return (
                                            <li key={id}>
                                                {skill}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <div>
                                <a href={project.demo}>Demo</a>
                                <a href={project.source}>Source</a>
                            </div>
                        </div>
                    )
                })
            }
        </div>
      </section>
    </div>
  )
}

export default Projects
