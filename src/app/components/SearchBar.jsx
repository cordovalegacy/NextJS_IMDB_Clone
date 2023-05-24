"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

const SearchBar = () => {

    const [searchData, setSearchData] = useState("")
    const router = useRouter()

    const submitHandler = (e) => {
        e.preventDefault()
        if(!searchData){
            return
        }
        router.push(`/search/${searchData}`)
        setSearchData("")
    }

    return (
        <form className="flex justify-between items-center mx-12 mt-4" onSubmit={submitHandler}>
            <input
                type="text"
                placeholder="Search for movies..."
                className="w-full rounded-md flex-1 outline-none bg-transparent"
                onChange={(e) => setSearchData(e.target.value)}
                value={searchData}
            />
            {searchData.length == 0 ?
                <input
                    type="submit"
                    value="Search"
                    className="bg-amber-600 rounded-md p-1 disabled:text-gray-400 cursor-not-allowed"
                    disabled
                /> :
                <input
                    type="submit"
                    value="Search"
                    className="bg-amber-600 rounded-md p-1 disabled:text-gray-400 cursor-pointer"
                />
            }
        </form>
    )
}

export default SearchBar