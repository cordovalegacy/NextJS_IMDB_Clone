"use client"

import Link from "next/link"
import { useSearchParams } from 'next/navigation' //client only

const SubNavItem = ({ title, params }) => {

    const searchParams = useSearchParams() //creates instance
    const genre = searchParams.get("genre") //create key and value pair {genre: params}

    return (
        <>
            <Link
                href={`/?genre=${params}`}
                className={`${genre && genre === params ? "underline": ""}
                hover:text-amber-500 transition duration-300 font-semibold p-2 ${params === "fetchTopRated" || params === "fetchTrending" ? "hover:underline rounded-lg underline-offset-8 decoration-4 decoration-amber-500" : ""}`}>
                {title}
            </Link>
        </>
    )
}

export default SubNavItem