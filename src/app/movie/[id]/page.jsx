const API_KEY = process.env.API_KEY
import Image from "next/image"
import { AiOutlineLike } from 'react-icons/ai'

const MoviePage = async ({ params }) => {

    const movieId = params.id
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`)

    const movie = await res.json()
    console.log("WHOAAAAAAAAAAAAAAAAAAAAAAAAAA", movie)

    return (
        <div className="flex items-start justify-evenly p-5">
            <div className="text-center font-semibold text-lg">
                <h2>{movie.title || movie.name}</h2>
                <Image
                    width={250}
                    height={300}
                    className="rounded-lg"
                    placeholder="blur"
                    blurDataURL="/spinner.svg"
                    alt="movie picture"
                    style={{
                        maxWidth: "100%",
                        height: "auto"
                    }}
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path || movie.backdrop_path}`}
                />
            </div>
            <div className="text-center">
                <h3 className="font-semibold text-lg underline">Movie Details</h3>
                <div className="flex flex-col">
                    <div className="flex items-center justify-center gap-1 w-80">
                        <p>Rating: {movie.vote_average}</p>
                        <br />
                        <p>{movie.vote_count}</p>
                        <AiOutlineLike className="cursor-pointer hover:text-amber-500 transition duration-300 font-bold" />
                    </div>
                    <div className="w-80 mt-2 py-4">
                    <p>{movie.overview}</p>
                    </div>
                    <div>
                    <p>Movie Length: {movie.runtime} minutes</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoviePage