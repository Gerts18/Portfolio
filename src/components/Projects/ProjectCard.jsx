import React from 'react'
import { getImageUrl } from '../../utils'
import style from './ProjectCard.module.css'

const ProjectCard = ({project : {title, imageSrc, description, skills, demo, source}}) => {
    return(
        <div className={style.container}>
            <img className={style.image} src={getImageUrl(imageSrc)} alt={`image of ${title}`} />
            <h3 className={style.title}>{title} </h3>
            <p className={style.description}>{description}</p>
            <ul className={style.skills}>
                {
                    skills.map((skill,id) => {
                        return (
                            <li className={style.skill} key={id}>
                                {skill}
                            </li>
                        )
                    })
                }
            </ul>
            <div className={style.links}>
                <a className={style.link} href={demo}>Demo</a>
                <a className={style.link} href={source}>Source</a>
            </div>
        </div>
    )
}

export default ProjectCard
