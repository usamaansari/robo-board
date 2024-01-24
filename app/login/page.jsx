import React from 'react'
import styles from "@/app/ui/login/login.module.css";
import { authenticate } from '../lib/actions';
import LoginForm from '../ui/login/loginForm/loginForm';
import Image from 'next/image';

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
      <Image src="/RoboBoard_Logo.png" alt="RoboBoard Logo" width="300" height="200" />
      </div>
     <div>
     <LoginForm />
     </div>
    
    </div>
  )
}

export default LoginPage