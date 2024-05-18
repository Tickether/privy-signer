'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { redirect } from 'next/navigation'



export default function Home() {
  const router = useRouter() 
  const link = `http://localhost:3000/?key=CSHRMP-PUBK_mO86nNyK8gOwP5Ho&coin=USDC&network=BASE`
  
  useEffect(()=>{
    console.log(window.location.href)
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);

    console.log(params.get('key'))
    //redirect(`/post/`)
  })
  return (
    <>
    </>
  );
}
