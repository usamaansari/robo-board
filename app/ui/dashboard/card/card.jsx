import React from 'react'
import { MdSupervisedUserCircle } from 'react-icons/md'
import styles from "./card.module.css"

const Card = ({title, totalNumber, revenue}) => {
  return (
    <div className={styles.container}>
    <MdSupervisedUserCircle size={24}/>
    <div className={styles.texts}>
        <span className={styles.title}> Total {title} </span>
        <span className={styles.number}> {totalNumber}</span>
        <span className={styles.details}><span className={styles.positive}> {revenue}% </span>more than previous week</span>
    </div>

    </div>
  )
}

export default Card