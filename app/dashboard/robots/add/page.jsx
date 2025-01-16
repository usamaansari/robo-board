"use client";

import React, { useState } from 'react'
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css"
//import { addProduct } from '@/app/lib/actions'
import axios from 'axios';
import {useRouter} from "next/navigation";

const AddProductPage = () => {
    const [agribots, setAgribots] = useState({
        name:"",
        desc:"",
        price:0,
        stock:0,
        img:"",
        speciality:"",
        height:0,
        weight:0
    });
    const router = useRouter();
    const setName = (e) => setAgribots({...agribots, ["name"]: e.target.value})

    const setSpeciality = (e) => setAgribots({...agribots, ["speciality"]: e.target.value})
    const setPrice = (e) => setAgribots({...agribots, ["price"]: e.target.value})
    const setStock = (e) => setAgribots({...agribots, ["stock"]: e.target.value})
    const setImg = (e) => setAgribots({...agribots, ["img"]: e.target.value})
    const setHeight = (e) => setAgribots({...agribots, ["height"]: e.target.value})
    const setWeight = (e) => setAgribots({...agribots, ["weight"]: e.target.value})
    const setDesc = (e) => setAgribots({...agribots, ["desc"]: e.target.value})


    const onSubmitHandler = async(e) => {
        e.preventDefault();
        const response = await axios.post("/api/agribot", agribots);
     console.log(response);
     router.push("/dashboard/robots");
    }
  return (
    <div className={styles.container}>
        <form onSubmit={onSubmitHandler} className={styles.form}>
            <input type='text' placeholder='name' name='name'  onChange={setName} required />
            <input type='text' placeholder='speciality' name='speciality' onChange={setSpeciality} />
            
        <input type="number" placeholder='price' name='price'  onChange={setPrice}/>
        <input type="number" placeholder='stock' name='stock' onChange={setStock} />
        <input type="text" placeholder='image' name='img' onChange={setImg} />
        <input type="text" placeholder='height(cm)' name='height' onChange={setHeight} />
        <input type="text" placeholder='weight(kg)' name='weight' onChange={setWeight} />
        <textarea name="desc" id="desc" placeholder='Description' rows="10" cols="30" onChange={setDesc}></textarea>
        <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default AddProductPage