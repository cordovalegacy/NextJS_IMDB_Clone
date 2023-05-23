const API_KEY = process.env.API_KEY

const MoviePage = async({params}) => {

    const movieId = params.id
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`)

    const movie = await res.json()
    console.log("WHOAAAAAAAAAAAAAAAAAAAAAAAAAA", movie)
    
    return(
        <div>{movie.title || movie.original_title}</div>
    )
}

export default MoviePage