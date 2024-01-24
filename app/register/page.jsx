import React from 'react'
import styles from "@/app/ui/login/login.module.css";
import { authenticate } from '../lib/actions';
import RegisterForm from '../ui/register/registerForm/registerForm';
import Image from 'next/image';

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
      <Image src="/RoboBoard_Logo.png" alt="RoboBoard Logo" width="300" height="200" />
      </div>
     <div>
     <RegisterForm />
     </div>
    
    </div>
  )
}

export default RegisterPage