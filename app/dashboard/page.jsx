import React from 'react'
import Card from '../ui/dashboard/card/card'
import styles from "../ui/dashboard/dashboard.module.css"
import Chart from '../ui/dashboard/chart/chart'
import Rightbar from '../ui/dashboard/rightbar/rightbar'
import Footer from '../ui/dashboard/footer/footer'
import Heatmap from '../ui/dashboard/heatmap/heatmap'
import Robots from '../ui/dashboard/robots/robots'


const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      
      <div className={styles.main}>
      <div className={styles.cards}>
        <Card title="Robots" totalNumber={32} revenue={15}/>
        <Card title="Products" totalNumber={5560} revenue={23}/>
        <Card title="Users" totalNumber={11} revenue={3}/>
      </div>
      <Robots />
      <Chart/>
    <Heatmap />
    </div>
    <div className={styles.side}>
      <Rightbar />

    </div>
   
    </div>
  )
}

export default Dashboard