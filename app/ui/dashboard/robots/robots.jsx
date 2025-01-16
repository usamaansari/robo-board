"use client";

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from "./robots.module.css"
import axios from 'axios';

const Robots = () => {
    const [agribots, setAgribots] = useState([]);

    const getAgribots = async() => {
        const response = await axios.get("/api/agribot");
    setAgribots(response.data.agribots);
     console.log(response.data.agribots);
    }

    useEffect(() => {
      getAgribots();
    },[])
    
  return (
    <div className={styles.container}>
        <h2>Latest Robots</h2>
        <table className={styles.table}>
            <thead>
                <tr>
                    <td>
                        Name
                    </td>
                    <td>
                        Status
                    </td>
                    <td>
                        Speciality
                    </td>
                    <td>
                        Amount
                    </td>
                </tr>

            </thead>
            <tbody>

                {agribots.map((agribot)=> (

              
                <tr key={agribot._id}>
                    <td>
                        <div className={styles.user}>

                       
                        <Image src={agribot.img || "/default-avatar.png"} width={100} height={100} className={styles.userImage} alt="" />
                    
                   {agribot.name}
                    </div>
                   </td> 
                  
                   <td><span className={`${styles.status} ${styles.done}`}>Active</span></td>
                    <td>{agribot.speciality}</td>
                    <td>${agribot.price}</td>
                </tr>
                  ))}
            </tbody>
        </table>

    </div>
  )
}

export default Robots