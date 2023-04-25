"use client" //this is a directive to set rendering to client side (default is server side)

import { MdDarkMode } from 'react-icons/md' //react-icons (functional components)
import { BsFillSunFill } from 'react-icons/bs' //react-icons (functional components)
import { useTheme } from 'next-themes' //from next-themes (allows easy switch between light/dark modes)
import { useEffect, useState } from 'react'

const DarkModeSwitch = () => {

    const { systemTheme, theme, setTheme } = useTheme() //destructure from useTheme() (context)

    // ***********wait until component is mounted***************
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true) //runs to wait until we are fully loaded before we can setTheme
    }, [])
    // *********************************************************


    //This line of code initializes a variable called currentTheme based on 
    //the value of a theme variable, which could be either "system" or a custom theme name.
    const currentTheme = theme === "system" ? systemTheme : theme //system comes from preferred mode on OS

    return(
        <>
        {mounted && currentTheme === "dark" ? (
            <BsFillSunFill className="hover:text-amber-500 text-xl text-gray-50 transition" onClick={() => setTheme("light")}/>
        ): (
            <MdDarkMode className="hover:text-amber-500 text-xl text-gray-900 transition" onClick={() => setTheme("dark")}/>
        )}
        </>
    )
}

export default DarkModeSwitch