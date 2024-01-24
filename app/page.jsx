import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
   <div className={styles.main}>
    
    <Image src="/RoboBoard_Logo.png" alt="RoboBoard Logo" width="300" height="200"  />
    
    <p>Home</p>
    <Link href="/login" style={{"color":"yellow"}} >Login</Link>
   
    <Link href="/register" style={{"color":"yellow"}}>Register</Link>
  
    
  
   
    </div>
  )
}
