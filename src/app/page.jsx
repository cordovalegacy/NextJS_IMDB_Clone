import Results from "./components/Results"

const API_KEY = process.env.API_KEY

const Home = async ({ searchParams }) => {
  {/*this is children from layout*/ }

  let res = null

  //dynamic search type...pulled from props
  const genre = searchParams.genre || "fetchTrending"

  //search options
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
    next: { revalidate: 10000 } //this caches the api request for 10000 seconds ( incase the moviedb changes)
  }

  //search parameters
  const query = `https://api.themoviedb.org/3/${genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"}?api_key=${API_KEY}&language=en-US&page=1`

  const result = await fetch(query, options)

  if(!result.ok){
    throw new Error("Failed to fetch data") //throws an error on a NextJS traceback if condition
  }
  else{
    const data = await result.json() //sets api data
    // console.log("Movie Data", data)
    res = data.results
    console.log("Res Array: ", res)
  }

  return (
    <>
    <Results res={res}/>
    </>
  )
}

export default Home