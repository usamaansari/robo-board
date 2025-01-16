

import React from "react";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchUsers } from "@/app/lib/data";
import Image from "next/image";
import { deleteUser } from "@/app/lib/actions";
import axios from 'axios';

import Robots from "@/app/ui/dashboard/robots/robots";

/*
const getAgribots = async() => {
    const response = await axios.get("/api/agribot");
    return response.data.agribots;
}
*/

const RobotsPage = async() => {
  
  //const response  =  await axios.get("/api/agribot");
  //const {robots} = response.data.agribots;
  //console.log(response);

  /*
   const onSubmitHandler = async(e) => {
  e.preventDefault();
  try {

    const response = await axios.post(`/api/user`, users);
    console.log({users})
    toast.success("User created" + response.data.msg)
    reset(e);
    //await fetchUsers();
  } catch (error) {
    toast.error("Error")
  }
}
*/

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/robots/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
        <Robots />
           
    </div>
  );
};

export default RobotsPage;
