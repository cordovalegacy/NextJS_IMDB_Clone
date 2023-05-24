import Results from "@/app/components/Results"

const API_KEY = process.env.API_KEY

const SearchPage = async ({params}) => {

    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${params.searchParam}&language=en-US`)
    const data = await res.json()
    const results = await data.results

    if (!res.ok) {
        throw new Error("Error fetching data")
    }

    return (
        <div>
            {results && results.length === 0 && (
                <h1 className="text-center font-extrabold text-xl">No results found</h1>
            )}
            {results && <Results res={results}/>}
        </div>
    )
}

export default SearchPage