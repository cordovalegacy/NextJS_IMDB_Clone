"use client"

import { MdDarkMode } from 'react-icons/md'
import { BsFillSunFill } from 'react-icons/bs'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const DarkModeSwitch = () => {

    const { systemTheme, theme, setTheme } = useTheme()

    // ***********wait until component is mounted***************
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
    }, [])
    // *********************************************************

    const currentTheme = theme === "system" ? systemTheme : theme

    return(
        <>
        {mounted && currentTheme === "dark" ? (
            <BsFillSunFill className="hover:text-amber-500 text-xl text-gray-50" onClick={() => setTheme("light")}/>
        ): (
            <MdDarkMode className="hover:text-amber-500 text-xl text-gray-900" onClick={() => setTheme("dark")}/>
        )}
        </>
    )
}

export default DarkModeSwitch