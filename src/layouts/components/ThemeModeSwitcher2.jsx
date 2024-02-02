


import  { useEffect, useState } from 'react'

import { RiSunLine } from "react-icons/ri";
import { LuMoon } from "react-icons/lu";






const ThemeModeSwitcher2 = () => {
const [theme, setTheme] = useState(
    localStorage.getItem('theme2') ? localStorage.getItem('theme2') : 'light'
)

const element = document.documentElement // <html/> tag
const darkQuery = window.matchMedia("(prefers-color-scheme: dark)") // will return match object of boolean confirming the current theme mode of the system/device/window
// console.log(darkQuery, 'darkQuery')






const onWindowMatch = ()=>{
    // if key theme2 in localstorage has value 'dark' or if theres no key bearing 'theme2' in localstorage but the current device theme mode is 'dark'
    if (localStorage.theme2 === 'dark' || (!('theme2' in localStorage ) && darkQuery.matches)) {
        element.classList.add('dark')
    }else{
        element.classList.remove('dark')
    }
}

onWindowMatch()






useEffect(() => {
  switch (theme) {
    case 'dark':
        element.classList.add('dark')
        localStorage.setItem('theme2', 'dark')
    break;
    case 'light':
        element.classList.remove('dark')
        localStorage.setItem('theme2', 'light')
        break;
    default:
        localStorage.removeItem('theme2')
        onWindowMatch()
        break;
  }

}, [theme])


useEffect(() => {
  
    // by default theme is set to system, but incase user change system/device theme mode this code will respond accordingly provided that previous change to app theme was not system
    const themeListener = (e)=>{
        if (!("theme2" in localStorage)) {
            if (e.matches) {
                element.classList.add("dark")
            }else{
                element.classList.remove("dark")
            }
        }
    }

   darkQuery.addEventListener('change', themeListener)

  return () => {
    darkQuery.removeEventListener('change', themeListener)
  }
}, [])






  return (
    <div className='duration-100 flex items-center  justify-between'>
      
       {
            theme === 'light' ? (
                <button  onClick={()=> setTheme('dark')} className={`w-6 h-6 leading-9 m-1`}>
                <LuMoon  strokeWidth={1} size={18} className='mx-auto font-extrabold'/>
            </button>
            ) : (
                <button  onClick={()=> setTheme('light')} className={`w-6 h-6 leading-9 m-1 `}>
                <RiSunLine  strokeWidth={1} size={18} className='mx-auto font-extrabold'/>
            </button>
            )
       }

    </div>
  )
}

export default ThemeModeSwitcher2
