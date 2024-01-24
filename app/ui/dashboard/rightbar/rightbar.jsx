"use client";

import React from 'react'
import styles from "./rightbar.module.css"
import Image from 'next/image'
import { MdPlayCircleFilled } from 'react-icons/md'
import ReactPlayer from 'react-player'

const Rightbar = () => {
  return (
    <div className={styles.container}>
         
        <div className={styles.item}>
            <div className={styles.texts}>  
                <div className={styles.notification}> <button className={styles.button}>
                    <MdPlayCircleFilled />
                </button> <p> Live Robot </p>
                </div>
        <ReactPlayer url='https://youtu.be/LEz5ufduz1k' width='250px' height= '300px' controls />   
            </div>
        </div>
    </div>
  )
}

export default Rightbar