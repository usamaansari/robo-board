"use client";

import React from 'react'
import styles from "@/app/ui/dashboard/search/search.module.css";
import { MdSearch } from 'react-icons/md';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const Search = ({placeholder}) => {
  const searchParams = useSearchParams();
  const {replace} = useRouter();
  const pathname = usePathname();

  const handleSearch = (e) => {
 const params = new URLSearchParams(searchParams);
 params.set("page",1);
 if(e.target.value){
  e.target.value.length > 2 && params.set("q", e.target.value);
 }
 else{
  params.delete("q")
 }
  //params.set("q", e.target.value);
  replace(`${pathname}?${params}`)
  }

 
  return (
    <div className={styles.container}>
        <MdSearch />
        <input type='text' placeholder={placeholder} className={styles.input} onChange={handleSearch}/>

    </div>
  )
}

export default Search


/*

import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", 1);

    if (e.target.value) {
      e.target.value.length > 2 && params.set("q", e.target.value);
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params}`);
  }, 300);

  return (
    <div className={styles.container}>
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;

*/