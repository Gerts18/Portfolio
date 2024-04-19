import React from 'react'
import styles from './Information.module.css'
import { getImageUrl } from '../../utils'

const Information = ({title, description, path}) => {
  return (
    <section className={styles.container}>
        <img className={styles.image} src={getImageUrl(path)} alt="" />
        <div className={styles.textContainer}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description} </p>
        </div>
    </section>
  )
}

export default Information
