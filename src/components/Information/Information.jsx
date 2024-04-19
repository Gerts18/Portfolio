import React from 'react'
import styles from './Information.module.css'
import { getImageUrl } from '../../utils'

const Information = ({title}) => {
  return (
    <section>
        <img src={getImageUrl('about/uilcon.png')} alt="" />
        <div>
            <h1>{title}</h1>
        </div>
    </section>
  )
}

export default Information
