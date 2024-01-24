import React from 'react'
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
        <div  className={styles.logo}>
            Usama Dev

        </div>
        <div  className={styles.text}>
            copyright
        </div>
    </div>
  )
}

export default Footer