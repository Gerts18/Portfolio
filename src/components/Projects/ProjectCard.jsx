import React from 'react'
import { getImageUrl } from '../../utils'
import style from './ProjectCard.module.css'

const ProjectCard = ({project : {title, imageSrc, description, skills, demo, source}}) => {
    return(
        <div className={style.container}>
            <div className={style.items}>
            <h3 className={style.title}>{title} </h3>
            <img className={style.image} src={getImageUrl(imageSrc)} alt={`image of ${title}`} />
            </div>
            <div className={style.descriptiveItems}>
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
                <a className={style.link} href={demo} target='_blank'>Demo</a>
                <a className={style.link} href={} target='_blank'>Source</a>
            </div>
            </div>
        </div>
    )
}

export default ProjectCard
