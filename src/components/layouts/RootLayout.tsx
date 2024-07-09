
import React, {useEffect, useState} from "react"
import HomeNav from '@/components/layouts/HomeNav'
import NavBar from '@/components/layouts/NavBar'
import { Outlet } from "react-router-dom"
import Footer from "./Footer"

function RootLayout() {
  const url = new URL(document.location.href)
  const [isHome, setIsHome] = useState<string>('')
  useEffect(()=>{
    setIsHome(url.pathname)
    console.log(url.pathname);
    
  }, [url])
  
  return (
    <>
    {isHome === "/" &&<HomeNav/> }
        <NavBar/>
       <main >
       <Outlet/>
       </main>
        <Footer/>
    </>
  )
}

export default RootLayout
