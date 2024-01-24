"use client";

import React from 'react'
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import { authenticate } from '@/app/lib/actions';
import Link from 'next/link';
import { Collection } from 'mongoose';

const loginForm = () => {
    const [state, formAction] = useFormState(authenticate, undefined);

    return (
      <>
      <form action={formAction} className={styles.form}>
        <h1>Login</h1>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button>Login</button>
        {state && state}
        <p>Do not have an account? <Link href="/register" style={{"color":"yellow"}}>Register</Link> </p>
      </form>
      
      </>
    );
  };
export default loginForm