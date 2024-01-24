"use client";

import React, { useState } from 'react'
import styles from "./registerForm.module.css";
import { useFormState } from "react-dom";
import { authenticate } from '@/app/lib/actions';
import Link from 'next/link';
import { Collection } from 'mongoose';
import axios from 'axios';
import { useRouter } from 'next/navigation'

const registerForm = () => {
    const [user, setUser] = useState({})

    
const router = useRouter()
 
//router.push('/dashboard', { scroll: false })

    const setUsername= (e) => setUser({...user, ["username"]: e.target.value})
    const setEmail = (e) => setUser({...user, ["email"]: e.target.value})
    const setPassword = (e) => setUser({...user, ["password"]: e.target.value})

    const onSubmitHandler = async(e) => {
        e.preventDefault();
        try{

            const reponse = await axios.post(`/api/user`,user)
            console.log(reponse);
            router.push('/login', { scroll: false })

        }
        catch(err){
            console.log(err);
        }

    }


    return (
      <>
      <form onSubmit={onSubmitHandler} className={styles.form}>
        <h1>Register</h1>
        <input type="text" placeholder="username" name="username" onChange={setUsername} />
        <input type="email" placeholder="email" name="email" onChange={setEmail} />
        <input type="password" placeholder="password" name="password" onChange={setPassword} />
        <button>Register</button>
        <p>Already have an account? <Link href="/login" style={{"color":"yellow"}}>Login</Link> </p>
      </form>
      
      </>
    );
  };
export default registerForm