"use client"

import {useEffect} from 'react'
const Error = ({err, reset}) => {

    useEffect(() => {
        console.log("Something went wrong: ", err)
    }, [err])

    return(
        <div className='text-center m-10 h-screen'>
            <h1>Something went wrong</h1>
            <button 
            onClick={() => reset()}
            className='bg-gray-800 p-2 text-amber-500 hover:bg-gray-600 hover:text-amber-600 rounded-lg m-2'
            >Try again</button>
        </div>
    )
}

export default Error